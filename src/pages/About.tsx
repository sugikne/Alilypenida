import React from 'react';
import { motion } from 'motion/react';
import { Award, Compass, Heart, Leaf, Users, Calendar, ArrowRight } from 'lucide-react';
import { IMAGES } from '../data';

export default function About() {
  const coreValues = [
    {
      icon: <Leaf className="text-[#B89B72]" size={24} />,
      title: 'Eco-Conscious',
      description: 'We strive to protect Nusa Penida’s beautiful ecology by reducing single-use plastics, using bio-compostable straws, and conserving local resources.'
    },
    {
      icon: <Users className="text-[#B89B72]" size={24} />,
      title: 'Community First',
      description: 'We actively partner with local Balinese suppliers and farming families, keeping tourism revenues flowing directly back into the local economy.'
    },
    {
      icon: <Compass className="text-[#B89B72]" size={24} />,
      title: 'Culinary Integrity',
      description: 'No shortcuts. We bake our sourdough, roast our signature coffee beans, and slice fresh traditional spices to order every single day.'
    }
  ];

  const team = [
    {
      name: 'Wayan Arta',
      role: 'Culinary Lead & Head Chef',
      bio: 'Wayan has over 15 years of experience leading kitchens in luxury Seminyak resorts. He returned to Nusa Penida to elevate local gastronomy with modern techniques.',
      image: IMAGES.avatarChef
    },
    {
      name: 'Kadek Sudi',
      role: 'Head Barista & Roaster',
      bio: 'Kadek is a certified coffee specialist who has spent years dialing-in extraction formulas. He carefully designs our signature Kintamani-Flores blends.',
      image: IMAGES.avatarBarista
    }
  ];

  const timelineEvents = [
    {
      year: '2024',
      title: 'The Dream on Ped Beach',
      description: 'Wayan and Kadek envisioned a community-driven tropical sanctuary that merges world-class barista culture with authentic Balinese culinary recipes.'
    },
    {
      year: '2025',
      title: 'Sourcing Partnership Established',
      description: 'Months were spent traveling Kintamani highlands to form exclusive, direct-trade micro-lot contracts with local organic arabica bean farmers.'
    },
    {
      year: '2025',
      title: 'Grand Launch of Alily',
      description: 'We opened our custom bamboo-and-teak architecture in Ped, Nusa Penida, quickly becoming a cozy sanctuary for travelers and digital nomads.'
    },
    {
      year: '2026',
      title: 'Becoming the Coastal Heart',
      description: 'Recognized for hosting the finest, most reliable workspace and premium breakfast experience in Northern Nusa Penida.'
    }
  ];

  return (
    <div id="about-page" className="w-full bg-[#F8F6F2]">
      {/* 1. HERO */}
      <section id="about-hero" className="relative py-32 md:py-40 bg-[#6A5843] text-[#F8F6F2] overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.galleryInterior1}
            alt="Alily Penida interior warm vibes"
            className="w-full h-full object-cover opacity-20 filter grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#6A5843]/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs tracking-widest text-[#B89B72] uppercase font-bold">Our Philosophy</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#F8F6F2] mt-2">
              Our Story, Mission & Team
            </h1>
            <p className="text-sm md:text-base text-[#F8F6F2]/80 max-w-xl mx-auto pt-2 font-sans">
              Discover the culinary heart, the people, and the community behind Alily Penida's premium tropical experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE STORY */}
      <section id="about-story" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="font-mono text-xs tracking-widest text-[#8C775B] uppercase font-semibold">Tropical Gathering Sanctuary</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6A5843] leading-tight">
              A Oasis of Warmth in Northern Nusa Penida
            </h2>
            <div className="w-16 h-1 bg-[#B89B72] rounded-full" />
            
            <p className="text-sm text-[#2B2B2B]/80 leading-relaxed font-sans">
              Located in the scenic, laid-back coastal village of Ped, **Alily Penida** was created as a premium gathering place. It merges a luxury tropical aesthetic with high-integrity dining, welcoming travelers from every corner of the world who come to explore the rugged beauty of Nusa Penida.
            </p>
            <p className="text-sm text-[#2B2B2B]/80 leading-relaxed font-sans">
              Our venue features beautiful custom-crafted teak wood furniture, lush surrounding green gardens, and soft ambient light, creating a soothing workspace for digital nomads and a beautiful meeting point for couples and families. We serve freshly baked sourdough goods, vibrant smoothie bowls, and exceptional barista-crafted specialty coffee.
            </p>

            {/* Quick stats banner */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#6A5843]/5">
              <div>
                <p className="font-serif text-3xl font-bold text-[#B89B72]">100%</p>
                <p className="text-[10px] font-mono tracking-wider uppercase text-[#8C775B] mt-1">Organic Beans</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-[#B89B72]">Direct</p>
                <p className="text-[10px] font-mono tracking-wider uppercase text-[#8C775B] mt-1">Trade Farms</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-[#B89B72]">0%</p>
                <p className="text-[10px] font-mono tracking-wider uppercase text-[#8C775B] mt-1">Single Use Plastic</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl relative z-10 border border-[#6A5843]/10">
              <img
                src={IMAGES.galleryOutdoor}
                alt="Alily Penida relaxing garden outdoor"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Background offset shape */}
            <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-[#B89B72]/20 rounded-3xl -z-0 blur-lg" />
            
            {/* Floating badge */}
            <div className="absolute -top-6 -left-6 bg-white p-5 rounded-2xl shadow-xl z-20 border border-[#6A5843]/5 flex items-center gap-4 max-w-xs">
              <div className="w-12 h-12 rounded-full bg-[#F8F6F2] flex items-center justify-center text-[#B89B72] shrink-0">
                <Award size={24} />
              </div>
              <div>
                <p className="font-serif text-sm font-bold text-[#6A5843]">Top Rated Cafe</p>
                <p className="text-[10px] font-sans text-[#2B2B2B]/60">Ped Coastline, Bali 2026</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE VALUES & MISSION */}
      <section id="about-values" className="py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 items-start">
            <div className="lg:col-span-1 space-y-4 lg:sticky lg:top-28">
              <span className="font-mono text-xs tracking-widest text-[#8C775B] uppercase font-semibold">Our Mission & Vision</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6A5843] leading-tight">
                Crafting Conscious Tropical Experiences
              </h2>
              <div className="w-16 h-1 bg-[#B89B72] rounded-full" />
              <p className="text-sm text-[#2B2B2B]/75 leading-relaxed font-sans pt-2">
                Our vision is to define high-quality coastal dining on Nusa Penida, showing that a restaurant can serve luxury cuisine while maintaining ethical connections to local communities and fragile island resources.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((value, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-3xl border border-[#6A5843]/5 hover:border-[#B89B72]/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F8F6F2] flex items-center justify-center mb-6 text-[#B89B72]">
                    {value.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#6A5843] mb-3">{value.title}</h3>
                  <p className="text-sm text-[#2B2B2B]/75 leading-relaxed font-sans">{value.description}</p>
                </div>
              ))}
              
              {/* Additional custom accent value card */}
              <div className="bg-[#6A5843] text-white p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#B89B72_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
                <h3 className="font-serif text-xl font-bold text-[#F8F6F2] relative z-10">Balinese Spirit</h3>
                <p className="text-xs text-[#F8F6F2]/80 leading-relaxed font-sans relative z-10 my-4">
                  Guided by "Tri Hita Karana"—the traditional Balinese philosophy of harmony between humans, nature, and the spiritual world. We respect the island’s heritage in everything we construct.
                </p>
                <span className="text-xs font-mono text-[#B89B72] tracking-wider relative z-10 uppercase flex items-center gap-1">
                  Read More About Tri Hita Karana <ArrowRight size={12} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STORY TIMELINE */}
      <section id="about-timeline" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-xs tracking-widest text-[#8C775B] uppercase font-semibold">The Journey</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6A5843]">Our Evolution Timeline</h2>
            <div className="w-16 h-1 bg-[#B89B72] mx-auto rounded-full" />
          </div>

          <div className="relative border-l border-[#6A5843]/15 max-w-4xl mx-auto pl-6 md:pl-12 space-y-12 py-4">
            {timelineEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative space-y-2"
              >
                {/* Bullet dot indicator */}
                <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-[11px] h-[11px] rounded-full bg-[#B89B72] border-4 border-white shadow-sm ring-4 ring-[#B89B72]/15" />
                
                <span className="font-mono text-xs font-bold text-[#B89B72] bg-[#F8F6F2] border border-[#6A5843]/10 px-3 py-1 rounded-full">
                  {event.year}
                </span>
                
                <h3 className="font-serif text-xl font-bold text-[#6A5843] pt-1">
                  {event.title}
                </h3>
                
                <p className="text-sm text-[#2B2B2B]/75 leading-relaxed font-sans max-w-2xl">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MEET OUR TEAM */}
      <section id="about-team" className="py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-xs tracking-widest text-[#8C775B] uppercase font-semibold">The Masters</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6A5843]">Meet Our Culinary Leads</h2>
            <div className="w-16 h-1 bg-[#B89B72] mx-auto rounded-full" />
            <p className="text-sm text-[#2B2B2B]/70 font-sans max-w-md mx-auto pt-2">
              The passionate professionals who curate every flavor, roast, and experience served daily at Alily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white rounded-3xl overflow-hidden border border-[#6A5843]/5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group h-full"
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6A5843]/30 to-transparent" />
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] tracking-wider uppercase text-[#B89B72] font-semibold">
                      {member.role}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#6A5843] mt-1 mb-3">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#2B2B2B]/75 leading-relaxed font-sans">
                      {member.bio}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#6A5843]/5 flex items-center space-x-2 text-[11px] font-mono tracking-wide text-[#8C775B] uppercase">
                    <Calendar size={14} /> Joined Alily Team in 2025
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
