import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ArrowLeft } from "lucide-react";

type Message = {
  role: "bot" | "user";
  text: string;
};

const FAQ: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["price", "pricing", "cost", "how much", "budget", "rate", "quote"],
    answer:
      "Our projects typically start from $1,500 for a starter website. SEO retainers start at $500/month and paid‑ads management from $750/month. Every project is scoped individually — tell us your goals and we'll put together an honest quote.",
  },
  {
    keywords: ["timeline", "how long", "turnaround", "delivery", "when", "time frame"],
    answer:
      "A standard business website takes 2–4 weeks from brief to launch. Larger builds with custom functionality may take 4–8 weeks. We'll give you a clear timeline before any work begins.",
  },
  {
    keywords: ["service", "offer", "do you do", "what can you", "help with"],
    answer:
      "We offer web design & development, SEO & content strategy, Google & Meta ads, social media management, email marketing, brand strategy, and ongoing support packages.",
  },
  {
    keywords: ["seo", "search engine", "ranking", "organic"],
    answer:
      "Our SEO service covers technical audits, on‑page optimisation, content strategy, and link building. We focus on measurable organic growth — no vanity metrics.",
  },
  {
    keywords: ["hosting", "maintain", "support", "ongoing"],
    answer:
      "Yes — we offer hosting, maintenance, and ongoing support plans so your site stays fast, secure, and up to date after launch.",
  },
  {
    keywords: ["ads", "google ads", "meta ads", "paid", "ppc", "campaign"],
    answer:
      "We manage Google Ads and Meta (Facebook/Instagram) campaigns. We handle strategy, creative, targeting, and optimisation — you get transparent reporting on every dollar spent.",
  },
  {
    keywords: ["contact", "email", "phone", "reach", "talk", "call"],
    answer:
      "You can reach us at alex@ironvaultdigital.com.au — or fill out the contact form on this page and we'll get back to you within a few hours.",
  },
  {
    keywords: ["location", "where", "based", "perth", "australia"],
    answer:
      "We're based in Western Australia and serve clients across all of Australia. Everything is done remotely so location is never a barrier.",
  },
];

function matchFAQ(input: string): string | null {
  const lower = input.toLowerCase();
  for (const faq of FAQ) {
    if (faq.keywords.some((kw) => lower.includes(kw))) {
      return faq.answer;
    }
  }
  return null;
}

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hey! 👋 I'm the Iron Vault assistant. Ask me about our services, pricing, or timelines — or I can connect you with the team." },
  ]);
  const [input, setInput] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const missCount = useRef(0);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, showForm]);

  const send = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg: Message = { role: "user", text: trimmed };
    const answer = matchFAQ(trimmed);

    if (answer) {
      missCount.current = 0;
      setMessages((m) => [...m, userMsg, { role: "bot", text: answer }]);
    } else {
      missCount.current += 1;
      if (missCount.current >= 2) {
        setMessages((m) => [
          ...m,
          userMsg,
          { role: "bot", text: "I'd love to help with that! Let me grab your details so the team can follow up personally." },
        ]);
        setTimeout(() => setShowForm(true), 600);
      } else {
        setMessages((m) => [
          ...m,
          userMsg,
          { role: "bot", text: "Hmm, I'm not sure about that one. Try asking about our services, pricing, or timelines — or I can connect you with the team." },
        ]);
      }
    }
    setInput("");
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Post to Netlify
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    })
      .then(() => {
        setFormSent(true);
        setMessages((m) => [...m, { role: "bot", text: "Thanks! We've received your details and will be in touch soon. 🚀" }]);
        setTimeout(() => setShowForm(false), 100);
      })
      .catch(() => {
        setMessages((m) => [...m, { role: "bot", text: "Something went wrong sending your details. Please try the contact form on the page instead." }]);
        setShowForm(false);
      });
  };

  return (
    <>
      {/* Hidden Netlify form for bot detection */}
      <form name="chatbot-lead" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="chatbot-lead" />
        <input name="name" />
        <input name="email" />
        <input name="phone" />
        <textarea name="message" />
      </form>

      {/* FAB */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
            aria-label="Open chat"
          >
            <MessageCircle size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl border border-border bg-card shadow-2xl flex flex-col overflow-hidden"
            style={{ height: "min(520px, calc(100vh - 6rem))" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface-elevated">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-foreground">Iron Vault Assistant</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Close chat">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-secondary text-secondary-foreground rounded-bl-md"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {/* Inline lead form */}
              <AnimatePresence>
                {showForm && !formSent && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <form
                      onSubmit={handleFormSubmit}
                      className="bg-secondary rounded-xl p-4 space-y-3 border border-border"
                    >
                      <input type="hidden" name="form-name" value="chatbot-lead" />
                      <input
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full px-3 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                      />
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="Email address"
                        className="w-full px-3 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                      />
                      <input
                        name="phone"
                        type="tel"
                        placeholder="Phone (optional)"
                        className="w-full px-3 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                      />
                      <textarea
                        name="message"
                        rows={2}
                        placeholder="How can we help?"
                        className="w-full px-3 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors resize-none"
                      />
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setShowForm(false)}
                          className="flex items-center gap-1 px-3 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ArrowLeft size={14} /> Back
                        </button>
                        <button
                          type="submit"
                          className="flex-1 py-2.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-lg hover:opacity-90 transition-opacity"
                        >
                          Send
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input */}
            {!showForm && (
              <div className="p-3 border-t border-border bg-surface-elevated">
                <div className="flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && send()}
                    placeholder={formSent ? "Anything else?" : "Ask a question…"}
                    className="flex-1 px-3.5 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                  />
                  <button
                    onClick={send}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity flex-shrink-0"
                    aria-label="Send"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
