'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/header';
import './globals.css';
import Sidebar from '@/components/layout/sidbar/sidebar';
import Footer from '@/components/layout/footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideSidebar = pathname === '/login';

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-pretendard">
        <Header />
        <div className="flex flex-1">
          {!hideSidebar && <Sidebar />}
          <main className="flex-1 p-6">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
