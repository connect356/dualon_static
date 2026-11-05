import { Sparkles, Trophy, Palette, PenTool, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

interface Kysso2026Props {
  onSelectClassAndRegister: (cls: number) => void;
}

export default function Kysso2026Section({ onSelectClassAndRegister }: Kysso2026Props) {
  const feeCards = [
    {
      title: 'Classes 1 & 2',
      badge: 'Early Primary',
      format: 'Colouring Competition',
      fee: '₹99',
      feeSub: 'One-time registration',
      levels: 'School Level Only',
      icon: Palette,
      accent: 'border-[#33CB98]/40 hover:border-[#33CB98]',
      buttonColor: 'bg-[#33CB98] text-[#0E0F13]',
      targetClass: 1,
      features: [
        'Creative scientific theme colouring sheets',
        'Official Participation Certificate',
        'School-Level Medals for Top 3 performers',
        'Comfortable on-campus school format',
      ],
    },
    {
      title: 'Classes 3 & 4',
      badge: 'Junior Primary',
      format: 'Drawing Competition',
      fee: '₹99',
      feeSub: 'One-time registration',
      levels: 'School Level Only',
      icon: PenTool,
      accent: 'border-[#33CB98]/40 hover:border-[#33CB98]',
      buttonColor: 'bg-[#33CB98] text-[#0E0F13]',
      targetClass: 3,
      features: [
        'Imaginative Science & Nature drawing challenges',
        'Official Participation Certificate',
        'School-Level Medals & Recognition',
        'Prepares for higher competitive exams',
      ],
    },
    {
      title: 'Classes 5 to 12',
      badge: 'Middle & High School',
      format: 'Written / OMR Examination',
      fee: '₹299',
      feeSub: 'One-time registration',
      levels: 'School → District → State (3 Levels)',
      icon: FileText,
      accent: 'border-[#9966FF] shadow-[0_0_30px_rgba(153,102,255,0.2)]',
      buttonColor: 'bg-gradient-to-r from-[#9966FF] to-[#7A3DF0] text-white',
      featured: true,
      targetClass: 7,
      features: [
        'Full 3-Level Ladder: School → District → State',
        'CBSE Physics, Chemistry, Maths & Biology OMR Paper',
        'Cash Prizes at District & State Levels',
        'Laptops & Tablets for State Champions',
        'Official Dualon Preparation Booklet provided',
      ],
    },
  ];

  const highlights = [
    'Special one-time edition conducted before the official Dualon App launch.',
    'Classes 1–4 have focused School-Level competitions (Colouring & Drawing).',
    'Classes 5–12 follow the full 3-level competitive ladder (School → District → State).',
    'Grand prize distribution ceremony with celebrities and eminent chief guests.',
    'Official launch of the Dualon Mobile Application during the same mega event.',
    'Premier opportunity for students to experience competitive exams and win prestigious prizes.',
  ];

  return (
    <section id="kysso-2026" className="py-20 bg-[#111319] relative overflow-hidden">
      {/* Background neon ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#33CB98]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33CB98]/15 border border-[#33CB98]/30 text-xs font-bold text-[#33CB98] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Special Pre-Launch Edition
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            KYSSO 2026 — One-Time <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33CB98] to-[#9966FF]">
              Pre-Launch Science Olympiad
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            KYSSO 2026 is a special one-time edition conducted before the official launch of the Dualon App. This edition helps students experience the examination format and win exciting prizes, while the Dualon App will be officially launched during the grand prize distribution ceremony.
          </p>
        </div>

        {/* 3 Fee Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {feeCards.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <div
                key={idx}
                className={`p-7 rounded-3xl bg-[#151821] border transition-all duration-300 relative flex flex-col justify-between ${tier.accent} ${
                  tier.featured ? 'scale-[1.03] z-10' : ''
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#9966FF] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-lg">
                    Full 3-Level State Pathway
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                      {tier.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#33CB98]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-white">{tier.title}</h3>
                  <div className="text-sm font-semibold text-[#33CB98] mt-1">
                    {tier.format}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    {tier.levels}
                  </div>

                  {/* Pricing Box */}
                  <div className="my-6 p-4 rounded-2xl bg-[#0E0F13] border border-white/5 flex items-baseline justify-between">
                    <div>
                      <div className="text-3xl font-black text-white">{tier.fee}</div>
                      <div className="text-[11px] text-gray-400">{tier.feeSub}</div>
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-[#33CB98]">
                      Inclusive
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 text-xs text-gray-300 mb-6">
                    {tier.features.map((item, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#33CB98] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectClassAndRegister(tier.targetClass)}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider ${tier.buttonColor} hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer`}
                >
                  <span>Select &amp; Register for {tier.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Key Highlights of KYSSO 2026 Grid */}
        <div className="bg-[#14161E] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#33CB98]">
              Edition Roadmap
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Key Highlights of KYSSO 2026
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Everything you need to know about this inaugural pre-launch celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((point, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-[#1B1E29] border border-white/5 flex items-start gap-3 hover:border-[#33CB98]/40 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#33CB98]/20 text-[#33CB98] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  {index + 1}
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#9966FF]" />
              <span>Cash prizes, tablets &amp; laptops presented by celebrities at the mega event</span>
            </div>
            <button
              onClick={() => onSelectClassAndRegister(5)}
              className="text-[#33CB98] font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Download Official Preparation Booklet Guidelines</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
