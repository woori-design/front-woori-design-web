import React from 'react';

export const Preview = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 border border-gray-200 rounded-lg my-4 bg-gray-50">{children}</div>;
};
