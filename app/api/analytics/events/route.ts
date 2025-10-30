import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const eventData = await request.json();
    
    // TODO: Store analytics event in database
    // For now, just log the event
    console.log('Analytics Event:', {
      ...eventData,
      id: generateEventId(),
      timestamp: new Date()
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics event error:', error);
    return NextResponse.json({ error: 'Failed to track event' }, { status: 500 });
  }
}

function generateEventId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}