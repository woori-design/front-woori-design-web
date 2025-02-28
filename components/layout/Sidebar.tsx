'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

type NavItem = {
  title: string;
  href: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  { title: 'Overview', href: '/overview' },
  {
    title: 'Brand',
    href: '/brand',
    children: [{ title: 'fff', href: '/brand/fff' }],
  },
  {
    title: 'Foundation',
    href: '/foundation',
    children: [{ title: 'ddd', href: '/foundation/ddd' }],
  },
  {
    title: 'Components',
    href: '/components',
    children: [
      { title: 'Button', href: '/components/button' },
      { title: 'Checkbox', href: '/components/checkbox' },
      { title: 'Divider', href: '/components/divider' },
      { title: 'Switch', href: '/components/switch' },
      { title: 'FloatButton', href: '/components/floatbutton' },
    ],
  },
];

export default function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const parentPath = navItems.find(
      (item) =>
        pathname.startsWith(item.href) ||
        item.children?.some((child) => pathname.startsWith(child.href)),
    )?.href;

    if (parentPath && !expandedItems.includes(parentPath)) {
      setExpandedItems((prev) => [...prev, parentPath]);
    }
  }, [pathname]);

  const toggleExpand = (href: string) => {
    setExpandedItems((prev) =>
      prev.includes(href) ? prev.filter((item) => item !== href) : [...prev, href],
    );
  };

  const handleItemClick = (item: NavItem) => {
    if (item.children && item.children.length > 0) {
      toggleExpand(item.href);
    } else {
      router.push(item.href);
    }
  };

  const renderNavItems = (items: NavItem[], level = 0) =>
    items.map((item) => {
      const isActive = pathname === item.href;
      const isExpanded = expandedItems.includes(item.href);
      const hasChildren = item.children && item.children.length > 0;

      return (
        <li key={item.href} className={`list-none`}>
          <div
            onClick={() => handleItemClick(item)}
            className={`flex items-center justify-between w-full py-3 text-sm cursor-pointer ${
              isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
            }`}
          >
            <span className="ml-2">{item.title}</span>
            {hasChildren && (
              <Image
                src={isExpanded ? '/ArrowDown.svg' : '/ArrowUp.svg'}
                alt={isExpanded ? 'Collapse' : 'Expand'}
                width={10}
                height={10}
                className="mr-2 transition-transform duration-300"
              />
            )}
          </div>
          {hasChildren && isExpanded && (
            <ul className="pl-4">
              {item.children?.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className={`block py-1.5 text-sm ${
                      pathname === child.href ? 'text-blue-600 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    {child.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      );
    });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const handleSearchSubmit = () => {
    const foundItem = navItems.find(
      (item) =>
        item.title.toLowerCase() === searchTerm.toLowerCase() ||
        item.children?.some((child) => child.title.toLowerCase() === searchTerm.toLowerCase()),
    );

    if (foundItem) {
      if (foundItem.children) {
        const childItem = foundItem.children.find(
          (child) => child.title.toLowerCase() === searchTerm.toLowerCase(),
        );
        if (childItem) {
          router.push(childItem.href);
        } else {
          router.push(foundItem.href);
        }
      } else {
        router.push(foundItem.href);
      }
    }
  };

  return (
    <aside className="w-60 border-r border-gray-200 bg-white h-screen overflow-auto">
      <div className="p-4 relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit()}
          className="w-full h-9 rounded-md border border-gray-300 pl-3 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
        />
        <button
          onClick={handleSearchSubmit}
          className="absolute right-[28px] top-[25px] cursor-pointer"
        >
          <Image src="/Searching.svg" alt="Search Icon" width={16} height={16} />
        </button>
      </div>
      <nav className="px-4">
        <ul>{renderNavItems(navItems)}</ul>
      </nav>
    </aside>
  );
}
