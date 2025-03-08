'use client';

import Link from 'next/link';
import { useState } from 'react';

type LikedComponent = {
  id: string;
  name: string;
  previewElement?: JSX.Element;
};

export default function LikedComponentsPage() {
  const [likedComponents] = useState<LikedComponent[]>([
    { id: 'button', name: 'Button' },
    { id: 'checkbox', name: 'Checkbox' },
    { id: 'divider', name: 'Divider' },
    { id: 'switch', name: 'Switch' },
    { id: 'floatbutton', name: 'FloatButton' },
    { id: 'radio', name: 'Radio' },
    { id: 'dialog', name: 'Dialog' },
    { id: 'tab', name: 'Tab' },
    { id: 'dropdown', name: 'Dropdown' },
  ]);

  return (
    <main className="flex-1 p-4 text-left">
      <div className="max-w-7xl">
        <h1 className="mb-6 text-xl font-bold">좋아요한 컴포넌트</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {likedComponents.map((component) => (
            <ComponentCard key={component.id} component={component} />
          ))}
        </div>
      </div>
    </main>
  );
}

const ComponentCard = ({ component }: { component: LikedComponent }) => (
  <Link href={`/components/${component.id}`}>
    <div className="bg-[#EAF5FF] rounded-[18px] p-6 min-h-[200px] flex flex-col shadow-[5px_5px_5px_rgba(0,0,0,0.25)] hover:shadow-[8px_8px_16px_rgba(0,0,0,0.3)] transition-shadow cursor-pointer">
      <div className="flex-1 flex items-center justify-center">{component.previewElement}</div>
      <div className="w-full">
        <h3 className="text-xl font-bold text-left">{component.name}</h3>
      </div>
    </div>
  </Link>
);
