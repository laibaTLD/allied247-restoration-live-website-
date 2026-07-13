import { ChatNodeState, ResponseResult } from '../types';

const RESPONSES = {
  emergency: {
    message: "I understand this is an emergency. Our team is available 24/7 for immediate assistance. Someone will contact you right away. Please stay safe!",
    nextAction: 'escalate',
    shouldEscalate: true,
    collectInfo: ['phone', 'name', 'location']
  },
  service: {
    message: "I can help with that. What type of service do you need?",
    nextAction: 'collect_info',
    collectInfo: ['serviceType']
  },
  quote: {
    message: "I'd be happy to provide a free estimate. What type of damage are you dealing with?",
    nextAction: 'collect_info',
    collectInfo: ['serviceType', 'description']
  },
  contact: {
    message: "I'll connect you with a specialist right away. What's your name and phone number?",
    nextAction: 'escalate',
    collectInfo: ['name', 'phone']
  },
  information: {
    message: "I can help with information about our services. What would you like to know?",
    nextAction: 'continue'
  },
  greeting: {
    message: "Hello! How can I help you today?",
    nextAction: 'continue'
  },
  conversational: {
    message: "I'm here to help! What do you need assistance with?",
    nextAction: 'continue'
  },
  general: {
    message: "How can I assist you today?",
    nextAction: 'continue'
  }
};

