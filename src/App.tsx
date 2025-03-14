import React from 'react';
import { Heart, ChevronDown, Star, Download, Palette, Printer } from 'lucide-react';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <HeroSection />
      <ProductShowcase />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;