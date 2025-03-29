import Link from 'next/link';

export default function Main() {
  return (
    <div className="flex flex-col items-center min-h-screen px-2">
      {' '}
      <div className="max-w-full w-full">
        {' '}
        <div className="bg-gray-200 rounded-xl mb-6 p-8 relative" style={{ height: '300px' }}>
          <div className="absolute bottom-6 left-6">
            <h1 className="text-4xl font-bold text-white">Woori</h1>
            <h1 className="text-4xl font-bold text-white">Design System</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Link href="/brand/page.tsx">
            <div
              className="bg-gray-200 rounded-xl p-4 flex items-end hover:bg-gray-300 transition-all duration-300"
              style={{ height: '180px' }}
            >
              <h2 className="text-lg font-bold text-gray-800">Brand</h2>
            </div>
          </Link>

          <Link href="/foundation/page.tsx">
            <div
              className="bg-gray-200 rounded-xl p-4 flex items-end hover:bg-gray-300 transition-all duration-300"
              style={{ height: '180px' }}
            >
              <h2 className="text-lg font-bold text-gray-800">Foundation</h2>
            </div>
          </Link>

          <Link href="/components/page.tsx">
            <div
              className="bg-gray-200 rounded-xl p-4 flex items-end hover:bg-gray-300 transition-all duration-300"
              style={{ height: '180px' }}
            >
              <h2 className="text-lg font-bold text-gray-800">Components</h2>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Link href="/storybook">
            <div
              className="bg-gray-200 rounded-xl p-4 flex items-end hover:bg-gray-300 transition-all duration-300"
              style={{ height: '200px' }}
            >
              <h2 className="text-base font-bold text-gray-800">스토리북 문서 링크 배너</h2>{' '}
            </div>
          </Link>

          <Link href="/about">
            <div
              className="bg-gray-200 rounded-xl p-4 flex items-end hover:bg-gray-300 transition-all duration-300"
              style={{ height: '200px' }}
            >
              <h2 className="text-base font-bold text-gray-800">만든이 소개</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
