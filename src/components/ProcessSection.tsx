import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Discovery", description: "We learn about your goals, audience, and constraints." },
  { number: "02", title: "Strategy", description: "We define the scope, timeline, and deliverables." },
  { number: "03", title: "Build", description: "We design and develop in iterative sprints." },
  { number: "04", title: "Launch", description: "We deploy, test, and hand over with full documentation." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-background">
      <div className="section-container">
        <p className="label-uppercase mb-4">How We Work</p>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-foreground mb-16">
          Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-5xl font-medium text-primary/20 tracking-tighter">{step.number}</span>
              <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
