import { Sparkles, Telescope } from 'lucide-react';
import DualonLogo from './DualonLogo';

export default function BrandStorySection() {
  const stars = [
    {
      name: 'Deneb',
      constellation: 'Cygnus (The Swan)',
      meaning: 'Distant Luminosity & Vision',
      desc: 'One of the most distant and luminous stars visible to the human eye, symbolizing visionary thinking and ambition.',
    },
    {
      name: 'Vega',
      constellation: 'Lyra (The Harp)',
      meaning: 'Precision & Creative Brilliance',
      desc: 'The benchmark standard star in astronomy, representing precision, clarity, and creative mastery.',
    },
    {
      name: 'Altair',
      constellation: 'Aquila (The Eagle)',
      meaning: 'Rapid Flight & Swift Innovation',
      desc: 'One of the fastest-spinning celestial bodies, symbolizing rapid intellect, forward momentum, and youthful dynamism.',
    },
  ];

  return (
    <section className="py-20 bg-[#111319] relative overflow-hidden">
      {/* Background Starfield Grid & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9966FF]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9966FF]/15 border border-[#9966FF]/30 text-xs font-bold text-[#B892FF] uppercase tracking-wider">
            <Telescope className="w-3.5 h-3.5" />
            Brand Philosophy &amp; Celestial Origin
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Inspired by the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33CB98] via-[#5FE2B4] to-[#9966FF]">
              Summer Triangle Asterism
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            The DUALON triangular emblem is inspired by the legendary celestial asterism formed by the bright stars <strong>Deneb</strong>, <strong>Vega</strong>, and <strong>Altair</strong> — symbolizing discovery, cosmic curiosity, and futuristic scientific exploration.
          </p>
        </div>

        {/* Visual Presentation: Constellation Diagram + Dualon Logo Construction */}
        <div className="bg-[#14161E] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: The Asterism Visualization */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-[#0E0F13] rounded-2xl border border-white/10 relative">
              {/* Celestial Triangle Lines */}
              <div className="relative w-64 h-64 flex items-center justify-center">
                {/* SVG connecting lines between Deneb, Vega, Altair */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  <polygon
                    points="30,40 170,70 100,180"
                    fill="none"
                    stroke="#9966FF"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="opacity-40 animate-pulse"
                  />
                  {/* Star Points */}
                  <circle cx="30" cy="40" r="4" fill="#33CB98" />
                  <circle cx="170" cy="70" r="5" fill="#B892FF" />
                  <circle cx="100" cy="180" r="4" fill="#33CB98" />
                </svg>

                {/* Star Labels */}
                <span className="absolute top-2 left-2 text-[10px] font-bold text-[#33CB98]">
                  ★ Deneb
                </span>
                <span className="absolute top-10 right-2 text-[10px] font-bold text-[#B892FF]">
                  ★ Vega
                </span>
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#33CB98]">
                  ★ Altair
                </span>

                {/* Centered Dualon Icon */}
                <div className="relative z-10 p-4 rounded-2xl bg-[#14161E]/90 border border-[#33CB98]/40 shadow-[0_0_30px_rgba(51,203,152,0.3)]">
                  <DualonLogo variant="icon" height={54} colorTheme="mint" />
                </div>
              </div>

              <div className="text-center mt-4">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Geometric Letter &ldquo;D&rdquo; &amp; Celestial Asterism
                </span>
                <p className="text-[11px] text-gray-400 mt-1">
                  Precision • Balance • Innovation • Forward Movement
                </p>
              </div>
            </div>

            {/* Right Col: The 3 Celestial Pillars */}
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#33CB98]">
                  Cosmic Architecture
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Bridging Astronomy &amp; STEM Education
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  The customized triangular letter &ldquo;D&rdquo; forms a bold geometric mark representing precision, balance, innovation, and forward movement. Just as ancient navigators relied on the Summer Triangle to map the night sky, Dualon guides students to map their future in science, technology, engineering, and mathematics.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {stars.map((st, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#1B1E29] border border-white/5 space-y-1">
                    <div className="text-sm font-black text-white">{st.name}</div>
                    <div className="text-[10px] font-semibold text-[#B892FF]">{st.constellation}</div>
                    <p className="text-[11px] text-gray-400 leading-normal pt-1">{st.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-[#33CB98]/10 border border-[#33CB98]/20 flex items-center gap-3 text-xs text-gray-300">
                <Sparkles className="w-4 h-4 text-[#33CB98] shrink-0" />
                <span>
                  Official brand guidelines designed by <strong>Club Design © 2026</strong> for Dualon Edtech Private Limited.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
