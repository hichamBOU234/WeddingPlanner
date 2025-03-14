import React from 'react';
import { Download, Palette, Printer } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: "Purchase & Download",
    description: "Get instant access to your wedding planner template after purchase"
  },
  {
    icon: Palette,
    title: "Customize in Canva",
    description: "Easily edit colors, text, and layout to match your wedding theme"
  },
  {
    icon: Printer,
    title: "Print & Start Planning",
    description: "Print your personalized planner and begin organizing your dream wedding"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-rose-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-800 mb-16">
          How It Works
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center space-y-4 transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center">
                <step.icon className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;