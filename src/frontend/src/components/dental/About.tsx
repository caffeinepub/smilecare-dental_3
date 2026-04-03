import { Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const specialties = [
  "Cosmetic & Restorative Dentistry",
  "Pediatric & Family Dentistry",
  "Orthodontics & Invisalign",
  "Dental Implants & Oral Surgery",
  "Emergency Dental Care",
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover aspect-[4/5] max-w-sm mx-auto lg:mx-0">
              <img
                src="/assets/generated/doctor-portrait.dim_400x500.jpg"
                alt="Dr. Sarah Mitchell"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal/30 to-transparent" />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-5 right-0 lg:-right-6 bg-orange text-white rounded-xl px-5 py-4 shadow-card">
              <div className="font-display font-bold text-3xl">15+</div>
              <div className="text-xs font-medium uppercase tracking-wider opacity-90">
                Years of
                <br />
                Experience
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-muted text-teal text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                About the Doctor
              </div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-4">
                Meet Dr. Sarah Mitchell
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dr. Sarah Mitchell has been dedicated to transforming smiles and
                improving lives for over 15 years. A graduate of the University
                of Illinois College of Dentistry, she completed advanced
                training in cosmetic and restorative dentistry at the
                prestigious Pankey Institute.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dr. Mitchell's gentle, patient-centered approach has made her a
                trusted name in Springfield. She believes every patient deserves
                a healthy, beautiful smile — and works tirelessly to make that a
                reality, one visit at a time.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">
                Areas of Expertise
              </h4>
              <ul className="flex flex-col gap-2">
                {specialties.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2
                      size={16}
                      className="text-teal flex-shrink-0"
                    />
                    <span className="text-muted-foreground text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/appointments"
                className="inline-flex items-center justify-center bg-teal hover:bg-teal-dark text-white uppercase text-xs tracking-widest font-semibold px-6 py-3 rounded-md transition-colors"
                data-ocid="about.book_appointment.button"
              >
                Book Appointment
              </Link>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center border border-teal text-teal hover:bg-teal-muted uppercase text-xs tracking-widest font-semibold px-6 py-3 rounded-md transition-colors"
                data-ocid="about.call_us.button"
              >
                Call Us Today
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
