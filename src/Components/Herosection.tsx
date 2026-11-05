import heroImage from '../assets/cover_img.png';
import { ArrowRight, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Herosection({ onOpenContact }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-80px)] flex items-center bg-gradient-to-r from-[#F0F9F6] via-[#F4FBF9] to-[#FFFFFF] bg-[length:200%_auto] text-gray-800 px-6 md:px-12 lg:px-20 py-12 lg:py-16 overflow-hidden">
      
      {/* Subtle grid background texture overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* LEFT SIDE: Content */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center items-start text-left space-y-6 md:space-y-7">
          
          {/* Top Status Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F8F2] border border-[#33CB98]/30 text-xs font-bold text-[#177153]">
            <span className="flex h-2 w-2 rounded-full bg-[#33CB98]"></span>
            <span>Kerala’s Exciting Science &amp; Mathematics Platform</span>
            <span className="text-gray-400">•</span>
            <span>CBSE Classes 1 to 12</span>
          </div>

          {/* Typography Header Stack */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-[1.15] tracking-tight">
              <span>Learn. Compete. </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#229D73] via-[#33CB98] to-[#4FD1C5]">
                Win.
              </span>
              <span className="block mt-1 sm:mt-2 text-gray-900">
                with Dualon Edtech
              </span>
            </h1>
          </div>

          {/* Supporting Copy Description Text */}
          <p className="text-base sm:text-lg text-gray-600 font-medium max-w-2xl leading-relaxed">
            <strong className="text-gray-900 font-semibold">Dualon Edtech</strong> is a Kerala-based educational platform designed exclusively for CBSE students from <strong className="text-gray-900 font-semibold">Class 1 to 12</strong>. We focus on strengthening Science and Mathematics through high-quality monthly study materials and an annual examination system called <strong className="text-gray-900 font-semibold">KYSSO</strong>.
          </p>

          {/* Tagline Badges */}
          <div className="flex flex-wrap gap-2 text-xs font-semibold text-gray-700">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200/80 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#33CB98]" />
              Empowering Young Minds
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200/80 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#33CB98]" />
              Learn Better. Compete Bigger. Win Bigger.
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200/80 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#33CB98]" />
              Where Learning Meets Opportunity
            </span>
          </div>

          {/* Call-to-Action Action Buttons Wrapper */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto pt-2">
            <a 
              href="#about" 
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#06231a] cursor-pointer bg-gradient-to-r from-[#48d6a2] to-[#22b083] shadow-[0_8px_25px_-6px_rgba(51,203,152,0.6)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Discover Dualon</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button 
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200 shadow-sm cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-gray-500" />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Quick Feature Tickers */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-gray-200/60 w-full text-xs text-gray-600 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#229D73] shrink-0" />
              <span>Classes 1 to 12 (CBSE)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#229D73] shrink-0" />
              <span>Physics, Chemistry, Maths &amp; Bio</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#229D73] shrink-0" />
              <span>Annual KYSSO Olympiad</span>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE: Cartoon Girl Image Showcase */}
        <div className="col-span-1 lg:col-span-5 flex justify-center items-center w-full relative h-full">
          {/* Soft ambient mint glow */}
          <div className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-emerald-400/20 rounded-full blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          
          <img 
            src={heroImage} 
            className="w-auto h-auto max-h-[480px] sm:max-h-[540px] lg:max-h-[580px] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            alt="Dualon Student - Learn & Win" 
          />
        </div>

      </div>
    </section>
  );
}
