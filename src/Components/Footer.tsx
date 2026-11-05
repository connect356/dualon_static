import logo from '../assets/logo2.png';
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-14 px-6 md:px-12 lg:px-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Dualon" className="h-10 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              <strong>Dualon Edtech Private Limited</strong> is a Kerala-based educational platform designed exclusively for CBSE students from Class 1 to 12. Focusing on strengthening Science and Mathematics through monthly high-quality study materials and the annual KYSSO examination.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#33CB98] font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Learn Better. Compete Bigger. Win Bigger.</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#what-is-dualon" className="hover:text-white transition-colors">
                  What is Dualon
                </a>
              </li>
              <li>
                <a href="#study-materials" className="hover:text-white transition-colors">
                  Monthly Study Materials
                </a>
              </li>
              <li>
                <a href="#kysso" className="hover:text-white transition-colors">
                  KYSSO Olympiad
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Contact &amp; Support
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#33CB98]" />
                <a href="mailto:Connect@dualonapp.com" className="hover:text-white transition-colors">
                  Connect@dualonapp.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#33CB98]" />
                <a href="tel:+919567546744" className="hover:text-white transition-colors">
                  +91 95675 46744
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#33CB98]" />
                <span>Kollam, Kerala, India</span>
              </div>
            </div>
            <div className="pt-2 text-xs text-gray-500">
              CBSE Science &amp; Mathematics (Classes 1–12)
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 Dualon Edtech Private Limited. All rights reserved.
          </div>
          <div>
            Built in Kerala, for Kerala CBSE Students.
          </div>
        </div>
      </div>
    </footer>
  );
}
