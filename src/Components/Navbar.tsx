import { useState } from 'react';
import logo from '../assets/logo2.png';
import { Menu, X, ArrowRight, User } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'What is Dualon', href: '#what-is-dualon' },
    { name: 'Monthly Materials', href: '#study-materials' },
    { name: 'KYSSO Olympiad', href: '#kysso' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-[#F0F9F6] via-[#F4FBF9] to-[#FFFFFF] text-gray-800 h-20 flex items-center sticky top-0 z-50 px-6 md:px-12 border-b border-emerald-500/10 backdrop-blur-md">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center gap-4">
        
        {/* Left: Dualon Logo */}
        <a href="#hero" className="flex items-center cursor-pointer group shrink-0">
          <img
            src={logo}
            alt="Dualon Edtech Logo"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </a>

        {/* Middle: Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-gray-700">
          <a
            href="#about"
            className="hover:text-[#229D73] transition-colors duration-200"
          >
            About Us
          </a>
          <a
            href="#what-is-dualon"
            className="hover:text-[#229D73] transition-colors duration-200"
          >
            What is Dualon
          </a>
          <a
            href="#study-materials"
            className="hover:text-[#229D73] transition-colors duration-200"
          >
            Monthly Study Materials
          </a>
          <a
            href="#kysso"
            className="hover:text-[#229D73] transition-colors duration-200"
          >
            KYSSO Olympiad
          </a>
          <a
            href="#contact"
            className="hover:text-[#229D73] transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>

        {/* Right: Static Login Button + Contact Action */}
        <div className="hidden md:flex items-center space-x-4 shrink-0">
          <a
            href="#login"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-800 hover:text-[#229D73] transition-colors cursor-pointer"
          >
            <User className="w-4 h-4 text-[#33CB98]" />
            <span>Login</span>
          </a>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-[#06231a] bg-gradient-to-r from-[#48d6a2] to-[#22b083] shadow-[0_8px_20px_-8px_rgba(51,203,152,0.5)] hover:shadow-[0_8px_25px_-6px_rgba(51,203,152,0.7)] transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-gray-700 hover:text-black hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 inset-x-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-xl px-6 py-6 flex flex-col space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-800 hover:text-[#229D73] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <a
              href="#login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl text-sm font-semibold text-gray-800 border border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2 cursor-pointer"
            >
              <User className="w-4 h-4 text-[#33CB98]" />
              <span>Login</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-xl text-sm font-bold text-[#06231a] bg-gradient-to-r from-[#48d6a2] to-[#22b083] shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
