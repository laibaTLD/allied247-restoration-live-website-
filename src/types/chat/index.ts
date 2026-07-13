export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  metadata?: Record<string, unknown>;
}

export interface ChatConversation {
  id: string;
  sessionId: string;
  messages: ChatMessage[];
  status: 'active' | 'ended' | 'escalated';
  createdAt: Date;
  updatedAt: Date;
  userInfo?: UserInfo;
}

export interface UserInfo {
  name?: string;
  email?: string;
  phone?: string;
  serviceInterest?: string;
  urgencyLevel?: 'low' | 'medium' | 'high' | 'emergency';
}

export interface ChatState {
  conversation: ChatConversation | null;
  isLoading: boolean;
  isOpen: boolean;
  showLeadCapture: boolean;
}

export interface ChatNodeState {
  messages: ChatMessage[];
  userInfo?: UserInfo;
  intent?: string;
  nextAction?: string;
  context?: Record<string, unknown>;
}
