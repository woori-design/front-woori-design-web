import { NavItem } from '@/types/navItems.type';

export const navItems: NavItem[] = [
  { title: 'Overview', href: '/' },
  {
    title: 'Brand',
    href: '/brand/fff',
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

export const mypageNavItems: NavItem[] = [
  { title: '내 계정 관리', href: '/mypage' },
  { title: '좋아요한 컴포넌트', href: '/mypage/likes' },
];
