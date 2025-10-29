import StoryDashboard from '../../components/dashboard/StoryDashboard';

interface StoryPageProps {
  params: {
    id: string;
  };
}

export default function StoryPage({ params }: StoryPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900 dark:to-orange-900">
      <StoryDashboard storyId={params.id} />
    </div>
  );
}