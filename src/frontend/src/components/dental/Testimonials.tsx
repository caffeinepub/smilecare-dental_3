import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { type Variants, motion } from "motion/react";

const testimonials = [
  {
    id: 1,
    name: "Jennifer Collins",
    initials: "JC",
    avatarColor: "bg-teal text-white",
    rating: 5,
    quote:
      "Dr. Mitchell is absolutely wonderful! I used to dread the dentist, but her warm and gentle approach completely changed that. My teeth have never looked better. I refer all my friends here!",
    treatment: "Teeth Whitening",
  },
  {
    id: 2,
    name: "Marcus Thompson",
    initials: "MT",
    avatarColor: "bg-orange text-white",
    rating: 5,
    quote:
      "Had my dental implant procedure done here \u2014 the results are incredible. Looks and feels completely natural. The whole staff made me feel at ease throughout the entire process.",
    treatment: "Dental Implants",
  },
  {
    id: 3,
    name: "Priya Sharma",
    initials: "PS",
    avatarColor: "bg-violet-500 text-white",
    rating: 5,
    quote:
      "SmileCare is amazing with kids! My two daughters actually look forward to their checkups now. The staff is so patient and the office is so welcoming. Highly recommend for families!",
    treatment: "Family Care",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-teal-muted text-teal text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Patient Stories
          </div>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Thousands of Springfield families trust SmileCare Dental for all
            their oral health needs.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={itemVariants}
              data-ocid={`testimonials.item.${t.id}`}
            >
              <Card className="h-full border border-border hover:shadow-card transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col gap-4 h-full">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }, (_, i) => (
                      <Star
                        key={`star-${t.id}-${i}`}
                        size={14}
                        className="fill-orange text-orange"
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-2 border-t border-border">
                    <Avatar className={`w-10 h-10 ${t.avatarColor}`}>
                      <AvatarFallback className={t.avatarColor}>
                        {t.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm text-foreground">
                        {t.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {t.treatment}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
