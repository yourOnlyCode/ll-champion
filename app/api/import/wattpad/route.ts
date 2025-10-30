import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();
    
    if (!url) {
      return NextResponse.json({ error: 'Wattpad URL required' }, { status: 400 });
    }

    // Validate Wattpad URL
    if (!url.includes('wattpad.com')) {
      return NextResponse.json({ error: 'Invalid Wattpad URL' }, { status: 400 });
    }

    // Extract story ID from URL
    const storyMatch = url.match(/wattpad\.com\/story\/(\d+)/);
    if (!storyMatch) {
      return NextResponse.json({ error: 'Could not extract story ID from URL' }, { status: 400 });
    }

    // Note: Wattpad doesn't have a public API for content extraction
    // This would require web scraping, which may violate their terms of service
    // For now, return a placeholder response
    
    return NextResponse.json({
      content: 'Wattpad import is not yet implemented. This would require web scraping which may violate Wattpad\'s terms of service. Consider asking users to copy/paste their content instead.',
      title: 'Wattpad Story',
      metadata: {
        wordCount: 0,
        source: 'wattpad',
        originalUrl: url,
        author: 'Unknown'
      }
    });

  } catch (error) {
    console.error('Wattpad import error:', error);
    return NextResponse.json({ error: 'Failed to import from Wattpad' }, { status: 500 });
  }
}