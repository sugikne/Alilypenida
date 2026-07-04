import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Car, Clock, Instagram, MessageCircle, Phone, Compass, Info } from 'lucide-react';
import { NEARBY_ATTRACTIONS } from '../data';

export default function Location() {
  const handleOpenMaps = () => {
    window.open('https://www.google.com/maps/place/Alily,+coffee+%26+eatery/@-8.6793093,115.4869854,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd273c90eef3afd:0x2654d2883188c37d!8m2!3d-8.6793093!4d115.4895603!16s%2Fg%2F11swf43nt4', '_blank');
  };

  const contacts = [
    {
      icon: <Instagram className="text-[#B89B72]" size={20} />,
      title: 'Instagram DM',
      linkText: '@alily_penida',
      url: 'https://instagram.com/alily_penida'
    },
    {
      icon: <MessageCircle className="text-[#B89B72]" size={20} />,
      title: 'WhatsApp Concierge',
      linkText: '+62 853-3724-9782',
      url: 'https://wa.me/6285337249782'
    },
    {
      icon: <Phone className="text-[#B89B72]" size={20} />,
      title: 'Direct Reservation',
      linkText: '+62 853 3724 9782',
      url: 'tel:+6285337249782'
    }
  ];

  return (
    <div id="location-page" className="w-full bg-[#F8F6F2]">
      {/* 1. HERO */}
      <section id="location-hero" className="relative py-16 md:py-36 bg-[#6A5843] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200"
            alt="Nusa Penida Coast beach road"
            className="w-full h-full object-cover opacity-15 filter brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#6A5843]/85" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <span className="font-mono text-xs tracking-widest text-[#B89B72] uppercase font-bold">Find Us In Paradise</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#F8F6F2]">
              Our Location & Directions
            </h1>
            <p className="text-sm md:text-base text-[#F8F6F2]/80 max-w-xl mx-auto font-sans">
              Centrally located on the beautiful paved northern coast road in Ped village, Nusa Penida, Bali.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. GOOGLE MAPS EMBED & MAIN INFO */}
      <section id="maps-embed-section" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Maps IFrame Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 h-[450px] rounded-[32px] overflow-hidden border border-[#6A5843]/10 shadow-xl relative group"
          >
            {/* Real responsive Google Maps iframe */}
            <iframe
              id="google-map-iframe"
              title="Alily Penida Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5186419736866!2d115.4869854!3d-8.6793093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd273c90eef3afd%3A0x2654d2883188c37d!2sAlily%2C+coffee+%26+eatery!5e0!3m2!1sen!2sid!4v1783000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* Location details card */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs tracking-widest text-[#8C775B] uppercase font-semibold">Coastal Road Oasis</span>
            <h2 className="font-serif text-3xl font-bold text-[#6A5843] leading-tight">Ped Village, Nusa Penida</h2>
            <div className="w-12 h-1 bg-[#B89B72] rounded-full" />
            
            <p className="text-sm text-[#2B2B2B]/75 leading-relaxed font-sans">
              You will find **Alily Penida** right off the paved main coastal road in Ped. We are situated perfectly between the harbor gateways, making us the ideal first stop after arriving on the island, or a refreshing sanctuary before your ferry departures.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-3">
                <MapPin className="text-[#B89B72] shrink-0" size={20} />
                <div className="text-sm">
                  <p className="font-serif font-bold text-[#6A5843]">Physical Address</p>
                  <p className="text-gray-500 font-sans mt-0.5">Jalan Ped – Buyuk, Ped, Kec. Nusa Penida, Kabupaten Klungkung, Bali 80771</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Car className="text-[#B89B72] shrink-0" size={20} />
                <div className="text-sm">
                  <p className="font-serif font-bold text-[#6A5843]">Parking Accessibility</p>
                  <p className="text-gray-500 font-sans mt-0.5">We provide free, spacious paved scooter parking bays directly in front of the cafe. Moderate car parking space is available on-site.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                id="maps-directions-btn"
                onClick={handleOpenMaps}
                className="bg-[#6A5843] text-white hover:bg-[#A6845C] px-6 py-3.5 rounded-full text-xs font-semibold tracking-wide shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Navigation size={14} className="fill-white" />
                Directions in Google Maps
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CONTACT & GENERAL INFO PANEL */}
      <section id="location-details-cards" className="py-10 md:py-16 bg-[#F8F6F2] border-t border-b border-[#6A5843]/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Contacts info panel */}
          <div className="bg-white p-8 rounded-3xl border border-[#6A5843]/5 shadow-sm space-y-6">
            <h3 className="font-serif text-xl font-bold text-[#6A5843]">Get in Touch</h3>
            <div className="w-8 h-0.5 bg-[#B89B72] rounded-full" />
            <div className="space-y-4">
              {contacts.map((contact, idx) => (
                <a
                  key={idx}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-[#F8F6F2] transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F8F6F2] flex items-center justify-center group-hover:bg-[#6A5843] group-hover:text-white transition-colors">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400">{contact.title}</p>
                    <p className="text-xs font-semibold text-[#2B2B2B] mt-0.5">{contact.linkText}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Opening hours panel */}
          <div className="bg-white p-8 rounded-3xl border border-[#6A5843]/5 shadow-sm space-y-6">
            <h3 className="font-serif text-xl font-bold text-[#6A5843]">Opening Hours</h3>
            <div className="w-8 h-0.5 bg-[#B89B72] rounded-full" />
            <table className="w-full text-xs text-[#2B2B2B]/85 font-sans">
              <tbody>
                {[
                  { day: 'Monday', hours: '07:30 AM – 10:00 PM' },
                  { day: 'Tuesday', hours: '07:30 AM – 10:00 PM' },
                  { day: 'Wednesday', hours: '07:30 AM – 10:00 PM' },
                  { day: 'Thursday', hours: '07:30 AM – 10:00 PM' },
                  { day: 'Friday', hours: '07:30 AM – 10:00 PM' },
                  { day: 'Saturday', hours: '07:30 AM – 10:00 PM' },
                  { day: 'Sunday', hours: '07:30 AM – 10:00 PM' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-[#6A5843]/5 last:border-0">
                    <td className="py-2.5 font-semibold text-[#6A5843]">{row.day}</td>
                    <td className="py-2.5 text-right font-mono text-gray-500">{row.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Island Tips panel */}
          <div className="bg-[#6A5843] text-white p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-md">
            <div className="absolute inset-0 bg-[radial-gradient(#B89B72_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-[#8C775B]/30 flex items-center justify-center text-[#B89B72]">
                <Info size={20} />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Island Road Advice</h3>
              <p className="text-xs text-[#F8F6F2]/80 leading-relaxed font-sans">
                Roads in Nusa Penida are paved but can get narrow and steep as you drive south towards viewpoints. We suggest exploring by scooter only if you have experienced bike handling. Alternatively, you can contact us to recommend reliable private local drivers with air-conditioned cars.
              </p>
            </div>
            <p className="text-[10px] font-mono text-[#B89B72] tracking-wider uppercase pt-4 border-t border-[#8C775B]/30 relative z-10">
              Travel Safely in Nusa Penida
            </p>
          </div>

        </div>
      </section>

      {/* 4. NEARBY ATTRACTIONS */}
      <section id="nearby-attractions" className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-xs tracking-widest text-[#8C775B] uppercase font-semibold">Explore Nusa Penida</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6A5843]">Nearby Attractions From Us</h2>
            <div className="w-16 h-1 bg-[#B89B72] mx-auto rounded-full" />
            <p className="text-sm text-[#2B2B2B]/70 font-sans max-w-md mx-auto pt-2">
              Plan your island discovery loops easily. Alily Penida is the central starting point for these incredible sights.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8">
            {NEARBY_ATTRACTIONS.map((attr, idx) => (
              <motion.div
                key={attr.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-[#F8F6F2]/50 rounded-xl sm:rounded-3xl overflow-hidden border border-[#6A5843]/5 hover:border-[#B89B72]/20 hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col h-full group ${idx === 3 ? 'hidden md:flex' : 'flex'}`}
              >
                <div className="h-24 xs:h-32 sm:h-44 overflow-hidden relative">
                  <img
                    src={attr.image}
                    alt={attr.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-1.5 left-1.5 sm:bottom-3 sm:left-3 bg-[#6A5843]/90 backdrop-blur-sm text-white font-mono text-[6px] sm:text-[10px] tracking-wider uppercase font-semibold px-1 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-white/10">
                    {attr.distance}
                  </span>
                </div>
                <div className="p-2 sm:p-6 flex flex-col flex-grow space-y-1 sm:space-y-2">
                  <h3 className="font-serif text-[10px] sm:text-lg font-bold text-[#6A5843] group-hover:text-[#B89B72] transition-colors flex items-center gap-1 sm:gap-1.5">
                    <Compass size={10} className="text-[#B89B72] sm:size-4" />
                    {attr.name}
                  </h3>
                  <p className="text-[8px] sm:text-xs text-[#2B2B2B]/75 leading-relaxed font-sans flex-grow line-clamp-3 sm:line-clamp-none">
                    {attr.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
