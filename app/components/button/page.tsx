'use client';

import dynamic from 'next/dynamic';
import DocsLayout from '../mdx/docsLayout';

const ButtonDocs = dynamic(() => import('./button.mdx'));

export default function ButtonPage() {
  return (
    <DocsLayout>
      <ButtonDocs />
    </DocsLayout>
  );
}
