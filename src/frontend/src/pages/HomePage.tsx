import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import Hero from "../components/dental/Hero";
import Testimonials from "../components/dental/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Testimonials />
      {/* CTA Banner */}
      <section className="py-16 bg-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-2">
                Ready for a Healthier Smile?
              </h2>
              <p className="text-white/75 text-lg">
                Schedule your visit today — new patients welcome.
              </p>
            </div>
            <Link
              to="/appointments"
              className="flex-shrink-0 inline-flex items-center justify-center bg-white text-teal hover:bg-teal-light/10 hover:text-white border border-white uppercase text-xs tracking-widest font-semibold px-8 py-3.5 rounded-md transition-colors"
              data-ocid="home.book_appointment.button"
            >
              Book an Appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
