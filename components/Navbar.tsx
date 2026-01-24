import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
// Import the image from your local directory
import logoImg from './image.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav shadow-xl py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* LOGO SECTION */}
          <div
            className="flex-shrink-0 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src={logoImg}
              alt="Company Logo"
              className="h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-slate-600 hover:text-indigo-600 font-bold text-xs uppercase tracking-widest transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-slate-900 text-white px-8 py-3 rounded-none hover:bg-indigo-600 shadow-xl transition-all font-bold flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <MessageSquare size={16} />
              Enquire Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 p-2 focus:outline-none bg-white rounded-xl shadow-sm border border-slate-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[60] md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-16">
            {/* MOBILE LOGO */}
            <img src={logoImg} alt="Logo" className="h-12 w-auto object-contain" />
            <button onClick={() => setIsOpen(false)} className="p-3 bg-slate-50 rounded-2xl"><X size={24} /></button>
          </div>

          <div className="space-y-8 flex-grow">
            {navItems.concat([{ name: 'Contact', href: '#contact' }]).map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  setIsOpen(false);
                  handleNavClick(e, item.href);
                }}
                className="block text-5xl font-bold text-slate-900 hover:text-indigo-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="pt-10 border-t border-slate-100">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-3 bg-indigo-600 text-white w-full py-5 rounded-none font-bold text-xl shadow-2xl"
            >
              <Phone size={24} />
              Call Specialist
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;