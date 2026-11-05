import { useState } from 'react';
import { Trophy, Award, Laptop, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

interface KyssoSectionProps {
  onOpenRegister: () => void;
}

export default function KyssoSection({ onOpenRegister }: KyssoSectionProps) {
  const [activeLevel, setActiveLevel] = useState<number>(1);

  const levels = [
    {
      levelNumber: 1,
      name: 'School Level',
      subtitle: 'The Gateway Stage',
      who: 'All registered students from participating CBSE schools across Kerala',
      prizes: [
        'Official Certificates of Participation & Excellence',
        'School-Level Medals for Rank Holders',
        'School-level prizes & institutional accolades (subject to change)',
      ],
      description:
        'Conducted on school campuses. Gives every child the crucial first taste of competitive exam rigor in a comfortable environment.',
      accent: 'border-[#33CB98]',
      badgeBg: 'bg-[#33CB98]/20 text-[#33CB98]',
      icon: Award,
    },
    {
      levelNumber: 2,
      name: 'District Level',
      subtitle: 'District Champions Stage',
      who: 'Top performers (mainly 1st prize winners) from each School Level',
      prizes: [
        'Lucrative Cash Prizes starting from District Level',
        'District Rank Certificates & Mementos',
        'District-wide media recognition & state qualifier badge',
      ],
      description:
        'The best students from schools in each of Kerala’s 14 districts compete for district supremacy and advancement to the state finals.',
      accent: 'border-[#9966FF]',
      badgeBg: 'bg-[#9966FF]/20 text-[#B892FF]',
      icon: Trophy,
    },
    {
      levelNumber: 3,
      name: 'State Level',
      subtitle: 'The Grand Pinnacle & Mega Event',
      who: 'Top district champions competing for Kerala’s highest academic glory',
      prizes: [
        'Major Cash Prizes for State Toppers',
        'High-Performance Tablets & Laptops',
        'State-Level Recognition awarded at a Grand Mega Event',
        'Celebrities & Distinguished Chief Guests felicitations',
      ],
      description:
        'The pinnacle of KYSSO. State champions receive laptops, tablets, and substantial cash awards at a televised celebrity mega event.',
      accent: 'border-[#33CB98]',
      badgeBg: 'bg-[#33CB98]/20 text-[#33CB98]',
      icon: Laptop,
    },
  ];

  return (
    <section id="olympiad-levels" className="py-20 bg-[#0E0F13] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#9966FF]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#33CB98]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9966FF]/15 border border-[#9966FF]/30 text-xs font-bold text-[#B892FF] uppercase tracking-wider">
            Flagship Olympiad System
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            KYSSO — Kerala Young Scholars <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33CB98] via-[#5FE2B4] to-[#9966FF]">
              Science Olympiad
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            KYSSO is the annual flagship examination conducted by <strong>Dualon Edtech Private Limited</strong> for CBSE students from Class 1 to Class 12 across Kerala. It identifies and rewards young academic talent in Science and Mathematics while encouraging year-round learning.
          </p>
        </div>

        {/* 3-Level Progressive Stepper */}
        <div className="mb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {levels.map((lvl) => {
              const Icon = lvl.icon;
              const isSelected = activeLevel === lvl.levelNumber;
              return (
                <div
                  key={lvl.levelNumber}
                  onClick={() => setActiveLevel(lvl.levelNumber)}
                  className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer relative flex flex-col justify-between ${
                    isSelected
                      ? `bg-[#181C26] ${lvl.accent} shadow-[0_0_30px_rgba(51,203,152,0.15)] scale-[1.02]`
                      : 'bg-[#14161E] border-white/10 hover:border-white/20 opacity-90'
                  }`}
                >
                  <div>
                    {/* Top level tag */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${lvl.badgeBg}`}>
                        Level 0{lvl.levelNumber}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white">
                        <Icon className="w-5 h-5 text-[#33CB98]" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-white">
                      {lvl.name}
                    </h3>
                    <p className="text-xs font-semibold text-gray-400 mt-0.5">
                      {lvl.subtitle}
                    </p>

                    <div className="mt-4 p-3 rounded-xl bg-[#0E0F13] border border-white/5 space-y-1">
                      <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                        Who Can Participate:
                      </div>
                      <div className="text-xs text-gray-200 font-medium">
                        {lvl.who}
                      </div>
                    </div>

                    <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                      {lvl.description}
                    </p>
                  </div>

                  {/* Prizes list */}
                  <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                    <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-[#33CB98]" />
                      Prizes &amp; Recognition:
                    </div>
                    <ul className="space-y-1.5 text-xs text-gray-300">
                      {lvl.prizes.map((pz, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#33CB98] shrink-0 mt-0.5" />
                          <span>{pz}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Important Points Banner */}
        <div className="bg-gradient-to-r from-[#14161E] via-[#1B1E29] to-[#14161E] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#33CB98]">
                <Calendar className="w-4 h-4" />
                Annual Olympiad Protocol
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                Key Facts About the KYSSO Examination
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-300 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#33CB98] shrink-0" />
                  <span><strong>Annual Schedule:</strong> Conducted once every year (usually in April–May).</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#33CB98] shrink-0" />
                  <span><strong>Cash Rewards:</strong> Cash prizes start from the District Level.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#33CB98] shrink-0" />
                  <span><strong>Subscribers Perk:</strong> Free entry for 12-month continuous Dualon app subscribers.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#33CB98] shrink-0" />
                  <span><strong>Mega Award Gala:</strong> Televised event with celebrities &amp; distinguished chief guests.</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto text-center lg:text-right">
              <button
                onClick={onOpenRegister}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide bg-gradient-to-r from-[#33CB98] to-[#229D73] text-[#0E0F13] hover:shadow-[0_0_25px_rgba(51,203,152,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2 mx-auto"
              >
                <Sparkles className="w-4 h-4" />
                <span>Register for KYSSO 2026</span>
              </button>
              <div className="text-[11px] text-gray-400 mt-2">
                Special Pre-Launch Edition currently open
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
