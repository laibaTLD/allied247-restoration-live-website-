import { ChatMessage, ChatNodeState } from '@/types/chat';

export type { ChatNodeState };

export interface LangGraphNode {
  name: string;
  handler: (state: ChatNodeState) => Promise<ChatNodeState>;
  condition?: (state: ChatNodeState) => string;
}

export interface LangGraphConfig {
  nodes: Record<string, LangGraphNode>;
  edges: Array<{
    from: string;
    to: string;
    condition?: (state: ChatNodeState) => boolean;
  }>;
  entryPoint: string;
}

export interface IntentResult {
  intent: string;
  confidence: number;
  entities: Record<string, unknown>;
}

export interface ResponseResult {
  message: string;
  nextAction?: string;
  shouldEscalate?: boolean;
  collectInfo?: string[];
}
