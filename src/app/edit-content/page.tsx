import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const SettingsPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) return redirect('/');

  if (session.user.role === 'user') return redirect('/');

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Edit content</h1>
    </div>
  );
};

export default SettingsPage;
