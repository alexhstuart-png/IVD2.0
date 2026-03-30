import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, PhoneCall, Lock, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trackCTA, trackFormSubmit } from "@/lib/gtag";

const ease = [0.16, 1, 0.3, 1] as const;

const included = [
  { title: "Ad Strategy", desc: "Built specifically for your business and target market — not a template." },
  { title: "Ad Creative & Copywriting", desc: "Scroll-stopping creatives and copy written to convert your ideal customer." },
  { title: "Lead Capture & Follow-Up", desc: "Automated sequence so no lead goes cold while you're busy." },
  { title: "Daily Optimisation", desc: "We watch the numbers every day and adjust to improve performance." },
  { title: "7-Day Performance Report", desc: "Full transparency on what's working, what's not, and what's next." },
];

const tiers = [
  {
    name: "Launch",
    price: "$700",
    period: "/month",
    features: ["Meta Ads management", "Ad creatives & copy", "SMS/email follow-up sequence"],
    highlight: false,
  },
  {
    name: "Scale",
    price: "$1,500",
    period: "/month",
    features: ["Everything in Launch", "Google Ads", "Retargeting campaigns", "Custom landing page", "Lead nurture sequence", "Google Business Profile optimisation", "Review generation system"],
    highlight: true,
  },
  {
    name: "Dominate",
    price: "$2,500",
    period: "/month",
    features: ["Everything in Scale", "AI chatbot for lead capture", "Video ad creatives", "A/B testing & conversion rate optimisation"],
    highlight: false,
  },
];

const ScrollReveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, ease }}
    className={className}
  >
    {children}
  </motion.div>
);

