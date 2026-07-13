'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { ChatState, ChatConversation, ChatMessage } from '@/types/chat';

interface ChatContextType {
  state: ChatState;
  sendMessage: (message: string) => Promise<void>;
  toggleChat: () => void;
  closeChat: () => void;
  clearConversation: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

type ChatAction =
  | { type: 'TOGGLE_CHAT' }
  | { type: 'CLOSE_CHAT' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_CONVERSATION'; payload: ChatConversation }
  | { type: 'ADD_MESSAGE'; payload: ChatMessage }
  | { type: 'SHOW_LEAD_CAPTURE' }
  | { type: 'HIDE_LEAD_CAPTURE' }
  | { type: 'CLEAR_CONVERSATION' };

function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case 'TOGGLE_CHAT':
      return { ...state, isOpen: !state.isOpen };
    case 'CLOSE_CHAT':
      return { ...state, isOpen: false };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_CONVERSATION':
      return { ...state, conversation: action.payload };
    case 'ADD_MESSAGE':
      if (!state.conversation) return state;
      return {
        ...state,
        conversation: {
          ...state.conversation,
          messages: [...state.conversation.messages, action.payload],
          updatedAt: new Date()
        }
      };
    case 'SHOW_LEAD_CAPTURE':
      return { ...state, showLeadCapture: true };
    case 'HIDE_LEAD_CAPTURE':
      return { ...state, showLeadCapture: false };
    case 'CLEAR_CONVERSATION':
      return {
        ...state,
        conversation: null,
        showLeadCapture: false
      };
    default:
      return state;
  }
}

const initialState: ChatState = {
  conversation: null,
  isLoading: false,
  isOpen: false,
  showLeadCapture: false
};

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  const generateSessionId = () => {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const sendMessage = async (message: string) => {
    if (!message.trim()) return;

    console.log('🚀 Sending message:', message);

    dispatch({ type: 'SET_LOADING', payload: true });

    // Add user message to local state immediately
    const userMessage: ChatMessage = {
      id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      role: 'user',
      content: message,
      timestamp: new Date()
    };
    
    console.log('➕ Adding user message to state:', userMessage);
    dispatch({ type: 'ADD_MESSAGE', payload: userMessage });

    try {
      const sessionId = state.conversation?.sessionId || generateSessionId();
      console.log('🆔 Session ID:', sessionId);
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId,
          message,
          userInfo: state.conversation?.userInfo
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const { conversation } = await response.json();
      console.log('📨 API response conversation:', conversation);
      
      // Track how many messages we had before the API call
      const messageCountBefore = (state.conversation?.messages.length || 0) + 1; // +1 for the user message we just added
      const newMessages = conversation.messages.slice(messageCountBefore);
      
      console.log('📋 Message count before API:', messageCountBefore);
      console.log('🆕 New messages to add:', newMessages);
      
      // Simply add all messages from API response (they should include user + assistant)
      // but only if we don't already have them
      const existingMessageIds = new Set((state.conversation?.messages || []).map(m => m.id));
      
      conversation.messages.forEach((message: ChatMessage) => {
        if (!existingMessageIds.has(message.id)) {
          console.log('➕ Adding message:', message);
          dispatch({ type: 'ADD_MESSAGE', payload: message });
        } else {
          console.log('⏭️ Skipping existing message:', message);
        }
      });

      // Update conversation metadata
      dispatch({ type: 'SET_CONVERSATION', payload: conversation });

      // Show lead capture if needed
      const lastMessage = conversation.messages[conversation.messages.length - 1];
      if (lastMessage?.metadata?.collectInfo?.length > 0) {
        dispatch({ type: 'SHOW_LEAD_CAPTURE' });
      }
    } catch (error) {
      console.error('❌ Error sending message:', error);
      // Add error message
      const errorMessage: ChatMessage = {
        id: Date.now().toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again or call us directly for immediate assistance.',
        timestamp: new Date()
      };
      dispatch({ type: 'ADD_MESSAGE', payload: errorMessage });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const toggleChat = () => {
    dispatch({ type: 'TOGGLE_CHAT' });
  };

  const closeChat = () => {
    dispatch({ type: 'CLOSE_CHAT' });
  };

  const clearConversation = () => {
    dispatch({ type: 'CLEAR_CONVERSATION' });
  };

  return (
    <ChatContext.Provider
      value={{
        state,
        sendMessage,
        toggleChat,
        closeChat,
        clearConversation
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
