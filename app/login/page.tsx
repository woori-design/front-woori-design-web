'use client';

import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="flex-1 flex">
      <main className="flex-1 flex items-center justify-center p-7">
        <div className="w-full max-w-md p-8 rounded-lg border">
          <h2 className="text-2xl font-bold text-center mb-4">로그인</h2>
          <p className="text-center text-gray-400 mb-8">
            기존에 사용하는 계정으로 간편하게 로그인하세요.
          </p>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-center gap-2 bg-[#FDDC3F] text-black py-3 px-4 rounded-md">
              <Image src="/KakaoTalk.svg" alt="Kakao" width={20} height={20} className="w-5 h-5" />
              <span>카카오 계정으로 로그인</span>
            </button>

            <button className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 px-4 rounded-md border">
              <Image src="/Google.svg" alt="Google" width={20} height={20} className="w-5 h-5" />
              <span>구글 계정으로 로그인</span>
            </button>

            <button className="w-full flex items-center justify-center gap-2 bg-[#1B1F23] text-white py-3 px-4 rounded-md">
              <Image src="/GitHub.svg" alt="GitHub" width={20} height={20} className="w-5 h-5" />
              <span>깃허브로 로그인</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
