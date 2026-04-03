import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { trackCTA, trackFormSubmit } from "@/lib/gtag";

const ease = [0.16, 1, 0.3, 1] as const;

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

const trades = [
  "Plumbers", "Electricians", "Roofers", "Concreters", "Painters",
  "Builders", "Carpenters", "Tilers", "Landscapers", "Mechanics",
];

const painPoints = [
  { num: "01", text: "Customers can't find you on Google — so they call someone else." },
  { num: "02", text: "Word of mouth dries up. A website works for you 24/7." },
  { num: "03", text: "No website = no credibility. Customers Google you before they call." },
];

const tiers = [
  {
    name: "Launch",
    price: "$599",
    popular: false,
    features: [
      "1–3 page professional website",
      "Mobile optimised",
      "Contact form",
      "Domain connected",
      "SSL certificate",
    ],
  },
  {
    name: "Scale",
    price: "$1,499",
    popular: true,
    features: [
      "4–6 pages",
      "Everything in Launch",
      "Google Maps integration",
      "Photo gallery",
      "SEO setup",
    ],
  },
  {
    name: "Dominate",
    price: "$2,500",
    popular: false,
    features: [
      "Unlimited pages",
      "Everything in Scale",
      "Full SEO strategy",
      "Google Ads setup",
      "Monthly reporting",
    ],
  },
];

const hostingOptions = [
  {
    label: "Monthly",
    price: "$200/month",
    features: [
      "Hosting managed",
      "Up to 3 content changes per month",
      "No hosting account required",
      "Cancel anytime",
    ],
    highlight: false,
  },
  {
    label: "Annual",
    badge: "Best Value",
    price: "$600/year",
    features: [
      "Everything in monthly",
      "Save $1,800 compared to monthly",
      "One payment, covered for the year",
    ],
    highlight: true,
  },
];

const steps = [
  { num: "01", title: "Fill in the form", desc: "Tell us about your trade and what you need." },
  { num: "02", title: "We build it", desc: "Live within 2–4 weeks, no back and forth." },
  { num: "03", title: "You approve it", desc: "One round of revisions included." },
  { num: "04", title: "Go live", desc: "Your site is live and working for you." },
];

const stats = [
  { value: "WA", label: "BASED IN WESTERN AUSTRALIA" },
  { value: "100%", label: "YOU OWN THE SITE OUTRIGHT" },
  { value: "2–4 Wks", label: "AVERAGE TIME TO GO LIVE" },
  { value: "0", label: "LOCK-IN CONTRACTS" },
];

