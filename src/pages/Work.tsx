import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    slug: "coastline-ecommerce",
    num: "01",
    title: "Coastline Surf Co.",
    category: "E-Commerce / Web Design",
    hero: "Took a local surf brand from $12K/mo to $87K/mo in 90 days.",
    brief: "Coastline Surf Co. had a cult following but a website that leaked revenue. We rebuilt their entire digital presence — store, ads, email — and turned fans into buyers.",
    services: ["Web Design & Dev", "Paid Media", "Email Marketing"],
    results: [
      { metric: "625%", label: "Revenue increase" },
      { metric: "4.2x", label: "ROAS on Meta" },
      { metric: "38%", label: "Email open rate" },
      { metric: "2.1s", label: "Page load time" },
    ],
    approach: [
      "Audited the existing Shopify store and identified 14 conversion-killing UX issues.",
      "Rebuilt the storefront with a mobile-first, speed-optimised design focused on product storytelling.",
      "Launched Meta and Google Shopping campaigns with custom audiences built from existing customer data.",
      "Built a 7-part welcome flow and abandoned cart sequence that recovered 22% of lost sales.",
    ],
  },
  {
    slug: "apex-construction",
    num: "02",
    title: "Apex Construction Group",
    category: "Lead Gen / SEO",
    hero: "From page 4 to position 1 — generating 40+ qualified leads per month.",
    brief: "Apex was invisible online. Competitors with half the experience were stealing contracts. We built an SEO engine that made Apex the authority in commercial construction across Sydney.",
    services: ["SEO & Content", "Web Design & Dev", "Brand Strategy"],
    results: [
      { metric: "#1", label: "Google ranking for 12 keywords" },
      { metric: "40+", label: "Leads per month" },
      { metric: "312%", label: "Organic traffic increase" },
      { metric: "$2.4M", label: "Pipeline generated" },
    ],
    approach: [
      "Performed deep competitor and keyword analysis across the commercial construction vertical.",
      "Created 30+ authoritative content pieces targeting high-intent search terms.",
      "Redesigned the website with conversion-focused landing pages for each service area.",
      "Implemented local SEO strategy including Google Business optimisation and citation building.",
    ],
  },
  {
    slug: "revive-wellness",
    num: "03",
    title: "Revive Wellness Clinic",
    category: "Social Media / Brand",
    hero: "Built a brand that went from 800 followers to 28K in 6 months.",
    brief: "Revive had the treatments but zero online presence. We created a brand identity and social strategy that positioned them as the premium wellness destination in Melbourne.",
    services: ["Social Media", "Brand Strategy", "Paid Media"],
    results: [
      { metric: "28K", label: "Instagram followers" },
      { metric: "3,400%", label: "Engagement increase" },
      { metric: "72%", label: "Bookings from social" },
      { metric: "5.8x", label: "ROAS on campaigns" },
    ],
    approach: [
      "Developed a premium brand identity — logo, colour palette, typography, tone of voice.",
      "Created a content calendar mixing educational reels, client transformations, and behind-the-scenes.",
      "Ran targeted Instagram and Facebook campaigns to local audiences within 15km radius.",
      "Built a referral program promoted through social that drove 30% of new bookings.",
    ],
  },
  {
    slug: "ironclad-finance",
    num: "04",
    title: "Ironclad Financial",
    category: "Full Stack / Lead Gen",
    hero: "Complete digital overhaul generating $180K in new business within Q1.",
    brief: "A boutique financial advisory firm that relied entirely on referrals. We built the entire digital infrastructure — brand, website, ads, email — and created a predictable lead pipeline.",
    services: ["Web Design & Dev", "SEO & Content", "Paid Media", "Email Marketing"],
    results: [
      { metric: "$180K", label: "Revenue in Q1" },
      { metric: "86", label: "Qualified leads in 90 days" },
      { metric: "14%", label: "Conversion rate" },
      { metric: "52%", label: "Reduction in CAC" },
    ],
    approach: [
      "Built a trust-first website designed around compliance requirements and credibility signals.",
      "Created a Google Ads strategy targeting high-net-worth search terms with dedicated landing pages.",
      "Developed a lead magnet and email nurture sequence that educated prospects over 14 days.",
      "Implemented CRM integration and lead scoring to prioritise the highest-value prospects.",
    ],
  },
];

const WorkIndex = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-24 md:pb-32">
      <div className="section-container">
        <p className="label-uppercase mb-3">// Our Work</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-6">
          Results That <span className="gold-italic">Speak</span>
        </h1>
        <p className="text-muted-foreground text-sm max-w-xl mb-16">
          Every project is a case study in precision. Here's what happens when strategy meets execution.
        </p>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={`/work/${project.slug}`}
                className="block card-interactive bg-card p-6 md:p-8 group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <span className="text-xs text-muted-foreground font-mono shrink-0">{project.num}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] tracking-[0.2em] text-primary font-semibold uppercase mb-1">{project.category}</p>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">{project.title}</h2>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.hero}</p>
                  </div>
                  <div className="hidden md:grid grid-cols-2 gap-x-8 gap-y-2 shrink-0">
                    {project.results.slice(0, 2).map((r) => (
                      <div key={r.label}>
                        <p className="text-lg font-bold gold-text">{r.metric}</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{r.label}</p>
                      </div>
                    ))}
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

const WorkDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project not found</h1>
          <Link to="/work" className="text-primary hover:underline text-sm">← Back to Work</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-16">
        <div className="section-container">
          <Link to="/work" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-3 h-3" /> Back to Work
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-[10px] tracking-[0.2em] text-primary font-semibold uppercase mb-2">{project.category}</p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-4">{project.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">{project.hero}</p>

            <div className="flex flex-wrap gap-2 mb-12">
              {project.services.map((s) => (
                <span key={s} className="px-3 py-1 border border-border text-[10px] tracking-[0.15em] uppercase text-muted-foreground">{s}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-surface-sunken">
        <div className="section-container">
          <p className="label-uppercase mb-8">// Results</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.results.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <p className="text-3xl md:text-4xl font-bold gold-text mb-1">{r.metric}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{r.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief */}
      <section className="py-16">
        <div className="section-container max-w-3xl">
          <p className="label-uppercase mb-4">// The Brief</p>
          <p className="text-foreground leading-relaxed">{project.brief}</p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 bg-surface-sunken">
        <div className="section-container max-w-3xl">
          <p className="label-uppercase mb-8">// Our Approach</p>
          <div className="space-y-6">
            {project.approach.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <span className="text-primary font-mono text-sm font-bold shrink-0 mt-0.5">0{i + 1}</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Want results like <span className="gold-italic">these</span>?
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
            Let's talk about what Iron Vault Digital can build for your business.
          </p>
          <a href="/#contact" className="inline-block px-8 py-3 border border-primary text-primary text-[11px] tracking-[0.15em] font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
            START A PROJECT
          </a>
        </div>
      </section>

      {/* Next project */}
      <section className="py-12 border-t border-border">
        <div className="section-container">
          <Link to={`/work/${nextProject.slug}`} className="flex items-center justify-between group">
            <div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Next Project</p>
              <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{nextProject.title}</p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export { WorkIndex, WorkDetail, projects };
