
import React from 'react';
import { BUSINESS_INFO, STATS } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" 
          alt="Textile pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-sm block mb-4">Our Legacy</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">Expertise in Hotel & Hospital Bed Linen Since 2012</h2>
            <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
              <p>
                Established in 2012, <span className="text-white font-semibold">Asham Overseas</span> is a leading Manufacturer and Wholesaler of fine Bed Linen and Upholstery Fabrics. Based in the textile hub of Panipat, we have spent over a decade perfecting the art of home and commercial textiles.
              </p>
              <p>
                Our core expertise lies in high-durability linens designed specifically for the hospitality and healthcare sectors, where quality meets intensive daily usage requirements.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="text-white font-bold mb-1">Legal Status</h4>
                  <p className="text-sm">{BUSINESS_INFO.nature} (Proprietorship)</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Market Presence</h4>
                  <p className="text-sm">Panipat & Nationwide Delivery</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-indigo-400 mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
            <div className="col-span-2 mt-4 bg-indigo-600 p-8 rounded-2xl">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white/20 border-2 border-white/40 flex-shrink-0">
                  <img src="https://picsum.photos/seed/ceo/200/200" alt="CEO" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">{BUSINESS_INFO.ceo}</h4>
                  <p className="text-indigo-100 text-sm uppercase tracking-wider">Chief Executive Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
