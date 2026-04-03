import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Appointments", to: "/appointments" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          data-ocid="header.logo.link"
        >
          <div className="w-9 h-9 bg-teal rounded-full flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              role="img"
              aria-label="SmileCare tooth logo"
            >
              <path
                d="M12 2C9 2 6 4 6 7C6 9.5 7 11 8 12.5C9 14 9 17 9 19C9 20.1 9.9 21 11 21C11.6 21 12 20.5 12 20V14H12V20C12 20.5 12.4 21 13 21C14.1 21 15 20.1 15 19C15 17 15 14 16 12.5C17 11 18 9.5 18 7C18 4 15 2 12 2Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <div className="font-display font-bold text-lg leading-none text-teal">
              SmileCare
            </div>
            <div className="font-sans text-xs text-muted-foreground tracking-wider uppercase">
              Dental
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-sans text-sm font-medium transition-colors"
              activeProps={{ className: "text-teal font-semibold" }}
              inactiveProps={{ className: "text-foreground hover:text-teal" }}
              data-ocid={`header.nav.${link.label.toLowerCase()}.link`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            to="/appointments"
            className="bg-orange hover:bg-orange-dark text-white uppercase text-xs tracking-widest font-semibold px-5 py-2.5 rounded transition-colors"
            data-ocid="header.book_appointment.button"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          data-ocid="header.mobile_menu.toggle"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 pb-4">
          <nav className="flex flex-col gap-2 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="font-sans text-sm font-medium py-2 border-b border-border last:border-0 transition-colors"
                activeProps={{ className: "text-teal font-semibold" }}
                inactiveProps={{ className: "text-foreground hover:text-teal" }}
                data-ocid={`header.mobile.${link.label.toLowerCase()}.link`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/appointments"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-orange hover:bg-orange-dark text-white uppercase text-xs tracking-widest font-semibold px-4 py-2.5 rounded-md transition-colors"
              data-ocid="header.mobile.book_appointment.button"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
