import { ChatNodeState, IntentResult } from '../types';

const INTENT_PATTERNS = {
  emergency: [
    'emergency', 'urgent', 'immediate', 'now', 'asap', 'flood', 'fire', 'burst pipe',
    'water damage', 'no water', 'leaking', 'overflowing', 'disaster'
  ],
  service: [
    'water damage', 'fire damage', 'mold', 'cleaning', 'restoration', 'repair',
    'construction', 'mitigation', 'extraction', 'drying', 'reconstruction'
  ],
  quote: [
    'quote', 'price', 'cost', 'estimate', 'how much', 'pricing', 'free estimate',
    'how much does it cost', 'what do you charge', 'payment'
  ],
  contact: [
    'call me', 'phone', 'contact', 'speak to', 'talk to', 'representative',
    'human', 'person', 'agent', 'schedule', 'appointment'
  ],
  information: [
    'hours', 'location', 'services', 'about', 'what do you do', 'areas',
    'certified', 'licensed', 'insurance', 'company', 'business', 'who are you',
    'allied restoration', 'kalispell', 'montana', 'service area'
  ],
  greeting: [
    'hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening',
    'how are you', 'thanks', 'thank you', 'bye', 'goodbye'
  ],
  conversational: [
    'how are you', 'what\'s up', 'how\'s it going', 'nice to meet you',
    'help', 'assist', 'support', 'available', 'there', 'can you help'
  ]
};

export async function detectIntent(message: string): Promise<IntentResult> {
  const lowerMessage = message.toLowerCase();
  
  for (const [intent, patterns] of Object.entries(INTENT_PATTERNS)) {
    const matches = patterns.filter(pattern => lowerMessage.includes(pattern));
    if (matches.length > 0) {
      return {
        intent,
        confidence: matches.length / patterns.length,
        entities: extractEntities(message, intent)
      };
    }
  }
  
  return {
    intent: 'general',
    confidence: 0.5,
    entities: {}
  };
}

function extractEntities(message: string, intent: string): Record<string, unknown> {
  const entities: Record<string, unknown> = {};
  
  // Extract phone numbers
  const phoneRegex = /(\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})/;
  const phoneMatch = message.match(phoneRegex);
  if (phoneMatch) {
    entities.phone = phoneMatch[0];
  }
  
  // Extract email
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
  const emailMatch = message.match(emailRegex);
  if (emailMatch) {
    entities.email = emailMatch[0];
  }
  
  // Extract service types
  if (intent === 'service') {
    const services = ['water', 'fire', 'mold', 'cleaning', 'construction', 'restoration'];
    for (const service of services) {
      if (message.toLowerCase().includes(service)) {
        entities.serviceType = service;
        break;
      }
    }
  }
  
  // Extract location information
  const locations = ['kalispell', 'montana', 'mt', 'flathead', 'whitefish', 'columbia falls'];
  for (const location of locations) {
    if (message.toLowerCase().includes(location)) {
      entities.location = location;
      break;
    }
  }
  
  // Extract urgency indicators
  const urgencyWords = ['emergency', 'urgent', 'immediate', 'asap', 'now'];
  for (const word of urgencyWords) {
    if (message.toLowerCase().includes(word)) {
      entities.urgency = 'high';
      break;
    }
  }
  
  // Extract company name mentions
  if (message.toLowerCase().includes('allied') || message.toLowerCase().includes('restoration')) {
    entities.companyMentioned = true;
  }
  
  return entities;
}

export async function intentNode(state: ChatNodeState): Promise<ChatNodeState> {
  const lastMessage = state.messages[state.messages.length - 1];
  
  if (!lastMessage || lastMessage.role !== 'user') {
    return state;
  }
  
  const intentResult = await detectIntent(lastMessage.content);
  
  return {
    ...state,
    intent: intentResult.intent,
    context: {
      ...state.context,
      entities: intentResult.entities,
      confidence: intentResult.confidence
    }
  };
}
