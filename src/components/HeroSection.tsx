import React from 'react';
import { Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.8)'
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Heart className="w-8 h-8 text-rose-300" />
        </div>
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
          The Ultimate Wedding Planner
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          Organize Your Dream Wedding with Ease
        </p>
        <a
          href="https://chimoshop.gumroad.com/l/weddingplannertemplate"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
        >
          Get Your Planner Now
        </a>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="text-white/80 flex flex-col items-center cursor-pointer">
          <span className="text-sm mb-2">Scroll to explore</span>
          <Heart className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;