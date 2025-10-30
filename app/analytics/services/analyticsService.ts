import { AnalyticsEvent, StoryAnalytics, DashboardMetrics } from '../types';

export class AnalyticsService {
  // Track story engagement events
  static async trackEvent(event: Omit<AnalyticsEvent, 'id' | 'timestamp'>): Promise<void> {
    try {
      await fetch('/api/analytics/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...event,
          timestamp: new Date().toISOString()
        })
      });
    } catch (error) {
      console.error('Failed to track analytics event:', error);
    }
  }

  // Get analytics for a specific story
  static async getStoryAnalytics(storyId: string): Promise<StoryAnalytics | null> {
    try {
      const response = await fetch(`/api/analytics/stories/${storyId}`);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error('Failed to fetch story analytics:', error);
    }
    return null;
  }

  // Get dashboard metrics for an author
  static async getDashboardMetrics(authorId: string): Promise<DashboardMetrics | null> {
    try {
      const response = await fetch(`/api/analytics/dashboard/${authorId}`);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error('Failed to fetch dashboard metrics:', error);
    }
    return null;
  }

  // Track story view
  static async trackStoryView(storyId: string, userId?: string): Promise<void> {
    await this.trackEvent({
      storyId,
      userId,
      eventType: 'view',
      metadata: {
        sessionId: this.generateSessionId(),
        userAgent: navigator.userAgent
      }
    });
  }

  // Track reading progress
  static async trackReadingProgress(storyId: string, progress: number, timeSpent: number, userId?: string): Promise<void> {
    const eventType = progress >= 90 ? 'read_complete' : 'read_start';
    
    await this.trackEvent({
      storyId,
      userId,
      eventType,
      metadata: {
        sessionId: this.generateSessionId(),
        readProgress: progress,
        timeSpent
      }
    });
  }

  // Generate session ID
  private static generateSessionId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
}