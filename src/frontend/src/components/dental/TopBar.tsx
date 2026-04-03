import { MapPin, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-teal py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-2 sm:gap-6">
        <a
          href="tel:+15551234567"
          className="flex items-center gap-1.5 text-white text-xs hover:text-teal-light transition-colors"
          data-ocid="topbar.phone.link"
        >
          <Phone size={12} />
          <span>(555) 123-4567</span>
        </a>
        <div className="flex items-center gap-1.5 text-white text-xs">
          <MapPin size={12} />
          <span>123 Main St, Springfield, IL</span>
        </div>
      </div>
    </div>
  );
}
