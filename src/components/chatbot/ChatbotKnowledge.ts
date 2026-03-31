// Intent-based knowledge system for Iron Vault Digital chatbot

export type Intent = {
  id: string;
  patterns: string[];
  response: string;
};

export const GREETING_MESSAGE =
  "Hey! 👊 Welcome to Iron Vault Digital. What brings you here today?";

export const QUICK_REPLIES = [
  { label: "🌐 I need a website", intent: "website" },
  { label: "📈 I want more leads", intent: "leads" },
  { label: "🔍 Just browsing", intent: "browsing" },
  { label: "🕵️ I'm a competitor", intent: "competitor" },
] as const;

const BOOKING_CTA = "I'd suggest booking a free 15-min call with Alex — no pitch, just honest advice 👉 [Book a Call](/#contact)";

// --- Conversational flows for website & leads ---

export type FlowStep = {
  botMessage: string;
  options?: { label: string; nextStep: string }[];
};

export type ConversationFlow = Record<string, FlowStep>;

export const WEBSITE_FLOW: ConversationFlow = {
  start: {
    botMessage: "Nice one! What kind of business are you in?",
    options: [
      { label: "🔧 Tradie / Trade business", nextStep: "tradie" },
      { label: "🏪 Retail or Hospitality", nextStep: "retail" },
      { label: "💼 Professional Services", nextStep: "services" },
      { label: "🤷 Something else", nextStep: "other" },
    ],
  },
  tradie: {
    botMessage: "Legend. Do you have a website already or starting from scratch?",
    options: [
      { label: "Got one — it needs work", nextStep: "has_site" },
      { label: "Starting fresh", nextStep: "no_site" },
    ],
  },
  retail: {
    botMessage: "Cool! Do you have a website already or need one built?",
    options: [
      { label: "Got one — it needs work", nextStep: "has_site" },
      { label: "Starting fresh", nextStep: "no_site" },
    ],
  },
  services: {
    botMessage: "Nice. Do you have a current site or starting from scratch?",
    options: [
      { label: "Got one — it needs work", nextStep: "has_site" },
      { label: "Starting fresh", nextStep: "no_site" },
    ],
  },
  other: {
    botMessage: "No worries! Do you have a website already or need a new one?",
    options: [
      { label: "Got one — it needs work", nextStep: "has_site" },
      { label: "Starting fresh", nextStep: "no_site" },
    ],
  },
  has_site: {
    botMessage: "Got it — what's the main thing you want to fix?",
    options: [
      { label: "Looks outdated", nextStep: "end_redesign" },
      { label: "Not getting enquiries from it", nextStep: "end_conversions" },
      { label: "Doesn't show up on Google", nextStep: "end_seo" },
    ],
  },
  no_site: {
    botMessage: "Sweet — what's most important to you?",
    options: [
      { label: "Just need something professional up", nextStep: "end_launch" },
      { label: "Want it to rank on Google too", nextStep: "end_scale" },
      { label: "Full custom build with all the bells", nextStep: "end_dominate" },
    ],
  },
  end_redesign: {
    botMessage:
      "A refresh can make a huge difference. Our Launch package ($1,999) covers a full redesign — mobile optimised, fast, with proper contact forms. If you want SEO baked in too, Scale ($3,499) is the go.\n\n" + BOOKING_CTA,
  },
  end_conversions: {
    botMessage:
      "That's super common — usually it's a mix of layout, messaging, and calls-to-action. We build sites specifically to convert visitors into enquiries.\n\nOur Scale package ($3,499) includes conversion-focused design plus SEO so you're getting traffic too.\n\n" + BOOKING_CTA,
  },
  end_seo: {
    botMessage:
      "SEO is a game-changer for tradies. Our Scale package ($3,499) includes proper SEO setup — technical fixes, local SEO, and content strategy.\n\n" + BOOKING_CTA,
  },
  end_launch: {
    botMessage:
      "Our Launch package ($1,999) is perfect for that — professional site, mobile optimised, contact forms, and Google-ready. Usually done in 2-3 weeks.\n\n" + BOOKING_CTA,
  },
  end_scale: {
    botMessage:
      "Smart move! Our Scale package ($3,499) includes the full website plus SEO setup, blog, and more pages so you start ranking on Google from day one.\n\n" + BOOKING_CTA,
  },
  end_dominate: {
    botMessage:
      "Love the ambition! Our Dominate package ($6,500+) is the full custom build — advanced SEO, integrations, the lot. 4-6 week turnaround.\n\n" + BOOKING_CTA,
  },
};

