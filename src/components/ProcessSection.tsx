import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    title: "Discovery",
    body:
      "We sit down and understand the problem. Not the website — the actual operational problem you need solved.",
  },
  {
    title: "Build",
    body:
      "We build fast using modern AI-powered tools. Most platforms are live within 2–4 weeks.",
  },
  {
    title: "Launch",
    body:
      "We deploy, test on site, and make sure your team can use it without any training.",
  },
  {
    title: "Improve",
    body:
      "Monthly retainer means we keep improving the platform based on real feedback from real users.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 md:py-32 bg-surface-sunken">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <p className="label-uppercase mb-5">// How We Work</p>
          <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-foreground leading-[1.05]">
            From idea to live platform —{" "}
            <span className="italic gold-text">fast.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Horizontal connector */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="relative"
              >
                <div className="relative w-12 h-12 rounded-full bg-background border border-primary flex items-center justify-center mb-6 z-10">
                  <span className="font-mono text-xs gold-text font-semibold">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
