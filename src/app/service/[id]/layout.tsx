import React from 'react';

interface Props {
  children: React.ReactNode;
}

// Minimal layout kept only so the dynamic [id] route remains valid, but all
// previous dynamic metadata logic has been removed per requirement to stop
// using dynamic service detail pages.
export default function ServiceLayout({ children }: Props) {
  return <>{children}</>;
}
