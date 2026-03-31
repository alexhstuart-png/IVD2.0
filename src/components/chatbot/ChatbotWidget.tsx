import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ArrowLeft } from "lucide-react";
import {
  GREETING_MESSAGE,
  QUICK_REPLIES,
  matchIntent,
  FALLBACK_RESPONSE,
  FALLBACK_WITH_FORM,
  WEBSITE_FLOW,
  LEADS_FLOW,
  COMPETITOR_FLOW,
  type ConversationFlow,
} from "./ChatbotKnowledge";

type Message = {
  role: "bot" | "user";
  text: string;
};

type ActiveFlow = {
  flow: ConversationFlow;
  step: string;
} | null;

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: GREETING_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [showButtons, setShowButtons] = useState(true);
  const [activeFlow, setActiveFlow] = useState<ActiveFlow>(null);
  const [showForm, setShowForm] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const missCount = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, showForm, showButtons, activeFlow]);

  const startFlow = (flow: ConversationFlow) => {
    const step = flow["start"];
    setActiveFlow({ flow, step: "start" });
    setMessages((m) => [...m, { role: "bot", text: step.botMessage }]);
  };

  const handleFlowOption = (label: string, nextStep: string) => {
    if (!activeFlow) return;
    const next = activeFlow.flow[nextStep];
    if (!next) return;

    setMessages((m) => [...m, { role: "user", text: label }]);

    if (next.options) {
      setActiveFlow({ ...activeFlow, step: nextStep });
      setTimeout(() => {
        setMessages((m) => [...m, { role: "bot", text: next.botMessage }]);
      }, 400);
    } else {
      // End of flow
      setActiveFlow(null);
      setTimeout(() => {
        setMessages((m) => [...m, { role: "bot", text: next.botMessage }]);
      }, 400);
    }
  };

  const handleButtonClick = (label: string, intentId: string) => {
    setShowButtons(false);
    setMessages((m) => [...m, { role: "user", text: label }]);

    if (intentId === "website") {
      startFlow(WEBSITE_FLOW);
    } else if (intentId === "leads") {
      startFlow(LEADS_FLOW);
    } else if (intentId === "competitor") {
      startFlow(COMPETITOR_FLOW);
    } else {
      const answer = matchIntent(intentId);
      setMessages((m) => [...m, { role: "bot", text: answer || FALLBACK_RESPONSE }]);
    }
  };

  const send = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setShowButtons(false);
    setActiveFlow(null);
    const userMsg: Message = { role: "user", text: trimmed };

    // Check for website/leads keywords to start flows
    const lower = trimmed.toLowerCase();
    if (
      !activeFlow &&
      (lower.includes("website") || lower.includes("site") || lower.includes("web design") || lower.includes("redesign"))
    ) {
      setMessages((m) => [...m, userMsg]);
      startFlow(WEBSITE_FLOW);
      setInput("");
      return;
    }
    if (
      !activeFlow &&
      (lower.includes("more leads") || lower.includes("lead gen") || lower.includes("more jobs") || lower.includes("more work") || lower.includes("grow my business"))
    ) {
      setMessages((m) => [...m, userMsg]);
      startFlow(LEADS_FLOW);
      setInput("");
      return;
    }

    const answer = matchIntent(trimmed);
    if (answer) {
      missCount.current = 0;
      setMessages((m) => [...m, userMsg, { role: "bot", text: answer }]);
    } else {
      missCount.current += 1;
      if (missCount.current >= 2) {
        setMessages((m) => [...m, userMsg, { role: "bot", text: FALLBACK_WITH_FORM }]);
        setTimeout(() => setShowForm(true), 600);
      } else {
        setMessages((m) => [...m, userMsg, { role: "bot", text: FALLBACK_RESPONSE }]);
      }
    }
    setInput("");
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    })
      .then(() => {
        setFormSent(true);
        setMessages((m) => [
          ...m,
          { role: "bot", text: "Thanks! Alex will be in touch soon. Feel free to ask me anything else. 👊" },
        ]);
        setTimeout(() => setShowForm(false), 100);
      })
      .catch(() => {
        setMessages((m) => [
          ...m,
          { role: "bot", text: "Something went wrong — try the contact form on the page instead, or email alex@ironvaultdigital.com.au directly." },
        ]);
        setShowForm(false);
      });
  };

  // Get current flow step options
  const currentFlowOptions = activeFlow?.flow[activeFlow.step]?.options ?? null;

  return (
    <>
      <form name="chatbot-lead" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="chatbot-lead" />
        <input name="name" />
        <input name="email" />
        <input name="phone" />
        <textarea name="message" />
      </form>

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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl border border-border bg-card shadow-2xl flex flex-col overflow-hidden"
            style={{ height: "min(560px, calc(100vh - 6rem))" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface-elevated">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-foreground">Iron Vault Assistant</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-secondary text-secondary-foreground rounded-bl-md"
                    }`}
                  >
                     {m.text.split(/(\[.*?\]\(.*?\))/).map((part, i) => {
                       const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
                       if (linkMatch) {
                         return (
                           <a key={i} href={linkMatch[2]} className="underline font-semibold hover:opacity-80" target={linkMatch[2].startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                             {linkMatch[1]}
                           </a>
                         );
                       }
                       return <span key={i}>{part}</span>;
                     })}
                  </div>
                </div>
              ))}

              {/* Initial quick reply buttons */}
              <AnimatePresence>
                {showButtons && !activeFlow && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex flex-col gap-2 pt-1"
                  >
                    {QUICK_REPLIES.map((qr) => (
                      <button
                        key={qr.intent}
                        onClick={() => handleButtonClick(qr.label, qr.intent)}
                        className="w-full text-left px-3.5 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground hover:border-primary hover:bg-primary/5 transition-colors"
                      >
                        {qr.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Flow step buttons */}
              <AnimatePresence>
                {currentFlowOptions && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex flex-col gap-2 pt-1"
                  >
                    {currentFlowOptions.map((opt) => (
                      <button
                        key={opt.nextStep}
                        onClick={() => handleFlowOption(opt.label, opt.nextStep)}
                        className="w-full text-left px-3.5 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground hover:border-primary hover:bg-primary/5 transition-colors"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

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
                      <input name="name" required placeholder="Your name" className="w-full px-3 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors" />
                      <input name="email" type="email" required placeholder="Email address" className="w-full px-3 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors" />
                      <input name="phone" type="tel" placeholder="Phone (optional)" className="w-full px-3 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors" />
                      <textarea name="message" rows={2} placeholder="What do you need help with?" className="w-full px-3 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors resize-none" />
                      <div className="flex gap-2">
                        <button type="button" onClick={() => setShowForm(false)} className="flex items-center gap-1 px-3 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                          <ArrowLeft size={14} /> Back
                        </button>
                        <button type="submit" className="flex-1 py-2.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-lg hover:opacity-90 transition-opacity">
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
                    placeholder={formSent ? "Anything else?" : "Type a question…"}
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

export default ChatbotWidget;
