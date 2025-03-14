import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How do I access the template after purchase?",
    answer: "You'll receive an immediate download link after purchase. The link will also be sent to your email for future access."
  },
  {
    question: "Do I need Canva Pro to edit the template?",
    answer: "No, the template works perfectly with Canva's free version. All features and elements are accessible without a Pro subscription."
  },
  {
    question: "Can I print the planner at home?",
    answer: "Yes! The template is optimized for both home printing and professional printing services. It's designed in standard A4/Letter size."
  },
  {
    question: "Is the template reusable?",
    answer: "Yes, you can create multiple copies of the template in Canva and use it for different planning purposes or share with friends."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-rose-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-800 mb-16">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`px-6 transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'py-4' : 'py-0 h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;