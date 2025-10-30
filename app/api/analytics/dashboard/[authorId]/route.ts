import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { authorId: string } }
) {
  try {
    const { authorId } = params;
    
    // TODO: Fetch real dashboard metrics from database
    // Mock data for now
    const mockMetrics = {
      totalViews: Math.floor(Math.random() * 5000),
      totalStories: Math.floor(Math.random() * 20) + 1,
      averageEngagement: Math.floor(Math.random() * 100),
      topPerformingStory: {
        id: 'story-123',
        title: 'The Enchanted Forest',
        views: Math.floor(Math.random() * 1000)
      },
      recentActivity: [
        {
          id: 'event-1',
          storyId: 'story-123',
          eventType: 'view',
          timestamp: new Date(Date.now() - 3600000),
          metadata: { sessionId: 'session-1' }
        },
        {
          id: 'event-2',
          storyId: 'story-456',
          eventType: 'like',
          timestamp: new Date(Date.now() - 7200000),
          metadata: { sessionId: 'session-2' }
        }
      ]
    };

    return NextResponse.json(mockMetrics);
  } catch (error) {
    console.error('Dashboard metrics error:', error);
    return NextResponse.json({ error: 'Failed to fetch metrics' }, { status: 500 });
  }
}