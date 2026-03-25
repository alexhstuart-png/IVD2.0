import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    slug: "lead-generation",
    num: "01",
    title: "Lead Generation & SEO",
    category: "Lead Gen / SEO",
    hero: "Dominate search rankings and build a predictable pipeline of qualified leads.",
    brief: "For service-based businesses that need a steady flow of high-quality leads. We combine SEO authority-building with conversion-focused landing pages to turn organic traffic into booked calls and signed contracts.",
    services: ["SEO & Content", "Web Design & Dev", "Brand Strategy"],
    deliverables: [
      "Deep competitor and keyword analysis across your vertical",
      "30+ authoritative content pieces targeting high-intent search terms",
      "Conversion-focused landing pages for each service area",
      "Local SEO strategy including Google Business optimisation",
      "Monthly reporting with keyword tracking and lead attribution",
    ],
    outcomes: [
      { metric: "Page 1 Rankings", description: "Strategic content and technical SEO that earns top positions for money keywords" },
      { metric: "Qualified Leads", description: "Landing pages engineered to convert visitors into booked calls" },
      { metric: "Organic Traffic", description: "Compounding content strategy that grows traffic month over month" },
      { metric: "Pipeline Value", description: "Measurable revenue generated directly from organic search" },
    ],
  },
  {
    slug: "ecommerce-growth",
    num: "02",
    title: "E-Commerce Growth Engine",
    category: "E-Commerce / Web Design",
    hero: "Turn your online store into a revenue machine with a full-stack digital strategy.",
    brief: "We rebuild e-commerce experiences from the ground up — optimising every touchpoint from landing page to checkout. Combined with paid media and automated email flows, we create systems that scale revenue predictably.",
    services: ["Web Design & Dev", "Paid Media", "Email Marketing"],
    deliverables: [
      "Complete store redesign with mobile-first, conversion-optimised UX",
      "Meta & Google Shopping campaign setup with custom audience targeting",
      "Welcome flow, abandoned cart, and post-purchase email sequences",
      "Product page optimisation with A/B testing framework",
      "Analytics dashboard with revenue attribution tracking",
    ],
    outcomes: [
      { metric: "Revenue Growth", description: "Scalable ad spend and email automation driving consistent monthly revenue increases" },
      { metric: "Higher ROAS", description: "Precision-targeted campaigns that maximise every dollar of ad spend" },
      { metric: "Recovered Sales", description: "Automated flows that recapture abandoned carts and re-engage lapsed customers" },
      { metric: "Faster Load Times", description: "Speed-optimised builds that reduce bounce rates and improve conversions" },
    ],
  },
  {
    slug: "social-brand-building",
    num: "03",
    title: "Social Media & Brand Building",
    category: "Social Media / Brand",
    hero: "Build an audience that trusts you, engages with you, and buys from you.",
    brief: "We create brand identities and social strategies that turn businesses into recognised authorities. From content creation to community management to paid promotion — we handle the full social engine.",
    services: ["Social Media", "Brand Strategy", "Paid Media"],
    deliverables: [
      "Complete brand identity — logo, colour palette, typography, tone of voice",
      "Monthly content calendar with reels, carousels, and stories",
      "Community management and audience engagement strategy",
      "Targeted social ad campaigns to local and niche audiences",
      "Referral and UGC programs to amplify organic reach",
    ],
    outcomes: [
      { metric: "Audience Growth", description: "Consistent follower growth through organic content and strategic paid promotion" },
      { metric: "Engagement", description: "Content that stops the scroll and starts conversations" },
      { metric: "Bookings & Sales", description: "Social presence that directly drives revenue, not just vanity metrics" },
      { metric: "Brand Recognition", description: "A cohesive identity that positions you as the premium choice in your market" },
    ],
  },
  {
    slug: "full-digital-overhaul",
    num: "04",
    title: "Full Digital Overhaul",
    category: "Full Stack / Lead Gen",
    hero: "Everything your business needs to dominate online — built from the ground up.",
    brief: "For businesses ready to go all-in. We build the entire digital infrastructure — brand, website, ads, email, SEO — and create a system where every channel feeds into a predictable revenue engine.",
    services: ["Web Design & Dev", "SEO & Content", "Paid Media", "Email Marketing"],
    deliverables: [
      "Trust-first website designed around your industry and audience",
      "Google Ads strategy with dedicated landing pages per service",
      "Lead magnet creation and 14-day email nurture sequence",
      "CRM integration with lead scoring and automated follow-ups",
      "Full analytics setup with cross-channel attribution",
    ],
    outcomes: [
      { metric: "Revenue Pipeline", description: "A complete system generating measurable revenue from multiple channels" },
      { metric: "Qualified Leads", description: "Warm prospects nurtured and scored before they ever speak to your team" },
      { metric: "Higher Conversions", description: "Every touchpoint optimised to move visitors toward action" },
      { metric: "Lower CAC", description: "Efficient spend across channels that reduces your cost to acquire each customer" },
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
          What We <span className="gold-italic">Build</span>
        </h1>
        <p className="text-muted-foreground text-sm max-w-xl mb-16">
          Every engagement is built around results. Here's how we deploy the full arsenal for different business goals.
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
                  <div className="hidden md:flex flex-wrap gap-2 shrink-0 max-w-[200px]">
                    {project.services.map((s) => (
                      <span key={s} className="px-2 py-0.5 border border-border text-[9px] tracking-[0.1em] uppercase text-muted-foreground">{s}</span>
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

      {/* Brief */}
      <section className="py-16 bg-surface-sunken">
        <div className="section-container max-w-3xl">
          <p className="label-uppercase mb-4">// The Approach</p>
          <p className="text-foreground leading-relaxed">{project.brief}</p>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16">
        <div className="section-container max-w-3xl">
          <p className="label-uppercase mb-8">// What You Get</p>
          <div className="space-y-6">
            {project.deliverables.map((step, i) => (
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

      {/* Outcomes */}
      <section className="py-16 bg-surface-sunken">
        <div className="section-container">
          <p className="label-uppercase mb-8">// Expected Outcomes</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.outcomes.map((r, i) => (
              <motion.div
                key={r.metric}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-6 border border-border"
              >
                <p className="text-base font-bold gold-text mb-2">{r.metric}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to <span className="gold-italic">start</span>?
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
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Next</p>
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
