import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import Services from "../components/dental/Services";

export default function ServicesPage() {
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
              What We Offer
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Our Dental Services
            </h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Comprehensive care for every smile — from routine checkups to
              complete smile makeovers.
            </p>
          </motion.div>
        </div>
      </div>

      <Services />

      {/* Extended services list */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Additional Treatments
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Beyond our primary services, we offer a full spectrum of dental
              care to meet every need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Root Canal Therapy",
                desc: "Gentle, effective treatment to save infected teeth and relieve pain — often completed in a single comfortable visit.",
              },
              {
                title: "Dental Crowns & Bridges",
                desc: "Restore damaged or missing teeth with natural-looking crowns and bridges custom-crafted for your smile.",
              },
              {
                title: "Veneers",
                desc: "Porcelain veneers that transform chipped, stained, or misshapen teeth into a picture-perfect smile.",
              },
              {
                title: "Night Guards",
                desc: "Custom-fitted night guards to protect your teeth from grinding and clenching while you sleep.",
              },
              {
                title: "Pediatric Dentistry",
                desc: "Friendly, gentle dental care for children of all ages, building healthy habits from the very first visit.",
              },
              {
                title: "Emergency Dental Care",
                desc: "Same-day appointments for dental emergencies. Don't wait — call us and we'll see you as soon as possible.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl border border-border p-6 hover:shadow-card transition-shadow duration-300"
              >
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
              Book your appointment today and let us create the smile you've
              always wanted.
            </p>
            <Link
              to="/appointments"
              className="inline-flex items-center justify-center bg-white text-teal hover:bg-teal-light/10 hover:text-white border border-white uppercase text-xs tracking-widest font-semibold px-8 py-3.5 rounded-md transition-colors"
              data-ocid="services.book_appointment.button"
            >
              Book an Appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
