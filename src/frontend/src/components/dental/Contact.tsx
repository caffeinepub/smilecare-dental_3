import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

const contactItems = [
  {
    icon: MapPin,
    label: "Our Location",
    value: "123 Main St, Springfield, IL 62701",
    href: "https://maps.google.com/?q=123+Main+St+Springfield+IL+62701",
    isExternal: true,
    color: "bg-teal-muted text-teal",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 123-4567",
    href: "tel:+15551234567",
    isExternal: false,
    color: "bg-orange/10 text-orange",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@smilecare.dental",
    href: "mailto:hello@smilecare.dental",
    isExternal: false,
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: Clock,
    label: "Opening Hours",
    value: "Mon–Fri: 8am–6pm  |  Sat: 9am–3pm",
    href: null,
    isExternal: false,
    color: "bg-violet-50 text-violet-600",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-teal-muted text-teal text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Find Us
          </div>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We&apos;re here to answer your questions and help you schedule your
            next visit.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {contactItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center ${item.color}`}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm font-medium text-foreground group-hover:text-teal transition-colors">
                    {item.value}
                  </div>
                </div>
              </>
            );

            if (!item.href) {
              return (
                <div
                  key={item.label}
                  className="bg-white rounded-xl p-6 flex flex-col gap-3 shadow-xs border border-border"
                  data-ocid={`contact.${item.label.toLowerCase().replace(/ /g, "_")}.card`}
                >
                  {content}
                </div>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className="bg-white rounded-xl p-6 flex flex-col gap-3 shadow-xs border border-border hover:shadow-card-hover transition-shadow duration-300 group"
                data-ocid={`contact.${item.label.toLowerCase().replace(/ /g, "_")}.link`}
              >
                {content}
              </a>
            );
          })}
        </motion.div>

        {/* CTA to appointments */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-muted-foreground mb-4 text-lg">
            Ready to book your next visit?
          </p>
          <Link
            to="/appointments"
            className="inline-flex items-center justify-center bg-teal hover:bg-teal-dark text-white uppercase text-xs tracking-widest font-semibold px-8 py-3 rounded-md transition-colors"
            data-ocid="contact.book_appointment.button"
          >
            Book an Appointment
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
