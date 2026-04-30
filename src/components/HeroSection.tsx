import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: "$80,000", label: "Cost per hour of mining downtime" },
  { value: "AI-Powered", label: "Every platform we build" },
  { value: "Kalgoorlie, WA", label: "Built on site knowledge" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 bg-background grain-overlay overflow-hidden">
      {/* Subtle radial light */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 30%, hsl(var(--primary) / 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="section-container relative z-10 flex-1 flex flex-col justify-center py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="w-10 h-px bg-primary" />
          <span className="label-uppercase">Iron Vault Digital · Kalgoorlie WA</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="font-serif text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight text-foreground max-w-5xl"
        >
          Built for industries
          <br />
          <span className="italic text-foreground/95">
            that can't afford{" "}
            <span className="gold-underline gold-text not-italic font-serif">downtime</span>
            <span className="not-italic">.</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
        >
          Iron Vault Digital builds AI-powered platforms and digital tools for mining,
          industrial, and trade businesses. We don't just build websites — we build systems
          that solve real problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55, ease }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/work"
            className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground font-mono text-[11px] tracking-[0.15em] uppercase font-semibold rounded-sm hover:opacity-90 transition-opacity"
          >
            See Our Work
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-4 border border-primary text-primary font-mono text-[11px] tracking-[0.15em] uppercase font-semibold rounded-sm hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Stat tiles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease }}
        className="relative z-10 border-t border-border"
      >
        <div className="section-container grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {stats.map((s) => (
            <div key={s.label} className="py-8 md:py-10 md:px-10 first:md:pl-0 last:md:pr-0">
              <p className="font-serif text-3xl md:text-4xl gold-text">{s.value}</p>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed max-w-[18rem]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