export const LEADS_FLOW: ConversationFlow = {
  start: {
    botMessage: "Good stuff! Where are most of your customers coming from right now?",
    options: [
      { label: "Word of mouth mostly", nextStep: "word_of_mouth" },
      { label: "Running some ads already", nextStep: "running_ads" },
      { label: "Social media", nextStep: "social" },
      { label: "Honestly not sure", nextStep: "not_sure" },
    ],
  },
  word_of_mouth: {
    botMessage: "That's a solid foundation! What's the main reason you want to grow beyond referrals?",
    options: [
      { label: "Want more consistent work", nextStep: "end_consistent" },
      { label: "Ready to scale up / hire", nextStep: "end_scale" },
      { label: "Quiet period — need jobs now", nextStep: "end_urgent" },
    ],
  },
  running_ads: {
    botMessage: "How are they going for you?",
    options: [
      { label: "Getting leads but want more", nextStep: "end_more_leads" },
      { label: "Spending money but no real results", nextStep: "end_not_working" },
      { label: "Not sure if they're working", nextStep: "end_unsure" },
    ],
  },
  social: {
    botMessage: "Nice! Is it bringing in actual paying jobs or more just brand awareness?",
    options: [
      { label: "Getting some jobs from it", nextStep: "end_social_working" },
      { label: "Mostly just likes, not leads", nextStep: "end_social_not_working" },
    ],
  },
  not_sure: {
    botMessage: "No worries — that's actually really common. What would help you most right now?",
    options: [
      { label: "More phone calls / enquiries", nextStep: "end_consistent" },
      { label: "A proper online presence", nextStep: "end_presence" },
    ],
  },
  end_consistent: {
    botMessage:
      "That's exactly what paid ads do well — consistent, predictable leads. Google Ads especially for tradies. Our Tier 1 retainer ($700/mo) covers setup and daily management. Ad spend is separate — paid directly to Google, not us. $30/day is a solid starting point.\n\n" + BOOKING_CTA,
  },
  end_scale: {
    botMessage:
      "When you're ready to scale, you want both Google and Meta working together. Our Tier 2 Scale retainer ($1,500/mo) covers both platforms plus landing pages and reporting.\n\n" + BOOKING_CTA,
  },
  end_urgent: {
    botMessage:
      "We can get ads live within a week. Google Ads for tradies works fast — especially for urgent services. Tier 1 retainer ($700/mo) plus ad spend (recommend $30/day). Results start compounding after 30 days but you'll see enquiries coming in sooner.\n\n" + BOOKING_CTA,
  },
  end_more_leads: {
    botMessage:
      "Good position to be in! Usually it's about optimising what's already working and adding another platform. Our Tier 2 ($1,500/mo) covers Google + Meta with proper landing pages.\n\nWant Alex to take a look at your current setup? Free 15-min call: " + BOOKING_LINK,
  },
  end_not_working: {
    botMessage:
      "That's frustrating but fixable. Usually it's the targeting, the ad copy, or the landing page — sometimes all three. We read the numbers daily and pivot fast when something's not working.\n\nWant Alex to take a quick look at what's going on? Free 15-min call, no strings: " + BOOKING_LINK,
  },
  end_unsure: {
    botMessage:
      "If you're not sure, they're probably not working as well as they could be. We set up proper tracking and reporting so you know exactly what's coming from where.\n\nHappy to do a free audit on a quick call with Alex: " + BOOKING_LINK,
  },
  end_social_working: {
    botMessage:
      "That's great! Adding Google Ads on top would give you two channels bringing in work. Our Tier 1 retainer ($700/mo) can get that running alongside your social.\n\nWant to chat about it? Free 15-min call: " + BOOKING_LINK,
  },
  end_social_not_working: {
    botMessage:
      "Likes are nice but jobs pay the bills! Meta Ads (paid Facebook/Insta) are different from organic posting — they target people actually looking for your service. Our Tier 1 retainer ($700/mo) covers setup and management.\n\nWant to see what paid social could do for you? Free 15-min call: " + BOOKING_LINK,
  },
  end_presence: {
    botMessage:
      "A proper website plus Google Ads is the combo that works best for tradies. We can sort both — websites from $1,999 and ad retainers from $700/mo.\n\nWant to map out a plan? Free 15-min call with Alex: " + BOOKING_LINK,
  },
};

