import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Check, ArrowRight, PhoneCall, MessageSquare, Star, Zap, TrendingUp, MapPin } from "lucide-react";
import { trackCTA, trackFormSubmit } from "@/lib/gtag";

const ease = [0.16, 1, 0.3, 1] as const;

const problems = [
  "Your website looks fine — but it doesn't turn visitors into calls or quote requests.",
  "You miss leads after hours or when you're on a job and can't pick up.",
  "Your Google Business Profile isn't pulling its weight — or it's pushing leads to competitors.",
  "You rely too heavily on word of mouth with no system to bring in consistent new work.",
  "Competitors with worse skills look more credible online — and win the job first.",
];

const deliverables = [
  "Homepage and CTA improvements",
  "Quote form and contact flow fixes",
  "Google Business Profile recommendations",
  "Trust section improvements (reviews, credentials, photos)",
  "Missed-lead follow-up template",
  "Review request system",
  "Simple reporting on the numbers that matter",
];

const outcomes = [
  { icon: PhoneCall, title: "More inbound calls", desc: "From people actively searching for a plumber in Perth." },
  { icon: MessageSquare, title: "More quote requests", desc: "Capture enquiries 24/7, even when you're on a job." },
  { icon: Zap, title: "Faster lead response", desc: "So no enquiry goes cold while you're under a house." },
  { icon: Star, title: "Better local trust", desc: "Look like the most credible plumber in your area." },
  { icon: TrendingUp, title: "Fewer missed jobs", desc: "Stop losing work to slower follow-up or a weaker online presence." },
];

const steps = [
  { num: "01", title: "Audit", desc: "We review your website, Google profile, and enquiry flow to find the biggest leaks costing you jobs." },
  { num: "02", title: "Fix", desc: "We improve the highest-impact parts of your website, trust stack, and lead capture process." },
  { num: "03", title: "Follow Up", desc: "You get the updated assets, clear next steps, and a simple plan to improve results from there." },
];

const whyPoints = [
  "Focused on booked jobs, not vanity metrics like impressions or clicks",
  "Built for local service businesses, not e-commerce brands",
  "Simple, practical fixes you can implement fast",
  "Specific to Perth plumbing businesses",
  "Clear first-step offer with no bloated retainer pitch",
];

const measures = [
  "Inbound calls",
  "Quote requests",
  "Response speed",
  "Review growth",
  "Booked jobs from website enquiries",
];

