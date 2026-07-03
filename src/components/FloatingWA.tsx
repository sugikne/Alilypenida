import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWA() {
  const handleWAClick = () => {
    const phoneNumber = '6285337249782';
    const message = encodeURIComponent("Hello Alily Penida, I would like to inquire about reservation, events, or your menu.");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <button
      id="floating-wa-btn"
      onClick={handleWAClick}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110 active:scale-95 group flex items-center justify-center cursor-pointer"
      aria-label="Chat with Alily Penida on WhatsApp"
    >
      {/* Outer pulsing ring */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10 group-hover:hidden" />
      
      <MessageCircle size={24} className="fill-white" />
      
      {/* Tooltip */}
      <span className="absolute right-14 bg-white text-[#2B2B2B] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-gray-100">
        Chat with Us
      </span>
    </button>
  );
}