// --- Standard intents for typed questions ---

const INTENTS: Intent[] = [
  {
    id: "browsing",
    patterns: ["browsing", "just looking", "having a look", "checking out"],
    response: "No worries at all — have a look around! If anything catches your eye or you've got a question, just ask. I'm here.",
  },
  {
    id: "competitor",
    patterns: ["competitor", "competition", "spy", "snooping"],
    response: "Ha! No stress — good on ya for doing your research. We're not going anywhere. If you ever want to compare notes over a beer, you know where to find us. 🍺",
  },
  {
    id: "pricing_general",
    patterns: ["price", "pricing", "cost", "how much", "budget", "rate", "quote", "all up", "total cost", "investment"],
    response:
      "Depends on what you need! Websites start at $1,999. Ad management retainers start at $700/mo plus your ad spend on top — paid directly to Google or Meta, not us. We recommend around $30/day as a starting point but it really depends on your situation.\n\nHappy to give you a more specific number on a quick call: " + BOOKING_LINK,
  },
  {
    id: "ads",
    patterns: ["ads", "google ads", "meta ads", "paid ads", "ppc", "campaign", "facebook ads", "instagram ads", "advertising"],
    response:
      "We manage Google Ads and Meta campaigns. Retainers start at $700/mo for one platform, $1,500/mo for both. Ad spend is always separate — your money goes straight to Google or Meta.\n\n$30/day is a solid starting point. Results compound after the first 30 days.",
  },
  {
    id: "ad_spend",
    patterns: ["ad spend", "how much to spend", "ad budget", "spend on ads", "daily budget"],
    response:
      "Ad spend is paid directly to Google or Meta, never through us. $30/day ($900/mo) is a solid starting point — enough for the algorithm to learn and optimise. Results depend on heaps of factors though.",
  },
  {
    id: "own_ads",
    patterns: ["run my own ads", "running ads myself", "doing my own ads", "manage my own"],
    response: "How are they going for you? Are you getting leads from them or more just spending money?",
  },
  {
    id: "seo",
    patterns: ["seo", "search engine", "ranking", "organic", "google ranking"],
    response: "SEO is baked into our Scale ($3,499) and Dominate ($6,500+) website packages. For ongoing SEO, it's in our Tier 3 Dominate retainer at $2,500/mo. We focus on stuff that moves the needle — technical fixes, content, and local SEO.",
  },
  {
    id: "timeline",
    patterns: ["timeline", "how long", "turnaround", "delivery", "when", "time frame", "how fast", "how quickly"],
    response: "Basic website: 2-3 weeks. Full custom build: 4-6 weeks. Ads campaigns: live within 1 week of onboarding.",
  },
  {
    id: "contact",
    patterns: ["contact", "email", "phone", "reach", "talk", "call", "get in touch", "speak"],
    response: "Best way is to book a free 15-min call with Alex — no pitch, just straight advice: " + BOOKING_LINK + "\n\nOr email alex@ironvaultdigital.com.au",
  },
  {
    id: "location",
    patterns: ["location", "where", "based", "kalgoorlie", "perth", "wa", "western australia"],
    response: "We're based in Kalgoorlie, WA but work with clients across all of Australia. Everything's done remotely.",
  },
  {
    id: "about",
    patterns: ["who are you", "about you", "tell me about", "what do you do", "what is iron vault", "who is alex", "founder"],
    response: "Iron Vault Digital is run by Alex Stuart, based in Kalgoorlie, WA. We specialise in websites, SEO, Google Ads, Meta Ads, and lead generation — mainly for Aussie tradies and small businesses. No fluff, just results.",
  },
  {
    id: "services",
    patterns: ["service", "offer", "what can you", "help with", "what do you offer"],
    response: "We do websites, SEO, Google Ads, Meta Ads, and lead generation. Basically everything a tradie or small business needs to get found online. What are you after specifically?",
  },
  {
    id: "hosting",
    patterns: ["hosting", "maintain", "support", "ongoing", "care plan", "updates", "security"],
    response: "Yep — we offer a $200/mo care plan that covers hosting, updates, and security. Set and forget.",
  },
  {
    id: "case_study",
    patterns: ["case study", "portfolio", "examples", "work", "clients", "results", "proof", "arro"],
    response: "Check out ARRO Weld & Rubber Lining (arroweld.com.au) — we built their full digital presence from scratch. More case studies on our work page.",
  },
  {
    id: "not_fit",
    patterns: ["too expensive", "can't afford", "under 500", "no budget", "tight budget"],
    response: "Our retainers start at $700/mo — but most tradies who invest properly see a solid return in new jobs pretty quickly. Would you be open to stretching the budget if the results were there?",
  },
  {
    id: "guarantee",
    patterns: ["guarantee", "guaranteed", "promise", "overnight", "instant results", "quick results"],
    response: "Good digital marketing takes 60-90 days to build real momentum. Anyone promising overnight results is pulling your leg. What we can promise is honest work and we pivot fast when something's not working.",
  },
  {
    id: "booking",
    patterns: ["book", "meeting", "appointment", "schedule", "free call", "chat", "consultation"],
    response: "Easy — Alex does free 15-min calls. No pitch, just straight advice: " + BOOKING_LINK,
  },
  {
    id: "how_manage_ads",
    patterns: ["how do you manage", "how do you run", "ad management", "your process", "how does it work"],
    response: "We read the numbers daily and know when an ad has run its course, when the landing page needs adjusting, or when the offer is weak. We pivot before budget gets wasted.",
  },
  {
    id: "deposit",
    patterns: ["deposit", "payment", "how to pay", "payment plan", "milestone"],
    response: "$500 deposit to start any website project, then invoiced in milestones. Retainers are monthly billing. Simple.",
  },
  {
    id: "gst",
    patterns: ["gst", "tax", "abn"],
    response: "All prices are + GST. ABN: 17 636 500 418.",
  },
  {
    id: "thanks",
    patterns: ["thanks", "thank you", "cheers", "ta", "appreciate"],
    response: "No worries at all! If you think of anything else, just ask. 👊",
  },
  {
    id: "hello",
    patterns: ["hello", "hi", "hey", "g'day", "gday", "yo", "sup"],
    response: "Hey! 👊 What can I help you with today?",
  },
];

export function matchIntent(input: string): string | null {
  const lower = input.toLowerCase().trim();

  for (const intent of INTENTS) {
    if (lower === intent.id) return intent.response;
  }

  let bestMatch: Intent | null = null;
  let bestScore = 0;

  for (const intent of INTENTS) {
    let score = 0;
    for (const pattern of intent.patterns) {
      if (lower.includes(pattern)) {
        score += pattern.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = intent;
    }
  }

  if (bestMatch && bestScore > 0) return bestMatch.response;
  return null;
}

export const FALLBACK_RESPONSE =
  "I'd have to check that with Alex — easiest is a quick call. No pitch, just straight advice: " + BOOKING_LINK;

export const FALLBACK_WITH_FORM =
  "I'd love to help with that! Let me grab your details so Alex can follow up personally.";
