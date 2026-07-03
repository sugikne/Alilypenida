import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';
import { IMAGES } from '../data';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        isScrolled || setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Menu', id: 'menu' },
    { name: 'Reservation', id: 'reservation' },
    { name: 'Location', id: 'location' },
    { name: 'Blog', id: 'blog' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    window.location.hash = id;
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F6F2]/95 backdrop-blur-md shadow-sm border-b border-[#6A5843]/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="brand-logo"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <img
            src={IMAGES.logo}
            alt="A.LILY Penida Logo"
            className="h-10 sm:h-12 w-auto mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              id={`nav-link-${item.id}`}
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 relative py-1 cursor-pointer ${
                currentPage === item.id
                  ? 'text-[#6A5843]'
                  : 'text-[#2B2B2B]/70 hover:text-[#6A5843]'
              }`}
            >
              {item.name}
              {currentPage === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#6A5843] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Desktop Social & Reservation CTA */}
        <div id="desktop-actions" className="hidden lg:flex items-center space-x-5">
         
          <button
            id="reserve-nav-btn"
            onClick={() => handleNavClick('reservation')}
            className="bg-[#6A5843] text-white hover:bg-[#A6845C] px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
          >
            <MessageCircle size={14} />
            Reserve Now
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div id="mobile-toggle" className="lg:hidden flex items-center space-x-4">
          
          <button
            id="hamburger-btn"
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#6A5843] p-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B89B72]/20"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-drawer"
        className={`lg:hidden fixed top-[60px] left-0 w-full bg-[#F8F6F2] border-b border-[#6A5843]/10 transition-all duration-300 ease-in-out shadow-lg z-40 overflow-hidden ${
          isOpen ? 'max-h-[380px] opacity-100 py-6' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-4 px-6">
          {navItems.map((item) => (
            <button
              id={`mobile-nav-link-${item.id}`}
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left text-base font-semibold py-2 border-b border-[#6A5843]/5 transition-colors duration-200 cursor-pointer ${
                currentPage === item.id ? 'text-[#6A5843] pl-2 border-l-2 border-l-[#B89B72]' : 'text-[#2B2B2B]/85'
              }`}
            >
              {item.name}
            </button>
          ))}
          <button
            id="mobile-reserve-btn"
            onClick={() => handleNavClick('reservation')}
            className="w-full bg-[#6A5843] text-white hover:bg-[#A6845C] py-3 rounded-xl text-sm font-semibold tracking-wide shadow-md transition-all duration-300 flex items-center justify-center gap-2 mt-2 cursor-pointer"
          >
            <MessageCircle size={16} />
            Reserve via WhatsApp
          </button>
        </div>
      </div>
    </header>
  );
}
