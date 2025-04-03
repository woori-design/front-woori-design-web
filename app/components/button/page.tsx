'use client';

import dynamic from 'next/dynamic';

const ButtonDocs = dynamic(() => import('./button.mdx'));

export default function ButtonPage() {
  return (
    <div>
      <ButtonDocs />
    </div>
  );
}
