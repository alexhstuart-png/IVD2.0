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

const BOOKING_LINK = "https://calendar.app.google/UchY2WA1N45roorh9";

const INTENTS: Intent[] = [
  {
    id: "website",
    patterns: ["website", "site", "web design", "web page", "build a site", "need a website", "new website", "redesign"],
    response:
      "Nice — websites are our bread and butter. We've got three tiers:\n\n🔹 **Launch** — $1,999. Professional site, mobile optimised, contact forms, Google-ready.\n🔹 **Scale** — $3,499. Everything in Launch plus SEO setup, blog, more pages.\n🔹 **Dominate** — $6,500+. Full custom build, advanced SEO, integrations.\n\nAll include a $200/mo care plan option for hosting, updates, and security. $500 deposit to kick things off.\n\nWant to chat about which one fits? Alex does free 15-min calls — no pitch, just straight advice: " + BOOKING_LINK,
  },
  {
    id: "leads",
    patterns: ["leads", "more leads", "lead gen", "customers", "more work", "get jobs", "more jobs", "grow", "growth", "scale my business"],
    response:
      "That's what we're all about. We run Google Ads and Meta Ads for tradies and small businesses — the kind of campaigns that actually bring in phone calls and enquiries, not just clicks.\n\nRetainers start at $700/mo for one platform, and ad spend is separate — paid directly to Google or Meta, not us. We recommend about $30/day as a starting point.\n\nWant to talk specifics? Book a free 15-min call with Alex: " + BOOKING_LINK,
  },
  {
    id: "browsing",
    patterns: ["browsing", "just looking", "having a look", "checking out"],
    response:
      "No worries at all — have a look around! If anything catches your eye or you've got a question, just ask. I'm here.",
  },
  {
    id: "competitor",
    patterns: ["competitor", "competition", "spy", "snooping"],
    response:
      "Ha! No stress — good on ya for doing your research. We're not going anywhere. If you ever want to compare notes over a beer, you know where to find us. 🍺",
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
      "We manage Google Ads and Meta (Facebook/Instagram) campaigns. Retainers:\n\n🔹 **Tier 1 Launch** — $700/mo. One platform, setup and management.\n🔹 **Tier 2 Scale** — $1,500/mo. Google + Meta, landing pages, reporting.\n🔹 **Tier 3 Dominate** — $2,500/mo. Full digital marketing, ads, SEO, content.\n\nAll prices + GST. Ad spend is always separate — your money goes straight to Google or Meta.\n\nWe've found $30/day is a solid starting point for most tradies. Results compound after the first 30 days.",
  },
  {
    id: "ad_spend",
    patterns: ["ad spend", "how much to spend", "ad budget", "spend on ads", "daily budget"],
    response:
      "Ad spend is always on top of the retainer — paid directly to Google or Meta, never through us. You can spend as little or as much as you want. We've found $30/day ($900/mo) is a solid starting point — enough for the algorithm to gather data and optimise properly. Results depend on heaps of factors though — happy to give you a realistic picture on a quick call: " + BOOKING_LINK,
  },
  {
    id: "own_ads",
    patterns: ["run my own ads", "running ads myself", "doing my own ads", "manage my own"],
    response:
      "How are they going for you? Are you getting leads from them or more just spending money? If you're not seeing a solid return, might be worth a quick chat to see what's going on: " + BOOKING_LINK,
  },
  {
    id: "seo",
    patterns: ["seo", "search engine", "ranking", "organic", "google ranking"],
    response:
      "SEO is baked into our Scale ($3,499) and Dominate ($6,500+) website packages. For ongoing SEO, it's included in our Tier 3 Dominate retainer at $2,500/mo. We focus on stuff that actually moves the needle — technical fixes, content, and local SEO for tradies. No vanity metrics.",
  },
  {
    id: "timeline",
    patterns: ["timeline", "how long", "turnaround", "delivery", "when", "time frame", "how fast", "how quickly"],
    response:
      "Basic website: 2-3 weeks. Full custom build: 4-6 weeks. Ads campaigns: live within 1 week of onboarding. We'll give you a clear timeline before any work begins.",
  },
  {
    id: "contact",
    patterns: ["contact", "email", "phone", "reach", "talk", "call", "get in touch", "speak"],
    response:
      "Best way is to book a free 15-min call with Alex — no pitch, just straight advice: " + BOOKING_LINK + "\n\nOr shoot an email to alex@ironvaultdigital.com.au",
  },
  {
    id: "location",
    patterns: ["location", "where", "based", "kalgoorlie", "perth", "wa", "western australia"],
    response:
      "We're based in Kalgoorlie, WA but work with clients across all of Australia. Everything's done remotely so location's never a barrier.",
  },
  {
    id: "about",
    patterns: ["who are you", "about you", "tell me about", "what do you do", "what is iron vault", "who is alex", "founder"],
    response:
      "Iron Vault Digital is a one-person agency run by Alex Stuart, based in Kalgoorlie, WA. We specialise in websites, SEO, Google Ads, Meta Ads, and lead generation — mainly for Aussie tradies and small businesses. No fluff, just results.",
  },
  {
    id: "services",
    patterns: ["service", "offer", "what can you", "help with", "what do you offer"],
    response:
      "We do websites, SEO, Google Ads, Meta Ads, and lead generation. Basically everything a tradie or small business needs to get found online and turn clicks into jobs. What are you after specifically?",
  },
  {
    id: "hosting",
    patterns: ["hosting", "maintain", "support", "ongoing", "care plan", "updates", "security"],
    response:
      "Yep — we offer a $200/mo care plan that covers hosting, updates, and security so your site stays fast and secure after launch. Set and forget.",
  },
  {
    id: "case_study",
    patterns: ["case study", "portfolio", "examples", "work", "clients", "results", "proof", "arro"],
    response:
      "Check out ARRO Weld & Rubber Lining (arroweld.com.au) — we built their full digital presence from scratch. Website, Google Business Profile, email setup, LinkedIn. They're in the mining/industrial sector. More case studies on our work page.",
  },
  {
    id: "not_fit",
    patterns: ["too expensive", "can't afford", "under 500", "no budget", "tight budget"],
    response:
      "Our retainers start at $700/mo — but most tradies who invest properly see a solid return in new jobs pretty quickly. Would you be open to stretching the budget if the results were there? If not, no stress — want me to send some free info on what's working for tradies in WA?",
  },
  {
    id: "guarantee",
    patterns: ["guarantee", "guaranteed", "promise", "overnight", "instant results", "quick results"],
    response:
      "I'll be straight with you — good digital marketing takes 60-90 days to build real momentum. Anyone promising overnight results is pulling your leg. What we can promise is honest work, daily ad monitoring, and we pivot fast when something's not working.",
  },
  {
    id: "booking",
    patterns: ["book", "meeting", "appointment", "schedule", "free call", "chat", "consultation"],
    response:
      "Easy — Alex does free 15-min calls. No pitch, just straight advice on what would work for your business: " + BOOKING_LINK,
  },
  {
    id: "how_manage_ads",
    patterns: ["how do you manage", "how do you run", "ad management", "your process", "how does it work"],
    response:
      "We have a proven system — we read the numbers daily and know when an ad has run its course, when the landing page needs adjusting, or when the offer is weak. We pivot before budget gets wasted. No set-and-forget here.",
  },
  {
    id: "deposit",
    patterns: ["deposit", "payment", "how to pay", "payment plan", "milestone"],
    response:
      "$500 deposit to start any website project, then the remainder is invoiced in milestones as work progresses. For retainers, it's monthly billing. Simple.",
  },
  {
    id: "gst",
    patterns: ["gst", "tax", "abn"],
    response:
      "All prices are + GST. Our ABN is 17 636 500 418. We'll always give you a clear invoice breakdown.",
  },
  {
    id: "thanks",
    patterns: ["thanks", "thank you", "cheers", "ta", "appreciate"],
    response:
      "No worries at all! If you think of anything else, just ask. 👊",
  },
  {
    id: "hello",
    patterns: ["hello", "hi", "hey", "g'day", "gday", "yo", "sup"],
    response:
      "Hey! 👊 What can I help you with today? Feel free to ask about websites, ads, pricing — whatever's on your mind.",
  },
];

export function matchIntent(input: string): string | null {
  const lower = input.toLowerCase().trim();

  // Direct button intent match
  for (const intent of INTENTS) {
    if (lower === intent.id) return intent.response;
  }

  // Pattern matching - score by number of keyword matches
  let bestMatch: Intent | null = null;
  let bestScore = 0;

  for (const intent of INTENTS) {
    let score = 0;
    for (const pattern of intent.patterns) {
      if (lower.includes(pattern)) {
        score += pattern.length; // longer matches score higher
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
