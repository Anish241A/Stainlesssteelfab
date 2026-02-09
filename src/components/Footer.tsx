import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-900 border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-zinc-900 font-bold">SS</span>
              </div>
              <h3 className="text-lg font-bold text-gray-100">
                Stainless Steel Fabrication
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              India's trusted partner for premium stainless steel fabrication,
              welding, and custom metalworks. Built to last.
            </p>
          </div>

          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', page: 'home' as Page },
                { label: 'About Us', page: 'about' as Page },
                { label: 'Services', page: 'services' as Page },
                { label: 'Projects', page: 'projects' as Page },
                { label: 'Contact', page: 'contact' as Page },
              ].map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => handleNavClick(item.page)}
                    className="text-gray-400 hover:text-gray-200 transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Stainless Steel Welding</li>
              <li>SS Railing Fabrication</li>
              <li>Gate & Grill Works</li>
              <li>Custom Steel Structures</li>
              <li>Industrial Fabrication</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <Phone size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Mail size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@ssfabrication.in"
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                >
                  info@ssfabrication.in
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Mumbai, Maharashtra, India
                </span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Clock size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Mon - Sat: 9:00 AM - 7:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Stainless Steel Fabrication. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
