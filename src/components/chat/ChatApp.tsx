'use client';

import { ChatProvider } from './ChatProvider';
import ChatWidget from './ChatWidget';

export default function ChatApp() {
  return (
    <ChatProvider>
      <ChatWidget />
    </ChatProvider>
  );
}
