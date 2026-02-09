import { Wrench, Shield, Building2, Factory, Settings, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'Stainless Steel Welding',
      description:
        'Expert TIG and MIG welding services for all types of stainless steel projects. Our certified welders ensure strong, clean, and durable joints that meet industry standards.',
      features: [
        'TIG & MIG welding expertise',
        'Certified professional welders',
        'Clean, strong weld joints',
        'All grades of SS material',
      ],
    },
    {
      icon: Shield,
      title: 'SS Railing Fabrication',
      description:
        'Custom stainless steel railings for homes, offices, and commercial buildings. We design and install modern, durable railings that combine safety with aesthetic appeal.',
      features: [
        'Modern & traditional designs',
        'Balcony and staircase railings',
        'Custom measurements',
        'Polished or brushed finish',
      ],
    },
    {
      icon: Building2,
      title: 'Gate & Grill Works',
      description:
        'Premium stainless steel gates, grills, and security doors. Built for durability and security while maintaining an elegant appearance for residential and commercial properties.',
      features: [
        'Main gates & entrance doors',
        'Window grills & safety bars',
        'Designer patterns available',
        'Weather-resistant coating',
      ],
    },
    {
      icon: Factory,
      title: 'Custom Steel Structures',
      description:
        'Engineered stainless steel structures for diverse applications. From canopies to frameworks, we fabricate custom solutions tailored to your specific requirements.',
      features: [
        'Canopies & pergolas',
        'Support structures',
        'Architectural frameworks',
        'Load-bearing calculations',
      ],
    },
    {
      icon: Building2,
      title: 'Industrial & Commercial Fabrication',
      description:
        'Heavy-duty fabrication services for industrial and commercial clients. We handle large-scale projects with precision, meeting strict deadlines and quality standards.',
      features: [
        'Industrial equipment frames',
        'Commercial kitchen setups',
        'Storage tanks & vessels',
        'Material handling systems',
      ],
    },
    {
      icon: Settings,
      title: 'Repair & Maintenance',
      description:
        'Professional repair, maintenance, and restoration services for existing stainless steel installations. We extend the life of your structures with expert care.',
      features: [
        'Welding repairs',
        'Rust treatment & prevention',
        'Polishing & refinishing',
        'Structural reinforcement',
      ],
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16 fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="text-gradient">Our Services</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Comprehensive stainless steel fabrication solutions for residential, commercial, and industrial clients
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-zinc-800/50 border border-gray-700 rounded-xl hover:border-gray-600 transition-all"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-gray-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From concept to completion, we follow a streamlined approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Consultation',
                description:
                  'We discuss your requirements, take measurements, and understand your vision for the project.',
              },
              {
                step: '02',
                title: 'Design & Quote',
                description:
                  'Our team creates detailed designs and provides a transparent, competitive quote.',
              },
              {
                step: '03',
                title: 'Fabrication',
                description:
                  'Using premium materials and precision tools, we fabricate your project with expert craftsmanship.',
              },
              {
                step: '04',
                title: 'Installation',
                description:
                  'Our skilled technicians install the finished product with attention to detail and safety.',
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                <p className="text-gray-400 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              Industries We Serve
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Residential',
                  items: ['Home railings', 'Gates & grills', 'Balcony works', 'Kitchen fittings'],
                },
                {
                  title: 'Commercial',
                  items: ['Office buildings', 'Shopping malls', 'Hotels & restaurants', 'Retail spaces'],
                },
                {
                  title: 'Industrial',
                  items: ['Manufacturing units', 'Warehouses', 'Food processing', 'Chemical plants'],
                },
                {
                  title: 'Infrastructure',
                  items: ['Public buildings', 'Educational institutions', 'Healthcare facilities', 'Transportation'],
                },
              ].map((sector, index) => (
                <div
                  key={index}
                  className="p-6 bg-zinc-900/50 border border-gray-700 rounded-xl hover:border-gray-600 transition-all"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{sector.title}</h3>
                  <ul className="space-y-2">
                    {sector.items.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                        <span className="text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Every project is unique. Let's discuss how we can bring your vision to life with precision and quality.
          </p>
          <a
            href="tel:+919876543210"
            className="inline-block px-8 py-4 bg-white text-zinc-900 font-bold rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105 shadow-lg"
          >
            Get Your Free Quote Today
          </a>
        </div>
      </section>
    </div>
  );
}