function generateContextualResponse(message: string, intent: string, entities: Record<string, unknown>): string {
  const lowerMessage = message.toLowerCase();
  
  // Handle emergency situations
  if (lowerMessage.includes('emergency') || lowerMessage.includes('urgent') || lowerMessage.includes('help now') || lowerMessage.includes('immediate')) {
    return "🚨 EMERGENCY - Call Allied 24/7 Restoration NOW: 406-123-4567. Our emergency team is dispatched immediately for water damage, fire damage, or mold emergencies. What's your location and situation?";
  }
  
  // Handle contact information requests
  if (lowerMessage.includes('phone') || lowerMessage.includes('call') || lowerMessage.includes('number') || lowerMessage.includes('contact')) {
    return "📞 Allied 24/7 Restoration Contact Information:\n• Emergency: 406-123-4567 (24/7)\n• Office: 406-123-4568 (Mon-Fri 8am-6pm)\n• Email: info@alliedrestoration.com\n• Address: 123 Main Street, Kalispell, MT 59901\n• Website: www.alliedrestoration.com\n\nHow can I help you today?";
  }
  if (lowerMessage.includes('email') || lowerMessage.includes('mail') || lowerMessage.includes('message')) {
    return "📧 Allied 24/7 Restoration Email: info@alliedrestoration.com\n\nYou can also:\n• Call us: 406-123-4567 (24/7 emergencies)\n• Visit our website: www.alliedrestoration.com\n• Use our contact form on the website\n\nWhat information do you need?";
  }
  if (lowerMessage.includes('website') || lowerMessage.includes('web') || lowerMessage.includes('online') || lowerMessage.includes('www')) {
    return "🌐 Allied 24/7 Restoration Website: www.alliedrestoration.com\n\nOn our website you can:\n• Learn about all our services\n• Request a free estimate\n• View our project gallery\n• Read customer testimonials\n• Access emergency contact info\n• Learn about our restoration process\n\nWhat would you like to know more about?";
  }
  if (lowerMessage.includes('address') || lowerMessage.includes('location') || lowerMessage.includes('where')) {
    return "📍 Allied 24/7 Restoration Address:\n123 Main Street\nKalispell, Montana 59901\n\n🗺️ Service Area: Flathead Valley including:\n• Kalispell • Whitefish • Columbia Falls\n• Lakeside • Somers • Kila • Olney\n• Polebridge • West Glacier\n\n🚗 Emergency response: 30-60 minutes in our service area\n\nNeed directions or immediate help?";
  }
  
  // Handle greetings and pleasantries
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return "👋 Hello! Welcome to Allied 24/7 Restoration - Kalispell's trusted restoration experts since 2015. I'm here to help 24/7 with water damage, fire damage, mold remediation, and reconstruction. How can I assist you today?";
  }
  if (lowerMessage.includes('how are you')) {
    return "😊 I'm doing great, thank you! I'm here to help you with Allied 24/7 Restoration's expert services. Whether you need emergency restoration or just have questions, I'm ready to assist. What can I help you with?";
  }
  if (lowerMessage.includes('good morning') || lowerMessage.includes('good afternoon') || lowerMessage.includes('good evening')) {
    const timeOfDay = lowerMessage.includes('morning') ? 'Morning' : lowerMessage.includes('afternoon') ? 'Afternoon' : 'Evening';
    return `☀️ Good ${timeOfDay}! This is Allied 24/7 Restoration. We're here to help with any restoration needs - 24/7 emergency response available. How can I assist you today?`;
  }
  if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
    return "🙏 You're very welcome! Allied 24/7 Restoration is always here to help. Is there anything else I can assist you with regarding our restoration services or emergency needs?";
  }
  if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye') || lowerMessage.includes('see you')) {
    return "👋 Goodbye! Remember Allied 24/7 Restoration is here 24/7 for any restoration emergencies. Save our number: 406-123-4567. Stay safe!";
  }
  
  // Handle comprehensive company information
  if (lowerMessage.includes('who are you') || lowerMessage.includes('about') || lowerMessage.includes('company') || lowerMessage.includes('business')) {
    return "🏢 About Allied 24/7 Restoration:\n\n📅 Founded: 2015 (8+ years serving Flathead Valley)\n📍 Headquarters: 123 Main Street, Kalispell, MT 59901\n🎯 Mission: Helping our community recover from disasters quickly and professionally\n\n🏆 What We Do:\n• Water Damage Restoration\n• Fire Damage Cleanup\n• Mold Remediation\n• Complete Reconstruction\n• Emergency Board-up Services\n• Contents Cleaning & Pack-out\n• Specialty Cleaning Services\n\n📞 Contact: 406-123-4567 | 🌐 www.alliedrestoration.com\n\nHow can we help you today?";
  }
  if (lowerMessage.includes('allied restoration') || lowerMessage.includes('your company')) {
    return "🏢 Allied 24/7 Restoration is your LOCAL restoration expert:\n\n✅ IICRC Certified Technicians\n✅ Montana Licensed (#12345)\n✅ Fully Insured & Bonded\n✅ 4.8-Star Customer Rating\n✅ 24/7 Emergency Response\n✅ Works With All Insurance Companies\n\n📞 Emergency: 406-123-4567\n📧 Email: info@alliedrestoration.com\n🌐 Website: www.alliedrestoration.com\n\nWe're committed to helping Flathead Valley residents recover from disasters. What do you need help with?";
  }
  if (lowerMessage.includes('experience') || lowerMessage.includes('years') || lowerMessage.includes('since') || lowerMessage.includes('history')) {
    return "📊 Allied 24/7 Restoration Experience:\n\n📅 Founded: 2015\n⏰ Over 8 years serving Flathead Valley\n🏠 Hundreds of successful restoration projects\n🔥 Fire damage restoration specialist\n💧 Water damage experts\n🦠 Mold remediation professionals\n\n🏆 Our Track Record:\n• 98% customer satisfaction rate\n• Average emergency response: 45 minutes\n• 100+ 5-star reviews online\n• Preferred vendor for major insurance companies\n\nTrust our experience for your restoration needs!";
  }
  if (lowerMessage.includes('team') || lowerMessage.includes('staff') || lowerMessage.includes('employees') || lowerMessage.includes('crew')) {
    return "👥 Allied 24/7 Restoration Team:\n\n🎓 IICRC Certified Technicians\n👷‍♂️ Experienced Project Managers\n🔧 Restoration Specialists\n📋 Insurance Claims Coordinators\n🧹 Professional Cleaning Crew\n\n🎯 Our Team Commitment:\n• Continuous training & education\n• Background-checked employees\n• Drug-free workplace\n• Professional, uniformed staff\n• Compassionate customer service\n• Local Flathead Valley residents\n\nOur team is ready to help 24/7!";
  }
  
  // Handle detailed services information
  if (lowerMessage.includes('what can you do') || lowerMessage.includes('what do you do') || lowerMessage.includes('help me with') || lowerMessage.includes('services') || lowerMessage.includes('service list')) {
    return "🔧 Allied 24/7 Restoration Complete Services:\n\n💧 WATER DAMAGE RESTORATION:\n• Emergency water extraction\n• Structural drying & dehumidification\n• Moisture detection & mapping\n• Mold prevention treatment\n• Content restoration\n\n🔥 FIRE DAMAGE RESTORATION:\n• Emergency board-up & tarping\n• Smoke & soot removal\n• Odor elimination\n• Content cleaning & pack-out\n• Structural repairs\n\n🦠 MOLD REMEDIATION:\n• Mold testing & inspection\n• Containment & safe removal\n• Air purification\n• Prevention strategies\n\n🏗️ RECONSTRUCTION:\n• Complete rebuilds\n• Repairs & renovations\n• Flooring installation\n• Painting & finishing\n\n🧹 SPECIALTY SERVICES:\n• Biohazard cleanup\n• Trauma scene cleanup\n• Hoarding cleanup\n• Post-construction cleaning\n\n📞 Call 406-123-4567 for any service!";
  }
  if (lowerMessage.includes('water') || lowerMessage.includes('flood') || lowerMessage.includes('leak') || lowerMessage.includes('water damage')) {
    return "💧 Allied 24/7 Water Damage Restoration:\n\n🚨 24/7 Emergency Response Available!\n\n🔧 Our Water Damage Services:\n• Emergency water extraction (truck-mounted)\n• Structural drying with industrial dehumidifiers\n• Thermal imaging moisture detection\n• Anti-microbial treatments\n• Mold prevention\n• Content drying & restoration\n• Complete repairs & reconstruction\n\n🛠️ Advanced Equipment:\n• Truck-mounted extractors\n• Industrial dehumidifiers\n• High-velocity air movers\n• Thermal imaging cameras\n• Moisture meters\n\n💊 We work with ALL insurance companies!\n\n📞 Emergency: 406-123-4567\n⏰ Response time: 30-60 minutes\n\nAre you experiencing water damage now?";
  }
  if (lowerMessage.includes('fire') || lowerMessage.includes('burn') || lowerMessage.includes('smoke') || lowerMessage.includes('fire damage')) {
    return "🔥 Allied 24/7 Fire Damage Restoration:\n\n🚨 Immediate Response Available 24/7!\n\n🔥 Our Fire Damage Services:\n• Emergency board-up & security\n• Smoke & soot removal\n• Odor elimination (ozone, thermal fogging)\n• Content cleaning & pack-out\n• Structural cleaning\n• Complete reconstruction\n\n🛡️ Fire Damage Process:\n1. Emergency board-up (within 2 hours)\n2. Assessment & documentation\n3. Smoke/soot cleaning\n4. Deodorization\n5. Repairs & reconstruction\n6. Final inspection\n\n📸 We document everything for insurance!\n\n📞 Emergency: 406-123-4567\n🏢 We work with all fire insurance policies\n\nHave you had a fire incident?";
  }
  if (lowerMessage.includes('mold') || lowerMessage.includes('mildew') || lowerMessage.includes('mold remediation')) {
    return "🦠 Allied 24/7 Professional Mold Remediation:\n\n⚠️ Health & Safety Priority!\n\n🔬 Our Mold Services:\n• Professional mold testing\n• Visual inspection & assessment\n• Air quality testing\n• Containment setup (negative pressure)\n• Safe mold removal\n• HEPA air filtration\n• Antimicrobial treatments\n• Prevention recommendations\n\n🏆 IICRC Certified & EPA Compliant:\n• Follows IICRC S520 standards\n• EPA-approved methods\n• Certified mold remediators\n• Safe for your family & pets\n\n📋 Mold Remediation Process:\n1. Inspection & testing\n2. Containment\n3. Removal & cleaning\n4. Air purification\n5. Prevention treatment\n6. Post-testing\n\n📞 Call 406-123-4567 for mold help!";
  }
  if (lowerMessage.includes('clean') || lowerMessage.includes('sanit') || lowerMessage.includes('cleaning')) {
    return "🧹 Allied 24/7 Specialty Cleaning Services:\n\n🏠 Post-Disaster Cleaning:\n• Fire residue cleanup\n• Water damage sanitization\n• Smoke odor removal\n• Debris removal\n\n🧫 Biohazard Cleanup:\n• Trauma scene cleanup\n• Crime scene cleanup\n• Infectious disease cleaning\n• Hoarding cleanup\n\n🏢 Commercial Cleaning:\n• Office deep cleaning\n• Retail space sanitization\n• Industrial facility cleaning\n• Post-construction cleanup\n\n🛡️ Health & Safety:\n• Hospital-grade disinfectants\n• EPA-approved cleaners\n• PPE for all technicians\n• Proper waste disposal\n\n📞 Schedule cleaning: 406-123-4567\n\nWhat type of cleaning do you need?";
  }
  if (lowerMessage.includes('reconstruction') || lowerMessage.includes('repair') || lowerMessage.includes('build') || lowerMessage.includes('remodel')) {
    return "🏗️ Allied 24/7 Reconstruction Services:\n\n🔨 Complete Reconstruction:\n• Full home rebuilds\n• Room additions\n• Kitchen & bathroom remodels\n• Basement finishing\n• Flooring installation\n• Drywall & painting\n• Roofing repairs\n• Window & door replacement\n\n📋 Our Process:\n1. Detailed assessment\n2. Design & planning\n3. Permit acquisition\n4. Quality construction\n5. Final inspection\n6. Customer walkthrough\n\n✅ Quality Guarantees:\n• Licensed contractors\n• Quality materials\n• Building code compliance\n• 1-year workmanship warranty\n• Insurance coordination\n\n🏢 Insurance claims handled!\n\n📞 Reconstruction estimate: 406-123-4567";
  }
  
  // Handle pricing and quotes
  if (lowerMessage.includes('how much') || lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('quote') || lowerMessage.includes('estimate')) {
    return "💰 Allied 24/7 Restoration - FREE Estimates!\n\n📋 What We Estimate:\n• Water damage restoration\n• Fire damage cleanup\n• Mold remediation\n• Reconstruction projects\n• Specialty cleaning\n\n💳 Payment Options:\n• Direct insurance billing\n• Flexible payment plans\n• Credit cards accepted\n• Competitive pricing\n\n📞 Get Your FREE Estimate:\nCall: 406-123-4567\nEmail: info@alliedrestoration.com\nWeb: www.alliedrestoration.com\n\n🏠 We come to you - no obligation!\n\nWhat service do you need estimated?";
  }
  if (lowerMessage.includes('insurance') || lowerMessage.includes('pay') || lowerMessage.includes('coverage') || lowerMessage.includes('claim')) {
    return "🏢 Allied 24/7 Restoration - Insurance Experts!\n\n📋 Insurance Companies We Work With:\n• State Farm • Allstate • Farmers\n• Progressive • USAA • Geico\n• Liberty Mutual • American Family\n• Local & regional carriers\n\n📄 Insurance Services:\n• Direct billing to insurance\n• Claim documentation\n• Photo & video documentation\n• Detailed itemized invoices\n• Adjuster coordination\n• Mitigation reports\n\n✅ Our Insurance Promise:\n• We handle all the paperwork\n• Maximize your coverage\n• Fast claim processing\n• Transparent pricing\n• No hidden fees\n\n📞 Insurance claim help: 406-123-4567\n\nWhat's your insurance company?";
  }
  
  // Handle business hours and availability
  if (lowerMessage.includes('hours') || lowerMessage.includes('time') || lowerMessage.includes('open') || lowerMessage.includes('available')) {
    return "🕐 Allied 24/7 Restoration Hours:\n\n🚨 EMERGENCY SERVICES: 24/7/365\n• Always available - holidays included\n• 30-60 minute response time\n• Technicians on-call 24/7\n\n🏢 OFFICE HOURS:\nMonday - Friday: 8:00 AM - 6:00 PM\nSaturday: By appointment\nSunday: Emergency only\n\n📞 Contact Information:\nEmergency: 406-123-4567 (24/7)\nOffice: 406-123-4568 (business hours)\nEmail: info@alliedrestoration.com\n\n🌐 Website: www.alliedrestoration.com\n\nWe're ALWAYS here for emergencies!";
  }
  
  // Handle service area information
  if (lowerMessage.includes('service area') || lowerMessage.includes('areas') || lowerMessage.includes('travel') || lowerMessage.includes('locations')) {
    return "🗺️ Allied 24/7 Restoration Service Area:\n\n🏠 Primary Service Area (30-60 min response):\n• Kalispell • Whitefish • Columbia Falls\n• Lakeside • Somers • Kila • Olney\n• Polebridge • West Glacier\n\n🏙️ Extended Service Area (60-90 min response):\n• Bigfork • Hungry Horse • Martin City\n• Coram • Essex • East Glacier\n\n🏢 Commercial Projects:\nAll of Northwest Montana\n\n⏰ Response Times:\n• Primary area: 30-60 minutes\n• Extended area: 60-90 minutes\n• Major disasters: Immediate dispatch\n\n📍 Our headquarters:\n123 Main Street, Kalispell, MT 59901\n\n📞 Check your location: 406-123-4567\n\nWhere are you located?";
  }
  
  // Handle credentials and certifications
  if (lowerMessage.includes('licensed') || lowerMessage.includes('certified') || lowerMessage.includes('qualified') || lowerMessage.includes('training') || lowerMessage.includes('credentials')) {
    return "🏆 Allied 24/7 Restoration - Fully Qualified:\n\n📋 Licenses & Certifications:\n• Montana State Contractor License #12345\n• IICRC Certified (Water, Fire, Mold)\n• EPA Lead-Safe Certified\n• OSHA Compliant\n\n🎓 Professional Certifications:\n• WRT - Water Damage Restoration\n• ASD - Applied Structural Drying\n• FSRT - Fire & Smoke Restoration\n• AMRT - Applied Microbial Remediation\n• HST - Health & Safety Technician\n\n🛡️ Insurance & Protection:\n• General Liability Insurance\n• Workers' Compensation\n• Auto Insurance\n• Pollution Liability\n\n✅ Why This Matters:\n• Legal compliance\n• Quality assurance\n• Insurance acceptance\n• Professional standards\n\n📞 Verify our credentials: 406-123-4567";
  }
  
  // Handle equipment and technology
  if (lowerMessage.includes('equipment') || lowerMessage.includes('tools') || lowerMessage.includes('technology') || lowerMessage.includes('machines')) {
    return "🔧 Allied 24/7 Restoration - State-of-the-Art Equipment:\n\n💧 Water Damage Equipment:\n• Truck-mounted water extractors\n• Industrial dehumidifiers (400+ CFM)\n• High-velocity air movers\n• Thermal imaging cameras\n• Moisture detection meters\n• Injectidry drying systems\n\n🔥 Fire Damage Equipment:\n• Ozone generators\n• Thermal foggers\n• HEPA air scrubbers\n• Soda blasting equipment\n• Content cleaning chambers\n\n🦠 Mold Remediation Equipment:\n• Negative air machines\n• Air scrubbers with HEPA filters\n• Personal protective equipment\n• Containment materials\n• Antimicrobial sprayers\n\n🏗️ Reconstruction Tools:\n• Professional carpentry tools\n• Power tools & saws\n• Measuring & layout tools\n• Safety equipment\n\n📈 Monitoring Technology:\n• Daily moisture readings\n• Progress documentation\n• Photo/video documentation\n• Digital reporting\n\n📞 Ask about our equipment: 406-123-4567";
  }
  
  // Handle reviews and reputation
  if (lowerMessage.includes('reviews') || lowerMessage.includes('testimonials') || lowerMessage.includes('rating') || lowerMessage.includes('reputation')) {
    return "⭐ Allied 24/7 Restoration - Customer Reviews:\n\n🏆 Overall Rating: 4.8/5 Stars\n\n📱 Review Platforms:\n• Google Reviews: 4.9/5 (150+ reviews)\n• Facebook: 4.8/5 (100+ reviews)\n• Angie's List: A Rating\n• Better Business Bureau: A+\n\n💬 What Customers Say:\n\"Fast response time!\" - Sarah K.\n\"Professional and thorough!\" - Mike R.\n\"Handled insurance perfectly!\" - Jennifer L.\n\"Saved my home from water damage!\" - David M.\n\n🎯 Our Reputation:\n• 98% customer satisfaction\n• 5+ year average customer relationship\n• 50% repeat customer rate\n• Preferred vendor for insurance companies\n\n🌐 Read reviews: www.alliedrestoration.com/reviews\n\n📞 Experience our service: 406-123-4567";
  }
  
  // Handle guarantees and warranties
  if (lowerMessage.includes('guarantee') || lowerMessage.includes('warranty') || lowerMessage.includes('satisfaction') || lowerMessage.includes('promise')) {
    return "✅ Allied 24/7 Restoration - Our Guarantees:\n\n🎯 100% Satisfaction Guarantee:\n• We stand behind all our work\n• Free rework if not satisfied\n• Customer approval required\n\n🛡️ Workmanship Warranty:\n• 1-year warranty on all services\n• Covers defects in workmanship\n• Materials manufacturer warranties\n• Transferable to new owners\n\n📋 Quality Promises:\n• Licensed & insured technicians\n• IICRC certified professionals\n• Quality materials & equipment\n• Building code compliance\n• Proper documentation\n\n🏢 Insurance Guarantee:\n• Proper claim documentation\n• Maximize your coverage\n• Transparent pricing\n• No surprise costs\n\n📞 Questions about our guarantees?\nCall: 406-123-4567\n\nYour satisfaction is our priority!";
  }
  
  // Handle specific scenarios
  if (lowerMessage.includes('commercial') || lowerMessage.includes('business') || lowerMessage.includes('office') || lowerMessage.includes('store')) {
    return "🏢 Allied 24/7 Restoration - Commercial Services:\n\n🏭 Commercial Properties We Serve:\n• Office buildings • Retail stores\n• Hotels & motels • Restaurants\n• Industrial facilities • Warehouses\n• Schools & daycares • Medical offices\n\n⚡ Commercial Emergency Response:\n• 24/7 emergency service\n• Priority for business clients\n• Minimize business interruption\n• After-hours service available\n\n📋 Commercial Services:\n• Water damage restoration\n• Fire damage cleanup\n• Mold remediation\n• Complete reconstruction\n• Contents restoration\n• Document drying\n• Electronics restoration\n\n💼 Business Benefits:\n• Detailed documentation\n• Insurance claim assistance\n• Project management\n• Minimal disruption\n• Quality assurance\n\n📞 Commercial emergency: 406-123-4567\n\nWhat type of business do you have?";
  }
  if (lowerMessage.includes('residential') || lowerMessage.includes('home') || lowerMessage.includes('house') || lowerMessage.includes('apartment')) {
    return "🏠 Allied 24/7 Restoration - Residential Experts:\n\n🏡 Homes We Serve:\n• Single-family homes • Apartments\n• Condos • Townhouses • Mobile homes\n• Vacation homes • Rental properties\n\n❤️ Compassionate Home Restoration:\n• Understanding family stress\n• Protect your belongings\n• Safe for children & pets\n• Respectful, clean work\n• Clear communication\n\n🛡️ Home Protection Services:\n• Emergency board-up\n• Content pack-out & storage\n• Personal property cleaning\n• Secure storage facilities\n• Complete home restoration\n\n👨‍👩‍👧‍👦 Family-Friendly Approach:\n• Background-checked technicians\n• Professional, uniformed staff\n• Clean work areas\n• Daily progress updates\n• Thorough cleanup\n\n📞 Home emergency: 406-123-4567\n\nWe'll treat your home like our own!";
  }
  
  // Handle emergency specific information
  if (lowerMessage.includes('24/7') || lowerMessage.includes('after hours') || lowerMessage.includes('weekend') || lowerMessage.includes('holiday')) {
    return "🚨 Allied 24/7 Restoration - TRUE 24/7 Service:\n\n⏰ Always Available:\n• 24 hours a day, 7 days a week\n• 365 days a year (holidays included)\n• Nights, weekends, holidays - NO extra charge\n• Real people answer - no answering service\n\n🚗 Emergency Dispatch:\n• Technicians on-call 24/7\n• Fully stocked trucks ready\n• 30-60 minute response time\n• Emergency equipment on board\n\n📞 Emergency Hotline: 406-123-4567\n\n⚡ What Constitutes an Emergency:\n• Active water leaks or flooding\n• Fire damage (even small fires)\n• Storm damage\n• Sewage backups\n• Major mold discoveries\n• Structural damage\n\n🏠 Don't wait - call immediately!\nWe prevent further damage and save you money.";
  }
  
  // Handle website and online presence
  if (lowerMessage.includes('online') || lowerMessage.includes('internet') || lowerMessage.includes('social media') || lowerMessage.includes('facebook') || lowerMessage.includes('google')) {
    return "🌐 Allied 24/7 Restoration - Online Presence:\n\n🌐 Official Website: www.alliedrestoration.com\n\n📱 Social Media:\n• Facebook: /AlliedRestorationMT\n• Google: Allied 24/7 Restoration\n• Instagram: @AlliedRestorationMT\n• LinkedIn: Allied 24/7 Restoration\n\n📋 Website Features:\n• Service descriptions\n• Photo gallery of projects\n• Customer testimonials\n• Emergency contact form\n• Free estimate request\n• Insurance information\n• Restoration process guide\n\n📞 Online to Phone:\nCall: 406-123-4567\nEmail: info@alliedrestoration.com\n\n💻 Need help with our website?\nWe're here to assist online or by phone!";
  }
  
  // Handle general help requests
  if (lowerMessage.includes('help') || lowerMessage.includes('assist') || lowerMessage.includes('support')) {
    return "🤝 Allied 24/7 Restoration - Here to Help!\n\n🚨 Emergency Help:\n• Active water damage? Call 406-123-4567 NOW\n• Fire damage? We're on our way!\n• Mold discovered? Emergency response available\n\n📋 Information Help:\n• Service details & pricing\n• Insurance claim assistance\n• Free estimates & consultations\n• Restoration process questions\n\n🏠 Property Types:\n• Residential homes • Commercial buildings\n• Rental properties • Vacation homes\n\n📞 How We Can Help:\n• 24/7 emergency response\n• Free consultations\n• Insurance claim assistance\n• Project management\n• Quality restoration work\n\n🗣️ I'm here to answer ANY questions about:\n• Our services & expertise\n• Emergency procedures\n• Insurance processes\n• Pricing & estimates\n• Our company & team\n\nWhat specific help do you need?";
  }
  
  // Handle availability questions
  if (lowerMessage.includes('can you') || lowerMessage.includes('do you') || lowerMessage.includes('are you able')) {
    return "✅ Allied 24/7 Restoration - Capabilities:\n\n🔧 Yes, We Can Help With:\n• Water damage restoration (any size)\n• Fire damage cleanup & repair\n• Mold remediation (testing to removal)\n• Complete reconstruction projects\n• Emergency board-up services\n• Contents cleaning & restoration\n• Biohazard cleanup\n• Insurance claim assistance\n\n🚨 Emergency Capabilities:\n• 24/7 emergency response\n• 30-60 minute arrival time\n• Fully equipped service trucks\n• Certified technicians\n\n📞 Availability:\n• Emergencies: 24/7/365\n• Consultations: Mon-Fri 8am-6pm\n• Estimates: Free, flexible scheduling\n\n🏢 We Work With:\n• All insurance companies\n• Property managers\n• Homeowners & businesses\n• Realtors & property managers\n\n🎯 What do you need help with? We're ready!";
  }
  
  // Handle negative situations or problems
  if (lowerMessage.includes('problem') || lowerMessage.includes('issue') || lowerMessage.includes('wrong') || lowerMessage.includes('broken') || lowerMessage.includes('damage')) {
    return "😔 Allied 24/7 Restoration - Problem Solvers:\n\n🏠 Property Damage Problems We Solve:\n• Water damage & flooding\n• Fire & smoke damage\n• Mold growth & infestation\n• Storm damage\n• Sewage backups\n• Structural issues\n\n🚨 Emergency Problems:\n• Active leaks or flooding\n• Fire damage (any size)\n• Roof damage or collapse\n• Broken pipes or water lines\n• Electrical hazards from water\n\n📋 Our Problem-Solving Process:\n1. Immediate emergency response\n2. Damage assessment & documentation\n3. Stabilization & prevention\n4. Complete restoration\n5. Final inspection & approval\n\n🤝 We understand property damage is stressful.\nOur compassionate team handles everything!\n\n📞 Describe your problem: 406-123-4567\n\nWhat specific problem are you facing?";
  }
  
  // Handle confirmation and agreement
  if (lowerMessage.includes('yes') || lowerMessage.includes('yeah') || lowerMessage.includes('ok') || lowerMessage.includes('sure') || lowerMessage.includes('sounds good')) {
    return "👍 Great! Allied 24/7 Restoration is ready to help!\n\n📞 Next Steps:\n• Emergency? Call 406-123-4567 immediately\n• Non-emergency? Schedule a free estimate\n• Questions? I'm here to help!\n\n🏠 What would you like to do next?\n• Get emergency assistance\n• Schedule an estimate\n• Ask more questions\n• Learn about specific services\n\n🚨 Remember: 24/7 emergency response available!\n\nHow can I assist you further?";
  }
  if (lowerMessage.includes('no') || lowerMessage.includes('nope') || lowerMessage.includes('not interested') || lowerMessage.includes('don\'t need')) {
    return "👍 No problem! Allied 24/7 Restoration is here when you need us.\n\n📞 Save Our Information:\n• Emergency: 406-123-4567\n• Website: www.alliedrestoration.com\n• Email: info@alliedrestoration.com\n\n🏠 Keep Us In Mind For:\n• Future restoration needs\n• Insurance claim assistance\n• Property maintenance questions\n• Emergency preparedness\n\n🤝 Is there something else I can help you with?\nWe're happy to answer any questions about restoration, prevention, or our services!";
  }
  
  // Handle questions
  if (lowerMessage.includes('?') || lowerMessage.includes('what') || lowerMessage.includes('when') || lowerMessage.includes('where') || lowerMessage.includes('why') || lowerMessage.includes('how')) {
    return "❓ Allied 24/7 Restoration - Question Answered!\n\n🎯 I can answer questions about:\n• Our restoration services\n• Emergency procedures\n• Insurance claim process\n• Pricing and estimates\n• Our company history & team\n• Equipment and technology\n• Service areas and availability\n• Customer reviews and guarantees\n\n📞 Quick Answers Available:\nCall: 406-123-4567 (24/7)\nEmail: info@alliedrestoration.com\nWeb: www.alliedrestoration.com\n\n💬 What specific question can I answer for you?\nI'm here to provide detailed information about Allied 24/7 Restoration!";
  }
  
  // Default response for any other message
  return "🏢 Welcome to Allied 24/7 Restoration! 🏠\n\n📞 Your LOCAL Restoration Experts Since 2015\n\n🚨 24/7 Emergency Response Available!\nCall: 406-123-4567\n\n🔧 Services We Offer:\n• Water Damage Restoration\n• Fire Damage Cleanup\n• Mold Remediation\n• Complete Reconstruction\n• Emergency Board-up\n• Contents Cleaning\n\n📍 Location: 123 Main Street, Kalispell, MT\n🌐 Website: www.alliedrestoration.com\n📧 Email: info@alliedrestoration.com\n\n💬 How can I help you today?\nWhether you need emergency assistance or just have questions, I'm here to help!";
}

