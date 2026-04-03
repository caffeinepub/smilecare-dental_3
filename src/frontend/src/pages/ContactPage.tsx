import { motion } from "motion/react";
import Contact from "../components/dental/Contact";

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-teal py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              Get In Touch
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Have a question? We'd love to hear from you. Reach out through any
              of the channels below.
            </p>
          </motion.div>
        </div>
      </div>

      <Contact />

      {/* Map embed section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">
              Find Us
            </h2>
            <p className="text-muted-foreground text-lg">
              123 Main Street, Springfield, IL 62701
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden border border-border shadow-card h-72 bg-teal-muted flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-teal font-display font-bold text-xl mb-2">
                SmileCare Dental
              </div>
              <div className="text-muted-foreground text-sm">
                123 Main Street, Springfield, IL 62701
              </div>
              <a
                href="https://maps.google.com/?q=123+Main+St+Springfield+IL+62701"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-4 bg-teal hover:bg-teal-dark text-white uppercase text-xs tracking-widest font-semibold px-6 py-2.5 rounded-md transition-colors"
                data-ocid="contact.get_directions.button"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
