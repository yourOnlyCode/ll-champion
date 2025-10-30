'use client';

import { useState, useEffect } from 'react';
import { AnalyticsService } from '../services/analyticsService';
import { StoryAnalytics, DashboardMetrics } from '../types';

export function useStoryAnalytics(storyId: string) {
  const [analytics, setAnalytics] = useState<StoryAnalytics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      if (storyId) {
        const data = await AnalyticsService.getStoryAnalytics(storyId);
        setAnalytics(data);
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, [storyId]);

  return { analytics, loading };
}

export function useDashboardMetrics(authorId: string) {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      if (authorId) {
        const data = await AnalyticsService.getDashboardMetrics(authorId);
        setMetrics(data);
        setLoading(false);
      }
    };

    fetchMetrics();
  }, [authorId]);

  return { metrics, loading };
}

export function useAnalyticsTracking() {
  const trackView = (storyId: string, userId?: string) => {
    AnalyticsService.trackStoryView(storyId, userId);
  };

  const trackProgress = (storyId: string, progress: number, timeSpent: number, userId?: string) => {
    AnalyticsService.trackReadingProgress(storyId, progress, timeSpent, userId);
  };

  return { trackView, trackProgress };
}