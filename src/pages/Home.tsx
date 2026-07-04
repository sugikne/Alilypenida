import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, ShieldCheck, Wifi, Heart, Star, ChevronRight, Play, X, ArrowUpRight, MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { MENU_ITEMS, SPECIALS, TESTIMONIALS, IMAGES } from '../data';
import { MenuItem } from '../types';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const galleryImages = [
    { url: IMAGES.hero, alt: 'Alily Penida Modern Interior', category: 'Interior' },
    { url: IMAGES.coffee, alt: 'Specialty Barista Coffee with Latte Art', category: 'Coffee' },
    { url: IMAGES.smoothieBowl, alt: 'Vibrant Alily Sunshine Smoothie Bowl', category: 'Food' },
    { url: IMAGES.galleryInterior1, alt: 'Warm Lighting and Dining Spaces', category: 'Interior' },
    { url: IMAGES.galleryOutdoor, alt: 'Cozy Tropical Outdoor Seating', category: 'Outdoor' },
    { url: IMAGES.galleryInterior2, alt: 'Comfortable Nooks for Digital Nomads', category: 'Workspace' },
  ];

  const features = [
    {
      icon: <ShieldCheck className="text-[#B89B72]" size={28} />,
      title: 'Fresh Ingredients',
      description: 'Sourced daily from local Balinese volcanic farming cooperatives in Kintamani and Bedugul.'
    },
    {
      icon: <Coffee className="text-[#B89B72]" size={28} />,
      title: 'Best Coffee',
      description: 'Specialty grade Arabica custom roasted locally, expertly dialed-in by seasoned baristas.'
    },
    {
      icon: <Wifi className="text-[#B89B72]" size={28} />,
      title: 'Comfortable Space',
      description: 'A quiet, lush green layout equipped with reliable high-speed fiber WiFi and laptop outlets.'
    },
    {
      icon: <Heart className="text-[#B89B72]" size={28} />,
      title: 'Friendly Service',
      description: 'Experience genuine, warm traditional Balinese hospitality that makes you feel right at home.'
    }
  ];

  return (
    <div id="home-page" className="w-full">
      {/* 1. HERO SECTION (Artistic Flair Theme Layout) */}
      <section id="hero-section" className="relative min-h-[calc(100vh-76px)] lg:min-h-screen flex items-center bg-[#F8F6F2] py-12 lg:py-24 overflow-hidden">
        {/* Mobile-only background image for unified text-image presentation */}
        <div className="absolute inset-0 lg:hidden z-0">
          <img
            src={IMAGES.hero}
            alt="Alily Penida Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Elegant overlay to ensure premium legibility and brand-matching beige tone */}
          <div className="absolute inset-0 bg-[#F8F6F2]/85 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left z-10 space-y-6 lg:pr-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex flex-col items-start gap-1">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89B72] font-bold">Ped, Nusa Penida, Bali</span>
                <div className="w-12 h-[1px] bg-[#B89B72] mt-1"></div>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-[#6A5843] tracking-tight">
                Experience <br/> <i className="font-light">the Taste</i> <br/> of Nusa Penida
              </h1>
              
              <p className="font-sans text-base md:text-lg text-[#6A5843]/80 leading-relaxed max-w-sm font-light">
                Fresh ingredients. Local flavors. A tropical sanctuary where great coffee meets a relaxing Balinese atmosphere.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <button
                id="hero-explore-cta"
                onClick={() => handleNavClick('menu')}
                className="px-10 py-4 bg-[#6A5843] text-white rounded-xl text-xs font-semibold uppercase tracking-wider shadow-xl shadow-[#6A5843]/20 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                Explore Menu
              </button>
              <button
                id="hero-reserve-cta"
                onClick={() => handleNavClick('about')}
                className="px-10 py-4 border border-[#6A5843]/30 text-[#6A5843] rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-white transition-all duration-300 cursor-pointer"
              >
                Our Story
              </button>
            </motion.div>
          </div>

          {/* Right Side: Visual Artistic Grid (Hidden on mobile as it is now integrated into the background) */}
          <div className="hidden lg:block lg:col-span-6 relative h-[500px] md:h-[600px] w-full mt-8 lg:mt-0">
            {/* Decorative element circle outline */}
            <div className="absolute -bottom-4 right-12 w-24 h-24 border-4 border-[#B89B72]/20 rounded-full hidden md:block" />

            {/* Large Main Image with image-overlap */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="absolute top-0 right-0 w-[85%] h-[90%] bg-[#E8E4DD] rounded-[40px] overflow-hidden image-overlap"
            >
              <img
                src={IMAGES.hero}
                alt="Alily Penida Luxury Resort Cafe"
                className="w-full h-full object-cover opacity-95 hover:scale-101 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Floating Card 1: Today's Special */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-4 left-0 md:-left-8 glass p-5 rounded-3xl w-56 md:w-64 shadow-2xl z-20"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-[9px] uppercase tracking-widest font-bold opacity-60 text-[#2B2B2B]">Today's Special</span>
                <span className="text-[#B89B72] font-serif text-xs md:text-sm italic font-bold">IDR 85k</span>
              </div>
              <h4 className="font-serif text-lg md:text-xl text-[#6A5843] mb-1 font-bold">Tropical Açaí Bowl</h4>
              <p className="text-[10px] leading-relaxed opacity-80 mb-3 text-[#2B2B2B]">Fresh dragon fruit, mango, granola, and organic honey.</p>
              <div className="w-full h-24 md:h-28 bg-[#E8E4DD] rounded-2xl overflow-hidden">
                <img
                  src={IMAGES.smoothieBowl}
                  alt="Tropical Acai Bowl"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Floating Card 2: Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-12 -right-4 md:-right-8 glass p-4 rounded-2xl w-36 shadow-xl z-20 text-center"
            >
              <div className="text-[#6A5843] font-serif text-xl md:text-2xl font-bold">07:30</div>
              <div className="text-[9px] uppercase tracking-widest opacity-50 my-1 text-[#2B2B2B]">to</div>
              <div className="text-[#6A5843] font-serif text-xl md:text-2xl font-bold">22:00</div>
              <div className="mt-2.5 text-[10px] font-bold text-[#B89B72] uppercase tracking-wider">Open Daily</div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. WHY CHOOSE US */}
      <section id="why-choose-us" className="py-12 sm:py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-xs tracking-widest text-[#8C775B] uppercase font-semibold">The Alily Standard</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6A5843]">Why Travelers Choose Us</h2>
            <div className="w-16 h-1 bg-[#B89B72] mx-auto rounded-full" />
            <p className="text-sm text-[#2B2B2B]/70 font-sans max-w-md mx-auto pt-2">
              We focus on premium qualities that enrich your Island adventures and culinary moments.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white p-2 sm:p-8 rounded-xl sm:rounded-3xl border border-[#6A5843]/5 hover:border-[#B89B72]/20 hover:shadow-xl transition-all duration-300 group ${idx === 3 ? 'hidden md:block' : 'block'}`}
              >
                <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-lg sm:rounded-2xl bg-[#F8F6F2] flex items-center justify-center mb-3 sm:mb-6 group-hover:bg-[#6A5843] group-hover:text-white transition-all duration-300">
                  <span className="scale-75 sm:scale-100 group-hover:scale-90 sm:group-hover:scale-110 transition-transform duration-300 group-hover:text-white flex items-center justify-center">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="font-serif text-[10px] sm:text-xl font-bold text-[#6A5843] mb-1 sm:mb-3">{feature.title}</h3>
                <p className="text-[8px] sm:text-sm text-[#2B2B2B]/75 leading-relaxed font-sans line-clamp-3 sm:line-clamp-none">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TODAY'S SPECIAL */}
      <section id="specials" className="py-12 sm:py-24 bg-[#FFFFFF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
            <div className="space-y-3">
              <span className="font-mono text-xs tracking-widest text-[#8C775B] uppercase font-semibold">Daily Creations</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6A5843]">Today's Special Dishes</h2>
              <div className="w-16 h-1 bg-[#B89B72] rounded-full" />
            </div>
            <button
              onClick={() => handleNavClick('menu')}
              className="group text-sm font-semibold text-[#6A5843] hover:text-[#B89B72] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              View Full Menu
              <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8">
            {SPECIALS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`bg-[#F8F6F2]/50 rounded-xl sm:rounded-3xl overflow-hidden border border-[#6A5843]/5 hover:border-[#B89B72]/20 hover:shadow-2xl hover:bg-white transition-all duration-300 flex flex-col h-full group cursor-pointer ${idx === 3 ? 'hidden md:block' : 'block'}`}
                onClick={() => handleNavClick('menu')}
              >
                {/* Image Container */}
                <div className="h-24 xs:h-32 sm:h-56 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {item.tags && item.tags.length > 0 && (
                    <div className="absolute top-1.5 left-1.5 sm:top-4 sm:left-4 flex flex-wrap gap-1 max-w-[90%]">
                      {item.tags.slice(0, 2).map((tag, tIdx) => (
                        <span key={tIdx} className="text-[6px] sm:text-[10px] font-mono tracking-wider uppercase font-semibold px-1 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/90 text-[#6A5843] backdrop-blur-sm shadow-sm border border-[#6A5843]/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="absolute bottom-1.5 right-1.5 sm:bottom-4 sm:right-4 bg-[#6A5843]/90 backdrop-blur-sm text-white font-mono text-[8px] sm:text-xs font-semibold px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/10">
                    {item.price}
                  </span>
                </div>

                {/* Content */}
                <div className="p-2 sm:p-6 flex flex-col flex-grow space-y-1.5 sm:space-y-3">
                  <h3 className="font-serif text-[10px] sm:text-xl font-bold text-[#6A5843] group-hover:text-[#B89B72] transition-colors line-clamp-2 md:line-clamp-none">
                    {item.name}
                  </h3>
                  <p className="text-[8px] sm:text-xs text-[#2B2B2B]/75 leading-relaxed font-sans flex-grow line-clamp-2 sm:line-clamp-none">
                    {item.description}
                  </p>
                  <div className="pt-1.5 sm:pt-2 border-t border-[#6A5843]/5 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-1">
                    <span className="text-[7px] sm:text-[10px] font-mono uppercase text-[#8C775B] tracking-wider bg-[#F8F6F2] px-1 sm:px-2.5 py-0.5 sm:py-1 rounded-md">{item.category}</span>
                    <span className="text-[8px] sm:text-xs font-semibold text-[#B89B72] flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                      Details <ChevronRight size={10} className="mt-0.5 sm:size-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GALLERY PREVIEW */}
      <section id="gallery-preview" className="py-12 sm:py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-xs tracking-widest text-[#8C775B] uppercase font-semibold">Tropical Visuals</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6A5843]">Moments From Alily Penida</h2>
            <div className="w-16 h-1 bg-[#B89B72] mx-auto rounded-full" />
            <p className="text-sm text-[#2B2B2B]/70 font-sans max-w-md mx-auto pt-2">
              A glimpse inside our modern cafe atmosphere, signature dishes, and relaxing outdoor garden.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setSelectedImage(img.url)}
                className="relative h-48 md:h-72 rounded-3xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#6A5843]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#B89B72]">{img.category}</span>
                  <p className="text-white text-xs md:text-sm font-semibold tracking-wide font-sans">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close lightbox"
              >
                <X size={28} />
              </button>
              <motion.img
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                src={selectedImage}
                alt="Enlarged gallery photo"
                className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/5"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 5. GOOGLE REVIEWS TESTIMONIALS */}
      <section id="testimonials" className="py-12 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-xs tracking-widest text-[#8C775B] uppercase font-semibold">Guest Experiences</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6A5843]">What Our Visitors Say</h2>
            <div className="w-16 h-1 bg-[#B89B72] mx-auto rounded-full" />
            <p className="text-sm text-[#2B2B2B]/70 font-sans max-w-md mx-auto pt-2">
              Reviews left by local and international guests who explored Nusa Penida and found comfort at Alily.
            </p>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-8">
            {TESTIMONIALS.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#F8F6F2] p-2 sm:p-8 rounded-xl sm:rounded-3xl border border-[#6A5843]/5 flex flex-col justify-between relative"
              >
                {/* Quotes Background */}
                <span className="absolute right-2 sm:right-8 top-1.5 sm:top-6 font-serif text-3xl sm:text-7xl text-[#6A5843]/5 pointer-events-none">“</span>

                <div className="space-y-1.5 sm:space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-0.5 sm:space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={8} className="fill-[#B89B72] text-[#B89B72] sm:size-4" />
                    ))}
                  </div>
                  
                  <p className="text-[7px] sm:text-sm text-[#2B2B2B]/85 italic leading-relaxed font-sans line-clamp-4 sm:line-clamp-none">
                    "{review.comment}"
                  </p>
                </div>

                {/* Profile row */}
                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-1 sm:gap-4 mt-3 sm:mt-8 pt-1.5 sm:pt-4 border-t border-[#6A5843]/5">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-6 h-6 sm:w-12 sm:h-12 rounded-full object-cover border border-[#6A5843]/10"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif text-[8px] sm:text-sm font-bold text-[#6A5843] truncate max-w-full">{review.author}</h4>
                    {review.role && <p className="text-[6px] sm:text-[11px] font-sans text-[#2B2B2B]/60 truncate max-w-full">{review.role}</p>}
                    <p className="text-[5px] sm:text-[10px] font-mono text-[#8C775B] mt-0.5">{review.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              id="google-maps-reviews-link"
              href="https://maps.app.goo.gl/E6Xs1r5aFaCw5DWX6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#6A5843] hover:text-[#B89B72] bg-[#F8F6F2] px-6 py-3.5 rounded-full border border-[#6A5843]/5 transition-colors cursor-pointer"
            >
              <Star size={14} className="fill-[#B89B72] text-[#B89B72]" />
              View All Google Reviews
            </a>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION (CTA) */}
      <section id="home-cta" className="py-12 sm:py-24 bg-[#F8F6F2] relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#B89B72]/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#6A5843]/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#6A5843] text-white p-12 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden space-y-6"
          >
            {/* Background texture */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#F8F6F2_1px,transparent_1px)] [background-size:16px_16px]" />

            <span className="font-mono text-xs tracking-widest text-[#B89B72] uppercase font-semibold">Embark on the Journey</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#F8F6F2]">
              Ready to Visit Alily Penida?
            </h2>
            <p className="text-sm md:text-base text-[#F8F6F2]/80 max-w-md mx-auto leading-relaxed">
              Reserve your table today to secure a spot under our lush trees, next to your charging port, or on the comfortable couch.
            </p>
            <div className="pt-4">
              <button
                id="cta-reserve-now-btn"
                onClick={() => handleNavClick('reservation')}
                className="bg-[#B89B72] hover:bg-[#A6845C] text-white text-sm font-semibold tracking-wide px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                Reserve Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

     {/* 7. LIVE LOCATION & MAP INTEGRATION */}
      <section id="home-location-embed" className="py-12 md:py-20 bg-white border-t border-[#6A5843]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Info Details Left Grid */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-[10px] sm:text-xs tracking-widest text-[#8C775B] uppercase font-semibold">Visit Our Sanctuary</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#6A5843] leading-tight">Find Alily Penida</h2>
            <p className="text-xs sm:text-sm text-[#2B2B2B]/75 leading-relaxed font-sans">
              Nestled right off the paved main coastal road in Ped Village, Nusa Penida. Stop by for our signature barista coffee, healthy bowls, or an unforgettable dinner under the stars.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F8F6F2] flex items-center justify-center text-[#B89B72] shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="text-xs sm:text-sm">
                  <p className="font-serif font-bold text-[#6A5843]">Our Address</p>
                  <p className="text-gray-500 font-sans mt-0.5">Jalan Ped – Buyuk, Ped, Kec. Nusa Penida, Bali</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F8F6F2] flex items-center justify-center text-[#B89B72] shrink-0">
                  <Clock size={18} />
                </div>
                <div className="text-xs sm:text-sm">
                  <p className="font-serif font-bold text-[#6A5843]">Opening Hours</p>
                  <p className="text-gray-500 font-sans mt-0.5">Daily • 07:30 AM – 10:00 PM</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F8F6F2] flex items-center justify-center text-[#B89B72] shrink-0">
                  <Phone size={18} />
                </div>
                <div className="text-xs sm:text-sm">
                  <p className="font-serif font-bold text-[#6A5843]">Contact Hotline</p>
                  <p className="text-gray-500 font-sans mt-0.5">+62 853-3724-9782</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://www.google.com/maps/place/Alily,+coffee+%26+eatery/@-8.6793093,115.4869854,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd273c90eef3afd:0x2654d2883188c37d!8m2!3d-8.6793093!4d115.4895603!16s%2Fg%2F11swf43nt4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#6A5843] text-white hover:bg-[#A6845C] px-6 py-3 rounded-full text-xs font-semibold tracking-wide shadow-md transition-all cursor-pointer"
              >
                <Navigation size={12} className="fill-white" />
                Directions in Google Maps
              </a>
            </div>
          </div>

          {/* Map Right Grid */}
          <div className="lg:col-span-7 h-[300px] sm:h-[400px] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#6A5843]/10 shadow-lg relative group">
            <iframe
              id="home-google-map-iframe"
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
          </div>

        </div>
      </section>
    </div>
  );
}
