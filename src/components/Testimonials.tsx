import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Bride",
    content: "This planner made organizing my wedding so much easier! The templates are beautiful and practical.",
    rating: 5
  },
  {
    name: "Emily Davis",
    role: "Wedding Planner",
    content: "I recommend this template to all my clients. It's comprehensive and easy to customize.",
    rating: 5
  },
  {
    name: "Michael Brown",
    role: "Groom",
    content: "Perfect for keeping track of all the details. Helped us stay on budget and on schedule.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-800 mb-16">
          What Our Couples Say
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-rose-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;