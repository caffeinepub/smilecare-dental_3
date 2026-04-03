import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Smile, Sparkles, Star } from "lucide-react";
import { type Variants, motion } from "motion/react";

const ToothIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    role="img"
    aria-label="Tooth icon"
  >
    <path d="M12 2C9 2 6 4 6 7C6 9.5 7 11 8 12.5C9 14 9 17 9 19C9 20.1 9.9 21 11 21C11.6 21 12 20.5 12 20V14H12V20C12 20.5 12.4 21 13 21C14.1 21 15 20.1 15 19C15 17 15 14 16 12.5C17 11 18 9.5 18 7C18 4 15 2 12 2Z" />
  </svg>
);

const services = [
  {
    id: 1,
    icon: Star,
    title: "Teeth Whitening",
    description:
      "Achieve a brilliantly bright smile with our professional-grade whitening treatments. Safe, effective, and long-lasting results in as little as one session.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    id: 2,
    icon: ToothIcon,
    title: "Dental Implants",
    description:
      "Replace missing teeth with natural-looking, durable implants. Our state-of-the-art implant procedures restore function and confidence permanently.",
    color: "bg-teal-muted text-teal",
  },
  {
    id: 3,
    icon: Sparkles,
    title: "Routine Cleanings",
    description:
      "Preventive care is the foundation of great oral health. Our thorough cleanings and checkups catch issues early and keep your smile healthy year-round.",
    color: "bg-sky-50 text-sky-600",
  },
  {
    id: 4,
    icon: Smile,
    title: "Braces & Invisalign",
    description:
      "Straighten your teeth discreetly with Invisalign clear aligners or traditional braces. Custom treatment plans for teens and adults.",
    color: "bg-violet-50 text-violet-600",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-teal-muted text-teal text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            What We Offer
          </div>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Our Primary Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Comprehensive dental care tailored to you. From preventive
            treatments to full cosmetic transformations.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                data-ocid={`services.item.${service.id}`}
              >
                <Card className="h-full border border-border hover:shadow-card-hover transition-shadow duration-300 group">
                  <CardContent className="p-6 flex flex-col gap-4 h-full">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${service.color}`}
                    >
                      <Icon />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-auto pt-2">
                      <Link
                        to="/appointments"
                        className="inline-flex items-center gap-1 text-teal text-sm font-semibold hover:gap-2 transition-all"
                        data-ocid={`services.learn_more.${service.id}.link`}
                      >
                        Learn More <ArrowRight size={14} />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
