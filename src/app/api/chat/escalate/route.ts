import { NextRequest, NextResponse } from 'next/server';
import { ChatService } from '@/lib/chat/chatService';

export async function POST(request: NextRequest) {
  try {
    const { sessionId } = await request.json();
    
    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }
    
    await ChatService.escalateConversation(sessionId);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Escalation API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
