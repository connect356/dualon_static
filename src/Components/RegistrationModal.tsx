import { useState } from 'react';
import { X, CheckCircle2, Trophy, Sparkles, Building2, User, Phone, Mail, MapPin } from 'lucide-react';
import DualonLogo from './DualonLogo';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialClass?: number;
  mode?: 'student' | 'school';
}

export default function RegistrationModal({
  isOpen,
  onClose,
  initialClass = 5,
  mode = 'student',
}: RegistrationModalProps) {
  const [selectedMode, setSelectedMode] = useState<'student' | 'school'>(mode);
  const [studentClass, setStudentClass] = useState<number>(initialClass);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [district, setDistrict] = useState('Ernakulam');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const getTierInfo = (cls: number) => {
    if (cls <= 2) {
      return {
        type: 'Colouring Competition',
        fee: '₹99 (One-time)',
        levels: 'School Level Only',
        badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      };
    } else if (cls <= 4) {
      return {
        type: 'Drawing Competition',
        fee: '₹99 (One-time)',
        levels: 'School Level Only',
        badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      };
    } else {
      return {
        type: 'Written / OMR Examination',
        fee: '₹299 (One-time)',
        levels: 'School → District → State (3 Levels)',
        badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      };
    }
  };

  const currentTier = getTierInfo(studentClass);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const keralaDistricts = [
    'Alappuzha',
    'Ernakulam',
    'Idukki',
    'Kannur',
    'Kasaragod',
    'Kollam',
    'Kottayam',
    'Kozhikode',
    'Malappuram',
    'Palakkad',
    'Pathanamthitta',
    'Thiruvananthapuram',
    'Thrissur',
    'Wayanad',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#14161E] border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 overflow-hidden max-h-[90vh] overflow-y-auto text-[#F2F2F2]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#33CB98]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#9966FF]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#33CB98]/20 border border-[#33CB98]/40 flex items-center justify-center text-[#33CB98] animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {selectedMode === 'student' ? 'KYSSO 2026 Pre-Registration Received!' : 'School Partnership Request Received!'}
              </h3>
              <p className="text-gray-300 text-sm md:text-base max-w-md mx-auto">
                Thank you, <span className="text-white font-semibold">{name || 'Applicant'}</span>. Our Academic Coordinator will contact you shortly on <span className="text-[#33CB98] font-mono">{phone}</span> with your official syllabus pack & preparation guidelines.
              </p>
            </div>

            <div className="p-4 bg-[#1B1E29] rounded-xl border border-white/10 text-left space-y-2 text-sm max-w-lg mx-auto">
              <div className="flex justify-between items-center text-xs text-gray-400 uppercase tracking-wider">
                <span>Summary</span>
                <span className="text-[#33CB98] font-medium">Dualon Edtech Verified</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Track:</span>
                <span className="font-semibold text-white">{selectedMode === 'student' ? `Class ${studentClass} • ${currentTier.type}` : 'CBSE Institution Partner'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">District:</span>
                <span className="text-white">{district}, Kerala</span>
              </div>
              {selectedMode === 'student' && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Registration Fee:</span>
                  <span className="font-bold text-[#33CB98]">{currentTier.fee}</span>
                </div>
              )}
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#33CB98] to-[#229D73] text-[#0E0F13] font-bold text-sm tracking-wide hover:shadow-[0_0_25px_rgba(51,203,152,0.4)] transition-all cursor-pointer"
            >
              Done & Return to Homepage
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <DualonLogo variant="horizontal" height={30} colorTheme="mint-white" />
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#9966FF]/20 text-[#B892FF] border border-[#9966FF]/30">
                Official 2026 Portal
              </span>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {selectedMode === 'student' ? 'Register for KYSSO 2026' : 'CBSE School Partnership Desk'}
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                {selectedMode === 'student'
                  ? 'Special Pre-Launch Edition for Kerala CBSE students (Classes 1 to 12).'
                  : 'Enroll your school as an official KYSSO center with school-level medals & state recognition.'}
              </p>
            </div>

            {/* Mode switch pills */}
            <div className="flex p-1 bg-[#1B1E29] rounded-xl mb-6 border border-white/5">
              <button
                type="button"
                onClick={() => setSelectedMode('student')}
                className={`flex-1 py-2.5 text-xs md:text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  selectedMode === 'student'
                    ? 'bg-[#33CB98] text-[#0E0F13] shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <User className="w-4 h-4" />
                Student / Parent Entry
              </button>
              <button
                type="button"
                onClick={() => setSelectedMode('school')}
                className={`flex-1 py-2.5 text-xs md:text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  selectedMode === 'school'
                    ? 'bg-[#9966FF] text-white shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Building2 className="w-4 h-4" />
                School Institutional Partner
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {selectedMode === 'student' ? (
                <>
                  {/* Class Selection grid */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                      Select Student CBSE Class
                    </label>
                    <div className="grid grid-cols-6 sm:grid-cols-12 gap-1.5">
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((cls) => (
                        <button
                          key={cls}
                          type="button"
                          onClick={() => setStudentClass(cls)}
                          className={`py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                            studentClass === cls
                              ? 'bg-[#33CB98] text-[#0E0F13] border-[#33CB98] scale-105'
                              : 'bg-[#1B1E29] text-gray-300 border-white/10 hover:border-white/30'
                          }`}
                        >
                          {cls}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Tier Banner */}
                  <div className={`p-3.5 rounded-xl border ${currentTier.badgeColor} flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-xs md:text-sm`}>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 shrink-0 text-[#33CB98]" />
                      <span>
                        <strong className="text-white">Class {studentClass}:</strong> {currentTier.type} ({currentTier.levels})
                      </span>
                    </div>
                    <div className="font-extrabold text-[#33CB98] text-sm shrink-0">
                      Fee: {currentTier.fee}
                    </div>
                  </div>
                </>
              ) : null}

              {/* Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    {selectedMode === 'student' ? "Student's Full Name" : 'Principal / Coordinator Name'} *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-gray-500" />
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={selectedMode === 'student' ? 'e.g. Advaith Krishna' : 'e.g. Dr. Thomas Mathew'}
                      className="w-full bg-[#1B1E29] border border-white/10 rounded-xl py-2.5 pl-10 pr-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#33CB98]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3 text-gray-500" />
                    <input
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 98470 12345"
                      className="w-full bg-[#1B1E29] border border-white/10 rounded-xl py-2.5 pl-10 pr-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#33CB98]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-gray-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. contact@gmail.com"
                      className="w-full bg-[#1B1E29] border border-white/10 rounded-xl py-2.5 pl-10 pr-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#33CB98]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    District in Kerala *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 absolute left-3 top-3 text-gray-500" />
                    <select
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full bg-[#1B1E29] border border-white/10 rounded-xl py-2.5 pl-10 pr-3 text-sm text-white focus:outline-none focus:border-[#33CB98]"
                    >
                      {keralaDistricts.map((dist) => (
                        <option key={dist} value={dist} className="bg-[#1B1E29]">
                          {dist}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  {selectedMode === 'student' ? 'CBSE School Name & Town' : 'Official CBSE School Name & Affiliation No.'} *
                </label>
                <input
                  required
                  type="text"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  placeholder="e.g. Bhavan's Vidya Mandir, Girinagar"
                  className="w-full bg-[#1B1E29] border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#33CB98]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-sm tracking-wide bg-gradient-to-r from-[#33CB98] to-[#229D73] text-[#0E0F13] hover:shadow-[0_0_25px_rgba(51,203,152,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  {selectedMode === 'student' ? `Confirm & Pre-Register for KYSSO 2026 (${currentTier.fee})` : 'Submit School Partnership Request'}
                </button>
                <p className="text-[11px] text-gray-400 text-center mt-2">
                  🛡️ Dualon Edtech Private Limited • Instant WhatsApp confirmation & preparation pack access
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

