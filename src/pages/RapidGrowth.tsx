import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

const RapidGrowth = () => {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [formData, setFormData] = useState({ name: "", business: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Perth Landscaper Marketing — Leads in 7 Days | Iron Vault Digital";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "We help Perth landscapers get leads fast. Campaign live in 3 days, real landscaping enquiries within 7 days of launch.");

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
            <div className="absolute inset-4 border border-primary/40 pointer-events-none" />
            <div className="text-center px-6">
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
              <p className="label-uppercase mb-4">// 07 Days — Perth Landscapers</p>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
                Leads = Money.<br />
                Let's Get You Both<br />
                In <span className="gold-italic">7 Days</span>.
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-base md:text-lg text-secondary-foreground max-w-2xl leading-relaxed mb-4">
                Stop waiting for landscaping jobs to come to you. In 7 days, I'll build you a campaign from scratch — targeted at Perth homeowners looking for landscaping work right now. No fluff, no six-week "onboarding." Just a straight-up sprint to fill your pipeline with real enquiries. Sometimes you just need someone to say <span className="italic text-foreground">"let's go"</span> — that's me.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xs text-muted-foreground max-w-xl mb-10">
                This isn't for everyone. Limited spots. When they're gone, they're gone.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  to="/rapid-growth/details"
                  className="px-8 py-3.5 border border-primary text-primary text-[11px] tracking-[0.15em] font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  LEARN MORE
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── LOCK IN YOUR SPOT CTA ─── */}
        <section className="py-20 border-t border-border">
          <div className="section-container max-w-xl text-center">
            <ScrollReveal>
              <p className="text-xs text-muted-foreground mb-8">
                Ready to stop thinking about it and start doing it?
              </p>

              <button
                onClick={scrollToForm}
                className="group relative inline-block mb-4 cursor-pointer bg-transparent border-none"
              >
                <span
                  className="absolute inset-0 -skew-x-3 bg-primary scale-x-105 scale-y-110 rounded-sm"
                  aria-hidden="true"
                />
                <span className="relative text-2xl md:text-4xl font-bold tracking-tight text-foreground px-4 py-2 inline-block">
                  LOCK IN YOUR SPOT
                </span>
              </button>

              <p className="text-xs text-muted-foreground mt-4">
                ↓ Fill in below and we'll be in touch within 24 hours.
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
                    <ChevronRight className="w-5 h-5 text-primary" />
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
