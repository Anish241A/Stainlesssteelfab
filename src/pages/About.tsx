import { Award, Users, Target, Zap, TrendingUp, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16 fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="text-gradient">About Us</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Building trust through precision, quality, and commitment since 2010
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm font-medium text-gray-300 mb-4">
                Established in 2010
              </div>
              <h2 className="text-4xl font-bold text-white leading-tight">
                India's Trusted Partner in Stainless Steel Excellence
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                For over a decade, we have been at the forefront of stainless steel fabrication in India,
                serving homeowners, builders, contractors, and industrial clients with unwavering dedication
                to quality and precision.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                What started as a small workshop has grown into a full-service fabrication facility,
                equipped with modern machinery and staffed by highly skilled craftsmen. Our journey has
                been built on trust, excellence, and the satisfaction of over 500 clients across the region.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-zinc-800/50 border border-gray-700 rounded-xl text-center">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="p-6 bg-zinc-800/50 border border-gray-700 rounded-xl text-center">
                <div className="text-4xl font-bold text-white mb-2">14+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="p-6 bg-zinc-800/50 border border-gray-700 rounded-xl text-center">
                <div className="text-4xl font-bold text-white mb-2">30+</div>
                <div className="text-gray-400 text-sm">Skilled Workers</div>
              </div>
              <div className="p-6 bg-zinc-800/50 border border-gray-700 rounded-xl text-center">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Award,
                title: 'Quality First',
                description:
                  'We never compromise on quality. Every project, no matter the size, receives the same meticulous attention to detail and commitment to excellence.',
              },
              {
                icon: Users,
                title: 'Customer Focus',
                description:
                  'Your satisfaction is our success. We listen to your needs, understand your vision, and work tirelessly to exceed your expectations.',
              },
              {
                icon: Target,
                title: 'Precision Work',
                description:
                  'Accuracy matters. Our skilled craftsmen use advanced techniques and tools to ensure every measurement, cut, and weld is perfect.',
              },
              {
                icon: Zap,
                title: 'Innovation',
                description:
                  'We stay ahead of industry trends, adopting new technologies and methods to deliver better results and efficient solutions.',
              },
              {
                icon: TrendingUp,
                title: 'Reliability',
                description:
                  'We deliver on our promises. From timelines to budgets, you can count on us to maintain transparency and keep our commitments.',
              },
              {
                icon: Heart,
                title: 'Integrity',
                description:
                  'Honesty and ethical practices form the foundation of our business. We build relationships based on trust and mutual respect.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 bg-zinc-800/50 border border-gray-700 rounded-xl hover:border-gray-600 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <value.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              Our Commitment to Excellence
            </h2>

            <div className="space-y-6">
              <div className="p-6 bg-zinc-900/50 border-l-4 border-gray-600 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Premium Materials Only</h3>
                <p className="text-gray-400 leading-relaxed">
                  We source high-grade stainless steel from certified suppliers, ensuring every structure
                  we build offers superior corrosion resistance, strength, and longevity. Your investment
                  is protected with materials built to last decades.
                </p>
              </div>

              <div className="p-6 bg-zinc-900/50 border-l-4 border-gray-600 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Certified Craftsmen</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our team consists of certified welders and fabricators with extensive training and
                  hands-on experience. Each member brings specialized skills that ensure flawless execution
                  on every project, from residential to heavy industrial work.
                </p>
              </div>

              <div className="p-6 bg-zinc-900/50 border-l-4 border-gray-600 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Modern Equipment</h3>
                <p className="text-gray-400 leading-relaxed">
                  We invest in state-of-the-art machinery and tools to deliver precision and efficiency.
                  From CNC cutting machines to advanced welding equipment, our facility is equipped to
                  handle projects of any complexity with accuracy and speed.
                </p>
              </div>

              <div className="p-6 bg-zinc-900/50 border-l-4 border-gray-600 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Quality Assurance</h3>
                <p className="text-gray-400 leading-relaxed">
                  Every project undergoes rigorous quality checks at multiple stages. From initial design
                  review to final finishing, we maintain strict standards to ensure structural integrity,
                  aesthetic perfection, and complete customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Partner with Experience
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us with their stainless steel fabrication needs.
          </p>
          <a
            href="tel:+918178668710"
            className="inline-block px-8 py-4 bg-white text-zinc-900 font-bold rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105 shadow-lg"
          >
            Call Us: +91 81786 68710
          </a>
        </div>
      </section>
    </div>
  );
}
