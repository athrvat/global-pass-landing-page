
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Rajesh Kumar",
      service: "Passport & US Visa",
      rating: 5,
      text: "Excellent service! Got my passport and US visa processed within the promised timeframe. The team was very professional and kept me updated throughout the process.",
      image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=3b82f6&color=fff"
    },
    {
      name: "Priya Sharma",
      service: "MEA Apostille",
      rating: 5,
      text: "Needed urgent apostille for my documents. ADS International made it happen in just 3 days! Highly recommend their services for document attestation.",
      image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=8b5cf6&color=fff"
    },
    {
      name: "Mohammed Ali",
      service: "Driving License",
      rating: 5,
      text: "Got my driving license renewed without any hassle. The online process was smooth and the team handled everything efficiently.",
      image: "https://ui-avatars.com/api/?name=Mohammed+Ali&background=10b981&color=fff"
    },
    {
      name: "Anjali Patel",
      service: "Pan Card & GST",
      rating: 5,
      text: "Professional service for both Pan Card correction and GST registration. They guided me through the entire process and completed everything quickly.",
      image: "https://ui-avatars.com/api/?name=Anjali+Patel&background=f59e0b&color=fff"
    },
    {
      name: "Vikram Singh",
      service: "Name Change in Passport",
      rating: 5,
      text: "Complex name change process made simple by their expert team. They handled all legal formalities and got my passport updated successfully.",
      image: "https://ui-avatars.com/api/?name=Vikram+Singh&background=ef4444&color=fff"
    },
    {
      name: "Neha Gupta",
      service: "Student Visa - Canada",
      rating: 5,
      text: "Got my Canadian student visa approved on first attempt! Their guidance on documentation and interview preparation was invaluable.",
      image: "https://ui-avatars.com/api/?name=Neha+Gupta&background=ec4899&color=fff"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Quote className="w-4 h-4" />
            Customer Stories
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="relative mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div key={`${currentIndex}-${index}`} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative group hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-2xl shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-amber-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-8 leading-relaxed italic text-lg">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4 border-t pt-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full shadow-md"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm font-semibold">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-10 max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Join Our Happy Customers</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">4.9/5</div>
                <div className="text-gray-600 font-semibold">Average Rating</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">2,500+</div>
                <div className="text-gray-600 font-semibold">Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">10,000+</div>
                <div className="text-gray-600 font-semibold">Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
