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

const BOOKING_CTA = "I'd suggest getting in touch so we can chat about what'll work best for you 👉 [Get in Touch](/#contact)";

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
      "A refresh can make a huge difference. We do full redesigns — mobile optimised, fast, with proper contact forms. We've got a few different packages depending on what you need.\n\n" + BOOKING_CTA,
  },
  end_conversions: {
    botMessage:
      "That's super common — usually it's a mix of layout, messaging, and calls-to-action. We build sites specifically to convert visitors into enquiries, with conversion-focused design plus SEO so you're getting traffic too.\n\n" + BOOKING_CTA,
  },
  end_seo: {
    botMessage:
      "SEO is a game-changer for tradies. We do proper SEO setup — technical fixes, local SEO, and content strategy. It's included in a couple of our packages.\n\n" + BOOKING_CTA,
  },
  end_launch: {
    botMessage:
      "We've got a package perfect for that — professional site, mobile optimised, contact forms, and Google-ready. Usually done in 2-3 weeks.\n\n" + BOOKING_CTA,
  },
  end_scale: {
    botMessage:
      "Smart move! We've got a package that includes the full website plus SEO setup, blog, and more pages so you start ranking on Google from day one.\n\n" + BOOKING_CTA,
  },
  end_dominate: {
    botMessage:
      "Love the ambition! Our top-tier package is the full custom build — advanced SEO, integrations, the lot. 4-6 week turnaround.\n\n" + BOOKING_CTA,
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
      "That's exactly what paid ads do well — consistent, predictable leads. Google Ads especially for tradies. We handle setup and daily management, and ad spend goes directly to Google — not us.\n\n" + BOOKING_CTA,
  },
  end_scale: {
    botMessage:
      "When you're ready to scale, you want both Google and Meta working together. We've got a package that covers both platforms plus landing pages and reporting.\n\n" + BOOKING_CTA,
  },
  end_urgent: {
    botMessage:
      "We can get ads live within a week. Google Ads for tradies works fast — especially for urgent services. Results start compounding after 30 days but you'll see enquiries coming in sooner.\n\n" + BOOKING_CTA,
  },
  end_more_leads: {
    botMessage:
      "Good position to be in! Usually it's about optimising what's already working and adding another platform. We can run Google + Meta together with proper landing pages.\n\n" + BOOKING_CTA,
  },
  end_not_working: {
    botMessage:
      "That's frustrating but fixable. Usually it's the targeting, the ad copy, or the landing page — sometimes all three. We read the numbers daily and pivot fast when something's not working.\n\n" + BOOKING_CTA,
  },
  end_unsure: {
    botMessage:
      "If you're not sure, they're probably not working as well as they could be. We set up proper tracking and reporting so you know exactly what's coming from where.\n\n" + BOOKING_CTA,
  },
  end_social_working: {
    botMessage:
      "That's great! Adding Google Ads on top would give you two channels bringing in work. We can get that running alongside your social.\n\n" + BOOKING_CTA,
  },
  end_social_not_working: {
    botMessage:
      "Likes are nice but jobs pay the bills! Meta Ads (paid Facebook/Insta) are different from organic posting — they target people actually looking for your service. We handle the full setup and management.\n\n" + BOOKING_CTA,
  },
  end_presence: {
    botMessage:
      "A proper website plus Google Ads is the combo that works best for tradies. We can sort both for you.\n\n" + BOOKING_CTA,
  },
};

