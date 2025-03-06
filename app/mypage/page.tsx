'use client';

import { CustomInput } from '@/components/ui/textInput';
import { useState } from 'react';

export default function AccountManagement() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [apiKey, setApiKey] = useState('');

  const handleReissueApiKey = () => {
    setApiKey(`new-api-key-${Date.now()}`);
    alert('API 키가 재발급되었습니다.');
  };

  const handleWithdraw = () => {
    if (confirm('정말 탈퇴하시겠습니까?')) {
      alert('탈퇴되었습니다.');
    }
  };

  return (
    <main className="flex-1 p-4 text-left">
      <div className="max-w-3xl">
        <h1 className="mb-6 text-xl font-bold">내 계정 관리</h1>

        <div className="mb-6 w-[500px]">
          <CustomInput
            label={<span className="text-sm font-semibold">이름</span>}
            placeholder="FISA"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-6 w-[500px]">
          <CustomInput
            label={<span className="text-sm font-semibold">이메일</span>}
            placeholder="FISA@gmail.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-6 h-[0.5px] bg-gray-300 w-[500px]" />

        <div className="mb-6 w-[500px]">
          <CustomInput
            label={<span className="text-sm font-semibold">API 키</span>}
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            copyButton
            actionButton={{
              text: '재발급',
              onClick: handleReissueApiKey,
            }}
          />
        </div>

        <div className="mt-20 space-y-3">
          <div className="my-6 h-[0.5px] bg-gray-300 w-[500px]" />
          <h2 className="text-sm font-semibold">계정 탈퇴</h2>
          <button
            className="rounded-md bg-[#0D6CC1] px-6 py-3 text-sm text-white hover:bg-[#0D63B1]"
            onClick={handleWithdraw}
          >
            탈퇴하기
          </button>
        </div>
      </div>
    </main>
  );
}
