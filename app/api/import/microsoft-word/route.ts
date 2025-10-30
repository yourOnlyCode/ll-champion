import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Check file type
    const allowedTypes = [
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
      'application/msword', // .doc
      'text/plain' // .txt
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Unsupported file type' }, { status: 400 });
    }

    let content = '';
    let title = file.name.replace(/\.[^/.]+$/, '');

    if (file.type === 'text/plain') {
      content = await file.text();
    } else {
      // For .doc/.docx files, we'd need a library like mammoth.js
      content = 'Word document import requires additional setup. Please use plain text files for now.';
    }

    const wordCount = content.split(/\s+/).filter(word => word.length > 0).length;

    return NextResponse.json({
      content,
      title,
      metadata: {
        wordCount,
        source: 'microsoft-word',
        author: 'Unknown'
      }
    });

  } catch (error) {
    console.error('Word import error:', error);
    return NextResponse.json({ error: 'Failed to import Word document' }, { status: 500 });
  }
}