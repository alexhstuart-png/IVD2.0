import { motion } from "framer-motion";
import { Code, Palette, Globe, Shield, Zap, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Design Systems",
    description: "Scalable UI kits, component libraries, and brand documentation.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "High-performance React, Next.js, and modern web applications.",
  },
  {
    icon: Globe,
    title: "Digital Strategy",
    description: "Market analysis, conversion optimization, and growth planning.",
  },
  {
    icon: Shield,
    title: "Security Audits",
    description: "Penetration testing, vulnerability assessments, and compliance.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Speed optimization, Core Web Vitals, and infrastructure tuning.",
  },
  {
    icon: BarChart3,
    title: "Analytics & SEO",
    description: "Data-driven insights, search optimization, and tracking setup.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface-sunken">
      <div className="section-container">
        <p className="label-uppercase mb-4">What We Do</p>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-foreground mb-16">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="card-interactive bg-card p-6 rounded-2xl"
            >
              <service.icon size={24} className="text-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-base font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
