import { ChatNodeState } from '@/types/chat';
import { LangGraphConfig, LangGraphNode } from './types';
import { intentNode } from './nodes/intent';
import { responseNode, escalationNode } from './nodes/response';

class LangGraphChat {
  private config: LangGraphConfig;
  
  constructor() {
    this.config = this.buildGraph();
  }
  
  private buildGraph(): LangGraphConfig {
    const nodes: Record<string, LangGraphNode> = {
      intent: {
        name: 'intent',
        handler: intentNode
      },
      response: {
        name: 'response',
        handler: responseNode
      },
      escalation: {
        name: 'escalation',
        handler: escalationNode
      }
    };
    
    const edges = [
      { from: 'intent', to: 'response' },
      { 
        from: 'response', 
        to: 'escalation',
        condition: (state: ChatNodeState) => state.context?.shouldEscalate === true
      }
    ];
    
    return {
      nodes,
      edges,
      entryPoint: 'intent'
    };
  }
  
  async processMessage(state: ChatNodeState): Promise<ChatNodeState> {
    let currentState = { ...state };
    let currentNodeName: string | null = this.config.entryPoint;
    
    while (currentNodeName && currentNodeName !== 'escalated') {
      const node = this.config.nodes[currentNodeName];
      if (!node) {
        break;
      }
      
      currentState = await node.handler(currentState);
      
      // Find next node based on edges
      const nextEdge = this.config.edges.find(edge => {
        if (edge.from !== currentNodeName) return false;
        if (edge.condition) return edge.condition(currentState);
        return true;
      });
      
      currentNodeName = nextEdge?.to || null;
    }
    
    return currentState;
  }
  
  shouldContinue(state: ChatNodeState): boolean {
    return state.nextAction !== 'escalated' && state.nextAction !== 'ended';
  }
}

export const chatGraph = new LangGraphChat();
export type { ChatNodeState, LangGraphConfig, LangGraphNode };
