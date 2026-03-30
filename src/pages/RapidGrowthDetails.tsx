import { useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, PhoneCall, Lock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ease = [0.16, 1, 0.3, 1] as const;

const included = [
  { title: "Ad Strategy", desc: "Built specifically for Perth landscapers — targeting homeowners actively searching for outdoor transformations." },
  { title: "Ad Creative & Copywriting", desc: "Scroll-stopping before-and-after creatives and copy that sells your landscaping work." },
  { title: "Lead Capture & Follow-Up", desc: "Automated sequence so no landscaping enquiry goes cold while you're on site." },
  { title: "Daily Optimisation", desc: "We watch the numbers every day and adjust to bring in better quality landscaping leads." },
  { title: "7-Day Performance Report", desc: "Full transparency on what's working, what's not, and what's next." },
];

const tiers = [
  {
    name: "Launch",
    price: "$700",
    period: "/month",
    features: ["Meta Ads management", "Ad creatives & copy", "SMS/email follow-up sequence", "Basic data collection & reporting"],
    highlight: false,
  },
  {
    name: "Scale",
    price: "$1,500",
    period: "/month",
    features: ["Everything in Launch", "Advanced ad management, chosen to best optimise returns", "Retargeting campaigns", "Custom landing page", "Lead nurture sequence", "Google Business Profile optimisation", "Review generation system", "Advanced data collection & reporting"],
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

const RapidGrowthDetails = () => {
  useEffect(() => {
    document.title = "How It Works — Perth Landscaper Marketing | Iron Vault Digital";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background pt-16">
        {/* ─── BACK LINK ─── */}
        <div className="section-container max-w-4xl pt-8">
          <Link to="/rapid-growth" className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono tracking-wide">
            ← Back to offer
          </Link>
        </div>

        {/* ─── GUARANTEE ─── */}
        <section className="py-20 border-b border-border">
          <div className="section-container max-w-4xl">
            <ScrollReveal>
              <p className="label-uppercase mb-6">// The Guarantee</p>
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-10 leading-tight">
                Live in 3 days. Leads within 7 days of launch.<br />
                <span className="gold-text">Or we keep going — at no extra cost.</span>
              </h1>
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
        <section className="py-20 border-b border-border">
          <div className="section-container max-w-4xl">
            <ScrollReveal>
              <p className="label-uppercase mb-4">// What's Included</p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">Everything you need to start booking landscaping jobs — fast.</h2>
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
        <section className="py-20 border-b border-border">
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
          </div>
        </section>

        {/* ─── AFTER 7 DAYS ─── */}
        <section className="py-20 border-b border-border">
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
        <section className="py-20 border-b border-border">
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
                      tier.highlight ? "border-primary/50" : "border-border"
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

        {/* ─── BOTTOM CTA ─── */}
        <section className="py-20">
          <div className="section-container max-w-xl text-center">
            <ScrollReveal>
              <p className="text-sm text-muted-foreground mb-6">Seen enough?</p>
              <Link
                to="/rapid-growth#contact"
                className="px-8 py-3.5 border border-primary text-primary text-[11px] tracking-[0.15em] font-semibold hover:bg-primary hover:text-primary-foreground transition-all inline-block"
              >
                LOCK IN YOUR SPOT →
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default RapidGrowthDetails;
