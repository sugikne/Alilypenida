import React, { useState } from 'react';
import { Instagram, MessageCircle, MapPin, Mail, Clock, Send, Check } from 'lucide-react';
import { IMAGES } from '../data';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer id="main-footer" className="bg-[#6A5843] text-[#F8F6F2] pt-16 pb-8 border-t border-[#8C775B]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        
        {/* Brand Column */}
        <div id="footer-col-brand" className="space-y-4">
          <div className="bg-white p-3 rounded-2xl inline-block shadow-md">
            <img
              src={IMAGES.logo}
              alt="A.LILY Penida Logo"
              className="h-10 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-sm text-[#F8F6F2]/80 leading-relaxed font-sans">
            A cozy tropical oasis located in Ped, Nusa Penida, Bali. Offering signature barista-crafted coffee, vibrant smoothie bowls, and gourmet fusion foods.
          </p>
          <div className="flex items-center space-x-3 pt-2">
            <a
              id="footer-instagram"
              href="https://instagram.com/alily_penida"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#8C775B]/30 hover:bg-[#B89B72] text-[#F8F6F2] flex items-center justify-center transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              id="footer-whatsapp"
              href="https://wa.me/6285337249782"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#8C775B]/30 hover:bg-[#B89B72] text-[#F8F6F2] flex items-center justify-center transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <a
              id="footer-maps"
              href="https://maps.app.goo.gl/E6Xs1r5aFaCw5DWX6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#8C775B]/30 hover:bg-[#B89B72] text-[#F8F6F2] flex items-center justify-center transition-colors duration-300"
              aria-label="Google Maps"
            >
              <MapPin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div id="footer-col-links" className="space-y-4">
          <h3 className="font-serif text-lg font-bold tracking-tight text-[#B89B72]">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About Alily', id: 'about' },
              { name: 'Explore Menu', id: 'menu' },
              { name: 'Make Reservation', id: 'reservation' },
              { name: 'Find Location', id: 'location' },
              { name: 'Read Blog', id: 'blog' },
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className="text-[#F8F6F2]/80 hover:text-white hover:underline transition-all duration-200 text-left cursor-pointer"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Opening Hours & Contact */}
        <div id="footer-col-info" className="space-y-4">
          <h3 className="font-serif text-lg font-bold tracking-tight text-[#B89B72]">Opening Hours</h3>
          <div className="space-y-3.5 text-sm text-[#F8F6F2]/80">
            <div className="flex items-start gap-2.5">
              <Clock size={16} className="text-[#B89B72] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-[#F8F6F2]">Every Day</p>
                <p className="text-xs">07:30 AM – 10:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin size={16} className="text-[#B89B72] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-[#F8F6F2]">Location</p>
                <p className="text-xs leading-relaxed">Ped, Nusa Penida, Klungkung, Bali 80771</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Mail size={16} className="text-[#B89B72] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-[#F8F6F2]">Email & Phone</p>
                <p className="text-xs">info@alilypenida.com</p>
                <p className="text-xs">+62 853-3724-9782</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Column */}
        <div id="footer-col-newsletter" className="space-y-4">
          <h3 className="font-serif text-lg font-bold tracking-tight text-[#B89B72]">Newsletter</h3>
          <p className="text-sm text-[#F8F6F2]/80 leading-relaxed">
            Subscribe to receive exclusive recipes, travel tips, and events news from Alily Penida.
          </p>
          <form id="footer-newsletter-form" onSubmit={handleSubscribe} className="space-y-2">
            <div className="flex overflow-hidden rounded-xl border border-[#8C775B]/30 bg-[#8C775B]/20">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder-white/50 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#B89B72] hover:bg-[#A6845C] text-white px-4 flex items-center justify-center transition-colors duration-200 cursor-pointer"
                aria-label="Subscribe"
              >
                {subscribed ? <Check size={16} className="text-white" /> : <Send size={16} />}
              </button>
            </div>
            {subscribed && (
              <p className="text-xs text-emerald-400 font-medium animate-pulse">
                Thank you for subscribing to Alily Penida!
              </p>
            )}
          </form>
        </div>

      </div>

      <div id="footer-copyright-row" className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-[#8C775B]/20 flex flex-col md:flex-row items-center justify-between text-xs text-[#F8F6F2]/60 gap-4">
        <p>© 2026 Alily Penida Cafe & Restaurant. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#location" onClick={(e) => { e.preventDefault(); handleNavClick('location'); }} className="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
