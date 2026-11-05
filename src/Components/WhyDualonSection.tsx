import { Target, BookOpen, Trophy, ShieldCheck, MapPin, Sparkles, Check } from 'lucide-react';

export default function WhyDualonSection() {
  const pillars = [
    {
      icon: Target,
      title: 'Focused Strictly on Science & Mathematics',
      description:
        'No unnecessary subjects or generic fluff. We concentrate 100% of our academic energy on Physics, Chemistry, Mathematics, and Biology where students need the deepest conceptual mastery.',
      accent: 'from-[#33CB98]/20 to-transparent',
      borderColor: 'border-[#33CB98]/30',
      badge: 'Uncompromised Focus',
    },
    {
      icon: BookOpen,
      title: 'Custom-Crafted for the CBSE Curriculum',
      description:
        'Every study material and Olympiad question is mapped specifically to the CBSE syllabus for Classes 1 to 12. Direct classroom alignment translates directly to higher school grades.',
      accent: 'from-[#9966FF]/20 to-transparent',
      borderColor: 'border-[#9966FF]/30',
      badge: 'CBSE Calibrated',
    },
    {
      icon: Trophy,
      title: 'Unique Tri-Fold Educational Engine',
      description:
        'A powerful integration of regular monthly study materials + the prestigious annual KYSSO examination + tangible rewards (Cash, Laptops, Tablets, Medals). Continuous learning meets real motivation.',
      accent: 'from-[#33CB98]/20 to-transparent',
      borderColor: 'border-[#33CB98]/30',
      badge: 'Learn + Compete + Win',
    },
    {
      icon: ShieldCheck,
      title: 'Affordable, Transparent Pricing',
      description:
        'Just ₹299 per month (inclusive of GST). We ensure that cutting-edge educational material and competitive Olympiad platforms are affordable and accessible to every deserving student.',
      accent: 'from-[#9966FF]/20 to-transparent',
      borderColor: 'border-[#9966FF]/30',
      badge: 'True Accessibility',
    },
    {
      icon: MapPin,
      title: 'Built in Kerala, with a Vision for India',
      description:
        'Rooted locally in Kerala’s rich academic culture and designed around the exact requirements of Kerala CBSE schools, with a visionary blueprint to expand across India.',
      accent: 'from-[#33CB98]/20 to-transparent',
      borderColor: 'border-[#33CB98]/30',
      badge: 'Kerala Rooted • National Vision',
    },
  ];

  return (
    <section id="why-dualon" className="py-20 bg-[#111319] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#33CB98]/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#9966FF]/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33CB98]/10 border border-[#33CB98]/25 text-xs font-bold text-[#33CB98] uppercase tracking-wider">
            The Dualon Advantage
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Why Kerala Parents &amp; Students <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33CB98] to-[#9966FF]">
              Choose Dualon Edtech
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            A purposeful, distraction-free learning ecosystem engineered to nurture genuine scientific temper and competitive confidence.
          </p>
        </div>

        {/* 5 Pillars Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`p-7 rounded-2xl bg-[#151821] border ${item.borderColor} hover:border-[#33CB98] transition-all duration-300 relative group flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#33CB98] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#33CB98] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#33CB98] font-semibold">
                  <Check className="w-4 h-4" />
                  <span>Dualon Core Principle</span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Summary Callout */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-[#1B1E29] via-[#14161E] to-[#14161E] border border-[#9966FF]/40 relative group flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#9966FF]/20 border border-[#9966FF]/40 flex items-center justify-center text-[#B892FF]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#9966FF]/20 text-[#B892FF] border border-[#9966FF]/30">
                  Student Success
                </span>
              </div>

              <h3 className="text-xl font-bold text-white leading-snug">
                Where Learning Meets Opportunity
              </h3>

              <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                Dualon bridges the gap between everyday classroom concepts and high-stakes competitive examinations, opening doorways to national Olympiads, STEM careers, and academic distinction.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
              <span className="font-semibold text-white">Join 1000s of Kerala Students</span>
              <span className="text-[#33CB98] font-bold">Class 1 to 12</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

