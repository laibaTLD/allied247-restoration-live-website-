'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useChat } from './ChatProvider';
import { Minimize2, Maximize2, MessageCircle, X, Phone, AlertTriangle } from 'lucide-react';
import ChatWindow from './ChatWindow';

export default function ChatWidget() {
  const { state, toggleChat, closeChat } = useChat();
  const [isMinimized, setIsMinimized] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.isOpen && !isMinimized) {
      setUnreadCount(0);
    } else if (state.conversation) {
      const assistantMessages = state.conversation.messages.filter(
        msg => msg.role === 'assistant' && msg.id !== 'welcome'
      );
      setUnreadCount(assistantMessages.length);
    }
  }, [state.conversation, state.isOpen, isMinimized]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [state.conversation?.messages]);

  if (!state.isOpen) {
    return (
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-110 group"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            {unreadCount}
          </span>
        )}
        <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[calc(100vw-2rem)] h-[485px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full border-2 border-blue-600"></span>
          </div>
          <div>
            <h3 className="font-semibold">Allied 24/7 Restoration</h3>
            <p className="text-xs text-blue-100">We typically reply in minutes</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-blue-700 rounded transition-colors"
            aria-label={isMinimized ? 'Maximize' : 'Minimize'}
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={closeChat}
            className="p-1 hover:bg-blue-700 rounded transition-colors"
            aria-label="Close chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Chat Content */}
      {!isMinimized && (
        <>
          <ChatWindow messagesEndRef={messagesEndRef} />
        </>
      )}
    </div>
  );
}
