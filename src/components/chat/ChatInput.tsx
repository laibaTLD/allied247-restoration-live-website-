'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useChat } from './ChatProvider';
import { Send, Paperclip } from 'lucide-react';

export default function ChatInput() {
  const { sendMessage, state } = useChat();
  const [message, setMessage] = useState('');
  const [isComposing, setIsComposing] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || state.isLoading) return;

    const messageToSend = message.trim();
    setMessage('');
    
    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    await sendMessage(messageToSend);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && !isComposing) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    
    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  };

  useEffect(() => {
    if (textareaRef.current && state.isOpen) {
      textareaRef.current.focus();
    }
  }, [state.isOpen]);


  return (
    <div className="border-t border-gray-200 bg-white p-4 overflow-hidden">
     

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex items-end space-x-2 overflow-hidden">
        <div className="flex-1 relative min-w-0">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
            placeholder="Type your message..."
            className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
            rows={1}
            disabled={state.isLoading}
            style={{ minHeight: '44px', maxHeight: '120px' }}
          />
          
          {/* Attachment button */}
          <button
            type="button"
            className="absolute right-2 bottom-2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
            disabled={state.isLoading}
            aria-label="Attach file"
          >
            <Paperclip className="w-4 h-4" />
          </button>
        </div>

        {/* Send button */}
        <button
          type="submit"
          disabled={!message.trim() || state.isLoading}
          className="p-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white rounded-lg transition-colors flex items-center justify-center"
          aria-label="Send message"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>

      {/* Character limit indicator */}
      <div className="mt-2 text-xs text-gray-500 text-right">
        {message.length}/500 characters
      </div>
    </div>
  );
}
