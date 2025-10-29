import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

// Mock database - replace with actual database
const stories: any[] = [];

export async function GET(request: NextRequest) {
  const session = await getServerSession();
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');
  
  const userStories = stories.filter(story => story.userId === userId);
  
  return NextResponse.json(userStories);
}

export async function POST(request: NextRequest) {
  const session = await getServerSession();
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { title, content, userId } = await request.json();
  
  const newStory = {
    id: Date.now().toString(),
    title,
    content: content || '',
    wordCount: 0,
    lastModified: new Date().toISOString().split('T')[0],
    excerpt: '',
    userId
  };
  
  stories.push(newStory);
  
  return NextResponse.json(newStory);
}