import { useState } from 'react';
import { Sparkles, Smartphone, Download, UserCheck, CreditCard, BookOpen, PenTool, Trophy, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenRegister: () => void;
}

export default function HowItWorksSection({ onOpenRegister }: HowItWorksProps) {
  const [activeWorkflow, setActiveWorkflow] = useState<'kysso' | 'app'>('kysso');

  const kyssoSteps = [
    {
      step: '01',
      title: 'Register Through School or Dualon Channel',
      desc: 'Students sign up through their participating CBSE school coordinator or directly via our official pre-launch web portal.',
      icon: UserCheck,
    },
    {
      step: '02',
      title: 'Pay One-Time Registration Fee',
      desc: 'Nominal fee: ₹99 for Classes 1–4 (Colouring/Drawing) or ₹299 for Classes 5–12 (OMR Examination). No hidden charges.',
      icon: CreditCard,
    },
    {
      step: '03',
      title: 'Receive Preparation Booklet & Guidelines',
      desc: 'Get the official Dualon preparation curriculum pack, sample papers, and competition blueprint via WhatsApp / email.',
      icon: BookOpen,
    },
    {
      step: '04',
      title: 'Appear for School-Level Examination',
      desc: 'Compete comfortably in your own school environment with customized age-appropriate papers and drawing sheets.',
      icon: PenTool,
    },
    {
      step: '05',
      title: 'Progress to District & State Levels',
      desc: 'Top performers from Classes 5–12 advance to district centers and state finals to battle for Kerala’s highest honors.',
      icon: Rocket,
    },
    {
      step: '06',
      title: 'Grand Mega Event & Dualon App Launch',
      desc: 'Winners receive cash prizes, tablets, and laptops from celebrities, while the Dualon Mobile App is officially inaugurated!',
      icon: Trophy,
    },
  ];

  const appSteps = [
    {
      step: '01',
      title: 'Download the Dualon App',
      desc: 'Available for both Android (Google Play Store) and iOS (Apple App Store) with an intuitive student interface.',
      icon: Download,
    },
    {
      step: '02',
      title: 'Register & Select Class (1 to 12)',
      desc: 'Enter basic student details and pick your CBSE grade to personalize all syllabus modules and practice question banks.',
      icon: UserCheck,
    },
    {
      step: '03',
      title: 'Subscribe for ₹299 / Month',
      desc: 'Transparent pricing inclusive of GST. No lock-in contracts, with complete access to both monthly PDF publications.',
      icon: CreditCard,
    },
    {
      step: '04',
      title: 'Receive 2 High-Quality PDFs Every Month',
      desc: 'Get one CBSE Syllabus-Aligned PDF + one futuristic Frontier Enrichment PDF (Space, AI, Robotics, Genetics) every month.',
      icon: BookOpen,
    },
    {
      step: '05',
      title: 'Appear for Annual KYSSO Free of Cost',
      desc: 'Students with a continuous 12-month subscription earn guaranteed 100% free entry into the annual KYSSO Olympiad!',
      icon: Trophy,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#0E0F13] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#33CB98]/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#9966FF]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#33CB98] uppercase tracking-wider">
            Step-by-Step Experience
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            How Dualon Works: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33CB98] to-[#9966FF]">
              Two Seamless Journeys
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Whether registering for our current pre-launch Olympiad or preparing for the upcoming mobile app subscription, here is your clear roadmap.
          </p>
        </div>

        {/* Workflow Switcher Pills */}
        <div className="max-w-xl mx-auto mb-14 p-1.5 bg-[#14161E] rounded-2xl border border-white/10 flex">
          <button
            onClick={() => setActiveWorkflow('kysso')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeWorkflow === 'kysso'
                ? 'bg-[#33CB98] text-[#0E0F13] shadow-lg'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>KYSSO 2026 Registration (Current)</span>
          </button>

          <button
            onClick={() => setActiveWorkflow('app')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeWorkflow === 'app'
                ? 'bg-[#9966FF] text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Dualon App Subscription (Post-Launch)</span>
          </button>
        </div>

        {/* Workflow 1: KYSSO 2026 Current Registration Steps */}
        {activeWorkflow === 'kysso' ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {kyssoSteps.map((st, i) => {
                const Icon = st.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-[#14161E] border border-white/10 hover:border-[#33CB98]/40 transition-all duration-300 relative group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-black text-[#33CB98] font-mono">
                          {st.step}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white group-hover:text-[#33CB98] transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white leading-snug">
                        {st.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 mt-2.5 leading-relaxed">
                        {st.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-[#33CB98]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Stage Verified</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <button
                onClick={onOpenRegister}
                className="px-8 py-4 rounded-xl font-bold text-sm tracking-wide bg-gradient-to-r from-[#33CB98] to-[#229D73] text-[#0E0F13] hover:shadow-[0_0_30px_rgba(51,203,152,0.4)] transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start KYSSO 2026 Registration Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Workflow 2: Dualon App Post-Launch Subscription Steps */
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
              {appSteps.map((st, i) => {
                const Icon = st.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-[#14161E] border border-white/10 hover:border-[#9966FF]/40 transition-all duration-300 relative group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-black text-[#B892FF] font-mono">
                          {st.step}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white group-hover:text-[#9966FF] transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="text-base font-bold text-white leading-snug">
                        {st.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                        {st.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-[#B892FF]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Seamless Flow</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#14161E] via-[#1B1E29] to-[#14161E] border border-[#9966FF]/30 max-w-3xl mx-auto text-center space-y-3">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B892FF]">
                App Launch Announcement
              </span>
              <h3 className="text-xl font-bold text-white">
                “Subscribe to Dualon for just ₹299/month and get monthly study materials + free entry to KYSSO every year.”
              </h3>
              <p className="text-xs text-gray-300">
                The Dualon App will be officially inaugurated during the KYSSO 2026 State Level Grand Mega Award Ceremony in the presence of eminent guests and dignitaries.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