const RapidGrowth = () => {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [formData, setFormData] = useState({ name: "", business: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Exclusive Offer — Leads in 7 Days | Iron Vault Digital";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Exclusive rapid growth offer. Campaign live in 3 days, real leads within 7 days of launch. $1,500 flat — ad spend included.");

    const timer = setTimeout(() => setOverlayVisible(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  const scrollToForm = () => {
    trackCTA("Lock In Your Spot");
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = new URLSearchParams();
    body.append("form-name", "rapid-growth-enquiry");
    Object.entries(formData).forEach(([k, v]) => body.append(k, v.trim()));
    try {
      await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
    } catch { /* allow through */ }
    trackFormSubmit("Rapid Growth Enquiry");
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* ─── EXCLUSIVE ACCESS OVERLAY ─── */}
      <AnimatePresence>
        {overlayVisible && (
          <motion.div
            key="overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease }}
            onClick={() => setOverlayVisible(false)}
            className="fixed inset-0 z-[200] flex items-center justify-center cursor-pointer"
            style={{ backgroundColor: "#080a0b" }}
          >
            {/* Gold border */}
            <div className="absolute inset-4 border border-primary/40 pointer-events-none" />

            <div className="text-center px-6">
              {/* Stamp */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0, rotate: -18 }}
                animate={{ scale: 1, opacity: 1, rotate: -12 }}
                transition={{ duration: 0.5, delay: 0.3, ease }}
                className="inline-block mb-8"
              >
                <div className="relative inline-block">
                  <div className="border-4 border-primary rounded-full w-56 h-56 md:w-72 md:h-72 flex items-center justify-center rotate-[-12deg]">
                    <div className="border-2 border-primary/50 rounded-full w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
                      <span
                        className="text-2xl md:text-3xl font-bold tracking-[0.15em] gold-text uppercase leading-tight text-center"
                        style={{ fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}
                      >
                        EXCLUSIVE<br />ACCESS
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="font-mono text-xs tracking-widest text-primary/80 mb-3"
              >
                This offer is extended to a select few businesses only.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="text-[11px] text-muted-foreground"
              >
                Not publicly advertised. You're here because we think you're a fit.
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden Netlify form */}
      <form name="rapid-growth-enquiry" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="rapid-growth-enquiry" />
        <input name="name" />
        <input name="business" />
        <input name="phone" />
        <input name="email" />
        <textarea name="message" />
      </form>

      <Navbar />

      <main className="min-h-screen bg-background pt-16">
        {/* ─── HERO ─── */}
        <section className="py-24 md:py-36">
          <div className="section-container max-w-4xl">
            <ScrollReveal>
              <span className="inline-block border border-primary/40 text-primary text-[10px] tracking-[0.2em] font-mono px-3 py-1 mb-6 rounded-full">
                // Exclusive Offer — Limited Availability
              </span>
            </ScrollReveal>

            <ScrollReveal>
              <p className="label-uppercase mb-4">// 07 Days — Rapid Growth</p>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
                Leads In <span className="gold-italic">7 Days</span>.
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-base md:text-lg text-secondary-foreground max-w-2xl leading-relaxed mb-4">
                No waiting around. No long setup periods. We get your campaign live within 3 business days — then 7 days post-launch to start seeing real leads hit your inbox. Fast, focused, and built to deliver.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xs text-muted-foreground max-w-xl mb-8">
                We only take on a handful of these engagements at a time. When spots are full, this offer closes.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <button
                onClick={scrollToForm}
                className="px-8 py-3.5 border border-primary text-primary text-[11px] tracking-[0.15em] font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
              >
                LOCK IN YOUR SPOT
              </button>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── GUARANTEE ─── */}
        <section className="py-20 border-t border-border">
          <div className="section-container max-w-4xl">
            <ScrollReveal>
              <p className="label-uppercase mb-6">// The Guarantee</p>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-10 leading-tight">
                Live in 3 days. Leads within 7 days of launch.<br />
                <span className="gold-text">Or we keep going — at no extra cost.</span>
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Zap, text: "Campaign built and live within 3 business days of payment." },
                { icon: PhoneCall, text: "Real leads hitting your inbox within 7 days of launch." },
                { icon: Lock, text: "If we don't hit results by day 7 post-launch — we keep running until we do. No extra charge." },
              ].map((item, i) => (
                <ScrollReveal key={i}>
                  <div className="border border-border p-6 h-full">
                    <item.icon className="w-5 h-5 text-primary mb-4" />
                    <p className="text-sm text-secondary-foreground leading-relaxed">{item.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHAT'S INCLUDED ─── */}
        <section className="py-20 border-t border-border">
          <div className="section-container max-w-4xl">
            <ScrollReveal>
              <p className="label-uppercase mb-4">// What's Included</p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">Everything you need to start generating leads — fast.</h2>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {included.map((item, i) => (
                <ScrollReveal key={i}>
                  <div className="border border-border p-5 h-full">
                    <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PRICING ─── */}
        <section className="py-20 border-t border-border">
          <div className="section-container max-w-4xl text-center">
            <ScrollReveal>
              <p className="label-uppercase mb-4">// Pricing</p>
              <p className="text-xs text-muted-foreground mb-6">This rate is only available through direct invitation.</p>

              <div className="text-6xl md:text-8xl font-bold gold-text tracking-tight mb-3">$1,500</div>
              <p className="text-sm text-secondary-foreground mb-2">One flat payment. Covers ad spend and management. No surprises.</p>
              <p className="text-xs text-muted-foreground mb-12">Ad spend is included in the $1,500. Nothing extra to pay to get started.</p>
            </ScrollReveal>

            {/* Timeline */}
            <ScrollReveal>
              <div className="flex items-center justify-center gap-0 max-w-lg mx-auto">
                {[
                  { label: "Day 0", sub: "Payment" },
                  { label: "Day 1–3", sub: "Build & Launch" },
                  { label: "Day 4–10", sub: "Leads" },
                ].map((step, i) => (
                  <div key={i} className="flex items-center">
                    <div className="text-center px-3 md:px-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary flex items-center justify-center mx-auto mb-2">
                        <span className="text-xs font-bold gold-text">{i + 1}</span>
                      </div>
                      <p className="text-xs font-semibold text-foreground">{step.label}</p>
                      <p className="text-[10px] text-muted-foreground">{step.sub}</p>
                    </div>
                    {i < 2 && <div className="w-10 md:w-16 h-px bg-primary/50 flex-shrink-0" />}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <button
                onClick={scrollToForm}
                className="mt-12 px-8 py-3.5 border border-primary text-primary text-[11px] tracking-[0.15em] font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
              >
                LOCK IN YOUR SPOT
              </button>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── AFTER 7 DAYS ─── */}
        <section className="py-20 border-t border-border">
          <div className="section-container max-w-4xl">
            <ScrollReveal>
              <p className="label-uppercase mb-4">// What Happens After Day 7</p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <ScrollReveal>
                <div className="border border-border p-8 h-full bg-card/30">
                  <p className="label-uppercase mb-3">Not feeling it?</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    No hard feelings. If you don't want to continue after the 7 days post-launch, you walk away. No lock-in, no pressure, no invoice. Simple as that.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="border border-primary/50 p-8 h-full" style={{ background: "linear-gradient(135deg, hsl(42 55% 55% / 0.06), transparent)" }}>
                  <p className="label-uppercase gold-text mb-3">Ready to keep going?</p>
                  <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
                    Most clients see the results and want to keep the momentum rolling. We'll lock you in on a 3-month minimum plan — enough time to turn early leads into a real pipeline.
                  </p>
                  <p className="text-xs text-muted-foreground">After 3 months, continue month-to-month or upgrade your plan.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ─── ONGOING PLANS ─── */}
        <section className="py-20 border-t border-border">
          <div className="section-container max-w-5xl">
            <ScrollReveal>
              <p className="label-uppercase mb-4">// Ongoing Plans</p>
              <p className="text-sm text-secondary-foreground mb-10 max-w-xl">
                Choose the plan that fits where your business is at. All plans run for a minimum of 3 months.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {tiers.map((tier, i) => (
                <ScrollReveal key={i}>
                  <div
                    className={`border p-6 h-full flex flex-col ${
                      tier.highlight
                        ? "border-primary/50"
                        : "border-border"
                    }`}
                    style={tier.highlight ? { background: "linear-gradient(135deg, hsl(42 55% 55% / 0.06), transparent)" } : {}}
                  >
                    {tier.highlight && (
                      <span className="text-[9px] tracking-[0.2em] font-mono gold-text mb-3">MOST POPULAR</span>
                    )}
                    <h3 className="text-lg font-bold text-foreground mb-1">{tier.name}</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-3xl font-bold gold-text">{tier.price}</span>
                      <span className="text-xs text-muted-foreground">{tier.period}</span>
                    </div>
                    <ul className="space-y-2.5 flex-1">
                      {tier.features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-xs text-secondary-foreground">
                          <ChevronRight className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <p className="text-xs text-muted-foreground text-center mt-8">
                Ad spend always separate. 3-month minimum, then month-to-month.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── CONTACT FORM ─── */}
        <section className="py-20 border-t border-border" ref={formRef} id="contact">
          <div className="section-container max-w-xl">
            <ScrollReveal>
              <p className="label-uppercase mb-4">// Get Started</p>
              <p className="text-xs text-muted-foreground mb-6">
                Spots are limited. If you've been sent this link, we already think you're a good fit.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Lock In Your 7 Days</h2>
            </ScrollReveal>

            {submitted ? (
              <ScrollReveal>
                <div className="border border-primary/30 p-8 text-center">
                  <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">You're in.</h3>
                  <p className="text-sm text-muted-foreground">We'll be in touch within 24 hours to get things moving.</p>
                </div>
              </ScrollReveal>
            ) : (
              <ScrollReveal>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} className="form-input-base" />
                  <input type="text" name="business" placeholder="Business Name" required value={formData.business} onChange={handleChange} className="form-input-base" />
                  <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} className="form-input-base" />
                  <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} className="form-input-base" />
                  <textarea name="message" placeholder="Tell us about your business and who you're trying to reach" rows={4} value={formData.message} onChange={handleChange} className="form-input-base" />
                  <button
                    type="submit"
                    className="w-full py-3.5 border border-primary text-primary text-[11px] tracking-[0.15em] font-semibold hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-2"
                  >
                    LOCK IN MY 7 DAYS <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              </ScrollReveal>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default RapidGrowth;
