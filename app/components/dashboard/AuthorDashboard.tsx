'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import StoryCard from './StoryCard';
import Link from 'next/link';

interface Story {
  id: string;
  title: string;
  wordCount: number;
  lastModified: string;
  excerpt: string;
  userId: string;
}

interface AuthorDashboardProps {
  userId: string;
}

export default function AuthorDashboard({ userId }: AuthorDashboardProps) {
  const { data: session } = useSession();
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserStories = async () => {
      try {
        const response = await fetch(`/api/stories?userId=${userId}`);
        if (response.ok) {
          const userStories = await response.json();
          setStories(userStories);
        }
      } catch (error) {
        console.error('Failed to fetch stories:', error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserStories();
    }
  }, [userId]);

  const createNewStory = async () => {
    try {
      const response = await fetch('/api/stories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Untitled Story',
          content: '',
          userId
        })
      });
      
      if (response.ok) {
        const newStory = await response.json();
        setStories([newStory, ...stories]);
      }
    } catch (error) {
      console.error('Failed to create story:', error);
    }
  };

  return (
    <>
      <header className="bg-white/80 dark:bg-amber-900/80 backdrop-blur-sm border-b border-amber-200 dark:border-amber-700">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-serif font-bold text-amber-800 dark:text-amber-200">
              {session?.user?.name || 'Author'}'s Dashboard
            </h1>
            <button
              onClick={createNewStory}
              className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
            >
              New Story
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center py-8">
            <div className="text-amber-600">Loading your stories...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.length > 0 ? (
              stories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-amber-600 mb-4">No stories yet. Create your first story!</p>
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );
}