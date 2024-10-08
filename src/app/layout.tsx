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
  console.log(session?.user);
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
      </body>
    </html>
  );
}
