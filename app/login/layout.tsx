'use client';

import { usePathname } from 'next/navigation';
import Sidebar from '../../components/layout/Sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // 특정 경로에서 사이드바 숨기기
  const hideSidebar = pathname === '/login';

  return (
    <div className="flex">
      {/* 사이드바: 로그인 페이지가 아닐 때만 렌더링 */}
      {!hideSidebar && <Sidebar />}

      {/* 메인 콘텐츠 */}
      <div className="flex-1">{children}</div>
    </div>
  );
}
