import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '918178668710';
  const message = encodeURIComponent(
    'Hi! I would like to know more about your stainless steel fabrication services.'
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-110 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
      <span className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
    </a>
  );
}
