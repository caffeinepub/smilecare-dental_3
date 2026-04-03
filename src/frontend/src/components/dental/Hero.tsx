import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[65vh] bg-background flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center py-12 lg:py-0">
        {/* Left: Text */}
        <div className="flex flex-col gap-6 py-8 lg:py-16 lg:pr-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-teal-muted text-teal text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block" />
              Trusted Family Dentistry
            </div>
            <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              Your Smile Is{" "}
              <span className="text-teal italic">Our Priority</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-muted-foreground text-lg leading-relaxed max-w-lg"
          >
            Professional dental care for the whole family. We combine
            cutting-edge technology with a gentle, compassionate approach so
            every visit feels comfortable and stress-free.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button
              asChild
              className="bg-teal hover:bg-teal-dark text-white uppercase text-xs tracking-widest font-semibold px-6 py-5"
              data-ocid="hero.schedule_visit.button"
            >
              <Link to="/appointments">Schedule a Visit</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-border text-foreground hover:bg-muted uppercase text-xs tracking-widest font-semibold px-6 py-5"
              data-ocid="hero.explore_services.button"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-6 pt-2"
          >
            <div className="text-center">
              <div className="font-display font-bold text-2xl text-teal">
                2,500+
              </div>
              <div className="text-xs text-muted-foreground">
                Happy Patients
              </div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="font-display font-bold text-2xl text-teal">
                15+
              </div>
              <div className="text-xs text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="font-display font-bold text-2xl text-teal">
                4.9&#9733;
              </div>
              <div className="text-xs text-muted-foreground">
                Patient Rating
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative hidden lg:block h-[65vh] min-h-[420px]"
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-card-hover">
            <img
              src="/assets/generated/hero-dentist.dim_900x600.jpg"
              alt="Modern dental clinic interior"
              className="w-full h-full object-cover"
            />
            {/* Overlay teal gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal/10 to-transparent" />
          </div>
          {/* Floating badge */}
          <div className="absolute -left-6 top-1/3 bg-white rounded-xl shadow-card px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-muted rounded-full flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-teal"
                role="img"
                aria-label="Verified certification badge"
              >
                <path
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-sm text-foreground">
                Certified Dentists
              </div>
              <div className="text-xs text-muted-foreground">
                ADA Accredited Practice
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
