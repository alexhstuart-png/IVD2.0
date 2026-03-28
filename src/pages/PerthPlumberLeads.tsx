import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ChevronDown, Check, ArrowRight, BarChart3, Star, Zap, PhoneCall, MessageSquare, TrendingUp } from "lucide-react";
import { trackCTA, trackFormSubmit } from "@/lib/gtag";

const ease = [0.16, 1, 0.3, 1] as const;

const problems = [
  "Your website looks fine — but it doesn't convert visitors into calls or quote requests.",
  "You miss leads after hours or when you're on a job and can't answer the phone.",
  "Your Google Business Profile is sitting there doing nothing — or worse, pushing leads to competitors.",
  "You rely too heavily on word of mouth and have no system to generate consistent new work.",
  "Competitors with worse skills look more credible online — and win the job first.",
];

const deliverables = [
  "Conversion-focused plumbing website or landing page improvements",
  "Service page structure for high-intent plumbing jobs (blocked drains, hot water, gas fitting, etc.)",
  "Google Business Profile optimisation",
  "Call tracking and lead tracking",
  "Missed-call text back setup",
  "Quote request form optimisation",
  "Review request system",
  "Monthly performance reporting",
];

const benefits = [
  { icon: PhoneCall, title: "More inbound calls", desc: "From people actively searching for a plumber in Perth." },
  { icon: MessageSquare, title: "More quote requests", desc: "Capture leads 24/7, even when you're on a job." },
  { icon: Star, title: "Better local trust", desc: "Look like the most credible plumber in your area." },
  { icon: Zap, title: "Faster lead response", desc: "Automated follow-up so no lead goes cold." },
  { icon: TrendingUp, title: "Fewer missed opportunities", desc: "Stop losing jobs to slower follow-up or weaker online presence." },
  { icon: BarChart3, title: "More jobs from existing traffic", desc: "Get more from the people already visiting your site." },
];

const steps = [
  { num: "01", title: "Audit", desc: "We review your current website, Google profile, and lead flow. We show you exactly where you're losing jobs." },
  { num: "02", title: "Build", desc: "We fix the weak points — your website conversion, local visibility, and follow-up systems." },
  { num: "03", title: "Grow", desc: "We track results and improve performance month over month. You get more calls, more quotes, more booked jobs." },
];

const whyPoints = [
  "Built for local service businesses — not SaaS startups or e-commerce",
  "Focused on booked jobs, not vanity metrics like impressions or clicks",
  "Simple, practical, conversion-first execution",
  "Tailored specifically for Perth plumbing businesses",
];

const faqs = [
  { q: "Is this just a website?", a: "No. This is a customer acquisition system. It includes your website, but also covers Google optimisation, lead capture, missed-call follow-up, review generation, and performance tracking. The website is one piece of a bigger machine." },
  { q: "Do you work only with Perth plumbers?", a: "We work with local service businesses across Australia, but this specific offer is built for plumbing businesses in Perth. The strategy, copy, and setup are all tailored to your local market." },
  { q: "Can this work if I already have a website?", a: "Yes. We can work with your existing site and improve the parts that matter most — conversion, speed, mobile experience, and lead capture. Or we can rebuild if that makes more sense." },
  { q: "Do I need to run ads for this to work?", a: "No. This system is designed to get more from your organic traffic and Google presence first. Ads can be layered on later if you want to scale faster, but they're not required." },
  { q: "What happens in the audit?", a: "We review your website, Google Business Profile, online reviews, and current lead flow. Then we walk you through what's working, what's not, and what to fix first. No cost, no obligation." },
  { q: "How quickly can we get started?", a: "Most clients are fully set up within 2–3 weeks after the audit. Some quick wins — like Google profile fixes and missed-call texting — can be live within days." },
];

const mockMetrics = [
  { label: "Calls This Month", value: "47", trend: "+12%" },
  { label: "Quote Requests", value: "31", trend: "+18%" },
  { label: "Google Reviews", value: "4.8★", trend: "+6 new" },
  { label: "Avg. Response Time", value: "< 2 min", trend: "Automated" },
];

