'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { navItems, mypageNavItems } from '@/data/navItems';
import SidebarItem from './sidebarItem';
import SearchBar from '@/components/ui/searchBar';

export default function Sidebar() {
  const pathname = usePathname();

  const isMypage = pathname.startsWith('/mypage');
  const items = isMypage ? mypageNavItems : navItems;

  const getInitialExpandedItems = () => {
    return items
      .filter(
        (item) =>
          pathname.startsWith(item.href) ||
          item.children?.some((child) => pathname.startsWith(child.href)),
      )
      .map((item) => item.href);
  };

  const [expandedItems, setExpandedItems] = useState<string[]>(getInitialExpandedItems);

  const toggleExpand = (href: string) => {
    setExpandedItems((prev) =>
      prev.includes(href) ? prev.filter((item) => item !== href) : [...prev, href],
    );
  };

  return (
    <aside className="w-60 border-r border-gray-200 bg-white h-screen overflow-auto mt-2">
      {!isMypage && (
        <div className="p-4 relative">
          <SearchBar />
        </div>
      )}
      <nav className="px-4">
        <ul>
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              item={item}
              expandedItems={expandedItems}
              toggleExpand={toggleExpand}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
