import { useState } from 'react';
import { Sparkles, Trophy, BookOpen, CheckCircle2, ArrowRight, Atom } from 'lucide-react';

interface InteractiveClassSelectorProps {
  onRegisterWithClass: (cls: number) => void;
}

export default function InteractiveClassSelector({ onRegisterWithClass }: InteractiveClassSelectorProps) {
  const [selectedClass, setSelectedClass] = useState<number>(6);

  const getClassDetails = (cls: number) => {
    if (cls <= 2) {
      return {
        stageName: 'Primary Stage (Classes 1 & 2)',
        competitionType: 'Colouring Competition',
        competitionDesc: 'Visual observation, scientific coloring themes, fine-motor coordination, and basic scientific recognition.',
        fee: '₹99 (One-time)',
        levels: 'School Level Only',
        subjects: ['Basic Living World', 'Numbers & Shapes', 'Nature & Senses', 'Everyday Machines'],
        enrichmentSample: 'Fun Constellations, What is a Robot?, Solar System for Kids',
        prizes: 'Official Certificates of Participation & School-Level Medals for Toppers',
        tagColor: 'text-[#33CB98] bg-[#33CB98]/15 border-[#33CB98]/30',
      };
    } else if (cls <= 4) {
      return {
        stageName: 'Junior Stage (Classes 3 & 4)',
        competitionType: 'Drawing & Concept Art Competition',
        competitionDesc: 'Creative illustration of scientific concepts, natural ecosystems, space imagination, and STEM thinking.',
        fee: '₹99 (One-time)',
        levels: 'School Level Only',
        subjects: ['Ecosystems & Plants', 'States of Matter', 'Junior Mathematics', 'Human Body Basics'],
        enrichmentSample: 'Chandrayaan Moon Missions, Animals that Glow, Computers & Code Basics',
        prizes: 'Official Certificates of Excellence & School-Level Medals for Winners',
        tagColor: 'text-[#33CB98] bg-[#33CB98]/15 border-[#33CB98]/30',
      };
    } else if (cls <= 8) {
      return {
        stageName: 'Middle School Stage (Classes 5 to 8)',
        competitionType: 'Written / OMR Examination',
        competitionDesc: 'Objective multiple-choice question paper testing conceptual depth, logical reasoning, and CBSE syllabus application.',
        fee: '₹299 (One-time)',
        levels: 'School → District → State (Full 3-Level Ladder)',
        subjects: ['Physics (Force, Energy, Light)', 'Chemistry (Elements, Reactions)', 'Mathematics (Algebra, Geometry)', 'Biology (Cells, Nutrition)'],
        enrichmentSample: 'Artificial Intelligence Basics, Black Holes & Galaxies, Robotics Microcontrollers, CRISPR Genetics',
        prizes: 'Certificates & Medals at School; Cash Prizes at District; Laptops, Tablets & State-Level Trophies at State Finals',
        tagColor: 'text-[#B892FF] bg-[#9966FF]/20 border-[#9966FF]/30',
      };
    } else {
      return {
        stageName: 'Secondary & Senior Stage (Classes 9 to 12)',
        competitionType: 'Advanced Written / OMR Examination',
        competitionDesc: 'Rigorous competitive exam testing analytical reasoning, formula derivation, and CBSE board-level mastery.',
        fee: '₹299 (One-time)',
        levels: 'School → District → State (Full 3-Level Ladder)',
        subjects: ['Physics (Mechanics, Optics, Electromagnetism)', 'Chemistry (Organic, Inorganic, Physical)', 'Mathematics (Calculus, Probability)', 'Biology (Genetics, Human Physiology)'],
        enrichmentSample: 'Quantum Computing Frontiers, Autonomous Space Systems, Neural Networks, Gene Editing',
        prizes: 'Major Cash Prizes, High-End Laptops, Tablets & Official State Distinction awarded at the Mega Gala',
        tagColor: 'text-[#B892FF] bg-[#9966FF]/20 border-[#9966FF]/30',
      };
    }
  };

  const details = getClassDetails(selectedClass);

  return (
    <section id="class-explorer" className="py-20 bg-[#111319] relative overflow-hidden">
      {/* Background ambient */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#33CB98]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33CB98]/15 border border-[#33CB98]/30 text-xs font-bold text-[#33CB98] uppercase tracking-wider">
            Interactive Academic Finder
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Explore Your Child’s <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33CB98] to-[#9966FF]">
              Class Curriculum &amp; KYSSO Track
            </span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Select any CBSE class from Class 1 to 12 to preview the specific syllabus coverage, competition format, and fee structure.
          </p>
        </div>

        {/* Class Selection Buttons */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((cls) => {
              const isSelected = selectedClass === cls;
              return (
                <button
                  key={cls}
                  onClick={() => setSelectedClass(cls)}
                  className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 border ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#33CB98] to-[#229D73] text-[#0E0F13] border-[#33CB98] shadow-[0_0_20px_rgba(51,203,152,0.4)] scale-105 z-10'
                      : 'bg-[#14161E] text-gray-300 border-white/10 hover:border-white/30 hover:bg-[#1B1E29]'
                  }`}
                >
                  <span className="text-[10px] uppercase opacity-70">Class</span>
                  <span className="text-base sm:text-lg">{cls}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Class Overview Card */}
        <div className="max-w-4xl mx-auto bg-[#14161E] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className={`text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${details.tagColor}`}>
                {details.stageName}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
                Class {selectedClass} Academic &amp; Olympiad Blueprint
              </h3>
            </div>

            <div className="text-right">
              <div className="text-xs uppercase text-gray-400 font-bold">KYSSO 2026 Entry Fee</div>
              <div className="text-2xl font-black text-[#33CB98]">{details.fee}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            {/* Left Col: Competition Format */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider">
                <Trophy className="w-4 h-4 text-[#33CB98]" />
                KYSSO 2026 Competition Format
              </div>

              <div className="p-4 rounded-2xl bg-[#1B1E29] border border-white/5 space-y-2">
                <div className="text-base font-bold text-[#33CB98]">
                  {details.competitionType}
                </div>
                <div className="text-xs font-semibold text-gray-400">
                  Pathway: {details.levels}
                </div>
                <p className="text-xs text-gray-300 leading-relaxed pt-1">
                  {details.competitionDesc}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-300 space-y-1">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#9966FF]" />
                  Awards &amp; Recognition:
                </div>
                <p className="text-gray-400">{details.prizes}</p>
              </div>
            </div>

            {/* Right Col: Monthly PDFs & Enrichment */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-[#9966FF]" />
                Dualon Monthly Study Materials
              </div>

              <div className="p-4 rounded-2xl bg-[#1B1E29] border border-white/5 space-y-2">
                <div className="text-xs font-bold uppercase text-gray-400">
                  Monthly PDF #1: CBSE Syllabus Coverage
                </div>
                <div className="grid grid-cols-1 gap-1.5 text-xs text-gray-300">
                  {details.subjects.map((sub, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#33CB98] shrink-0" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#1B1E29] border border-white/5 space-y-1.5">
                <div className="text-xs font-bold uppercase text-[#B892FF] flex items-center gap-1.5">
                  <Atom className="w-3.5 h-3.5 text-[#9966FF]" />
                  Monthly PDF #2: Frontier Enrichment Focus
                </div>
                <p className="text-xs text-gray-300">
                  {details.enrichmentSample}
                </p>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-400 text-center sm:text-left">
              Includes official preparation booklet guidelines + syllabus question bank.
            </div>

            <button
              onClick={() => onRegisterWithClass(selectedClass)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#33CB98] to-[#229D73] text-[#0E0F13] hover:shadow-[0_0_20px_rgba(51,203,152,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Register Class {selectedClass} for KYSSO 2026 ({details.fee})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
