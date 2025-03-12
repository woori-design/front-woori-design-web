'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/types/navItems.type';
import { motion } from 'framer-motion';

interface SidebarItemProps {
  item: NavItem;
  expandedItems: string[];
  toggleExpand: (href: string) => void;
}

export default function SidebarItem({ item, expandedItems, toggleExpand }: SidebarItemProps) {
  const pathname = usePathname();
  const isExpanded = expandedItems.includes(item.href);
  const hasChildren = !!item.children?.length;

  const isActive = !hasChildren && pathname === item.href;

  return (
    <li className="list-none">
      <Link
        href={item.href}
        onClick={(e) => {
          if (hasChildren) {
            e.preventDefault();
            toggleExpand(item.href);
          }
        }}
        className={`flex items-center justify-between w-full py-3 text-sm cursor-pointer ${
          isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
        }`}
      >
        <span className="ml-2">{item.title}</span>
        {hasChildren && <span>{isExpanded ? '▼' : '▶'}</span>}
      </Link>

      <motion.ul
        className="pl-4 overflow-hidden"
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {hasChildren &&
          item.children?.map((child) => (
            <SidebarItem
              key={child.href}
              item={child}
              expandedItems={expandedItems}
              toggleExpand={toggleExpand}
            />
          ))}
      </motion.ul>
    </li>
  );
}