const PerthTradies = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "", business: "", phone: "", email: "", package: "", hosting: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Perth Tradie Websites — From $599 | Iron Vault Digital";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Professional websites for Perth tradies — starting from $599. Built fast, built to convert, built to get your phone ringing.");
  }, []);

  const scrollToForm = () => {
    trackCTA("Get Started Perth Tradies");
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPackages = () => {
    trackCTA("See What's Included");
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = new URLSearchParams();
    body.append("form-name", "perth-tradies-enquiry");
    Object.entries(formData).forEach(([k, v]) => body.append(k, v.trim()));
    try {
      await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
    } catch { /* allow through */ }
    trackFormSubmit("Perth Tradies Enquiry");
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ─── URGENT BANNER ─── */}
      <div className="w-full py-2.5 px-4 text-center" style={{ backgroundColor: "#c8a951" }}>
        <p className="text-[11px] sm:text-xs tracking-[0.1em] font-mono font-semibold" style={{ color: "#080a0b" }}>
          ⚡ Limited Time Offer — Websites from $599. Spots filling fast. Don't miss out.
        </p>
      </div>

      {/* ─── LANDING NAV ─── */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="section-container flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <span className="text-sm font-bold tracking-widest gold-text border border-primary px-2 py-0.5">IVD</span>
          </a>
          <button
            onClick={scrollToForm}
            className="px-5 py-2 bg-primary text-primary-foreground text-[11px] tracking-[0.12em] font-semibold hover:opacity-90 transition-opacity"
          >
            GET STARTED — FROM $599
          </button>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="py-20 md:py-32">
        <div className="section-container max-w-4xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease }} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-primary" />
            <span className="label-uppercase">// Perth Tradies — Get Online</span>
          </motion.div>

          {/* Pulsing badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 border border-primary/50 text-[10px] tracking-[0.2em] font-mono uppercase gold-text rounded-full animate-pulse shadow-[0_0_15px_hsl(42_55%_55%/0.3)]">
              LIMITED TIME OFFER
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]"
          >
            Get Online.<br />
            <span className="gold-italic font-light">Get Jobs.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease }}
            className="mt-6 text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed"
          >
            Professional websites for Perth tradies — starting from $599. Built fast, built to convert, built to get your phone ringing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground font-semibold text-[11px] tracking-[0.12em] uppercase hover:opacity-90 transition-opacity"
            >
              Get Started — From $599
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={scrollToPackages}
              className="inline-flex items-center justify-center px-7 py-4 border border-border text-foreground font-semibold text-[11px] tracking-[0.12em] uppercase hover:border-primary transition-colors"
            >
              See What's Included
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45, ease }}
            className="mt-6 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[10px] tracking-[0.1em] text-muted-foreground"
          >
            <span>✔ No lock-in</span>
            <span>✔ Live in 2–4 weeks</span>
            <span>✔ You own it outright</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55, ease }}
            className="mt-4 text-xs text-muted-foreground italic"
          >
            This pricing won't be available forever — lock it in while you can.
          </motion.p>
        </div>
      </section>

      {/* ─── SOCIAL PROOF MARQUEE ─── */}
      <div className="border-t border-b border-border py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="text-xs tracking-[0.1em] text-muted-foreground mx-0">
              {trades.map((t) => (
                <span key={`${i}-${t}`}>
                  {t} <span className="gold-text mx-4">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ─── WHY YOU NEED A WEBSITE ─── */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="section-container max-w-4xl">
          <ScrollReveal>
            <p className="label-uppercase mb-4">// The Problem</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
              Your Competitors Are Online.<br />
              <span className="gold-italic font-light">Are You?</span>
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {painPoints.map((p, i) => (
              <ScrollReveal key={i}>
                <div className="p-6 border border-border rounded-lg h-full">
                  <span className="text-2xl font-bold gold-text font-mono">{p.num}</span>
                  <p className="mt-4 text-sm text-foreground leading-relaxed">{p.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT'S INCLUDED ─── */}
      <section id="packages" className="py-20 md:py-28 bg-card border-t border-border">
        <div className="section-container max-w-5xl">
          <ScrollReveal>
            <p className="label-uppercase mb-4">// What You Get</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
              Everything You Need.<br />
              <span className="gold-italic font-light">Nothing You Don't.</span>
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <ScrollReveal key={tier.name}>
                <div
                  className={`relative p-6 border rounded-lg h-full flex flex-col ${
                    tier.popular
                      ? "border-t-2 border-t-primary border-l border-r border-b border-border"
                      : "border-border"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-6 px-3 py-0.5 bg-primary text-primary-foreground text-[9px] tracking-[0.15em] font-mono uppercase font-semibold rounded-sm">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-bold">{tier.name}</h3>
                  <p className="text-3xl font-bold gold-text mt-2">{tier.price}</p>
                  <ul className="mt-6 space-y-3 flex-1">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={scrollToForm}
                    className={`mt-6 w-full py-3 text-[11px] tracking-[0.12em] font-semibold uppercase transition-all ${
                      tier.popular
                        ? "bg-primary text-primary-foreground hover:opacity-90"
                        : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="mt-8 text-xs text-muted-foreground text-center">
              Not sure which one? Just ask — we'll point you in the right direction.
            </p>
            <p className="mt-3 text-xs gold-text text-center font-mono tracking-wide">
              ⚡ Limited time pricing — subject to change.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── HOSTING ─── */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="section-container max-w-4xl">
          <ScrollReveal>
            <p className="label-uppercase mb-4">// Hosting & Care</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
              We Keep It<br />
              <span className="gold-italic font-light">Running.</span>
            </h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-2xl leading-relaxed">
              Once your site is live we handle all the hosting for you — no technical headaches, no separate accounts to manage.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {hostingOptions.map((opt) => (
              <ScrollReveal key={opt.label}>
                <div
                  className={`relative p-6 border rounded-lg h-full ${
                    opt.highlight
                      ? "border-t-2 border-t-primary border-l border-r border-b border-border"
                      : "border-border"
                  }`}
                >
                  {opt.badge && (
                    <span className="absolute -top-3 left-6 px-3 py-0.5 bg-primary text-primary-foreground text-[9px] tracking-[0.15em] font-mono uppercase font-semibold rounded-sm">
                      {opt.badge}
                    </span>
                  )}
                  <h3 className="text-lg font-bold">{opt.label}</h3>
                  <p className="text-2xl font-bold gold-text mt-2">{opt.price}</p>
                  <ul className="mt-6 space-y-3">
                    {opt.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="mt-8 text-xs text-muted-foreground text-center">
              Hosting is separate to your website build cost. No lock-in on the monthly plan.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-20 md:py-28 bg-card border-t border-border">
        <div className="section-container max-w-4xl">
          <ScrollReveal>
            <p className="label-uppercase mb-4">// The Process</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
              Simple. Fast.<br />
              <span className="gold-italic font-light">Yours.</span>
            </h2>
          </ScrollReveal>

          <div className="mt-12 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-primary/30" />
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((s, i) => (
                <ScrollReveal key={i}>
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center mb-4 bg-background relative z-10">
                      <span className="text-xs font-bold gold-text font-mono">{s.num}</span>
                    </div>
                    <h3 className="text-sm font-bold mb-1">{s.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST STATS ─── */}
      <section className="py-16 border-t border-border">
        <div className="section-container max-w-4xl">
          <ScrollReveal>
            <p className="label-uppercase mb-8">// Why Iron Vault</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 border border-border rounded-lg">
                  <p className="text-2xl md:text-3xl font-bold gold-text">{stat.value}</p>
                  <p className="text-[9px] tracking-[0.12em] uppercase text-muted-foreground mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CONTACT FORM ─── */}
      <section ref={formRef} id="tradies-contact" className="py-20 md:py-28 bg-card border-t border-border">
        <div className="section-container max-w-2xl">
          <ScrollReveal>
            <p className="label-uppercase mb-4">// Get Started</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
              Let's Get You<br />
              <span className="gold-italic font-light">Online.</span>
            </h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-lg leading-relaxed">
              Fill in your details below and we'll get back to you within a few hours.
            </p>
            <p className="mt-3 text-[11px] gold-text font-mono tracking-wide">
              ⚡ Limited spots available at this price.
            </p>
          </ScrollReveal>

          {submitted ? (
            <ScrollReveal>
              <div className="mt-10 border border-primary/30 p-8 text-center rounded-lg">
                <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center mx-auto mb-4">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">You're in.</h3>
                <p className="text-sm text-muted-foreground">We'll get back to you within a few hours. Talk soon.</p>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="mt-10 space-y-4">
                <input type="hidden" name="form-name" value="perth-tradies-enquiry" />
                <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} className="form-input-base" />
                <input type="text" name="business" placeholder="Trade / Business Name" required value={formData.business} onChange={handleChange} className="form-input-base" />
                <input type="tel" name="phone" placeholder="Phone" required value={formData.phone} onChange={handleChange} className="form-input-base" />
                <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} className="form-input-base" />
                <select name="package" value={formData.package} onChange={handleChange} className="form-input-base" required>
                  <option value="" disabled>What package are you interested in?</option>
                  <option value="Launch $599">Launch $599</option>
                  <option value="Scale $1,499">Scale $1,499</option>
                  <option value="Dominate $2,500">Dominate $2,500</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
                <select name="hosting" value={formData.hosting} onChange={handleChange} className="form-input-base" required>
                  <option value="" disabled>Hosting preference?</option>
                  <option value="$200/month">$200/month</option>
                  <option value="$600/year">$600/year</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
                <textarea name="message" placeholder="Anything else we should know?" rows={4} value={formData.message} onChange={handleChange} className="form-input-base" />
                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary text-primary-foreground text-[11px] tracking-[0.12em] font-semibold uppercase hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Lock In My Spot <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-muted-foreground text-center">
                  No lock-in. No hidden fees. We'll get back to you fast.
                </p>
              </form>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* ─── MINIMAL FOOTER ─── */}
      <footer className="py-8 border-t border-border">
        <div className="section-container flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Iron Vault Digital. All rights reserved.
          </p>
          <p className="text-[10px] text-muted-foreground">ABN: 17 636 500 418</p>
        </div>
      </footer>
    </div>
  );
};

export default PerthTradies;
