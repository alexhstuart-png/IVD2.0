import { motion } from "framer-motion";

const reasons = [
  {
    num: "01",
    title: "Results Over Retainers",
    description: "We're not here to send weekly reports and look busy. Every strategy we build is engineered around your specific growth targets.",
  },
  {
    num: "02",
    title: "Full-Stack Digital Firepower",
    description: "No outsourcing, no passing the buck. Our team handles every channel in-house — seamlessly integrated for maximum impact.",
  },
  {
    num: "03",
    title: "Radical Transparency",
    description: "You'll always know where your money goes and what it's doing. Clear data, honest conversations, no smoke and mirrors.",
  },
  {
    num: "04",
    title: "Local Roots, Global Reach",
    description: "Perth-based and proud. We understand the Australian market inside-out while building campaigns with international-grade execution.",
  },
];

const WhySection = () => {
  return (
    <section id="why" className="py-24 md:py-32 bg-background">
      <div className="section-container">
        <p className="label-uppercase mb-3">// 02 — Why Iron Vault</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-16">
          Built <span className="gold-italic">Different.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-border pt-6"
            >
              <span className="text-xs font-mono gold-text">{reason.num}</span>
              <h3 className="text-lg font-semibold text-foreground mt-2 mb-3">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats ribbon */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-10">
          {[
            { val: "100%", label: "Commitment" },
            { val: "0", label: "Fluff. Ever." },
            { val: "∞", label: "Drive to Deliver" },
            { val: "1", label: "Focus: Your Growth" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold gold-text">{s.val}</p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
