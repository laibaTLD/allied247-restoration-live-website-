'use client';

import React from 'react';
import { useChat } from './ChatProvider';
import ChatInput from './ChatInput';
import LeadCaptureModal from './LeadCaptureModal';

interface ChatWindowProps {
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

export default function ChatWindow({ messagesEndRef }: ChatWindowProps) {
  const { state } = useChat();

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <>
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4">
        {state.conversation?.messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 break-words overflow-hidden ${
                message.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap break-words overflow-hidden">{message.content}</p>
              <p
                className={`text-xs mt-1 ${
                  message.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}
              >
                {formatTime(new Date(message.timestamp))}
              </p>
            </div>
          </div>
        ))}
        
        {/* Typing indicator */}
        {state.isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg px-4 py-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        {/* Escalation notice */}
        {state.conversation?.status === 'escalated' && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-center">
            <p className="text-sm text-yellow-800">
              <strong>🚨 Request Escalated</strong><br />
              A specialist will contact you shortly.
            </p>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <ChatInput />
      
      {state.showLeadCapture && (
        <LeadCaptureModal />
      )}
    </>
  );
}
