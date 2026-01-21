
import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { Instagram, Facebook, Twitter, Mail, MapPin } from 'lucide-react';
import logoImg from './image.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <img src={logoImg} alt="Logo" className="h-10 w-auto mb-6" />
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading Panipat-based manufacturer since 2012, specializing in premium linens for home, hospitality, and healthcare sectors.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-400">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Products', 'About', 'Reviews'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-indigo-400 group-hover:w-4 transition-all"></span>
                    {item === 'Home' ? 'Company Profile' : item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-400">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-400 text-sm">
                <MapPin size={18} className="text-indigo-500 flex-shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex gap-3 text-slate-400 text-sm">
                <Mail size={18} className="text-indigo-500 flex-shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </li>
              <li className="flex gap-3 text-white text-lg font-bold pt-2">
                {BUSINESS_INFO.phone}
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-400">Compliance</h4>
            <div className="bg-white/5 p-5 rounded-none border border-white/10 space-y-4">
              <div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">GST Registration</div>
                <div className="text-xs font-mono font-bold text-slate-300">{BUSINESS_INFO.gst}</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Import Export Code</div>
                <div className="text-xs font-mono font-bold text-slate-300">{BUSINESS_INFO.iec}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          <div>© {new Date().getFullYear()} Asham Overseas. Panipat, Haryana.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