export const COMPETITOR_FLOW: ConversationFlow = {
  start: {
    botMessage: "Ha! No stress at all — good on ya for doing your homework. So what's your angle in the digital space?",
    options: [
      { label: "Web design & dev", nextStep: "web_focus" },
      { label: "SEO / Ads / Lead gen", nextStep: "ads_focus" },
      { label: "Social media / Content", nextStep: "social_focus" },
      { label: "A bit of everything", nextStep: "generalist" },
    ],
  },
  web_focus: {
    botMessage: "Nice — always good to meet another builder. What kind of clients do you enjoy working with most?",
    options: [
      { label: "Tradies & local businesses", nextStep: "clients_local" },
      { label: "E-commerce / bigger brands", nextStep: "clients_ecom" },
      { label: "Honestly, whoever pays 😂", nextStep: "clients_anyone" },
    ],
  },
  ads_focus: {
    botMessage: "Solid — that's our bread and butter too. What platforms are you running most of your stuff on?",
    options: [
      { label: "Google Ads mainly", nextStep: "platform_google" },
      { label: "Meta / Social ads", nextStep: "platform_meta" },
      { label: "Bit of both", nextStep: "platform_both" },
    ],
  },
  social_focus: {
    botMessage: "Respect — social is a grind but when it clicks it really clicks. What kind of clients are you working with?",
    options: [
      { label: "Small local businesses", nextStep: "clients_local" },
      { label: "Hospitality / Lifestyle brands", nextStep: "clients_hospo" },
      { label: "Anyone who needs it", nextStep: "clients_anyone" },
    ],
  },
  generalist: {
    botMessage: "Yeah same here — wearing all the hats! What do you reckon you enjoy doing the most though?",
    options: [
      { label: "The creative / design side", nextStep: "enjoy_creative" },
      { label: "The numbers / performance side", nextStep: "enjoy_performance" },
      { label: "Just building relationships", nextStep: "enjoy_relationships" },
    ],
  },
  clients_local: {
    botMessage: "That's our world too — tradies, local services, small businesses that actually need the help. Plenty of room in the market for everyone doing it properly. Good luck with it mate, keep smashing it. 👊",
  },
  clients_ecom: {
    botMessage: "E-com is a different beast isn't it — but when you nail it the results are unreal. We tend to stick to the local/service space but always respect the e-com operators. Keep at it legend. 🍺",
  },
  clients_anyone: {
    botMessage: "Ha — been there! That's the hustle early on isn't it. It gets better once you niche down a bit. Anyway, no hard feelings being on here — good luck with it all mate. 👊",
  },
  clients_hospo: {
    botMessage: "Hospo is fun — fast paced and the content opportunities are endless. We don't do much in that space so no clash there! Keep killing it. 🍺",
  },
  platform_google: {
    botMessage: "Google's where the money is for intent-based leads for sure. Always interesting seeing how other people structure their campaigns. Anyway good on ya for having a look — no secrets here! 👊",
  },
  platform_meta: {
    botMessage: "Meta's wild — the algorithm changes keep everyone on their toes hey. We run a lot of Meta for trades & services. Good to know there's more of us out there doing it properly. 🍺",
  },
  platform_both: {
    botMessage: "Yeah both is the way to go for most clients. Google for intent, Meta for awareness — classic combo. Good luck out there, always room for people doing good work. 👊",
  },
  enjoy_creative: {
    botMessage: "Nice — the creative side is what makes this job fun. We're more on the performance/results end ourselves but always appreciate good design. Keep building cool stuff mate. 🍺",
  },
  enjoy_performance: {
    botMessage: "A numbers person — respect! That's where we live too. Nothing beats seeing the leads roll in when a campaign clicks. Anyway, good luck with your clients, keep smashing it. 👊",
  },
  enjoy_relationships: {
    botMessage: "That's honestly what it's all about isn't it. The clients you enjoy working with make the whole thing worth it. Good on ya for being in the game. All the best mate. 🍺",
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
    response: "Ha! No stress — good on ya for doing your research. So what's your angle in the digital space?",
  },
  {
    id: "pricing_general",
    patterns: ["price", "pricing", "cost", "how much", "budget", "rate", "quote", "all up", "total cost", "investment"],
    response:
      "Pricing depends on the scope of work — every business is different. Best move is to fill in the enquiry form and Alex will get back to you with something tailored.\n\n" + BOOKING_CTA,
  },
  {
    id: "ads",
    patterns: ["ads", "google ads", "meta ads", "paid ads", "ppc", "campaign", "facebook ads", "instagram ads", "advertising"],
    response:
      "We run Google Ads and Meta (Facebook & Instagram) campaigns built to generate leads. Ad spend is always client-controlled and billed separately — never marked up. Results compound after the first 30 days.\n\n" + BOOKING_CTA,
  },
  {
    id: "ad_spend",
    patterns: ["ad spend", "how much to spend", "ad budget", "spend on ads", "daily budget"],
    response:
      "Ad spend goes directly to Google or Meta — never through us. The right budget depends on your industry and goals. Best to get in touch so we can figure out what makes sense.\n\n" + BOOKING_CTA,
  },
  {
    id: "own_ads",
    patterns: ["run my own ads", "running ads myself", "doing my own ads", "manage my own"],
    response: "How are they going for you? Are you getting leads from them or more just spending money?",
  },
  {
    id: "seo",
    patterns: ["seo", "search engine", "ranking", "organic", "google ranking", "google business"],
    response: "We do local and national SEO — on-page optimisation, Google Business Profile, technical SEO, content, and link building. We focus on the searches that actually bring in jobs.\n\n" + BOOKING_CTA,
  },
  {
    id: "social_media",
    patterns: ["social media", "social media management", "facebook page", "instagram page", "linkedin", "posting", "content creation"],
    response: "We handle content creation and posting across Facebook, Instagram, and LinkedIn — built around your brand, not generic filler. If you need a proper social presence, we can sort that.\n\n" + BOOKING_CTA,
  },
  {
    id: "email_marketing",
    patterns: ["email marketing", "newsletter", "email campaign", "automations", "mailchimp", "email list"],
    response: "We do email campaigns to nurture leads and stay top of mind — automations, newsletters, and promos. Great way to keep past customers coming back.\n\n" + BOOKING_CTA,
  },
  {
    id: "brand_strategy",
    patterns: ["brand", "branding", "brand strategy", "identity", "logo", "tone of voice", "positioning", "messaging"],
    response: "We do brand strategy — positioning, messaging, tone of voice, and visual identity guidance. Helps you stand out in a crowded market.\n\n" + BOOKING_CTA,
  },
  {
    id: "timeline",
    patterns: ["timeline", "how long", "turnaround", "delivery", "when", "time frame", "how fast", "how quickly"],
    response: "Basic website: 2-3 weeks. Full custom build: 4-6 weeks. Ads campaigns: live within 1 week of onboarding.",
  },
  {
    id: "how_it_works",
    patterns: ["how does it work", "your process", "what's the process", "how do you work", "next steps", "get started", "start working"],
    response: "Simple — we have a quick chat to understand your business and goals, send through a discovery questionnaire, then put together a clear proposal with scope and timeline. You deal directly with Alex the whole way — no account managers, no middlemen.\n\n" + BOOKING_CTA,
  },
  {
    id: "contact",
    patterns: ["contact", "email", "phone", "reach", "talk", "call", "get in touch", "speak", "enquiry", "enquire"],
    response: "Head over to the enquiry form and fill in your details 👉 [Get in Touch](/#contact)\n\nOr email alex@ironvaultdigital.com.au and Alex will get back to you.",
  },
  {
    id: "speak_to_alex",
    patterns: ["speak to alex", "talk to alex", "alex directly", "can i call", "direct contact"],
    response: "You're not chatting with Alex right now — I'm the IVD website assistant. But Alex is easy to reach. Fill in the enquiry form 👉 [Get in Touch](/#contact) or email alex@ironvaultdigital.com.au and he'll get back to you fast.",
  },
  {
    id: "location",
    patterns: ["location", "where", "based", "kalgoorlie", "perth", "wa", "western australia", "remote", "in person"],
    response: "Based in Kalgoorlie, WA — but we work with clients across Australia and internationally. Fully remote, no in-person meetings required.",
  },
  {
    id: "who_you_work_with",
    patterns: ["who do you work with", "what clients", "what industries", "tradies", "trades", "small business", "mining", "industrial", "b2b", "international"],
    response: "Tradies, small businesses, industrial & B2B companies, and international clients. Plumbers, electricians, concreters, welders, fabricators — anyone who needs more leads from the internet. We get the tradie mindset. No fluff, just results.",
  },
  {
    id: "about",
    patterns: ["who are you", "about you", "tell me about", "what do you do", "what is iron vault", "who is alex", "founder"],
    response: "Iron Vault Digital is a boutique digital marketing agency run by Alex Stuart, based in Kalgoorlie, WA. We build websites that generate leads, run ads that convert, and do SEO that gets businesses found on Google. We work with tradies, small businesses, and clients worldwide. No fluff, just results.",
  },
  {
    id: "services",
    patterns: ["service", "offer", "what can you", "help with", "what do you offer"],
    response: "Websites, SEO, Google Ads, Meta Ads, social media management, email marketing, brand strategy, and website care plans. Everything a business needs to get found online and convert visitors into customers. What are you after specifically?",
  },
  {
    id: "hosting",
    patterns: ["hosting", "maintain", "support", "ongoing", "care plan", "updates", "security", "backups"],
    response: "We offer a monthly website care plan — updates, security, backups, and minor content changes. Set and forget.\n\n" + BOOKING_CTA,
  },
  {
    id: "case_study",
    patterns: ["case study", "portfolio", "examples", "work", "clients", "results", "proof", "arro"],
    response: "Check out ARRO Weld & Rubber Lining (arroweld.com.au) — we built their complete digital presence from scratch: website, capability statement, Google Workspace, Google Business Profile, LinkedIn, and full DNS setup. It's our flagship case study showing what a full digital build looks like.",
  },
  {
    id: "not_fit",
    patterns: ["too expensive", "can't afford", "under 500", "no budget", "tight budget"],
    response: "We've got different options to suit different scopes — and most businesses that invest properly see a solid return. Worth having a chat about what makes sense for you.\n\n" + BOOKING_CTA,
  },
  {
    id: "guarantee",
    patterns: ["guarantee", "guaranteed", "promise", "overnight", "instant results", "quick results"],
    response: "Good digital marketing takes 60-90 days to build real momentum. Anyone promising overnight results is pulling your leg. What we can promise is honest work and we pivot fast when something's not working.",
  },
  {
    id: "booking",
    patterns: ["book", "meeting", "appointment", "schedule", "free call", "chat", "consultation"],
    response: "Easy — " + BOOKING_CTA,
  },
  {
    id: "how_manage_ads",
    patterns: ["how do you manage", "how do you run", "ad management"],
    response: "We read the numbers daily and know when an ad has run its course, when the landing page needs adjusting, or when the offer is weak. We pivot before budget gets wasted. Includes search campaigns, keyword research, ad copy, landing page strategy, and ongoing optimisation.",
  },
  {
    id: "deposit",
    patterns: ["deposit", "payment", "how to pay", "payment plan", "milestone"],
    response: "Website projects are invoiced in milestones. Retainers are monthly billing. A deposit locks in your start date. For the full breakdown, best to get in touch.\n\n" + BOOKING_CTA,
  },
  {
    id: "gst",
    patterns: ["gst", "tax", "abn"],
    response: "All prices are + GST. ABN: 17 636 500 418.",
  },
  {
    id: "burned_by_agency",
    patterns: ["burned", "ripped off", "bad experience", "previous agency", "last agency", "waste of money", "didn't work"],
    response: "Yeah we hear that a lot. Most of our clients come to us after being burned by a big agency that overpromised and underdelivered. With us you deal directly with Alex — no account managers, no runaround. We keep it simple and we keep it honest.\n\n" + BOOKING_CTA,
  },
  {
    id: "no_website",
    patterns: ["no website", "don't have a website", "need a website", "starting from scratch", "no online presence"],
    response: "No worries — a lot of our clients start from zero. We build custom websites that are fast, mobile-first, and built to rank on Google. No templates, no cookie-cutter layouts.\n\n" + BOOKING_CTA,
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
  "That's a good one for Alex directly — he'll be able to give you a proper answer. Head to the enquiry form 👉 [Get in Touch](/#contact) or flick an email to alex@ironvaultdigital.com.au and he'll get back to you fast.";

export const FALLBACK_WITH_FORM =
  "That's a good one for Alex directly — he'll be able to give you a proper answer. Head to the enquiry form 👉 [Get in Touch](/#contact) or email alex@ironvaultdigital.com.au.";
