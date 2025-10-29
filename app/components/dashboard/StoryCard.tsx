import Link from 'next/link';

interface Story {
  id: string;
  title: string;
  wordCount: number;
  lastModified: string;
  excerpt: string;
}

interface StoryCardProps {
  story: Story;
}

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <Link href={`/story/${story.id}`}>
      <div className="bg-white dark:bg-amber-900 rounded-lg shadow-md border border-amber-200 dark:border-amber-700 p-6 hover:shadow-lg transition-shadow cursor-pointer">
        <h3 className="text-lg font-serif font-bold text-amber-800 dark:text-amber-200 mb-2">
          {story.title}
        </h3>
        
        <p className="text-sm text-amber-600 dark:text-amber-400 mb-4 line-clamp-3">
          {story.excerpt || 'No content yet...'}
        </p>
        
        <div className="flex justify-between text-xs text-amber-500">
          <span>{story.wordCount} words</span>
          <span>Modified {story.lastModified}</span>
        </div>
      </div>
    </Link>
  );
}