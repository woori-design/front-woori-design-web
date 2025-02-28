'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  const linkStyle = 'text-gray-700 text-sm no-underline hover:text-gray-900 transition-colors';
  const buttonStyle =
    'bg-transparent border-none text-gray-700 text-sm cursor-pointer hover:text-gray-900 transition-colors';

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
      <Link href="/" className="flex items-center">
        <Image
          src="/Logo.svg"
          alt="WOORI Design Logo"
          width={80}
          height={20}
          className="h-5 w-auto"
        />
      </Link>

      <nav className="flex gap-3">
        {isLoggedIn ? (
          <>
            <Link href="/mypage" className={linkStyle}>
              마이페이지
            </Link>
            <button onClick={handleLogout} className={buttonStyle}>
              로그아웃
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className={linkStyle}>
              로그인
            </Link>
            <Link href="/signup" className={linkStyle}>
              회원가입
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
