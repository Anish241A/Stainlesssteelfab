import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Projects', page: 'projects' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/95 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <span className="text-zinc-900 font-bold text-xl">SS</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-100 tracking-tight">
                Stainless Steel Fabrication
              </h1>
              <p className="text-xs text-gray-400">Premium Metalworks</p>
            </div>
          </button>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  currentPage === item.page
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+918178668710"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all flex items-center space-x-2"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-zinc-900 border-t border-gray-800 fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`px-4 py-3 rounded-lg font-medium text-left transition-all ${
                  currentPage === item.page
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+918178668710"
              className="px-4 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold rounded-lg text-center flex items-center justify-center space-x-2"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
