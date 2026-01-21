
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import AboutSection from './components/AboutSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Reveal animations on scroll could be added here if using a library like Framer Motion or AOS
    // For now we rely on standard clean CSS transitions
  }, []);

  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <ProductSection />
        <AboutSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Sticky Bottom Call-to-action for Mobile */}
      <div className="fixed bottom-6 left-6 right-6 md:hidden z-40">
        <a 
          href="#contact"
          className="flex items-center justify-center gap-2 w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold shadow-2xl shadow-indigo-200 animate-in fade-in slide-in-from-bottom-10"
        >
          Request Bulk Pricing
        </a>
      </div>
    </div>
  );
}

export default App;
