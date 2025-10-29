'use client';

import { useState } from 'react';
import Link from 'next/link';

interface StoryDashboardProps {
  storyId: string;
}

export default function StoryDashboard({ storyId }: StoryDashboardProps) {
  const [storyTitle, setStoryTitle] = useState('The Great Adventure');

  return (
    <>
      <header className="bg-white/80 dark:bg-amber-900/80 backdrop-blur-sm border-b border-amber-200 dark:border-amber-700">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-amber-600 hover:text-amber-700">
                ← Back to Dashboard
              </Link>
              <h1 className="text-xl sm:text-2xl font-serif font-bold text-amber-800 dark:text-amber-200">
                {storyTitle}
              </h1>
            </div>
            <Link
              href={`/editor?story=${storyId}`}
              className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
            >
              Edit Story
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Story Stats */}
          <div className="bg-white dark:bg-amber-900 rounded-lg shadow-md border border-amber-200 dark:border-amber-700 p-6">
            <h2 className="text-lg font-serif font-bold text-amber-800 dark:text-amber-200 mb-4">
              Story Statistics
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-amber-600">Words:</span>
                <span className="font-medium">2,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-600">Characters:</span>
                <span className="font-medium">15,230</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-600">Pages:</span>
                <span className="font-medium">10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-600">Last Modified:</span>
                <span className="font-medium">Jan 15, 2024</span>
              </div>
            </div>
          </div>

          {/* Story Actions */}
          <div className="bg-white dark:bg-amber-900 rounded-lg shadow-md border border-amber-200 dark:border-amber-700 p-6">
            <h2 className="text-lg font-serif font-bold text-amber-800 dark:text-amber-200 mb-4">
              Actions
            </h2>
            <div className="space-y-3">
              <Link
                href={`/editor?story=${storyId}`}
                className="block w-full px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 text-center"
              >
                Edit Story
              </Link>
              <button className="block w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Export Story
              </button>
              <button className="block w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Share Story
              </button>
              <button className="block w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                Delete Story
              </button>
            </div>
          </div>

          {/* Story Preview */}
          <div className="bg-white dark:bg-amber-900 rounded-lg shadow-md border border-amber-200 dark:border-amber-700 p-6">
            <h2 className="text-lg font-serif font-bold text-amber-800 dark:text-amber-200 mb-4">
              Preview
            </h2>
            <div className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed">
              <p>A thrilling tale of discovery and courage that takes our hero through uncharted territories...</p>
              <p className="mt-2 italic">Click "Edit Story" to continue writing.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}