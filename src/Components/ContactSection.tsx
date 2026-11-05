import { Mail, Phone, MapPin, MessageSquare, Clock } from 'lucide-react';

export default function ContactSection() {
  const contactCards = [
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'Connect@dualonapp.com',
      secondary: 'Official Inquiries & Support',
      sub: 'Quick response for academic & partnership queries',
      href: 'mailto:Connect@dualonapp.com',
    },
    {
      icon: Phone,
      title: 'Call / WhatsApp',
      primary: '+91 95675 46744',
      secondary: 'Helpline & Academic Desk',
      sub: 'Mon–Sat, 9:00 AM – 6:00 PM',
      href: 'tel:+919567546744',
    },
    {
      icon: MapPin,
      title: 'Location',
      primary: 'Kollam, Kerala, India',
      secondary: 'Dualon Edtech Private Limited',
      sub: 'Partnering with CBSE schools statewide',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#FFFFFF] to-[#F0F9F6] border-t border-emerald-500/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F8F2] border border-[#33CB98]/30 text-xs font-bold text-[#177153]">
            <MessageSquare className="w-3.5 h-3.5" />
            Contact &amp; Support
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Get in Touch With Dualon
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            For school partnerships, bulk registrations, academic queries, or general assistance, contact Dualon Edtech Private Limited.
          </p>
        </div>

        {/* 3 Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between text-center items-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#E8F8F2] text-[#229D73] flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7" />
                </div>

                <div className="space-y-1 mb-4">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {card.title}
                  </div>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="text-lg font-bold text-gray-900 hover:text-[#229D73] transition-colors block"
                    >
                      {card.primary}
                    </a>
                  ) : (
                    <div className="text-lg font-bold text-gray-900">
                      {card.primary}
                    </div>
                  )}
                  <div className="text-sm font-semibold text-gray-700">
                    {card.secondary}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 w-full text-xs text-gray-500">
                  {card.sub}
                </div>
              </div>
            );
          })}
        </div>

        {/* Operating Note Banner */}
        <div className="max-w-3xl mx-auto mt-10 p-6 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
              <Clock className="w-5 h-5 text-[#229D73]" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">
                School Partnerships &amp; Olympiad Inquiries
              </div>
              <div className="text-xs text-gray-500">
                Direct phone and email support available for CBSE school principals &amp; parents across Kerala.
              </div>
            </div>
          </div>

          <a
            href="mailto:Connect@dualonapp.com"
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-[#06231a] bg-gradient-to-r from-[#48d6a2] to-[#22b083] shadow-sm hover:shadow-md transition-all shrink-0 cursor-pointer"
          >
            Email Support
          </a>
        </div>

      </div>
    </section>
  );
}
