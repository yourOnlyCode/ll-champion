export interface StoryAnalytics {
  storyId: string;
  authorId: string;
  views: number;
  uniqueViews: number;
  readTime: number; // average in seconds
  completionRate: number; // percentage
  engagementScore: number;
  demographics: {
    ageGroups: Record<string, number>;
    locations: Record<string, number>;
    devices: Record<string, number>;
  };
  timeMetrics: {
    totalReadTime: number;
    averageSessionTime: number;
    bounceRate: number;
  };
  interactions: {
    likes: number;
    shares: number;
    comments: number;
    bookmarks: number;
  };
}

export interface AnalyticsEvent {
  id: string;
  storyId: string;
  userId?: string;
  eventType: 'view' | 'read_start' | 'read_complete' | 'like' | 'share' | 'comment' | 'bookmark';
  timestamp: Date;
  metadata: {
    sessionId: string;
    userAgent?: string;
    location?: string;
    readProgress?: number;
    timeSpent?: number;
  };
}

export interface DashboardMetrics {
  totalViews: number;
  totalStories: number;
  averageEngagement: number;
  topPerformingStory: {
    id: string;
    title: string;
    views: number;
  };
  recentActivity: AnalyticsEvent[];
}