const faqs = [
  { q: "Is this just a website redesign?", a: "No. The Conversion Sprint fixes the parts of your website, Google profile, and follow-up process that are costing you jobs. Sometimes that means design changes, sometimes it's the form, the trust signals, or how you handle missed calls. We focus on whatever has the biggest impact on booked jobs." },
  { q: "Do you only work with Perth plumbers?", a: "This specific offer is built for plumbing businesses in Perth. The copy, the strategy, and the fixes are all tailored to your local market and the way people search for plumbers here." },
  { q: "Can this work if I already have a website?", a: "Yes. Most plumbers we talk to already have a site — it just isn't converting well. We work with what you've got and fix the parts that matter most." },
  { q: "Do I need to run ads for this to work?", a: "No. This is about getting more from the traffic and enquiries you already have. Ads can come later if you want to scale, but they're not required." },
  { q: "What's the free teardown?", a: "I'll spend 5 minutes reviewing your website and show you the 3 biggest issues likely costing you calls and quote requests. No cost, no obligation — just practical feedback you can use." },
  { q: "How quickly can we get started?", a: "The teardown takes a day or two. If you go ahead with the Conversion Sprint, most clients are fully done within 7 days." },
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
    if (meta) meta.setAttribute("content", "We help Perth plumbers fix the website, trust, and follow-up issues that cost them calls, quote requests, and booked jobs. Get a free 5-minute website teardown.");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = new URLSearchParams();
    body.append("form-name", "plumber-leads");
    Object.entries(formData).forEach(([k, v]) => body.append(k, v));

    try {
      await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
      trackFormSubmit("Perth Plumber Teardown");
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again or call us directly.");
    }
  };

  const scrollToForm = () => {
    trackCTA("Get a Free 5-Minute Website Teardown");
    document.getElementById("plumber-contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSolution = () => {
    trackCTA("See What We Fix");
    document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="border-b border-border">
        <div className="section-container flex items-center justify-between py-4">
          <span className="text-sm font-semibold tracking-tight text-foreground">Iron Vault Digital</span>
          <button onClick={scrollToForm} className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-xs font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity">
            Free Website Teardown
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
            We help Perth plumbers fix the website, trust, and follow-up issues that cost them calls, quote requests, and booked jobs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button onClick={scrollToForm} className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground font-semibold text-xs tracking-widest uppercase hover:opacity-90 transition-opacity">
              Get a Free 5-Minute Website Teardown
              <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={scrollToSolution} className="inline-flex items-center justify-center px-7 py-4 border border-border text-foreground font-semibold text-xs tracking-widest uppercase hover:border-primary transition-colors">
              See What We Fix
            </button>
          </motion.div>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="section-container max-w-4xl">
          <span className="label-uppercase">The Problem</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter">
            You're already getting attention.<br />
            <span className="text-muted-foreground">You're just not converting enough of it into booked jobs.</span>
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
          <span className="label-uppercase">The Fix</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter">
            Perth Plumber <span className="gold-text">Conversion Sprint</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed">
            A simple 7-day project to fix the biggest conversion leaks in your website and lead flow. No bloated retainer. No 6-month contract. Just the fixes that get you more calls and booked jobs.
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

      {/* ─── OUTCOMES ─── */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="section-container max-w-4xl">
          <span className="label-uppercase">Results</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter">
            What changes <span className="text-muted-foreground">after the fixes.</span>
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {outcomes.map((b, i) => (
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

      {/* ─── WHAT WE MEASURE ─── */}
      <section className="py-16 bg-card border-t border-b border-border">
        <div className="section-container max-w-4xl">
          <span className="label-uppercase">What We Measure</span>
          <p className="mt-2 text-xs text-muted-foreground">The numbers that actually matter for a plumbing business.</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {measures.map((m, i) => (
              <div key={i} className="p-5 border border-border rounded-lg text-center">
                <p className="text-sm font-medium text-foreground">{m}</p>
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
            Built for Perth plumbers. <span className="text-muted-foreground">Not everyone.</span>
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
            Losing jobs to competitors<br />
            <span className="gold-text">with worse skills?</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
            I'll show you the 3 biggest issues likely costing you calls and quote requests. Takes 5 minutes. No cost, no obligation.
          </p>
          <button
            onClick={scrollToForm}
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold text-xs tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            Get a Free 5-Minute Website Teardown
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
            Get Your Free<br />
            <span className="gold-text">5-Minute Website Teardown</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-lg leading-relaxed">
            Fill in your details and I'll review your plumbing website and show you the biggest issues likely costing you booked jobs. No cost, no obligation.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 p-8 border border-primary/30 rounded-lg text-center"
            >
              <Check className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold">Thanks — I'll be in touch shortly.</h3>
              <p className="mt-2 text-sm text-muted-foreground">I'll review your site and send through the teardown within one business day.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="form-input-base" />
                <input type="text" placeholder="Business name" required value={formData.business} onChange={(e) => setFormData({ ...formData, business: e.target.value })} className="form-input-base" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="email" placeholder="Email address" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="form-input-base" />
                <input type="tel" placeholder="Phone number" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="form-input-base" />
              </div>
              <input type="url" placeholder="Your current website" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} className="form-input-base" />
              <textarea placeholder="Anything else you'd like me to know?" rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="form-input-base resize-none" />
              <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold text-xs tracking-widest uppercase hover:opacity-90 transition-opacity">
                Get My Free Teardown
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
          Free Website Teardown
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PerthPlumberLeads;
