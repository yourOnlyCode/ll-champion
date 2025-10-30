import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { storyId: string } }
) {
  try {
    const { storyId } = params;
    
    // TODO: Fetch real analytics from database
    // Mock data for now
    const mockAnalytics = {
      storyId,
      authorId: 'mock-author-id',
      views: Math.floor(Math.random() * 1000),
      uniqueViews: Math.floor(Math.random() * 800),
      readTime: Math.floor(Math.random() * 300),
      completionRate: Math.floor(Math.random() * 100),
      engagementScore: Math.floor(Math.random() * 100),
      demographics: {
        ageGroups: { '18-24': 25, '25-34': 35, '35-44': 20, '45+': 20 },
        locations: { 'US': 60, 'UK': 20, 'CA': 10, 'Other': 10 },
        devices: { 'Desktop': 45, 'Mobile': 40, 'Tablet': 15 }
      },
      timeMetrics: {
        totalReadTime: Math.floor(Math.random() * 10000),
        averageSessionTime: Math.floor(Math.random() * 600),
        bounceRate: Math.floor(Math.random() * 50)
      },
      interactions: {
        likes: Math.floor(Math.random() * 100),
        shares: Math.floor(Math.random() * 50),
        comments: Math.floor(Math.random() * 30),
        bookmarks: Math.floor(Math.random() * 80)
      }
    };

    return NextResponse.json(mockAnalytics);
  } catch (error) {
    console.error('Story analytics error:', error);
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
  }
}