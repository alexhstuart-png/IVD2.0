import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className="text-center max-w-md"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-8">
          <CheckCircle size={32} className="text-success" strokeWidth={1.5} />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-4">
          Request Received
        </h1>

        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
          We've received your brief. Our team will review it and get back to you within a few hours.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-[11px] tracking-[0.12em] uppercase hover:opacity-90 transition-opacity"
        >
          <ArrowLeft size={16} />
          Return Home
        </Link>
      </motion.div>
    </div>
  );
};

export default Success;
