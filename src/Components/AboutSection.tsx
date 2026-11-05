import { BookOpen, CheckCircle2, Trophy, Award, Laptop, Cpu, Telescope, Bot, Dna, Target, MapPin } from 'lucide-react';

export default function AboutSection() {
  const enrichmentFields = [
    { title: 'Astronomy & Space Science', icon: Telescope, desc: 'Planetary science, constellations, James Webb discoveries, and ISRO missions.' },
    { title: 'Artificial Intelligence & ML', icon: Cpu, desc: 'Algorithms, neural concepts, generative tech, and future innovation ethics.' },
    { title: 'Robotics & Automation', icon: Bot, desc: 'Mechanisms, microcontrollers, Mars rovers, and sensor engineering.' },
    { title: 'Genetics & Biotechnology', icon: Dna, desc: 'DNA structures, cellular engines, CRISPR breakthroughs, and medical tech.' },
  ];

  const olympiaLevels = [
    {
      level: 'Level 1: School Level',
      desc: 'All registered students from participating CBSE schools compete on their home campus.',
      rewards: 'Official Certificates, Medals, and School-level prizes',
      icon: Award,
    },
    {
      level: 'Level 2: District Level',
      desc: 'Top performers and school first-prize winners advance to district competitions across all 14 districts of Kerala.',
      rewards: 'Cash Prizes, Certificates, and District-Level Honors',
      icon: Trophy,
    },
    {
      level: 'Level 3: State Level & Mega Gala',
      desc: 'District champions converge for the state grand finale and mega award ceremony with celebrities and dignitaries.',
      rewards: 'Major Cash Prizes, Tablets, Laptops, and State-Level Trophies',
      icon: Laptop,
    },
  ];

  const pillars = [
    {
      icon: Target,
      title: 'Focused Only on Science & Mathematics',
      desc: 'No unnecessary subjects. 100% focused on strengthening Physics, Chemistry, Mathematics, and Biology.',
    },
    {
      icon: BookOpen,
      title: 'CBSE Curriculum Alignment',
      desc: 'Concept explanations and practice questions meticulously designed for real classroom and board exam relevance.',
    },
    {
      icon: Trophy,
      title: 'Study Material + Olympiad + Rewards',
      desc: 'A complete ecosystem pairing monthly academic PDFs with the prestigious annual KYSSO examination and rewards.',
    },
    {
      icon: MapPin,
      title: 'Built in Kerala, for Kerala Students',
      desc: 'Created specifically for CBSE schools and students across Kerala, with a vision to expand nationwide.',
    },
  ];

  return (
    <div id="about" className="space-y-24 py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      
      {/* SECTION 1: ABOUT DUALON EDTECH */}
      <section id="what-is-dualon" className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F8F2] border border-[#33CB98]/30 text-xs font-bold text-[#177153]">
            About Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            What is Dualon Edtech?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            <strong className="text-gray-900">Dualon Edtech</strong> is a Kerala-based educational platform designed exclusively for CBSE students from Class 1 to 12. 
            We focus on strengthening Science and Mathematics (Physics, Chemistry, Mathematics, and Biology) through high-quality monthly study materials and an annual examination system called <strong className="text-gray-900">KYSSO</strong>.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E8F8F2] text-[#229D73] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: WHAT STUDENTS GET EVERY MONTH */}
      <section id="study-materials" className="bg-gradient-to-br from-[#F4FBF9] to-[#FFFFFF] border border-emerald-500/15 rounded-3xl p-8 sm:p-12 shadow-sm">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#229D73]">
            Monthly Deliverables
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
            What Students Get Every Month
          </h3>
          <p className="text-gray-600 text-base">
            Two professionally designed PDFs delivered each month through our simple and student-friendly mobile application.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Syllabus-Aligned PDF */}
          <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E8F8F2] text-[#177153]">
                  PDF #1: Core CBSE
                </span>
                
              </div>

              <h4 className="text-2xl font-bold text-gray-900">
                Syllabus-Aligned PDF
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed">
                In-depth concept explanations and practice questions based directly on the CBSE curriculum for <strong>Physics, Chemistry, Mathematics, and Biology</strong>.
              </p>

              <ul className="space-y-2.5 text-sm text-gray-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#229D73] shrink-0" />
                  <span>Clear conceptual explanations without rote memorization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#229D73] shrink-0" />
                  <span>Graded practice question sets with solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#229D73] shrink-0" />
                  <span>Content carefully segregated for Classes 1 to 12</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#229D73] shrink-0" />
                  <span>Builds a strong foundation for school &amp; board exams</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Enrichment PDF */}
          <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-200/50">
                  PDF #2: Beyond Textbooks
                </span>
                
              </div>

              <h4 className="text-2xl font-bold text-gray-900">
                Frontier Enrichment PDF
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed">
                Exciting, mind-expanding topics beyond standard textbooks that ignite curiosity and foster genuine scientific temper in young learners.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {enrichmentFields.map((field, i) => {
                  const Icon = field.icon;
                  return (
                    <div key={i} className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-2.5">
                      <Icon className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-gray-900">{field.title}</div>
                        <div className="text-[11px] text-gray-500 leading-tight mt-0.5">{field.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: KYSSO SCIENCE OLYMPIAD */}
      <section id="kysso" className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F8F2] border border-[#33CB98]/30 text-xs font-bold text-[#177153]">
            Annual Flagship Olympiad
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            KYSSO — Kerala Young Scholars Science Olympiad
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            KYSSO is the annual flagship examination conducted by Dualon Edtech Private Limited for CBSE students from Class 1 to Class 12 across Kerala. 
            The examination aims to identify and reward young academic talent in Science and Mathematics while encouraging consistent learning throughout the year.
          </p>
        </div>

        {/* 3 Examination Levels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {olympiaLevels.map((lvl, index) => {
            const Icon = lvl.icon;
            return (
              <div 
                key={index}
                className="p-7 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#229D73] bg-[#E8F8F2] px-3 py-1 rounded-full">
                      Stage 0{index + 1}
                    </span>
                    <Icon className="w-5 h-5 text-gray-700" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {lvl.level}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {lvl.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Recognition &amp; Rewards:
                  </div>
                  <div className="text-sm font-bold text-gray-900 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-[#229D73] shrink-0" />
                    <span>{lvl.rewards}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Important Points Banner */}
        <div className="p-6 rounded-2xl bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold">
              Conducted Annually Across Kerala (April–May)
            </h4>
            <p className="text-sm text-gray-300">
              Cash prizes, tablets, and laptops awarded at a mega prize distribution ceremony with celebrities and chief guests.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs font-bold bg-white/10 px-4 py-2.5 rounded-xl border border-white/20">
           
            <span>Built in Kerala • For Kerala CBSE Students</span>
          </div>
        </div>
      </section>

    </div>
  );
}
