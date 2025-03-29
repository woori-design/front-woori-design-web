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
      <body className="flex flex-col min-h-screen font-pretendard">
        <Header />
        <div className="flex flex-1">
          {!hideSidebar && <Sidebar />}
          <main className="flex-1 p-6">{children}</main>
        </div>
        <div className="p-4 text-sm text-[#ABABAB]">
          <p>Version 0.0.1</p>
          <p>업데이트 2025.xx.xx</p>
        </div>
      </body>
    </html>
  );
}
