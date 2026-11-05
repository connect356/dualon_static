import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  onOpenRegister: () => void;
}

export default function PricingSection({ onOpenRegister }: PricingProps) {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const faqs = [
    {
      q: 'What is included in the ₹299/month Dualon subscription?',
      a: 'The monthly subscription gives you access to two curated publications every month: 1) A comprehensive CBSE Syllabus-Aligned PDF covering Physics, Chemistry, Mathematics, and Biology with concept summaries and practice questions, and 2) A futuristic Frontier Enrichment PDF exploring topics like Astronomy, AI, Robotics, Space Science, and Genetics. Furthermore, maintaining a 12-month continuous subscription grants you 100% free registration for the annual KYSSO examination every year!',
    },
    {
      q: 'How does KYSSO 2026 differ from the upcoming app subscription?',
      a: 'KYSSO 2026 is a special one-time pre-launch edition conducted before the mobile app officially launches. Students can participate by paying a one-time registration fee (₹99 for Classes 1–4, ₹299 for Classes 5–12). The Dualon mobile application will be formally launched during the mega prize distribution gala of this edition!',
    },
    {
      q: 'Are the prizes real cash and gadgets?',
      a: 'Yes! School level winners receive official certificates, medals, and school prizes. Starting from the District Level, winners receive cash prizes and district certificates. State level toppers win major cash prizes, high-performance tablets, and laptops presented at a celebrity gala.',
    },
    {
      q: 'Is Dualon strictly aligned with the CBSE syllabus?',
      a: 'Yes. All our monthly syllabus materials and Olympiad papers are calibrated specifically for CBSE students from Class 1 to Class 12 in Kerala, directly complementing their school curriculum.',
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-[#0E0F13] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#9966FF]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-[#33CB98]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33CB98]/15 border border-[#33CB98]/30 text-xs font-bold text-[#33CB98] uppercase tracking-wider">
            Affordable &amp; Transparent
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Simple Pricing Built for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33CB98] to-[#9966FF]">
              Every Kerala Family
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            High-caliber STEM education and state-level competition without expensive coaching institute fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          
          {/* Card 1: KYSSO 2026 Special Pre-Launch Entry */}
          <div className="p-8 rounded-3xl bg-[#14161E] border border-white/10 hover:border-[#33CB98]/50 transition-all duration-300 relative flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#33CB98]/15 text-[#33CB98] border border-[#33CB98]/30">
                  Current Special Edition
                </span>
                <span className="text-xs text-gray-400">One-Time Fee</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">KYSSO 2026 Olympiad</h3>
              <p className="text-xs text-gray-400 mt-1">
                One-time entry for Kerala CBSE students (Classes 1–12)
              </p>

              <div className="my-6 p-4 rounded-2xl bg-[#0E0F13] border border-white/5 space-y-2">
                <div className="flex items-baseline justify-between border-b border-white/5 pb-2">
                  <span className="text-xs text-gray-300">Classes 1 &amp; 2 (Colouring):</span>
                  <span className="text-xl font-black text-white">₹99</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-white/5 pb-2">
                  <span className="text-xs text-gray-300">Classes 3 &amp; 4 (Drawing):</span>
                  <span className="text-xl font-black text-white">₹99</span>
                </div>
                <div className="flex items-baseline justify-between pt-1">
                  <span className="text-xs text-gray-300">Classes 5 to 12 (Written/OMR 3 Levels):</span>
                  <span className="text-2xl font-black text-[#33CB98]">₹299</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-gray-300 mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#33CB98] shrink-0 mt-0.5" />
                  <span>Official Dualon Examination / Competition Entry</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#33CB98] shrink-0 mt-0.5" />
                  <span>Preparation booklet &amp; syllabus blueprint guidelines</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#33CB98] shrink-0 mt-0.5" />
                  <span>School-level medals &amp; certificates for winners</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#33CB98] shrink-0 mt-0.5" />
                  <span>Eligibility for District &amp; State cash prizes, tablets &amp; laptops (Classes 5–12)</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenRegister}
              className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#33CB98] text-[#0E0F13] hover:bg-[#4DE2AD] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Register for KYSSO 2026</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Dualon App Monthly Subscription */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-[#181C28] to-[#14161E] border-2 border-[#9966FF] relative flex flex-col justify-between shadow-2xl scale-[1.02]">
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#9966FF] to-[#7A3DF0] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-lg">
              Most Popular
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#9966FF]/20 text-[#B892FF] border border-[#9966FF]/30">
                  Monthly Learning Pass
                </span>
                <span className="text-xs text-gray-300">Post-Launch Launching Soon</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">Dualon App Subscription</h3>
              <p className="text-xs text-gray-400 mt-1">
                Continuous monthly STEM enhancement + Free Olympiad
              </p>

              <div className="my-6 p-4 rounded-2xl bg-[#0E0F13] border border-white/5 flex items-baseline justify-between">
                <div>
                  <div className="text-4xl font-black text-white">₹299</div>
                  <div className="text-[11px] text-gray-400">per month (inclusive of GST)</div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-bold text-[#33CB98] bg-[#33CB98]/15 px-2.5 py-1 rounded-md border border-[#33CB98]/30">
                    Free KYSSO Included*
                  </span>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-gray-300 mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#33CB98] shrink-0 mt-0.5" />
                  <span><strong>Two Curated PDFs Every Month:</strong> 1 Syllabus + 1 Frontier Enrichment</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#33CB98] shrink-0 mt-0.5" />
                  <span><strong>Physics, Chemistry, Maths &amp; Biology:</strong> Graded question banks &amp; solutions</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#33CB98] shrink-0 mt-0.5" />
                  <span><strong>Exciting Frontier STEM:</strong> Astronomy, AI, Robotics, Space &amp; Genetics</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#33CB98] shrink-0 mt-0.5" />
                  <span><strong>100% Free KYSSO Entry:</strong> For continuous 12-month subscribers every year</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenRegister}
              className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#9966FF] to-[#7A3DF0] text-white hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Pre-Register for Dualon App (₹299/mo)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">Frequently Asked Questions</h3>
            <p className="text-xs text-gray-400 mt-1">Clear answers regarding subscriptions, fees, and the KYSSO exam.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#14161E] border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 cursor-pointer"
                >
                  <span className="font-semibold text-sm sm:text-base text-white">
                    {faq.q}
                  </span>
                  <span className={`text-[#33CB98] text-xl font-bold transition-transform ${faqOpen === idx ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {faqOpen === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