export async function responseNode(state: ChatNodeState): Promise<ChatNodeState> {
  const intent = state.intent || 'general';
  const lastMessage = state.messages[state.messages.length - 1];
  
  // Generate contextual response based on message content
  const contextualMessage = generateContextualResponse(
    lastMessage?.content || '',
    intent,
    (state.context?.entities as Record<string, unknown>) || {}
  );
  
  const responseConfig = {
    message: contextualMessage,
    nextAction: intent === 'emergency' || intent === 'contact' ? 'escalate' : 
               intent === 'service' || intent === 'quote' ? 'collect_info' : 'continue',
    shouldEscalate: intent === 'emergency' || intent === 'contact',
    collectInfo: intent === 'emergency' ? ['phone', 'name', 'location'] :
                intent === 'contact' ? ['name', 'phone'] :
                intent === 'service' ? ['serviceType'] :
                intent === 'quote' ? ['serviceType', 'description'] : undefined
  };
  
  const responseMessage: ResponseResult = {
    ...responseConfig,
    message: personalizeResponse(responseConfig.message, state.userInfo, state.context)
  };
  
  const assistantMessage = {
    id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    role: 'assistant' as const,
    content: responseMessage.message,
    timestamp: new Date(),
    metadata: {
      intent,
      nextAction: responseMessage.nextAction,
      shouldEscalate: responseMessage.shouldEscalate,
      collectInfo: responseMessage.collectInfo
    }
  };
  
  return {
    ...state,
    messages: [...state.messages, assistantMessage],
    nextAction: responseMessage.nextAction,
    context: {
      ...state.context,
      shouldEscalate: responseMessage.shouldEscalate,
      collectInfo: responseMessage.collectInfo
    }
  };
}

function personalizeResponse(
  message: string, 
  userInfo?: unknown, 
  context?: unknown
): string {
  let personalized = message;
  
  const user = userInfo as { name?: string } | undefined;
  const ctx = context as { entities?: { serviceType?: string } } | undefined;
  
  if (user?.name) {
    personalized = personalized.replace(/I understand/g, `Hi ${user.name}, I understand`);
  }
  
  if (ctx?.entities?.serviceType) {
    personalized = personalized.replace(
      'our restoration services',
      `our ${ctx.entities.serviceType} restoration services`
    );
  }
  
  return personalized;
}

export async function escalationNode(state: ChatNodeState): Promise<ChatNodeState> {
  const entities = (state.context as { entities?: { serviceType?: string } })?.entities;
  
  const escalationMessage = {
    id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    role: 'assistant' as const,
    content: "I'm escalating your request to our emergency response team. They will contact you immediately. Our response time is typically under 30 minutes for emergencies.",
    timestamp: new Date(),
    metadata: {
      escalated: true,
      urgency: entities?.serviceType ? 'high' : 'medium'
    }
  };
  
  return {
    ...state,
    messages: [...state.messages, escalationMessage],
    nextAction: 'escalated'
  };
}
