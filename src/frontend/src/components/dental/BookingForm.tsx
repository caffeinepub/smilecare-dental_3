import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Clock, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useActor } from "../../hooks/useActor";

const clinicHours = [
  { day: "Monday", hours: "8:00 AM \u2013 6:00 PM" },
  { day: "Tuesday", hours: "8:00 AM \u2013 6:00 PM" },
  { day: "Wednesday", hours: "8:00 AM \u2013 6:00 PM" },
  { day: "Thursday", hours: "8:00 AM \u2013 6:00 PM" },
  { day: "Friday", hours: "8:00 AM \u2013 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM \u2013 3:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  preferredDateTime: string;
  message: string;
}

export default function BookingForm() {
  const { actor } = useActor();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    preferredDateTime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!actor) {
      setError("Service unavailable. Please try again in a moment.");
      return;
    }
    setIsSubmitting(true);
    try {
      await actor.addAppointmentRequest(
        form.name,
        form.email,
        form.phone,
        form.preferredDateTime,
        form.message,
      );
      setIsSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        preferredDateTime: "",
        message: "",
      });
    } catch (_err) {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const today = new Date().toISOString().slice(0, 16);

  return (
    <section id="booking" className="py-20 bg-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Get In Touch
          </div>
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Request an Appointment
          </h2>
          <p className="text-white/75 text-lg max-w-xl mx-auto">
            Fill out the form below and our team will contact you to confirm
            your appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            {isSuccess ? (
              <div
                className="bg-white/10 rounded-xl p-10 flex flex-col items-center justify-center gap-4 text-center h-full min-h-[300px]"
                data-ocid="booking.success_state"
              >
                <CheckCircle2 size={52} className="text-white" />
                <h3 className="font-display text-2xl font-bold text-white">
                  Appointment Requested!
                </h3>
                <p className="text-white/80 max-w-sm">
                  Thank you! We&apos;ve received your request and will call you
                  within 24 hours to confirm your appointment.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="mt-2 text-white/70 hover:text-white text-sm underline transition-colors"
                  data-ocid="booking.new_request.button"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 flex flex-col gap-5"
                data-ocid="booking.form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="name"
                      className="text-white/90 text-sm font-medium"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      autoComplete="name"
                      className="bg-white/15 border-white/30 text-white placeholder:text-white/50 focus:border-white focus:ring-white"
                      data-ocid="booking.name.input"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="email"
                      className="text-white/90 text-sm font-medium"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@example.com"
                      autoComplete="email"
                      className="bg-white/15 border-white/30 text-white placeholder:text-white/50 focus:border-white focus:ring-white"
                      data-ocid="booking.email.input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="phone"
                      className="text-white/90 text-sm font-medium"
                    >
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="(555) 000-0000"
                      autoComplete="tel"
                      className="bg-white/15 border-white/30 text-white placeholder:text-white/50 focus:border-white focus:ring-white"
                      data-ocid="booking.phone.input"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="preferredDateTime"
                      className="text-white/90 text-sm font-medium"
                    >
                      Preferred Date & Time
                    </Label>
                    <Input
                      id="preferredDateTime"
                      name="preferredDateTime"
                      type="datetime-local"
                      value={form.preferredDateTime}
                      onChange={handleChange}
                      min={today}
                      className="bg-white/15 border-white/30 text-white placeholder:text-white/50 focus:border-white focus:ring-white [color-scheme:dark]"
                      data-ocid="booking.datetime.input"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="message"
                    className="text-white/90 text-sm font-medium"
                  >
                    Message or Reason for Visit
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about any concerns, symptoms, or questions..."
                    rows={4}
                    className="bg-white/15 border-white/30 text-white placeholder:text-white/50 focus:border-white focus:ring-white resize-none"
                    data-ocid="booking.message.textarea"
                  />
                </div>

                {error && (
                  <p
                    className="text-red-300 text-sm"
                    data-ocid="booking.error_state"
                  >
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting || !actor}
                  className="bg-orange hover:bg-orange-dark text-white uppercase text-xs tracking-widest font-semibold py-5 w-full sm:w-auto"
                  data-ocid="booking.submit.button"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Request Appointment"
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 h-fit"
          >
            <div className="flex items-center gap-2 mb-5">
              <Clock size={18} className="text-white" />
              <h3 className="font-display font-semibold text-white text-lg">
                Clinic Hours
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {clinicHours.map((item) => (
                <li
                  key={item.day}
                  className="flex items-center justify-between"
                >
                  <span className="text-white/75 text-sm">{item.day}</span>
                  <span
                    className={`text-sm font-medium ${
                      item.hours === "Closed" ? "text-white/40" : "text-white"
                    }`}
                  >
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-white/20">
              <p className="text-white/70 text-xs leading-relaxed">
                Emergency appointments available. Call us at{" "}
                <a href="tel:+15551234567" className="text-white underline">
                  (555) 123-4567
                </a>{" "}
                for urgent care.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
