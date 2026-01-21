import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { getAiAssistantResponse } from '../services/gemini';

const ContactSection: React.FC = () => {
  const [msg, setMsg] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleAiConsult = async () => {
    if (!msg.trim()) return;
    setLoading(true);
    const response = await getAiAssistantResponse(msg);
    setAiResponse(response || "I couldn't generate a response. Please call us.");
    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-600 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">

            {/* Contact Info Side */}
            <div className="p-8 md:p-12 lg:p-16 text-white space-y-10 md:space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Let's Discuss Your Wholesale Requirements
                </h2>
                <p className="text-indigo-100 text-base md:text-lg">
                  Whether it's for a hotel chain, hospital, or retail business, we provide the best deals on bulk orders.
                </p>
              </div>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="bg-white/10 p-3 md:p-4 rounded-2xl backdrop-blur shrink-0">
                    <Phone className="text-white w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="text-indigo-100 text-xs font-medium uppercase tracking-wider mb-1">Direct Call</div>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-lg md:text-xl font-bold hover:text-indigo-200 transition-colors">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:gap-6">
                  <div className="bg-white/10 p-3 md:p-4 rounded-2xl backdrop-blur shrink-0">
                    <MapPin className="text-white w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="text-indigo-100 text-xs font-medium uppercase tracking-wider mb-1">Visit Factory/Showroom</div>
                    <div className="text-base md:text-lg leading-snug">{BUSINESS_INFO.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:gap-6">
                  <div className="bg-white/10 p-3 md:p-4 rounded-2xl backdrop-blur shrink-0">
                    <Mail className="text-white w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="text-indigo-100 text-xs font-medium uppercase tracking-wider mb-1">Email Inquiry</div>
                    <div className="text-lg md:text-xl font-bold break-all">{BUSINESS_INFO.email}</div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 flex items-center gap-4">
                <div className="bg-emerald-500 w-2.5 h-2.5 rounded-full animate-pulse"></div>
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-indigo-100">
                  Usually responds within 2 hours
                </span>
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-white p-8 md:p-12 lg:p-16">
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                {/* Responsive Grid for Name/Phone: Stack on mobile, side-by-side on tablet+ */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Full Name</label>
                    <input type="text" required className="w-full px-5 py-3.5 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Phone Number</label>
                    <input type="tel" required className="w-full px-5 py-3.5 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none" placeholder="+91" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Requirement Details</label>
                  <textarea
                    rows={4}
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    required
                    className="w-full px-5 py-3.5 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="E.g. I need 500 sets of King Size White Stripe Bed Sheets for a hotel project in Mumbai."
                  ></textarea>
                </div>

                <div className="flex flex-col gap-4">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white font-bold py-4 md:py-5 rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 text-base md:text-lg shadow-lg shadow-indigo-100 active:scale-[0.98]"
                  >
                    {submitted ? "Enquiry Sent!" : "Send Enquiry"}
                    <Send size={18} />
                  </button>

                  <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
                    <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold"><span className="bg-white px-3 text-slate-400">Or use AI Consultant</span></div>
                  </div>

                  <button
                    type="button"
                    onClick={handleAiConsult}
                    className="w-full border-2 border-indigo-100 text-indigo-600 font-bold py-3.5 md:py-4 rounded-xl hover:bg-indigo-50 transition-all flex items-center justify-center gap-2 group active:scale-[0.98]"
                  >
                    {loading ? <Loader2 className="animate-spin" /> : <Sparkles className="group-hover:animate-pulse" />}
                    Ask Product Questions
                  </button>
                </div>

                {aiResponse && (
                  <div className="mt-4 p-4 md:p-5 bg-indigo-50 border border-indigo-100 rounded-2xl text-slate-700 text-sm animate-in fade-in slide-in-from-bottom-2">
                    <div className="font-bold text-indigo-600 mb-2 flex items-center gap-2">
                      <Sparkles size={14} /> AI Assistant:
                    </div>
                    {aiResponse}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;