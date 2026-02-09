import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'industrial', label: 'Industrial' },
  ];

  const projects = [
    {
      category: 'residential',
      title: 'Modern Staircase Railing',
      description: 'Premium SS304 railing with glass panels',
      location: 'Mumbai',
    },
    {
      category: 'residential',
      title: 'Balcony Safety Railing',
      description: 'Custom-designed balcony railings with brushed finish',
      location: 'Pune',
    },
    {
      category: 'commercial',
      title: 'Office Building Entrance Gate',
      description: 'Automated stainless steel main gate with security features',
      location: 'Navi Mumbai',
    },
    {
      category: 'residential',
      title: 'Villa Main Gate',
      description: 'Designer SS gate with laser-cut patterns',
      location: 'Thane',
    },
    {
      category: 'commercial',
      title: 'Shopping Mall Handrails',
      description: 'Multi-floor handrail system with seamless finish',
      location: 'Mumbai',
    },
    {
      category: 'industrial',
      title: 'Factory Support Structure',
      description: 'Heavy-duty SS framework for industrial equipment',
      location: 'Bhiwandi',
    },
    {
      category: 'residential',
      title: 'Window Grills Set',
      description: 'Complete window grill installation for bungalow',
      location: 'Kalyan',
    },
    {
      category: 'commercial',
      title: 'Restaurant Kitchen Setup',
      description: 'Commercial kitchen SS tables and storage',
      location: 'Mumbai',
    },
    {
      category: 'industrial',
      title: 'Warehouse Safety Rails',
      description: 'Industrial-grade safety railings and barriers',
      location: 'Panvel',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="text-gradient">Our Projects</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              A showcase of our craftsmanship, precision, and commitment to excellence
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-gray-500 to-gray-600 text-white'
                    : 'bg-zinc-800/50 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-zinc-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-gray-600 transition-all hover:transform hover:scale-105"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <CheckCircle size={48} className="mx-auto mb-2 text-gray-300" />
                      <span className="text-sm font-medium text-gray-300">
                        Project Completed
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-zinc-900/80 backdrop-blur-sm text-xs font-medium text-gray-300 rounded-full capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span className="mr-1">📍</span>
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              What Our Clients Say
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Rajesh Sharma',
                  project: 'Residential Railing',
                  text: 'Excellent workmanship and timely delivery. The stainless steel railing they installed looks stunning and feels very sturdy. Highly recommend!',
                },
                {
                  name: 'Priya Desai',
                  project: 'Commercial Gate',
                  text: 'Professional team with great attention to detail. They understood our requirements perfectly and delivered beyond expectations.',
                },
                {
                  name: 'Amit Patel',
                  project: 'Industrial Structure',
                  text: 'We needed heavy-duty fabrication for our factory, and they delivered exceptional quality. The team is reliable and skilled.',
                },
                {
                  name: 'Sneha Kulkarni',
                  project: 'Villa Gates & Grills',
                  text: 'Beautiful designs and flawless execution. The entire process was smooth, and the final result exceeded our expectations.',
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 bg-zinc-800/50 border border-gray-700 rounded-xl"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.project}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Our Projects Stand Out
            </h2>

            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: 'Premium Finish',
                  description: 'Mirror polish, brushed, or matte - we deliver the exact finish you envision',
                },
                {
                  title: 'Structural Integrity',
                  description: 'Every weld and joint is tested for strength and long-term durability',
                },
                {
                  title: 'Design Flexibility',
                  description: 'Custom designs tailored to your aesthetic preferences and functional needs',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-zinc-900/50 border border-gray-700 rounded-xl"
                >
                  <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something exceptional together. Contact us for a free consultation.
          </p>
          <a
            href="tel:+918178668710"
            className="inline-block px-8 py-4 bg-white text-zinc-900 font-bold rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105 shadow-lg"
          >
            Call Us Now: +91 81786 68710
          </a>
        </div>
      </section>
    </div>
  );
}
