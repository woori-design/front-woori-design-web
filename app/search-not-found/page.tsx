'use client';

import { useSearchParams } from 'next/navigation';

export default function SearchNotFoundPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '입력한 검색어';

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl font-bold text-gray-800">"{query}" 검색 결과가 없습니다.</h1>
      <p className="text-gray-600 mt-2">다른 검색어를 입력해주세요.</p>
    </div>
  );
}
