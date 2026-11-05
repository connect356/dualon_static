import { useState } from 'react';
import { X, User, Building2, Phone, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import logo from '../assets/logo2.png';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [role, setRole] = useState<'student' | 'school'>('student');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  const handleReset = () => {
    setLoggedIn(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-7 sm:p-8 text-gray-900 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {loggedIn ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#E8F8F2] text-[#229D73] flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Welcome to Dualon!
            </h3>
            <p className="text-sm text-gray-600">
              Signed in as <strong className="text-gray-900">{identifier}</strong>. Redirecting to your learning dashboard...
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-gray-900 text-white text-xs font-bold hover:bg-black transition-colors cursor-pointer"
            >
              Continue
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Dualon" className="h-8 w-auto object-contain" />
              <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                Portal Login
              </span>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                Welcome Back
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Log in to access your Dualon study materials and KYSSO Olympiad portal.
              </p>
            </div>

            {/* Role switch */}
            <div className="flex p-1 bg-gray-100 rounded-xl mb-6">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  role === 'student' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                <User className="w-3.5 h-3.5 text-[#229D73]" />
                Student / Parent
              </button>
              <button
                type="button"
                onClick={() => setRole('school')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  role === 'school' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-purple-600" />
                School Coordinator
              </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  {role === 'student' ? 'Mobile Number / Student ID' : 'School Code / Coordinator Email'} *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-gray-400" />
                  <input
                    required
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder={role === 'student' ? 'e.g. 98470 12345' : 'e.g. SCH-KL-4029'}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-3 text-sm text-gray-900 focus:outline-none focus:border-[#229D73] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Password / OTP *
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-3.5 text-gray-400" />
                  <input
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password or OTP"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-3 text-sm text-gray-900 focus:outline-none focus:border-[#229D73] focus:bg-white"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="rounded text-[#229D73]" defaultChecked />
                  <span>Remember me</span>
                </label>
                <a href="#forgot" className="text-[#229D73] font-semibold hover:underline">
                  Forgot credentials?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-sm text-[#06231a] bg-gradient-to-r from-[#48d6a2] to-[#22b083] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Sign In to Dualon</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

