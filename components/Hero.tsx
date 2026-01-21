
import React from 'react';
import { ChevronRight, ShieldCheck, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-indigo-50/50 rounded-bl-[100px] hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-1.5 rounded-full text-indigo-700 text-sm font-semibold">
              <Star size={16} fill="currentColor" />
              <span>Leading Manufacturer since {BUSINESS_INFO.established}</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1]">
              Elevate Your Space with <span className="text-indigo-600">Exquisite</span> Textiles
            </h1>
            
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Specializing in premium Bed Linens, Upholstery Fabrics, and Designer Curtains. Trusted supplier for leading hotels and hospitals nationwide.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#products" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 group">
                Explore Collection
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="border-2 border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-white hover:border-slate-300 transition-all">
                Request Samples
              </a>
            </div>
            
            <div className="flex items-center gap-8 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-emerald-500" />
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">GST Registered</span>
              </div>
              <div className="h-4 w-[1px] bg-slate-200"></div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                Panipat, Haryana
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80" 
                alt="Premium Bedding" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="text-3xl font-bold text-indigo-600">85%</div>
              <div className="text-sm text-slate-500 font-medium">Customer Quality Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
