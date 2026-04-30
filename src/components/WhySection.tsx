import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const points = [
  {
    title: "Industry Knowledge",
    body:
      "We work in mining and trade industries. We understand shift patterns, downtime costs, and what a tradie actually needs on a tablet mid-shift. That knowledge is built into everything we build.",
  },
  {
    title: "AI-First",
    body:
      "Every platform we build has AI built in from day one — not bolted on. Real AI that reads your data and gives your team useful answers, not generic chatbots.",
  },
  {
    title: "Built To Last",
    body:
      "We don't disappear after launch. Monthly retainers mean we're always improving, always supporting, and always accountable for the platform performing.",
  },
  {
    title: "Kalgoorlie Based",
    body:
      "We're based in Kalgoorlie. We understand the Goldfields mining industry from the inside. That's not something you get from a Perth or Sydney agency.",
  },
];

const WhySection = () => {
  return (
    <section id="why" className="py-24 md:py-32 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <p className="label-uppercase mb-5">// Why Us</p>
          <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-foreground leading-[1.05]">
            We've worked in the industries{" "}
            <span className="italic gold-text">we build for.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="font-serif text-2xl md:text-[2rem] leading-[1.25] text-foreground/95">
              Most agencies build websites.
              <br />
              <span className="italic gold-text">
                We build tools that run on mine sites at 2am when the crusher goes down.
              </span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
              >
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase gold-text mb-3">
                  0{i + 1} — {p.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
