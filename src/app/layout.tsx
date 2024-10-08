import type { Metadata } from 'next';
import './globals.css';
import LoginButton from './posts/components/common/LoginButton';
import LogoutButton from './posts/components/common/LogoutButton';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from '@/lib/authOptions';

export const metadata: Metadata = {
  title: 'CRUD Demo',
  description: 'A simple CRUD demo using Next.js',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        {children}
        {session ? <LogoutButton /> : <LoginButton />}
        {session && session.user.role === 'admin' && (
          <Link
            href="/admin"
            className="absolute top-4 right-28 bg-lime-500 text-white px-4 py-2 rounded"
          >
            Admin
          </Link>
        )}
        {session && session.user.role === 'editor' && (
          <Link
            href="/edit-content"
            className="absolute top-4 right-28 bg-lime-500 text-white px-4 py-2 rounded"
          >
            Edit content
          </Link>
        )}
      </body>
    </html>
  );
}
