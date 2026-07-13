import { ChatMessage, ChatConversation, ChatNodeState, UserInfo } from '@/types/chat';
import { chatGraph } from './langgraph';

const conversations = new Map<string, ChatConversation>();

export class ChatService {
  static async sendMessage(
    sessionId: string,
    message: string,
    userInfo?: unknown
  ): Promise<ChatConversation> {
    let conversation = conversations.get(sessionId);
    
    if (!conversation) {
      conversation = this.createNewConversation(sessionId, userInfo);
      conversations.set(sessionId, conversation);
    }
    
    const userMessage: ChatMessage = {
      id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      role: 'user',
      content: message,
      timestamp: new Date()
    };
    
    conversation.messages.push(userMessage);
    
    // Process with LangGraph
    const graphState: ChatNodeState = {
      messages: conversation.messages,
      userInfo: userInfo as UserInfo | undefined,
      context: conversation.userInfo ? { userInfo: conversation.userInfo } : {}
    };
    
    const processedState = await chatGraph.processMessage(graphState);
    
    // Add only the new assistant message to conversation
    const newMessages = processedState.messages.slice(conversation.messages.length);
    conversation.messages.push(...newMessages);
    conversation.updatedAt = new Date();
    
    // Update status if escalated
    if (processedState.nextAction === 'escalated') {
      conversation.status = 'escalated';
    }
    
    // Update user info if new entities were extracted
    if (processedState.context?.entities) {
      conversation.userInfo = {
        ...conversation.userInfo,
        ...processedState.context.entities
      };
    }
    
    conversations.set(sessionId, conversation);
    return conversation;
  }
  
  static getConversation(sessionId: string): ChatConversation | null {
    return conversations.get(sessionId) || null;
  }
  
  static getAllConversations(): ChatConversation[] {
    return Array.from(conversations.values());
  }
  
  private static createNewConversation(
    sessionId: string,
    userInfo?: unknown
  ): ChatConversation {
    return {
      id: `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      sessionId,
      messages: [{
        id: 'welcome',
        role: 'assistant',
        content: "Welcome to Allied 24/7 Restoration! I'm here to help you with water damage, fire damage, mold remediation, and emergency restoration services. How can I assist you today?",
        timestamp: new Date()
      }],
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date(),
      userInfo: userInfo as UserInfo | undefined
    };
  }
  
  static async escalateConversation(sessionId: string): Promise<void> {
    const conversation = conversations.get(sessionId);
    if (conversation) {
      conversation.status = 'escalated';
      conversation.updatedAt = new Date();
      conversations.set(sessionId, conversation);
      
      // Here you would integrate with your notification system
      console.log(`Conversation ${sessionId} escalated to human agent`);
    }
  }
}
