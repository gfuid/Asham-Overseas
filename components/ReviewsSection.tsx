
import React from 'react';
import { Star, MapPin, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-slate-900">What Our Partners Say</h2>
          <div className="flex items-center justify-center gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
            <span className="ml-3 text-2xl font-bold text-slate-900">4.2/5</span>
          </div>
          <p className="text-slate-500">Based on feedback from 50+ industrial and retail users.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative group hover:shadow-xl transition-all">
              <Quote className="absolute top-6 right-6 text-slate-100 group-hover:text-indigo-50 transition-colors" size={48} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex gap-1 mb-4 text-amber-500">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                
                <p className="text-slate-600 mb-6 flex-grow italic leading-relaxed">"{review.comment}"</p>
                
                <div className="pt-6 border-t border-slate-50">
                  <div className="font-bold text-slate-900">{review.user}</div>
                  <div className="flex items-center gap-1 text-slate-400 text-sm mt-1">
                    <MapPin size={14} />
                    {review.location}
                  </div>
                  {review.productName && (
                    <div className="mt-3 text-[10px] font-bold text-indigo-500 uppercase tracking-widest bg-indigo-50 inline-block px-2 py-1 rounded">
                      {review.productName}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