const PerthPlumberLeads = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "", business: "", email: "", phone: "", website: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Perth Plumber Marketing — Get More Booked Jobs | Iron Vault Digital";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "We help Perth plumbers get more calls, quote requests, and booked jobs through better websites, Google optimisation, and lead follow-up systems.");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = new URLSearchParams();
    body.append("form-name", "plumber-leads");
    Object.entries(formData).forEach(([k, v]) => body.append(k, v));

    try {
      await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
      trackFormSubmit("Perth Plumber Leads");
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again or call us directly.");
    }
  };

  const scrollToForm = () => {
    trackCTA("Book Your Free Plumbing Growth Audit");
    document.getElementById("plumber-contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToIncluded = () => {
    trackCTA("See What's Included");
    document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Minimal top bar */}
      <div className="border-b border-border">
        <div className="section-container flex items-center justify-between py-4">
          <span className="text-sm font-semibold tracking-tight text-foreground">Iron Vault Digital</span>
          <button onClick={scrollToForm} className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-xs font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity">
            Book Free Audit
          </button>
        </div>
      </div>

      {/* ─── HERO ─── */}
      <section className="py-20 md:py-32">
        <div className="section-container max-w-4xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease }} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-primary" />
            <span className="label-uppercase">Perth · Plumber Marketing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95]"
          >
            Get More Booked<br />
            <span className="gold-italic font-light">Plumbing Jobs</span> in Perth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="mt-6 text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed"
          >
            We help Perth plumbers turn their website, Google presence, and lead follow-up into a system that generates more calls, quote requests, and booked jobs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button onClick={scrollToForm} className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground font-semibold text-xs tracking-widest uppercase hover:opacity-90 transition-opacity">
              Book Your Free Plumbing Growth Audit
              <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={scrollToIncluded} className="inline-flex items-center justify-center px-7 py-4 border border-border text-foreground font-semibold text-xs tracking-widest uppercase hover:border-primary transition-colors">
              See What's Included
            </button>
          </motion.div>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="section-container max-w-4xl">
          <span className="label-uppercase">The Problem</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter">
            You're doing good work.<br />
            <span className="text-muted-foreground">But you're losing jobs you should be winning.</span>
          </h2>
          <div className="mt-12 space-y-0">
            {problems.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.4, ease }}
                className="flex gap-4 py-5 border-b border-border"
              >
                <span className="text-primary font-mono text-sm mt-0.5">0{i + 1}</span>
                <p className="text-foreground text-sm md:text-base leading-relaxed">{p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTION ─── */}
      <section id="solution" className="py-20 md:py-28 bg-card border-t border-border">
        <div className="section-container max-w-4xl">
          <span className="label-uppercase">The Solution</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter">
            Perth Plumber <span className="gold-text">Lead Engine</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed">
            This isn't just a website. It's a customer acquisition system designed specifically for plumbing businesses in Perth. Every piece is built to generate more calls, capture more leads, and help you book more jobs.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            {deliverables.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.06, duration: 0.4, ease }}
                className="flex items-start gap-3 p-4 border border-border rounded-lg"
              >
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{d}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="section-container max-w-4xl">
          <span className="label-uppercase">What You Get</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter">
            Real outcomes. <span className="text-muted-foreground">Not just deliverables.</span>
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.06, duration: 0.4, ease }}
              >
                <b.icon className="w-5 h-5 text-primary mb-3" />
                <h3 className="text-base font-semibold">{b.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MOCK METRICS ─── */}
      <section className="py-16 bg-card border-t border-b border-border">
        <div className="section-container max-w-4xl">
          <span className="label-uppercase">Performance Dashboard Preview</span>
          <p className="mt-2 text-xs text-muted-foreground">Example of what your monthly reporting looks like.</p>
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {mockMetrics.map((m, i) => (
              <div key={i} className="p-5 border border-border rounded-lg">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{m.label}</p>
                <p className="mt-2 text-2xl md:text-3xl font-bold gold-text">{m.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{m.trend}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="section-container max-w-4xl">
          <span className="label-uppercase">How It Works</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter">
            Three steps. <span className="text-muted-foreground">No complexity.</span>
          </h2>
          <div className="mt-12 space-y-0">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease }}
                className="flex gap-6 py-8 border-b border-border"
              >
                <span className="text-3xl md:text-4xl font-bold gold-text font-mono">{s.num}</span>
                <div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed max-w-lg">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="py-20 md:py-28 bg-card border-t border-border">
        <div className="section-container max-w-4xl">
          <span className="label-uppercase">Why Choose Us</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter">
            Built for plumbers. <span className="text-muted-foreground">Not everyone.</span>
          </h2>
          <div className="mt-10 space-y-4">
            {whyPoints.map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                <p className="text-sm md:text-base text-foreground">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MID CTA ─── */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="section-container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Ready to stop losing jobs<br />
            <span className="gold-text">to weaker competitors?</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
            We'll show you exactly where your current website and lead flow are leaking jobs — and what to fix first.
          </p>
          <button
            onClick={scrollToForm}
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold text-xs tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            Book Your Free Plumbing Growth Audit
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 md:py-28 bg-card border-t border-border">
        <div className="section-container max-w-3xl">
          <span className="label-uppercase">Frequently Asked Questions</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter mb-10">
            Common questions.
          </h2>
          <div className="space-y-0">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-border">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="text-sm md:text-base font-medium pr-4">{f.q}</span>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.2 }}
                    className="pb-5"
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM ─── */}
      <section id="plumber-contact" className="py-20 md:py-28 border-t border-border">
        <div className="section-container max-w-2xl">
          <span className="label-uppercase">Get Started</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter">
            Book Your Free<br />
            <span className="gold-text">Plumbing Growth Audit</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-lg leading-relaxed">
            Fill in your details and we'll be in touch within one business day to schedule your audit. No cost, no obligation.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 p-8 border border-primary/30 rounded-lg text-center"
            >
              <Check className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold">Thanks — we'll be in touch shortly.</h3>
              <p className="mt-2 text-sm text-muted-foreground">We'll review your details and reach out within one business day to book your audit.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input-base"
                />
                <input
                  type="text"
                  placeholder="Business name"
                  required
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className="form-input-base"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input-base"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="form-input-base"
                />
              </div>
              <input
                type="url"
                placeholder="Current website (if any)"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="form-input-base"
              />
              <textarea
                placeholder="Anything else you'd like us to know?"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="form-input-base resize-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold text-xs tracking-widest uppercase hover:opacity-90 transition-opacity"
              >
                Book My Free Audit
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-8 border-t border-border">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Iron Vault Digital. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <MapPin className="w-3 h-3" /> <span>Perth, Western Australia</span>
          </div>
        </div>
      </footer>

      {/* ─── MOBILE STICKY CTA ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden border-t border-border bg-background/95 backdrop-blur-sm p-3">
        <button
          onClick={scrollToForm}
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-semibold text-xs tracking-widest uppercase"
        >
          Book Free Audit
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PerthPlumberLeads;
