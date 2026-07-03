import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';
import { IMAGES } from './data';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import Location from './pages/Location';
import Blog from './pages/Blog';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Elegant luxury loading screen duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'about', 'menu', 'reservation', 'location', 'blog'];
      if (hash && validPages.includes(hash)) {
        setCurrentPage(hash);
      } else {
        // Default to home if no hash or invalid hash
        if (!window.location.hash) {
          window.location.hash = 'home';
        }
        setCurrentPage('home');
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Helper to render the active page
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'menu':
        return <Menu />;
      case 'reservation':
        return <Reservation />;
      case 'location':
        return <Location />;
      case 'blog':
        return <Blog />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 bg-[#F8F6F2] z-[9999] flex flex-col items-center justify-center text-[#6A5843]"
        >
          <div className="text-center space-y-6 max-w-xs px-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-1"
            >
              <img
                src={IMAGES.logo}
                alt="A.LILY Penida Logo"
                className="h-16 sm:h-20 w-auto mix-blend-multiply mx-auto"
                referrerPolicy="no-referrer"
              />
              <p className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#8C775B]/80 pt-2">
                Cafe & Restaurant • Bali
              </p>
            </motion.div>
            
            {/* Minimalist premium loading bar indicator */}
            <div className="relative w-40 h-[1.5px] bg-[#6A5843]/10 mx-auto rounded-full overflow-hidden">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-[#B89B72] to-transparent"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="text-[8px] font-mono tracking-widest uppercase text-[#8C775B]/60"
            >
              Preparing Paradise...
            </motion.p>
          </div>
        </motion.div>
      ) : (
        <div id="app-root" className="min-h-screen bg-[#F8F6F2] text-[#2B2B2B] flex flex-col font-sans antialiased overflow-x-hidden selection:bg-[#B89B72]/20 selection:text-[#6A5843]">
          {/* Sticky Premium Navbar */}
          <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

          {/* Main Content Pane with Page Transitions */}
          <main id="main-content" className="flex-grow pt-[64px] lg:pt-[76px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full"
              >
                {renderPage()}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Floating Interactive WhatsApp Widget */}
          <FloatingWA />

          {/* Modern Tropical Footer */}
          <Footer setCurrentPage={setCurrentPage} />
        </div>
      )}
    </AnimatePresence>
  );
}
