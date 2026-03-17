import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    icon: "🔍",
    title: "SEO & Content",
    description: "Dominate search rankings with strategy-first SEO. We build content that earns authority and converts visitors into revenue.",
  },
  {
    num: "02",
    icon: "⚡",
    title: "Paid Media",
    description: "Google, Meta, TikTok — we run high-performance ad campaigns that stretch every dollar and crush your ROAS targets.",
  },
  {
    num: "03",
    icon: "📱",
    title: "Social Media",
    description: "Scroll-stopping content. Community growth. Brand voice that hits different. We manage it all so you can focus on running your business.",
  },
  {
    num: "04",
    icon: "🖥",
    title: "Web Design & Dev",
    description: "Sites built to convert, not just impress. Fast, sharp, and engineered with intent from first click to final checkout.",
  },
  {
    num: "05",
    icon: "✉️",
    title: "Email Marketing",
    description: "Flows and campaigns that print money. We build sequences that nurture, retain, and consistently drive revenue on autopilot.",
  },
  {
    num: "06",
    icon: "🎯",
    title: "Brand Strategy",
    description: "Identity. Positioning. Story. We forge brands that are impossible to ignore — built to last, built to lead.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface-sunken">
      <div className="section-container">
        <p className="label-uppercase mb-3">// 01 — What We Do</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-16">
          The Full <span className="gold-italic">Arsenal</span>
        </h2>
        <p className="text-muted-foreground text-sm max-w-xl mb-12 -mt-10">
          Every weapon in the digital armoury — deployed with precision, built for your specific battlefield.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="card-interactive bg-card p-6 group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{service.icon}</span>
                <span className="text-xs text-muted-foreground font-mono">{service.num}</span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
              <a href="#contact" className="text-xs font-semibold gold-text hover:underline">
                Enquire →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
