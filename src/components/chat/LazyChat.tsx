'use client';

import dynamic from 'next/dynamic';

const ChatApp = dynamic(() => import('./ChatApp'), {
  ssr: false,
  loading: () => null,
});

export default function LazyChat() {
  return <ChatApp />;
}
