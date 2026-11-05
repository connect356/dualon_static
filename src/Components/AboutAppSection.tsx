import { useState } from 'react';
import { BookOpen, Sparkles, CheckCircle2, FileText, Cpu, Telescope, Dna, Bot, Smartphone } from 'lucide-react';

export default function AboutAppSection() {
  const [activePdfType, setActivePdfType] = useState<'syllabus' | 'enrichment'>('syllabus');

  const enrichmentTopics = [
    { title: 'Astronomy & Astrophysics', icon: Telescope, desc: 'Black holes, constellations, James Webb discoveries, and planetary orbits.' },
    { title: 'Artificial Intelligence & ML', icon: Cpu, desc: 'Neural networks, generative AI principles, algorithms, and real-world ethics.' },
    { title: 'Robotics & Automation', icon: Bot, desc: 'Actuators, microcontrollers, Mars rovers, and autonomous systems.' },
    { title: 'Space Science & Exploration', icon: Sparkles, desc: 'ISRO Chandrayaan & Gaganyaan missions, rocket propulsion, and zero-G physics.' },
    { title: 'Genetics & Biotechnology', icon: Dna, desc: 'CRISPR, DNA sequencing, cellular engines, and future bio-innovations.' },
  ];

  const appFeatures = [
    {
      title: 'Monthly Study Materials',
      desc: 'Two professionally designed PDFs every month – one syllabus-based and one enrichment-based.',
      tag: '2 PDFs / Month',
      highlight: true,
    },
    {
      title: 'Class-Wise Segregation',
      desc: 'Content carefully designed and segregated for different age groups from Class 1 to 12.',
      tag: 'Classes 1–12',
    },
    {
      title: 'Annual KYSSO Examination',
      desc: 'One major examination every year (usually April–May) with School, District, and State levels.',
      tag: 'Flagship Olympiad',
    },
    {
      title: 'Attractive Rewards & Prizes',
      desc: 'Certificates & prizes at School level. Cash prizes, tablets and laptops from District & State levels.',
      tag: 'Prizes & Recognition',
    },
    {
      title: 'Affordable Subscription',
      desc: 'Just ₹299 per month (inclusive of GST). Premium STEM education for every household.',
      tag: '₹299 / Month',
      highlight: true,
    },
    {
      title: 'Free KYSSO for Subscribers',
      desc: 'Students with continuous 12-month subscription can appear for KYSSO free of cost every year.',
      tag: 'Zero Fee for Olympiad',
    },
  ];

  return (
    <section id="about-app" className="py-20 bg-[#0E0F13] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#33CB98]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9966FF]/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33CB98]/10 border border-[#33CB98]/20 text-xs font-bold text-[#33CB98] uppercase tracking-wider">
            About Dualon Edtech
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Built Exclusively for Kerala’s <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33CB98] to-[#9966FF]">
              CBSE Science &amp; Mathematics
            </span> Students
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Dualon Edtech is a Kerala-based educational platform designed exclusively for CBSE students from Class 1 to 12. 
            We focus on strengthening Science and Mathematics (Physics, Chemistry, Mathematics, and Biology) through high-quality monthly study materials and an annual examination system called KYSSO.
          </p>
        </div>

        {/* Section 2 Deep Dive: What Students Get Every Month */}
        <div className="mb-20">
          <div className="bg-[#14161E] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Interactive PDF Switcher */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#33CB98]">
                    Monthly Learning System
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    What Students Get Every Month
                  </h3>
                  <p className="text-sm text-gray-300">
                    Dualon replaces rote textbook cramming with conceptual clarity and futuristic curiosity through two distinct monthly deliverables.
                  </p>
                </div>

                {/* PDF Tabs */}
                <div className="flex bg-[#0E0F13] p-1.5 rounded-2xl border border-white/10">
                  <button
                    onClick={() => setActivePdfType('syllabus')}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      activePdfType === 'syllabus'
                        ? 'bg-[#33CB98] text-[#0E0F13] shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>1. Syllabus-Aligned PDF</span>
                  </button>
                  <button
                    onClick={() => setActivePdfType('enrichment')}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      activePdfType === 'enrichment'
                        ? 'bg-[#9966FF] text-white shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>2. Enrichment PDF</span>
                  </button>
                </div>

                {/* Tab Content */}
                {activePdfType === 'syllabus' ? (
                  <div className="p-5 rounded-2xl bg-[#1B1E29] border border-[#33CB98]/20 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#33CB98]/20 text-[#33CB98] flex items-center justify-center">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-base font-bold text-white">CBSE Curriculum Aligned PDF</div>
                        <div className="text-xs text-[#33CB98]">Physics • Chemistry • Mathematics • Biology</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Deep-dive concept explanations and rigorous practice questions calibrated directly to the CBSE syllabus. Helps students ace school exams, build conceptual confidence, and master foundational problem-solving habits.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-gray-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#33CB98] shrink-0" />
                        <span>Concept clarity summaries</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#33CB98] shrink-0" />
                        <span>Graded practice question sets</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#33CB98] shrink-0" />
                        <span>Step-by-step model solutions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#33CB98] shrink-0" />
                        <span>Exclusively for Classes 1 to 12</span>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="p-5 rounded-2xl bg-[#1B1E29] border border-[#9966FF]/20 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#9966FF]/20 text-[#9966FF] flex items-center justify-center">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-base font-bold text-white">Frontier Enrichment PDF</div>
                        <div className="text-xs text-[#B892FF]">Beyond Textbooks • Space, AI, Robotics &amp; More</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Exciting topics beyond standard textbooks that spark scientific temper, genuine curiosity, and prepare young minds for 21st-century technological frontiers.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 text-xs">
                      {['Astronomy', 'Artificial Intelligence', 'Robotics', 'Space Science', 'Genetics', 'Future Tech'].map((item) => (
                        <div key={item} className="px-3 py-2 rounded-lg bg-[#14161E] border border-white/10 text-gray-200 text-center font-medium">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 text-xs text-gray-400 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#33CB98]" />
                    <span>Regular practice builds scientific temper</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-[#9966FF]" />
                    <span>Easy access via student-friendly mobile app</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual PDF Showcase Card */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Card 1: Syllabus PDF Preview */}
                  <div className="p-5 rounded-2xl bg-[#1B1E29] border border-[#33CB98]/30 shadow-lg relative group hover:border-[#33CB98] transition-all">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#33CB98]/20 text-[#33CB98]">
                        Monthly PDF #1
                      </span>
                      <FileText className="w-5 h-5 text-[#33CB98]" />
                    </div>
                    <h4 className="font-bold text-white text-base">CBSE Syllabus Aligned</h4>
                    <p className="text-xs text-gray-400 mt-1 mb-4">
                      Core subjects: Physics, Chemistry, Mathematics, Biology. Classroom relevance &amp; exam success.
                    </p>
                    <div className="space-y-1.5 text-[11px] text-gray-300 border-t border-white/10 pt-3">
                      <div className="flex justify-between">
                        <span>Curriculum:</span>
                        <span className="text-white font-medium">CBSE Classes 1–12</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Format:</span>
                        <span className="text-white font-medium">Digital PDF Booklet</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Includes:</span>
                        <span className="text-[#33CB98] font-medium">OMR &amp; Practice Sets</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Enrichment PDF Preview */}
                  <div className="p-5 rounded-2xl bg-[#1B1E29] border border-[#9966FF]/30 shadow-lg relative group hover:border-[#9966FF] transition-all">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#9966FF]/20 text-[#B892FF]">
                        Monthly PDF #2
                      </span>
                      <Sparkles className="w-5 h-5 text-[#9966FF]" />
                    </div>
                    <h4 className="font-bold text-white text-base">Futuristic Enrichment</h4>
                    <p className="text-xs text-gray-400 mt-1 mb-4">
                      Astronomy, AI, Robotics, Space Science, Genetics. Modern STEM curiosity ignition.
                    </p>
                    <div className="space-y-1.5 text-[11px] text-gray-300 border-t border-white/10 pt-3">
                      <div className="flex justify-between">
                        <span>Scope:</span>
                        <span className="text-white font-medium">Beyond Textbooks</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Format:</span>
                        <span className="text-white font-medium">Illustrated Magazine</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bonus:</span>
                        <span className="text-[#B892FF] font-medium">Real-world Case Studies</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enrichment Frontiers List */}
                <div className="mt-4 p-4 rounded-2xl bg-[#14161E] border border-white/10">
                  <div className="text-xs font-bold text-white mb-2 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#33CB98]" />
                    Enrichment Fields Explored in Dualon:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {enrichmentTopics.slice(0, 4).map((topic, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                        <topic.icon className="w-3.5 h-3.5 text-[#9966FF] shrink-0" />
                        <span className="truncate">{topic.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Section 2 Key Features Grid (from Table in PDF) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#33CB98]">
              Comprehensive Architecture
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Key Features of the Dualon Platform
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              A high-impact educational model integrating daily learning with state-level recognition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appFeatures.map((feat, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between ${
                  feat.highlight
                    ? 'bg-gradient-to-b from-[#18202E] to-[#14161E] border-[#33CB98]/40 shadow-lg'
                    : 'bg-[#14161E] border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                      {feat.tag}
                    </span>
                    <span className="text-xs font-mono text-gray-500">0{idx + 1}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-[#33CB98] transition-colors">
                    {feat.title}
                  </h4>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-[#33CB98]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Dualon Official Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
