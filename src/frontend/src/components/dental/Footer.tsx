import { Link } from "@tanstack/react-router";

const currentYear = new Date().getFullYear();

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Appointments", to: "/appointments" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
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
                <div className="font-display font-bold text-lg leading-none">
                  SmileCare
                </div>
                <div className="text-xs text-white/60 tracking-wider uppercase">
                  Dental
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Compassionate, expert dental care for the whole family. Your smile
              is our mission.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white/90 mb-4 uppercase text-xs tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/65 text-sm hover:text-white transition-colors"
                    data-ocid={`footer.${link.label.toLowerCase().replace(/ /g, "_")}.link`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-white/90 mb-4 uppercase text-xs tracking-wider">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-3">
              <div className="text-white/65 text-sm">
                123 Main St, Springfield, IL 62701
              </div>
              <a
                href="tel:+15551234567"
                className="text-white/65 text-sm hover:text-white transition-colors"
                data-ocid="footer.phone.link"
              >
                (555) 123-4567
              </a>
              <a
                href="mailto:hello@smilecare.dental"
                className="text-white/65 text-sm hover:text-white transition-colors"
                data-ocid="footer.email.link"
              >
                hello@smilecare.dental
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            &copy; {currentYear} SmileCare Dental. All rights reserved.
          </p>
          <p className="text-white/45 text-xs">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              className="underline hover:text-white/70 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
