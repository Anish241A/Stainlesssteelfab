import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      const response = await fetch(
        `${supabaseUrl}/functions/v1/send_lead_notification`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${anonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const phoneNumber = '918178668710';
  const whatsappMessage = encodeURIComponent(
    'Hi! I would like to know more about your stainless steel fabrication services.'
  );

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16 fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="text-gradient">Contact Us</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Get in touch for a free consultation and quote
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Have a project in mind? Fill out the form and our team will get back to you within 24 hours.
                For urgent inquiries, call or WhatsApp us directly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-zinc-800/50 border border-gray-700 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+918178668710"
                      className="text-gray-400 hover:text-gray-200 transition-colors"
                    >
                      +91 81786 68710
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-zinc-800/50 border border-gray-700 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-200 transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-zinc-800/50 border border-gray-700 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:info@ssfabrication.in"
                      className="text-gray-400 hover:text-gray-200 transition-colors"
                    >
                      info@ssfabrication.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-zinc-800/50 border border-gray-700 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Address</h3>
                    <p className="text-gray-400">
                      123 Industrial Area, Andheri East
                      <br />
                      Mumbai, Maharashtra 400069
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-zinc-800/50 border border-gray-700 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-400">
                      Monday - Saturday: 9:00 AM - 7:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="welding">Stainless Steel Welding</option>
                    <option value="railing">SS Railing Fabrication</option>
                    <option value="gate">Gate & Grill Works</option>
                    <option value="structure">Custom Steel Structures</option>
                    <option value="industrial">Industrial Fabrication</option>
                    <option value="repair">Repair & Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitted || loading}
                  className="w-full px-6 py-4 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitted ? (
                    <>
                      <span>Message Sent! Thanks for your interest.</span>
                    </>
                  ) : loading ? (
                    <>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Find Us Here</h2>
            <p className="text-gray-400 text-lg">Visit our workshop for consultations</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-zinc-800/50 border border-gray-700 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609931464!2d72.74109995!3d19.082177450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prefer to Call or WhatsApp?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Our team is ready to answer your questions and provide instant quotes
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+918178668710"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
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
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
