import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const cases = [
  {
    tag: "AI Platform — Mining",
    title: "Shift Intelligence Platform",
    subtitle: "Gold Mining Operation, Kalgoorlie WA",
    body:
      "A fixed plant gold mining operation was losing hours of production every month to slow fault diagnosis and zero shift handover process. We built a purpose-built AI platform that lets tradies log shifts in 2 minutes, diagnose faults in real time using AI, and automatically emails structured reports to supervisors at the end of every shift. The platform launched and was adopted by the site team immediately — no training required.",
    results: [
      { value: "2 min", label: "Average shift log time" },
      { value: "AI", label: "Real time fault diagnosis" },
      { value: "Auto", label: "Daily + weekly reports" },
      { value: "Live", label: "On site, in production" },
    ],
  },
  {
    tag: "Website + Digital Presence — Industrial",
    title: "ARRO Weld & Rubber Lining",
    subtitle: "Boilermaking & Industrial Services, WA",
    body:
      "ARRO Weld needed a professional digital presence to match the quality of their work. We built their website, Google Business Profile, LinkedIn presence, capability statement, and email signatures from scratch. ARRO Weld went from zero online presence to a complete professional brand ready to pitch to tier 1 mining contractors.",
    results: [
      { value: "0 → Complete", label: "Digital presence" },
      { value: "GBP", label: "Google Business Profile live" },
      { value: "LinkedIn", label: "Company page launched" },
      { value: "Full", label: "Capability statement" },
    ],
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-24 md:py-32 bg-surface-sunken">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <p className="label-uppercase mb-5">// Case Studies</p>
          <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-foreground leading-[1.05]">
            Real work. <span className="italic gold-text">Real results.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              className="relative bg-card rounded-md border border-border overflow-hidden"
            >
              {/* Gold top border */}
              <div className="h-[2px] bg-gradient-to-r from-primary via-primary/60 to-transparent" />

              <div className="p-8 md:p-10">
                <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 font-mono text-[9px] tracking-[0.18em] uppercase gold-text rounded-sm mb-6">
                  {c.tag}
                </span>

                <h3 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground font-mono">{c.subtitle}</p>

                <p className="mt-6 text-sm md:text-[15px] text-foreground/80 leading-relaxed">
                  {c.body}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 py-6 border-y border-border">
                  {c.results.map((r) => (
                    <div key={r.label}>
                      <p className="font-serif text-xl md:text-2xl gold-text leading-none">
                        {r.value}
                      </p>
                      <p className="mt-2 text-[11px] text-muted-foreground leading-snug">
                        {r.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
