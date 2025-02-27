'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '18px',
        borderBottom: '1px solid #ddd',
      }}
    >
      <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="/Logo.svg"
          alt="WOORI Design Logo"
          style={{
            width: 'auto',
            height: '20px',
          }}
        />
      </Link>

      <nav style={{ display: 'flex', gap: '15px' }}>
        {isLoggedIn ? (
          <>
            {/* 로그인 상태 */}
            <Link href="/mypage" style={linkStyle}>
              마이페이지
            </Link>
            <button onClick={handleLogout} style={buttonStyle}>
              로그아웃
            </button>
          </>
        ) : (
          <>
            {/* 비로그인 상태 */}
            <Link href="/login" style={linkStyle}>
              로그인
            </Link>
            <Link href="/signup" style={linkStyle}>
              회원가입
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

// 스타일 객체
const linkStyle = {
  textDecoration: 'none',
  color: '#555',
  fontSize: '14px',
};

const buttonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  color: '#555',
  fontSize: '14px',
  cursor: 'pointer',
};

export default Header;
