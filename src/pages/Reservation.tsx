import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Calendar, Clock, Users, FileText, CheckCircle2 } from 'lucide-react';
import { ReservationData } from '../types';

export default function Reservation() {
  const [formData, setFormData] = useState<ReservationData>({
    fullName: '',
    phoneNumber: '',
    guests: 2,
    date: '',
    time: '',
    specialRequest: ''
  });

  const [errors, setErrors] = useState<Partial<ReservationData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const tempErrors: Partial<ReservationData> = {};
    if (!formData.fullName.trim()) tempErrors.fullName = 'Full Name is required';
    if (!formData.phoneNumber.trim()) tempErrors.phoneNumber = 'Phone Number is required';
    if (!formData.date) tempErrors.date = 'Reservation Date is required';
    if (!formData.time) tempErrors.time = 'Reservation Time is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) || 1 : value
    }));
    // Clear errors as user types
    if (errors[name as keyof ReservationData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Prefilled message formatting exactly as requested
    const waNumber = '62878-6147-8222';
    const message = `Hello Alily Penida,

I would like to reserve a table.

Name: ${formData.fullName}
Phone: ${formData.phoneNumber}
Guests: ${formData.guests}
Date: ${formData.date}
Time: ${formData.time}
Special Request: ${formData.specialRequest || 'None'}

Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;

    setSubmitted(true);
    
    // Redirect to WhatsApp after brief animation delay
    setTimeout(() => {
      window.open(waUrl, '_blank');
      setSubmitted(false);
      // Reset form
      setFormData({
        fullName: '',
        phoneNumber: '',
        guests: 2,
        date: '',
        time: '',
        specialRequest: ''
      });
    }, 1500);
  };

  return (
    <div id="reservation-page" className="w-full bg-[#F8F6F2]">
      {/* 1. HERO */}
      <section id="reservation-hero" className="relative py-28 md:py-36 bg-[#6A5843] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200"
            alt="Restaurant dining reservation"
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
            <span className="font-mono text-xs tracking-widest text-[#B89B72] uppercase font-bold">Secure Your Table</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#F8F6F2]">
              Book Your Alily Experience
            </h1>
            <p className="text-sm md:text-base text-[#F8F6F2]/80 max-w-xl mx-auto font-sans">
              Reserve with ease. Your request automatically generates a direct booking message to our WhatsApp team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. FORM & GUIDELINES */}
      <section id="reservation-form-section" className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Reservation Guidelines Column (Sidebar) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="bg-white p-8 rounded-3xl border border-[#6A5843]/5 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-bold text-[#6A5843]">Dining & Workspace Guidelines</h2>
              <div className="w-12 h-1 bg-[#B89B72] rounded-full" />
              
              <ul className="space-y-4 text-sm text-[#2B2B2B]/80 font-sans">
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#F8F6F2] text-[#B89B72] flex items-center justify-center shrink-0 font-mono text-xs font-bold">1</span>
                  <p><strong>Opening Hours:</strong> We welcome diners and remote workers daily from 07:30 AM to 10:00 PM.</p>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#F8F6F2] text-[#B89B72] flex items-center justify-center shrink-0 font-mono text-xs font-bold">2</span>
                  <p><strong>Reservation Policy:</strong> Booking is highly recommended for large groups (6+ guests) or sunset hours (05:00 PM – 07:30 PM).</p>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#F8F6F2] text-[#B89B72] flex items-center justify-center shrink-0 font-mono text-xs font-bold">3</span>
                  <p><strong>Hold Time:</strong> Tables are held for a maximum of 20 minutes from your scheduled reservation time.</p>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#F8F6F2] text-[#B89B72] flex items-center justify-center shrink-0 font-mono text-xs font-bold">4</span>
                  <p><strong>Nomad Workspaces:</strong> Single and couple workspaces with power outlets and high-speed fiber internet are available without separate reservation.</p>
                </li>
              </ul>
            </div>

            {/* Support Box */}
            <div className="bg-[#6A5843] text-white p-8 rounded-3xl relative overflow-hidden space-y-3 shadow-md">
              <div className="absolute inset-0 bg-[radial-gradient(#B89B72_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
              <h3 className="font-serif text-lg font-bold">Need Immediate Help?</h3>
              <p className="text-xs text-[#F8F6F2]/80 leading-relaxed font-sans">
                For custom event hire, birthday groups, or wedding banquets, call our management desk directly.
              </p>
              <a
                href="https://wa.me/6287861478222"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#B89B72] bg-white px-5 py-3 rounded-full hover:bg-[#F8F6F2] transition-colors mt-2 cursor-pointer"
              >
                <MessageCircle size={14} className="text-[#6A5843]" />
                WhatsApp Assistance
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[32px] border border-[#6A5843]/5 shadow-xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#6A5843]">Redirecting to WhatsApp</h3>
                <p className="text-sm text-[#2B2B2B]/75 max-w-md mx-auto leading-relaxed font-sans">
                  We are formatting your prefilled reservation message and opening WhatsApp to complete your booking. Please confirm and send the text to our receptionist!
                </p>
                <div className="w-12 h-1 bg-[#25D366] rounded-full mx-auto animate-pulse mt-4" />
              </motion.div>
            ) : (
              <form id="reservation-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl font-bold text-[#6A5843]">Book Your Table</h2>
                  <p className="text-xs text-gray-500 font-sans">Please fill in your details to generate your prefilled WhatsApp message.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-xs font-mono font-bold uppercase text-[#8C775B] tracking-wider flex items-center gap-1.5">
                      <Users size={14} /> Full Name *
                    </label>
                    <input
                      id="res-fullName"
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full bg-[#F8F6F2] px-4 py-3.5 rounded-2xl text-sm text-[#2B2B2B] placeholder-gray-400 border focus:outline-none focus:ring-2 focus:ring-[#B89B72]/30 focus:bg-white transition-all duration-200 ${
                        errors.fullName ? 'border-red-400 focus:ring-red-200' : 'border-[#6A5843]/5'
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-red-500 mt-1 font-sans">{errors.fullName}</p>}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label htmlFor="phoneNumber" className="text-xs font-mono font-bold uppercase text-[#8C775B] tracking-wider flex items-center gap-1.5">
                      <MessageCircle size={14} /> Phone Number *
                    </label>
                    <input
                      id="res-phoneNumber"
                      type="tel"
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="e.g. +61 400 123 456"
                      className={`w-full bg-[#F8F6F2] px-4 py-3.5 rounded-2xl text-sm text-[#2B2B2B] placeholder-gray-400 border focus:outline-none focus:ring-2 focus:ring-[#B89B72]/30 focus:bg-white transition-all duration-200 ${
                        errors.phoneNumber ? 'border-red-400 focus:ring-red-200' : 'border-[#6A5843]/5'
                      }`}
                    />
                    {errors.phoneNumber && <p className="text-xs text-red-500 mt-1 font-sans">{errors.phoneNumber}</p>}
                  </div>

                  {/* Guest Count */}
                  <div className="space-y-2">
                    <label htmlFor="guests" className="text-xs font-mono font-bold uppercase text-[#8C775B] tracking-wider flex items-center gap-1.5">
                      <Users size={14} /> Number of Guests
                    </label>
                    <select
                      id="res-guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-[#F8F6F2] px-4 py-3.5 rounded-2xl text-sm text-[#2B2B2B] border border-[#6A5843]/5 focus:outline-none focus:ring-2 focus:ring-[#B89B72]/30 focus:bg-white transition-all duration-200"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '10+'].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Reservation Date */}
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-xs font-mono font-bold uppercase text-[#8C775B] tracking-wider flex items-center gap-1.5">
                      <Calendar size={14} /> Reservation Date *
                    </label>
                    <input
                      id="res-date"
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full bg-[#F8F6F2] px-4 py-3.5 rounded-2xl text-sm text-[#2B2B2B] border focus:outline-none focus:ring-2 focus:ring-[#B89B72]/30 focus:bg-white transition-all duration-200 ${
                        errors.date ? 'border-red-400 focus:ring-red-200' : 'border-[#6A5843]/5'
                      }`}
                    />
                    {errors.date && <p className="text-xs text-red-500 mt-1 font-sans">{errors.date}</p>}
                  </div>

                  {/* Reservation Time */}
                  <div className="space-y-2">
                    <label htmlFor="time" className="text-xs font-mono font-bold uppercase text-[#8C775B] tracking-wider flex items-center gap-1.5">
                      <Clock size={14} /> Reservation Time *
                    </label>
                    <input
                      id="res-time"
                      type="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full bg-[#F8F6F2] px-4 py-3.5 rounded-2xl text-sm text-[#2B2B2B] border focus:outline-none focus:ring-2 focus:ring-[#B89B72]/30 focus:bg-white transition-all duration-200 ${
                        errors.time ? 'border-red-400 focus:ring-red-200' : 'border-[#6A5843]/5'
                      }`}
                    />
                    {errors.time && <p className="text-xs text-red-500 mt-1 font-sans">{errors.time}</p>}
                  </div>

                  {/* Spacer or additional info */}
                  <div className="hidden md:block pt-8 text-center text-xs text-[#2B2B2B]/60 font-sans leading-relaxed">
                    Reservations are processed instantly by our host team in Nusa Penida.
                  </div>
                </div>

                {/* Special Request */}
                <div className="space-y-2">
                  <label htmlFor="specialRequest" className="text-xs font-mono font-bold uppercase text-[#8C775B] tracking-wider flex items-center gap-1.5">
                    <FileText size={14} /> Special Request (Optional)
                  </label>
                  <textarea
                    id="res-specialRequest"
                    name="specialRequest"
                    rows={4}
                    value={formData.specialRequest}
                    onChange={handleChange}
                    placeholder="e.g. Requesting a sunset view table, dietary constraints, baby chair, or birthday cake surprise..."
                    className="w-full bg-[#F8F6F2] px-4 py-3.5 rounded-2xl text-sm text-[#2B2B2B] placeholder-gray-400 border border-[#6A5843]/5 focus:outline-none focus:ring-2 focus:ring-[#B89B72]/30 focus:bg-white transition-all duration-200"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-4">
                  <button
                    id="res-submit-btn"
                    type="submit"
                    className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] py-4 rounded-full text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle size={18} className="fill-white" />
                    Reserve via WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>
          
        </div>
      </section>
    </div>
  );
}
