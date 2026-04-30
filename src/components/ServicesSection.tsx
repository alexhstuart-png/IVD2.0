import { motion } from "framer-motion";
import { Cpu, LineChart, Globe, ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    icon: Cpu,
    featured: true,
    label: "Core Service",
    title: "AI-Powered Industry Platforms",
    body:
      "Custom platforms built for mining, resources, and industrial operations. Shift intelligence systems, fault diagnosis tools, automated reporting, and operational dashboards. Built to reduce downtime, capture institutional knowledge, and give supervisors the information they need before the next shift starts.",
    tag: "Custom build + ongoing support",
  },
  {
    icon: LineChart,
    label: null,
    title: "Digital Marketing",
    body:
      "SEO, Google Business Profile, social media, and content strategy for trade and industrial businesses. We understand your industry because we've worked in it. No fluff — just work that brings in customers.",
    tag: "Ongoing monthly retainer",
  },
  {
    icon: Globe,
    label: null,
    title: "Business Websites",
    body:
      "Clean, fast, professional websites for tradies and small businesses. Built to convert visitors into customers. No page builders, no templates — every site is built to suit the business.",
    tag: "Built to suit your business",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <p className="label-uppercase mb-5">// Our Work</p>
          <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-foreground leading-[1.05]">
            We build tools <span className="italic gold-text">people actually use.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed">
            From AI-powered mining platforms to digital marketing for trade businesses —
            everything we build is purpose-built for the client, not copied from a template.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                className={`group relative flex flex-col p-8 rounded-md bg-card border transition-colors ${
                  s.featured
                    ? "border-primary/60 hover:border-primary"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {s.featured && (
                  <span className="absolute -top-3 left-8 px-3 py-1 bg-primary text-primary-foreground font-mono text-[9px] tracking-[0.18em] uppercase rounded-sm">
                    {s.label}
                  </span>
                )}

                <div className="w-12 h-12 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                  <Icon size={20} className="gold-text" strokeWidth={1.5} />
                </div>

                <h3 className="font-serif text-2xl md:text-[1.75rem] text-foreground leading-tight mb-4">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {s.body}
                </p>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase gold-text mb-4">
                    {s.tag}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] font-mono uppercase font-semibold text-foreground group-hover:gold-text transition-colors"
                  >
                    Learn More
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
