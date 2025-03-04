'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/header';
import './globals.css';
import Sidebar from '@/components/layout/sidbar/sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideSidebar = pathname === '/login';

  return (
    <html lang="en">
      <body className="flex min-h-screen w-full flex-col">
        <Header />
        <div className="flex flex-1">
          {!hideSidebar && <Sidebar />}
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
