'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabase/client';
import Card from '@/components/Card';

export default function DashboardPage() {
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push('/login');
      } else {
        setUserEmail(session?.user?.email || '');
        setLoading(false);
      }
    };

    getSession();
  }, [router]);

  if (loading) {
    return <p className="text-center mt-10">Loading dashboard...</p>;
  }

  return (
    <div className="flex justify-center mt-10">
      <Card title="Your Dashboard">
        <p className="mb-2">Welcome, <strong>{userEmail}</strong>!</p>
        <p className="text-gray-700">🏟 You’ll be able to track your check-ins and achievements here.</p>
        <form action="/logout" method="post" className="mt-6">
          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Log Out
          </button>
        </form>
      </Card>
    </div>
  );
}