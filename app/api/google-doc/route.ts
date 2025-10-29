import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const docId = searchParams.get('docId');

  if (!docId) {
    return NextResponse.json({ error: 'Document ID required' }, { status: 400 });
  }

  try {
    // Set NODE_TLS_REJECT_UNAUTHORIZED for this request
    const originalValue = process.env.NODE_TLS_REJECT_UNAUTHORIZED;
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    
    const response = await fetch(
      `https://docs.google.com/document/d/${docId}/export?format=txt`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      }
    );
    
    // Restore original value
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = originalValue;

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.log('Error response:', errorText);
      
      if (response.status === 404) {
        return NextResponse.json({ 
          error: 'Document not found. Make sure the document ID is correct and the document is publicly accessible.' 
        }, { status: 404 });
      }
      
      return NextResponse.json({ 
        error: `Failed to fetch document (${response.status}). Please check the document ID and sharing settings.` 
      }, { status: response.status });
    }

    const content = await response.text();
    console.log('Content length:', content.length);
    
    return NextResponse.json({ 
      content: content.trim(),
      docId 
    });
  } catch (error: any) {
    console.error('Google Docs API error:', error);
    
    return NextResponse.json({ 
      error: `Network error: ${error.message}. Please try again.` 
    }, { status: 500 });
  }
}