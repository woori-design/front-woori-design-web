import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { navItems } from '@/data/navItems';
import Image from 'next/image';

const SearchBar = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearchSubmit = () => {
    const searchTerm = searchInputRef.current?.value.trim();
    if (!searchTerm) return;

    const foundItem = navItems.find(
      (item) => item.title.toLowerCase() === searchTerm.toLowerCase(),
    );

    if (foundItem) {
      if (foundItem.children?.length) {
        router.push(foundItem.children[0].href);
      } else {
        router.push(foundItem.href);
      }
      return;
    }

    for (const parent of navItems) {
      const childItem = parent.children?.find(
        (child) => child.title.toLowerCase() === searchTerm.toLowerCase(),
      );
      if (childItem) {
        router.push(childItem.href);
        return;
      }
    }

    router.push(`/search-not-found?query=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        ref={searchInputRef}
        onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
        className="w-full h-9 rounded-md border border-gray-300 pl-3 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
      />
      <button
        onClick={handleSearchSubmit}
        className="absolute right-[10px] top-[50%] translate-y-[-50%] cursor-pointer"
      >
        <Image src="/imgs/Searching.svg" alt="Search Icon" width={16} height={16} />
      </button>
    </div>
  );
};

export default SearchBar;
