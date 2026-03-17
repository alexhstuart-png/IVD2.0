import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const HeroSection = () => {
  return (
    <section className="min-h-[85svh] flex flex-col justify-center pt-16 bg-background relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="label-uppercase mb-6"
        >
          Digital Services Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] max-w-4xl text-foreground"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          Build better digital
          <br />
          products, faster.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
        >
          We design and develop high-performance websites, applications, and
          digital systems for ambitious teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity text-sm"
          >
            Start a Project
            <ArrowRight size={16} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border text-foreground font-medium rounded-xl hover:bg-secondary transition-colors text-sm"
          >
            View Services
          </a>
        </motion.div>
      </div>

      {/* Subtle geometric accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full border border-border/50 opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[30vw] h-[30vw] max-w-[450px] max-h-[450px] rounded-full border border-border/30 opacity-20 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
