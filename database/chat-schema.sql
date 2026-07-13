-- Chatbot Database Schema for Allied 24/7 Restoration
-- Run this script to create chatbot tables in your PostgreSQL database

-- Main conversation tracking table
CREATE TABLE IF NOT EXISTS chat_conversations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id VARCHAR(255) UNIQUE NOT NULL,
  user_info JSONB DEFAULT '{}', -- {name, email, phone, location, service_area}
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'converted', 'closed', 'escalated')),
  service_interest VARCHAR(100), -- 'water_damage', 'fire_damage', 'mold_remediation', 'reconstruction', 'radon_mitigation', 'multi_surface_cleaning'
  urgency_level VARCHAR(20) DEFAULT 'normal' CHECK (urgency_level IN ('emergency', 'urgent', 'normal')),
  lead_score INTEGER DEFAULT 0 CHECK (lead_score >= 0 AND lead_score <= 100),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Individual messages table
CREATE TABLE IF NOT EXISTS chat_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  conversation_id UUID REFERENCES chat_conversations(id) ON DELETE CASCADE,
  role VARCHAR(20) NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  content TEXT NOT NULL,
  message_type VARCHAR(50) DEFAULT 'text' CHECK (message_type IN ('text', 'quick_reply', 'file', 'emergency_alert')),
  metadata JSONB DEFAULT '{}', -- {intent, confidence, response_time, tokens_used}
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Analytics and events tracking table
CREATE TABLE IF NOT EXISTS chat_analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  conversation_id UUID REFERENCES chat_conversations(id) ON DELETE CASCADE,
  event_type VARCHAR(100) NOT NULL, -- 'conversation_start', 'lead_captured', 'escalation', 'message_sent', 'quick_action_used'
  event_data JSONB DEFAULT '{}', -- Additional event-specific data
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Knowledge base for canned responses and FAQs
CREATE TABLE IF NOT EXISTS chat_knowledge_base (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category VARCHAR(100) NOT NULL, -- 'water_damage', 'fire_damage', 'mold_remediation', 'general', 'emergency'
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  keywords TEXT[] DEFAULT '{}',
  priority INTEGER DEFAULT 0 CHECK (priority >= 0),
  is_active BOOLEAN DEFAULT true,
  usage_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Lead capture table for qualified leads from chat
CREATE TABLE IF NOT EXISTS chat_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  conversation_id UUID REFERENCES chat_conversations(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(50),
  service_type VARCHAR(100),
  urgency_level VARCHAR(20),
  description TEXT,
  service_area VARCHAR(100),
  preferred_contact_time VARCHAR(100),
  status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'lost')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_chat_conversations_session_id ON chat_conversations(session_id);
CREATE INDEX IF NOT EXISTS idx_chat_conversations_status ON chat_conversations(status);
CREATE INDEX IF NOT EXISTS idx_chat_conversations_created_at ON chat_conversations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_chat_conversations_urgency ON chat_conversations(urgency_level);

CREATE INDEX IF NOT EXISTS idx_chat_messages_conversation_id ON chat_messages(conversation_id);
CREATE INDEX IF NOT EXISTS idx_chat_messages_created_at ON chat_messages(created_at ASC);
CREATE INDEX IF NOT EXISTS idx_chat_messages_role ON chat_messages(role);

CREATE INDEX IF NOT EXISTS idx_chat_analytics_conversation_id ON chat_analytics(conversation_id);
CREATE INDEX IF NOT EXISTS idx_chat_analytics_event_type ON chat_analytics(event_type);
CREATE INDEX IF NOT EXISTS idx_chat_analytics_created_at ON chat_analytics(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_chat_knowledge_base_category ON chat_knowledge_base(category);
CREATE INDEX IF NOT EXISTS idx_chat_knowledge_base_keywords ON chat_knowledge_base USING GIN(keywords);
CREATE INDEX IF NOT EXISTS idx_chat_knowledge_base_is_active ON chat_knowledge_base(is_active);

CREATE INDEX IF NOT EXISTS idx_chat_leads_conversation_id ON chat_leads(conversation_id);
CREATE INDEX IF NOT EXISTS idx_chat_leads_status ON chat_leads(status);
CREATE INDEX IF NOT EXISTS idx_chat_leads_created_at ON chat_leads(created_at DESC);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
DROP TRIGGER IF EXISTS update_chat_conversations_updated_at ON chat_conversations;
CREATE TRIGGER update_chat_conversations_updated_at
  BEFORE UPDATE ON chat_conversations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_chat_knowledge_base_updated_at ON chat_knowledge_base;
CREATE TRIGGER update_chat_knowledge_base_updated_at
  BEFORE UPDATE ON chat_knowledge_base
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_chat_leads_updated_at ON chat_leads;
CREATE TRIGGER update_chat_leads_updated_at
  BEFORE UPDATE ON chat_leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert initial knowledge base entries for Allied 24/7 Restoration
INSERT INTO chat_knowledge_base (category, question, answer, keywords, priority) VALUES
('emergency', 'I have water damage', 'I understand this is an emergency. Our team is available 24/7 for water damage restoration. Can you tell me: 1) Where is the water coming from? 2) Which areas are affected? 3) Is the water still flowing? I need to confirm your service area and get our team dispatched immediately.', ARRAY['water', 'damage', 'emergency', 'flood', 'leak'], 100),
('emergency', 'Fire damage help', 'I''m sorry you''re experiencing fire damage. Our fire restoration specialists are ready to help 24/7. First, ensure everyone is safe. Can you tell me: 1) Is everyone safe and out of the property? 2) Which areas are affected? 3) Do you have insurance information? We can dispatch our team immediately once I confirm your location.', ARRAY['fire', 'damage', 'emergency', 'smoke', 'burn'], 100),
('water_damage', 'How much does water damage restoration cost?', 'Pricing for water damage restoration varies based on the extent of damage, affected areas, and required equipment. After our free assessment, we provide a detailed estimate. Emergency services may have different pricing. The best approach is to have us assess the damage in person. Can I schedule a free consultation?', ARRAY['cost', 'price', 'water', 'damage', 'pricing'], 50),
('mold_remediation', 'I see mold in my home', 'Mold requires immediate attention due to health risks. Our certified mold remediation specialists can help. Can you tell me: 1) Where do you see the mold? 2) How large is the affected area? 3) Have you noticed any musty odors or health symptoms? We offer free mold inspections and can provide a detailed remediation plan.', ARRAY['mold', 'black mold', 'fungus', 'health', 'remediation'], 80),
('general', 'What services do you offer?', 'Allied 24/7 Restoration offers comprehensive restoration services: Water Damage Restoration (24/7 emergency), Fire & Smoke Damage Restoration, Mold Remediation & Testing, Reconstruction & Repairs, Radon Mitigation, and Multi-Surface Cleaning. We serve the Flathead Valley area including Kalispell, Whitefish, Bigfork, Columbia Falls, and Lakeside. What specific service are you interested in?', ARRAY['services', 'what do you do', 'offerings', 'restoration'], 30),
('general', 'What areas do you serve?', 'We proudly serve the Flathead Valley area in Montana: Kalispell, Whitefish, Bigfork, Columbia Falls, Lakeside, and surrounding areas. Our team can typically reach any location in these service areas within 30-60 minutes for emergencies. Which city or area are you located in?', ARRAY['areas', 'locations', 'service area', 'where', 'montana'], 40),
('general', 'Are you available 24/7?', 'Yes! Allied 24/7 Restoration is available 24 hours a day, 7 days a week for emergency services. Water damage, fire damage, and other emergencies don''t wait for business hours, and neither do we. For non-emergency services like mold inspections or reconstruction consultations, we also offer flexible scheduling. Do you need emergency assistance right now?', ARRAY['24/7', 'hours', 'available', 'emergency', 'time'], 60)
ON CONFLICT DO NOTHING;

-- Create a view for conversation analytics
CREATE OR REPLACE VIEW chat_conversation_summary AS
SELECT 
  c.id,
  c.session_id,
  c.status,
  c.service_interest,
  c.urgency_level,
  c.lead_score,
  COUNT(m.id) as message_count,
  MAX(m.created_at) as last_message_at,
  c.created_at as conversation_started,
  CASE 
    WHEN l.id IS NOT NULL THEN true 
    ELSE false 
  END as lead_captured
FROM chat_conversations c
LEFT JOIN chat_messages m ON c.id = m.conversation_id
LEFT JOIN chat_leads l ON c.id = l.conversation_id
GROUP BY c.id, l.id;

-- Grant necessary permissions (adjust based on your database user)
-- GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO your_app_user;
-- GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO your_app_user;

COMMENT ON TABLE chat_conversations IS 'Tracks individual chat sessions with users';
COMMENT ON TABLE chat_messages IS 'Stores all messages sent and received in chat conversations';
COMMENT ON TABLE chat_analytics IS 'Tracks events and analytics for chat performance';
COMMENT ON TABLE chat_knowledge_base IS 'Knowledge base for canned responses and FAQs';
COMMENT ON TABLE chat_leads IS 'Qualified leads captured through chat conversations';
