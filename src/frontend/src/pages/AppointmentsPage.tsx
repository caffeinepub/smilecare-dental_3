import { motion } from "motion/react";
import BookingForm from "../components/dental/BookingForm";

export default function AppointmentsPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-background py-14 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-teal-muted text-teal text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              Schedule a Visit
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Book an Appointment
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Choose a convenient time and we'll confirm your appointment within
              24 hours. New patients always welcome.
            </p>
          </motion.div>
        </div>
      </div>

      <BookingForm />

      {/* Insurance & info */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Insurance Accepted",
                desc: "We accept most major dental insurance plans including Delta Dental, Cigna, Aetna, and MetLife.",
              },
              {
                title: "Flexible Financing",
                desc: "No insurance? No problem. We offer flexible in-house payment plans and accept CareCredit.",
              },
              {
                title: "New Patient Special",
                desc: "New patients receive a complimentary cleaning and exam on their first visit. Ask about our welcome offer!",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl border border-border p-6"
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
    </>
  );
}
