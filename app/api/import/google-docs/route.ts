import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const docId = searchParams.get('docId');

  if (!docId) {
    return NextResponse.json({ error: 'Document ID required' }, { status: 400 });
  }

  try {
    // Reuse existing Google Docs logic
    const originalValue = process.env.NODE_TLS_REJECT_UNAUTHORIZED;
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    
    const response = await fetch(
      `https://docs.google.com/document/d/${docId}/export?format=html`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      }
    );
    
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = originalValue;

    if (!response.ok) {
      return NextResponse.json({ 
        error: 'Failed to fetch document. Ensure it is publicly accessible.' 
      }, { status: response.status });
    }

    const htmlContent = await response.text();
    const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/);
    const bodyContent = bodyMatch ? bodyMatch[1] : htmlContent;
    
    const cleanContent = bodyContent
      .replace(/style="[^"]*"/g, '')
      .replace(/<span[^>]*>/g, '')
      .replace(/<\/span>/g, '')
      .replace(/<div[^>]*>/g, '<p>')
      .replace(/<\/div>/g, '</p>')
      .replace(/<p><\/p>/g, '')
      .trim();

    const plainText = cleanContent.replace(/<[^>]*>/g, '');
    const wordCount = plainText.split(/\s+/).filter(word => word.length > 0).length;
    
    return NextResponse.json({ 
      content: cleanContent,
      title: 'Google Doc Import',
      metadata: {
        wordCount,
        source: 'google-docs',
        author: 'Unknown'
      }
    });
  } catch (error: any) {
    console.error('Google Docs import error:', error);
    return NextResponse.json({ 
      error: `Network error: ${error.message}. Please try again.` 
    }, { status: 500 });
  }
}