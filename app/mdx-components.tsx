import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 기본 컴포넌트 오버라이드
    h1: ({ children }) => <h1 className="doc-title">{children}</h1>,
    h2: ({ children }) => <h2 className="section-title">{children}</h2>,
    // 기존 컴포넌트 유지
    ...components,
  };
}
