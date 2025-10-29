import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import AuthorDashboard from '../components/dashboard/AuthorDashboard';

export default async function DashboardPage() {
  const session = await getServerSession();
  
  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900 dark:to-orange-900">
      <AuthorDashboard userId={session.user?.email || ''} />
    </div>
  );
}