import React from 'react';
import { Check } from 'lucide-react';

const features = [
  "30 Comprehensive Planning Pages",
  "Fully Editable in Canva",
  "Beautiful Modern Design",
  "Budget Tracker & Timeline",
  "Vendor Contact Lists",
  "Guest List Manager"
];

const ProductShowcase = () => {
  return (
    <section className="py-20 px-4 bg-white" id="features">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-800 mb-16">
          Everything You Need to Plan Your Perfect Day
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="Wedding Planner Preview"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-rose-500" />
                  </div>
                  <span className="text-lg text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <a
                href="https://chimoshop.gumroad.com/l/weddingplannertemplate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;