import Navbar from './Components/Navbar';
import Herosection from './Components/Herosection';
import AboutSection from './Components/AboutSection';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';

export default function App() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FBFA] text-gray-900 flex flex-col font-sans selection:bg-[#33CB98] selection:text-[#06231a] overflow-x-hidden">
      {/* Sticky Top Navigation with Logo, About Us, Contact Us, and Static Login button */}
      <Navbar onOpenContact={scrollToContact} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Left Typography & Right Girl Cartoon Image */}
        <Herosection onOpenContact={scrollToContact} />

        {/* What Dualon Is / About Us / Monthly Materials / KYSSO Olympiad */}
        <AboutSection />

        {/* Contact Us Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
