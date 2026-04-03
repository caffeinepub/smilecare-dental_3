import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import About from "../components/dental/About";

const teamMembers = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Lead Dentist & Founder",
    initials: "SM",
    bio: "DDS, University of Illinois. 15+ years transforming smiles with a gentle, patient-first approach.",
  },
  {
    name: "Dr. James Rivera",
    role: "Orthodontist",
    initials: "JR",
    bio: "Specializing in Invisalign and traditional braces. Certified Invisalign provider with 10+ years of experience.",
  },
  {
    name: "Nurse Linda Park",
    role: "Dental Hygienist",
    initials: "LP",
    bio: "RDH with a passion for preventive care. Patients love her gentle touch and thorough cleanings.",
  },
];

export default function AboutPage() {
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
              About Us
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Meet Our Team
            </h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              A passionate team of dental professionals dedicated to your smile
              and your comfort.
            </p>
          </motion.div>
        </div>
      </div>

      <About />

      {/* Team section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-teal-muted text-teal text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              Our Staff
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              The People Behind Your Smile
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Our experienced team is here to make every visit comfortable,
              efficient, and effective.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background rounded-2xl border border-border p-8 flex flex-col items-center text-center gap-4"
                data-ocid={`about.team.item.${i + 1}`}
              >
                <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center text-white font-display font-bold text-xl">
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-teal text-xs font-semibold uppercase tracking-wider mt-0.5">
                    {member.role}
                  </p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-teal-muted text-teal text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                Our Values
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Why Families Choose SmileCare
              </h2>
              <div className="flex flex-col gap-5">
                {[
                  {
                    title: "Patient-First Care",
                    desc: "We listen before we treat. Your comfort and concerns always come first.",
                  },
                  {
                    title: "Modern Technology",
                    desc: "Digital X-rays, same-day crowns, and advanced sterilization for the safest, fastest care.",
                  },
                  {
                    title: "Transparent Pricing",
                    desc: "No hidden fees. We'll explain all costs and insurance coverage before any treatment begins.",
                  },
                  {
                    title: "Community Roots",
                    desc: "Proudly serving Springfield families since 2009. We know our patients by name.",
                  },
                ].map((val) => (
                  <div key={val.title} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-teal flex-shrink-0 mt-2" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {val.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-2 gap-5"
            >
              {[
                { value: "2,500+", label: "Happy Patients" },
                { value: "15+", label: "Years in Practice" },
                { value: "98%", label: "Satisfaction Rate" },
                { value: "5★", label: "Average Rating" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl border border-border p-6 text-center"
                >
                  <div className="font-display font-bold text-3xl text-teal mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Come Meet Us In Person
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
            We'd love to welcome you to our practice. Book your first
            appointment today.
          </p>
          <Link
            to="/appointments"
            className="inline-flex items-center justify-center bg-white text-teal hover:bg-teal-light/10 hover:text-white border border-white uppercase text-xs tracking-widest font-semibold px-8 py-3.5 rounded-md transition-colors"
            data-ocid="about.cta.book_appointment.button"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
