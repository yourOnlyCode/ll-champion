import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const { content, docId } = await request.json();

    if (!content) {
      return NextResponse.json({ error: 'Content required' }, { status: 400 });
    }

    // Create documents directory if it doesn't exist
    const docsDir = path.join(process.cwd(), 'documents');
    if (!fs.existsSync(docsDir)) {
      fs.mkdirSync(docsDir, { recursive: true });
    }

    // Save content to local file
    const filename = docId ? `${docId}.txt` : `document-${Date.now()}.txt`;
    const filepath = path.join(docsDir, filename);
    
    fs.writeFileSync(filepath, content, 'utf8');

    return NextResponse.json({ 
      success: true, 
      message: 'Content saved successfully',
      filename 
    });
  } catch (error) {
    console.error('Save error:', error);
    return NextResponse.json({ 
      error: 'Failed to save content' 
    }, { status: 500 });
  }
}