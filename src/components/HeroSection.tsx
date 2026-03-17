import { motion } from "framer-motion";
import vaultGraphic from "@/assets/vault-graphic.png";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: "100%", label: "COMMITMENT" },
  { value: "0", label: "FLUFF. EVER." },
  { value: "∞", label: "DRIVE TO DELIVER" },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 bg-background relative overflow-hidden">
      <div className="section-container relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-12">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-primary" />
            <span className="label-uppercase">WA · Digital Marketing Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.95] text-foreground"
          >
            Iron<br />
            <span className="gold-italic font-light">Vault</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="mt-6 text-muted-foreground max-w-md leading-relaxed"
          >
            Your Brand. Secured. Amplified. Unleashed.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease }}
            className="mt-3 text-sm text-muted-foreground max-w-md leading-relaxed"
          >
            We lock in results for businesses that refuse to settle. From strategy to execution — every campaign built like a vault. Impenetrable. Powerful. Yours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-primary-foreground font-semibold text-[11px] tracking-[0.12em] uppercase hover:opacity-90 transition-opacity"
            >
              Open the Vault
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-border text-foreground font-semibold text-[11px] tracking-[0.12em] uppercase hover:border-primary transition-colors"
            >
              Our Arsenal
            </a>
          </motion.div>
        </div>

        {/* Vault graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="hidden lg:block flex-shrink-0 w-[500px] h-[500px]"
        >
          <img src={vaultGraphic} alt="" className="w-full h-full object-contain invert opacity-60" />
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease }}
        className="section-container mt-auto pb-8"
      >
        <div className="flex justify-end gap-12 md:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-right">
              <p className="text-2xl md:text-3xl font-bold gold-text">{stat.value}</p>
              <p className="text-[9px] tracking-[0.15em] uppercase text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scrolling marquee */}
      <div className="border-t border-b border-border py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="text-xs tracking-[0.1em] text-muted-foreground mx-0">
              SEO & Content <span className="gold-text mx-4">✦</span>
              Paid Media <span className="gold-text mx-4">✦</span>
              Social Media Management <span className="gold-text mx-4">✦</span>
              Web Design & Dev <span className="gold-text mx-4">✦</span>
              Email Marketing <span className="gold-text mx-4">✦</span>
              Brand Strategy <span className="gold-text mx-4">✦</span>
              Google Ads <span className="gold-text mx-4">✦</span>
              Meta Ads <span className="gold-text mx-4">✦</span>
              Analytics & Reporting <span className="gold-text mx-4">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
