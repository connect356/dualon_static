import { useState } from 'react';
import { Building2, Mail, Phone, MapPin, Send, CheckCircle2, School } from 'lucide-react';

interface SchoolPartnershipProps {
  onOpenSchoolModal: () => void;
}

export default function SchoolPartnershipSection({ onOpenSchoolModal }: SchoolPartnershipProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: '',
    coordinatorName: '',
    phone: '',
    email: '',
    district: 'Ernakulam',
    estimatedStudents: '100 - 250',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const benefits = [
    {
      title: 'Official School Exam Center Status',
      desc: 'Conduct School-Level KYSSO 2026 within your own campus under flexible scheduling.',
    },
    {
      title: 'School-Level Medals & Trophies',
      desc: 'Top 3 rank holders in every class receive medals and certificates presented at your school assembly.',
    },
    {
      title: 'Zero Administrative Burden',
      desc: 'Dualon supplies all customized question booklets, OMR sheets, evaluation keys, and certificates.',
    },
    {
      title: 'Institutional State Recognition',
      desc: 'Schools producing district and state champions are honored on stage at the televised Mega Award Gala.',
    },
  ];

  return (
    <section id="school-partnerships" className="py-20 bg-[#0E0F13] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#9966FF]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#33CB98]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9966FF]/15 border border-[#9966FF]/30 text-xs font-bold text-[#B892FF] uppercase tracking-wider">
            <School className="w-3.5 h-3.5" />
            Institutional Collaboration
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Partner With Dualon: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33CB98] to-[#9966FF]">
              School &amp; Bulk Registrations
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Empower your students to compete at School, District, and State levels. Dualon partners with CBSE schools across all 14 districts of Kerala.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Benefits to Schools */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#33CB98]">
                Why CBSE Schools Partner With Us
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Comprehensive Turnkey Olympiad &amp; STEM Partnership
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Whether you have 50 students or 1,000+, Dualon provides all testing logistics, digital learning booklets, student evaluation analytics, and prestigious trophies.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((b, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#14161E] border border-white/5 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#33CB98]/15 text-[#33CB98] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{b.title}</h4>
                    <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Contact Pills & Modal Trigger */}
            <div className="p-4 rounded-2xl bg-[#1B1E29] border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-300">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#33CB98]" />
                  <span>Connect@dualonapp.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#9966FF]" />
                  <span>+91 95675 46744</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#33CB98]" />
                  <span>Kollam, Kerala, India</span>
                </div>
              </div>
              <button
                onClick={onOpenSchoolModal}
                className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 transition-colors cursor-pointer text-xs"
              >
                Instant School Modal
              </button>
            </div>
          </div>

          {/* Right Column: Interactive School Partnership Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#14161E] border border-white/15 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">School Partnership Inquiry</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Receive official school brochure &amp; registration kit</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#9966FF]/20 text-[#B892FF] flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#33CB98]/20 text-[#33CB98] flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Inquiry Successfully Submitted!</h4>
                  <p className="text-xs text-gray-300 max-w-sm mx-auto">
                    Thank you. Our Institutional Outreach Coordinator will reach out to <span className="text-white font-semibold">{formData.schoolName || 'your school'}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-white/10 text-xs font-bold text-white hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      CBSE School Name &amp; Affiliation Number *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.schoolName}
                      onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                      placeholder="e.g. Chinmaya Vidyalaya, Vaduthala"
                      className="w-full bg-[#1B1E29] border border-white/10 rounded-xl py-2.5 px-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#33CB98]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">
                        Principal / Coordinator Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.coordinatorName}
                        onChange={(e) => setFormData({ ...formData, coordinatorName: e.target.value })}
                        placeholder="e.g. Sister Mary / Suresh Kumar"
                        className="w-full bg-[#1B1E29] border border-white/10 rounded-xl py-2.5 px-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#33CB98]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">
                        Contact / WhatsApp Number *
                      </label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 98470 12345"
                        className="w-full bg-[#1B1E29] border border-white/10 rounded-xl py-2.5 px-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#33CB98]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">
                        Official School Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="schooloffice@gmail.com"
                        className="w-full bg-[#1B1E29] border border-white/10 rounded-xl py-2.5 px-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#33CB98]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">
                        District in Kerala *
                      </label>
                      <select
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        className="w-full bg-[#1B1E29] border border-white/10 rounded-xl py-2.5 px-3.5 text-white focus:outline-none focus:border-[#33CB98]"
                      >
                        {['Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad', 'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'].map((d) => (
                          <option key={d} value={d} className="bg-[#1B1E29]">{d}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Estimated Student Participation Count
                    </label>
                    <select
                      value={formData.estimatedStudents}
                      onChange={(e) => setFormData({ ...formData, estimatedStudents: e.target.value })}
                      className="w-full bg-[#1B1E29] border border-white/10 rounded-xl py-2.5 px-3.5 text-white focus:outline-none focus:border-[#33CB98]"
                    >
                      <option value="50 - 100 students">50 - 100 students</option>
                      <option value="100 - 250 students">100 - 250 students</option>
                      <option value="250 - 500 students">250 - 500 students</option>
                      <option value="500+ students (Entire School)">500+ students (Entire School)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#9966FF] to-[#7A3DF0] text-white hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request Official School Partnership Kit</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
