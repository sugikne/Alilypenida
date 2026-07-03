import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, ArrowUpDown, Check, Leaf, Flame, Sparkles } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuCategory } from '../types';

export default function Menu() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'All'>('All');
  const [selectedDiet, setSelectedDiet] = useState<string | 'All'>('All');
  const [sortBy, setSortBy] = useState<'default' | 'priceAsc' | 'priceDesc' | 'name'>('default');
  const [showFilters, setShowFilters] = useState(false);

  // List of all categories matching our updated PDF menu
  const categories: (MenuCategory | 'All')[] = [
    'All',
    'Appetizers',
    'Bread & Dip',
    'Salads',
    'Indonesian Favorites',
    'Breakfast',
    'Gourmet Sandwiches',
    'Main Dishes',
    'Dessert',
    'Coffee',
    'Tea',
    'Morning Cocktails',
    'Fresh Juice',
    'Milk Shakes',
    'Smoothies',
    'Mineral Water',
    'Soft Drinks',
    'Beer',
    'Cocktails',
    'Wine',
  ];

  // Distinct dietary tags
  const dietTags = ['All', 'Vegan', 'Vegetarian', 'Gluten-Free', "Chef's Special", 'Signature', 'Spicy'];

  // Filter & Sort Logic
  const filteredItems = useMemo(() => {
    let items = [...MENU_ITEMS];

    // 1. Search Query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
    }

    // 2. Category Filter
    if (selectedCategory !== 'All') {
      items = items.filter((item) => item.category === selectedCategory);
    }

    // 3. Diet/Tag Filter
    if (selectedDiet !== 'All') {
      items = items.filter((item) => item.tags?.includes(selectedDiet));
    }

    // 4. Sort
    if (sortBy === 'priceAsc') {
      items.sort((a, b) => a.priceNum - b.priceNum);
    } else if (sortBy === 'priceDesc') {
      items.sort((a, b) => b.priceNum - a.priceNum);
    } else if (sortBy === 'name') {
      items.sort((a, b) => a.name.localeCompare(b.name));
    }

    return items;
  }, [searchQuery, selectedCategory, selectedDiet, sortBy]);

  return (
    <div id="menu-page" className="w-full bg-[#F8F6F2]">
      {/* 1. HERO */}
      <section id="menu-hero" className="relative py-28 md:py-36 bg-[#6A5843] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=1200"
            alt="Alily menu background"
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
            <span className="font-mono text-xs tracking-widest text-[#B89B72] uppercase font-bold">Artisanal Gastronomy</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#F8F6F2]">
              Explore Our Culinary Menu
            </h1>
            <p className="text-sm md:text-base text-[#F8F6F2]/80 max-w-xl mx-auto font-sans">
              Hand-pressed coffees, organic tropical bowls, gourmet sandwiches, and fresh catches from Nusa Penida.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTROLS SECTION */}
      <section id="menu-controls" className="py-8 bg-white border-b border-[#6A5843]/5 sticky top-[60px] md:top-[70px] z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-4">
          {/* Search bar & Toggle filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                id="menu-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search favorite foods or drinks..."
                className="w-full bg-[#F8F6F2] pl-11 pr-4 py-3 rounded-2xl text-sm text-[#2B2B2B] placeholder-gray-400 border border-[#6A5843]/5 focus:outline-none focus:ring-2 focus:ring-[#B89B72]/30 focus:bg-white transition-all duration-200"
              />
            </div>

            {/* Quick Actions */}
            <div className="flex items-center space-x-3 w-full md:w-auto justify-end">
              <button
                id="menu-filter-toggle"
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-xs font-semibold tracking-wide border transition-all duration-200 cursor-pointer ${
                  showFilters || selectedDiet !== 'All' || sortBy !== 'default'
                    ? 'bg-[#6A5843] text-white border-transparent'
                    : 'bg-white text-[#2B2B2B] border-gray-200 hover:border-[#6A5843]/20'
                }`}
              >
                <SlidersHorizontal size={14} />
                Filters & Sorting
              </button>
            </div>
          </div>

          {/* Expanded Filters and Sort Bar */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-[#F8F6F2]/50 p-6 rounded-3xl border border-[#6A5843]/5 space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Diet Tags Filter */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold uppercase text-[#8C775B] tracking-wider block">
                      Dietary & Highlights
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {dietTags.map((diet) => (
                        <button
                          key={diet}
                          onClick={() => setSelectedDiet(diet)}
                          className={`px-3 py-2 rounded-xl text-xs font-medium cursor-pointer transition-all duration-200 flex items-center gap-1.5 ${
                            selectedDiet === diet
                              ? 'bg-[#B89B72] text-white shadow-sm'
                              : 'bg-white text-[#2B2B2B]/80 hover:bg-[#6A5843]/5 border border-gray-100'
                          }`}
                        >
                          {selectedDiet === diet && <Check size={12} />}
                          {diet === "Chef's Special" ? <Sparkles size={12} className={selectedDiet === diet ? 'text-white' : 'text-[#B89B72]'} /> : null}
                          {diet === 'Vegan' ? <Leaf size={12} className={selectedDiet === diet ? 'text-white' : 'text-emerald-500'} /> : null}
                          {diet === 'Spicy' ? <Flame size={12} className={selectedDiet === diet ? 'text-white' : 'text-red-500'} /> : null}
                          {diet}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sorting Filter */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold uppercase text-[#8C775B] tracking-wider block">
                      Sort Items By
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { label: 'Recommended', value: 'default' },
                        { label: 'Alphabetical', value: 'name' },
                        { label: 'Price: Low to High', value: 'priceAsc' },
                        { label: 'Price: High to Low', value: 'priceDesc' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setSortBy(option.value as any)}
                          className={`px-4 py-2 rounded-xl text-xs font-medium cursor-pointer transition-all duration-200 flex items-center gap-1.5 ${
                            sortBy === option.value
                              ? 'bg-[#6A5843] text-white shadow-sm'
                              : 'bg-white text-[#2B2B2B]/80 hover:bg-[#6A5843]/5 border border-gray-100'
                          }`}
                        >
                          <ArrowUpDown size={12} />
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Categories Horizontal Scrolling Container */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none border-t border-[#6A5843]/5 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4.5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap tracking-wide cursor-pointer transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#6A5843] text-white shadow-md transform scale-102'
                    : 'bg-[#F8F6F2] text-[#2B2B2B]/80 hover:bg-[#6A5843]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MENU CARDS GRID */}
      <section id="menu-items-grid" className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Category title details */}
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#6A5843]">
                {selectedCategory === 'All' ? 'Our Signature Selection' : selectedCategory}
              </h2>
              <p className="text-xs text-[#2B2B2B]/60 font-mono mt-1">
                Showing {filteredItems.length} items {selectedDiet !== 'All' && `matching "${selectedDiet}"`}
              </p>
            </div>
          </div>

          {filteredItems.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6 md:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-xl sm:rounded-3xl overflow-hidden border border-[#6A5843]/5 hover:border-[#B89B72]/25 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
                  >
                    {/* Card Image */}
                    <div className="h-24 xs:h-32 sm:h-40 md:h-52 overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {/* Interactive Tags overlay */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="absolute top-1.5 left-1.5 sm:top-4 sm:left-4 flex flex-wrap gap-1 max-w-[90%]">
                          {item.tags.map((tag, tIdx) => {
                            let tagStyle = "bg-white/95 text-[#6A5843]";
                            if (tag === 'Vegan') tagStyle = "bg-emerald-50 text-emerald-700 border-emerald-100";
                            else if (tag === "Chef's Special" || tag === 'Signature') tagStyle = "bg-amber-50 text-[#6A5843] border-amber-200";
                            else if (tag === 'Spicy') tagStyle = "bg-rose-50 text-rose-700 border-rose-100";
                            
                            return (
                              <span
                                key={tIdx}
                                className={`text-[6px] sm:text-[9px] font-mono tracking-wider uppercase font-bold px-1 sm:px-2.5 py-0.5 sm:py-1 rounded-full border shadow-sm ${tagStyle}`}
                              >
                                {tag}
                              </span>
                            );
                          })}
                        </div>
                      )}
                      
                      {/* Price Badge */}
                      <span className="absolute bottom-1.5 right-1.5 sm:bottom-4 sm:right-4 bg-[#6A5843]/90 backdrop-blur-sm text-white font-mono text-[8px] sm:text-xs font-semibold px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/10">
                        {item.price.replace('Rp ', 'Rp')}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-2 sm:p-6 flex flex-col flex-grow space-y-1.5 sm:space-y-2.5">
                      <div className="flex items-start justify-between gap-1">
                        <h3 className="font-serif text-[10px] sm:text-base md:text-lg font-bold text-[#6A5843] group-hover:text-[#B89B72] transition-colors line-clamp-2 md:line-clamp-1">
                          {item.name}
                        </h3>
                      </div>
                      
                      <p className="text-[8px] sm:text-xs text-[#2B2B2B]/75 leading-relaxed font-sans flex-grow line-clamp-2 md:line-clamp-3">
                        {item.description}
                      </p>

                      <div className="pt-1.5 sm:pt-3 border-t border-[#6A5843]/5 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-1">
                        <span className="text-[7px] sm:text-[10px] font-mono uppercase text-[#8C775B] tracking-wider bg-[#F8F6F2] px-1 sm:px-2.5 py-0.5 sm:py-1 rounded-md">
                          {item.category}
                        </span>
                        
                        <a
                          href="https://wa.me/6285337249782"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[8px] sm:text-[11px] font-semibold text-[#B89B72] hover:text-[#6A5843] transition-colors flex items-center gap-0.5 cursor-pointer"
                        >
                          Order ➔
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-20 bg-white rounded-[32px] border border-[#6A5843]/5 p-8 max-w-lg mx-auto shadow-sm space-y-4">
              <span className="text-4xl">🏝️</span>
              <h3 className="font-serif text-xl font-bold text-[#6A5843]">No Menu Items Found</h3>
              <p className="text-sm text-[#2B2B2B]/70 font-sans leading-relaxed">
                We couldn't find any food or drinks matching your query. Try resetting your search filters or browse other food categories.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedDiet('All');
                  setSortBy('default');
                }}
                className="bg-[#6A5843] text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wide hover:bg-[#A6845C] transition-all cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
