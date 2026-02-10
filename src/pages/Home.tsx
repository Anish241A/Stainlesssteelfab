import { Phone, MessageCircle, FileText, Shield, Award, Users, Wrench, Target, CheckCircle } from 'lucide-react';

export default function Home() {
  const phoneNumber = '918178668710';
  const whatsappMessage = encodeURIComponent(
    'Hi! I would like to know more about your stainless steel fabrication services.'
  );

  return (
    <div className="pt-20">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center fade-in">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm font-medium text-gray-300">
                Trusted Since 2010 | 500+ Projects Completed
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Precision Stainless Steel</span>
              <br />
              <span className="text-white">Fabrication You Can Trust</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Expert craftsmanship meets durability. From custom railings to industrial structures,
              we deliver premium stainless steel solutions that stand the test of time.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="tel:+918178668710"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </a>

              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-gray-600 hover:border-gray-500 text-white font-bold rounded-lg transition-all flex items-center justify-center space-x-2">
                <FileText size={20} />
                <span>Get a Quote</span>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Shield, label: 'Quality Assured' },
                { icon: Award, label: 'Certified Welders' },
                { icon: Users, label: '500+ Clients' },
                { icon: Target, label: 'Precision Work' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-zinc-900/50 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors"
                >
                  <item.icon size={32} className="mx-auto mb-2 text-gray-400" />
                  <p className="text-sm font-medium text-gray-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Three decades of excellence in stainless steel fabrication
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Superior Craftsmanship',
                description:
                  'Our skilled welders and fabricators bring decades of experience to every project, ensuring flawless execution and premium finishes.',
              },
              {
                title: 'Premium Materials',
                description:
                  'We use only high-grade stainless steel from trusted suppliers, guaranteeing durability, corrosion resistance, and lasting value.',
              },
              {
                title: 'On-Time Delivery',
                description:
                  'Your time matters. We pride ourselves on meeting deadlines without compromising on quality, keeping your projects on schedule.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-zinc-800/50 border border-gray-700 rounded-xl hover:border-gray-600 transition-all hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Services</h2>
            <p className="text-gray-400 text-lg">
              Comprehensive stainless steel solutions for every need
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              'SS Railing Fabrication',
              'Gate & Grill Works',
              'Precision Welding',
              'Custom Structures',
              'Industrial Fabrication',
              'Repair & Maintenance',
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-zinc-900/50 border border-gray-800 rounded-lg hover:border-gray-600 transition-all group"
              >
                <Wrench size={28} className="text-gray-400 mb-3 group-hover:text-gray-300 transition-colors" />
                <h3 className="text-lg font-semibold text-white">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote today. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+918178668710"
              className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 font-bold rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <Phone size={20} />
              <span>+91 81786 68710</span>
            </a>
            <a
              href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <MessageCircle size={20} />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
