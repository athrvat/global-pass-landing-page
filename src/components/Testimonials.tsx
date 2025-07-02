
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
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      location: "Delhi"
    },
    {
      name: "Priya Sharma",
      service: "MEA Apostille",
      rating: 5,
      text: "Needed urgent apostille for my documents. ADS International made it happen in just 3 days! Highly recommend their services for document attestation.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c96b40e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      location: "Mumbai"
    },
    {
      name: "Mohammed Ali",
      service: "Driving License",
      rating: 5,
      text: "Got my driving license renewed without any hassle. The online process was smooth and the team handled everything efficiently.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      location: "Bangalore"
    },
    {
      name: "Anjali Patel",
      service: "Pan Card & GST",
      rating: 5,
      text: "Professional service for both Pan Card correction and GST registration. They guided me through the entire process and completed everything quickly.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      location: "Pune"
    },
    {
      name: "Vikram Singh",
      service: "Name Change in Passport",
      rating: 5,
      text: "Complex name change process made simple by their expert team. They handled all legal formalities and got my passport updated successfully.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      location: "Chennai"
    },
    {
      name: "Neha Gupta",
      service: "Student Visa - Canada",
      rating: 5,
      text: "Got my Canadian student visa approved on first attempt! Their guidance on documentation and interview preparation was invaluable.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      location: "Kolkata"
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
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
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
              <div key={`${currentIndex}-${index}`} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative group hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-2xl shadow-lg z-10">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                
                {/* Customer image */}
                <div className="relative h-24 bg-gradient-to-r from-blue-500 to-purple-500">
                  <div className="absolute -bottom-8 left-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover"
                    />
                  </div>
                </div>
                
                <div className="pt-12 p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-amber-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm font-semibold">{testimonial.service}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
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
          <div className="bg-white rounded-2xl shadow-xl p-10 max-w-4xl mx-auto border border-gray-100 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
            
            <div className="relative z-10">
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
      </div>
    </section>
  );
};

export default Testimonials;
