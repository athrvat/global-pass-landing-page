
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      service: "Passport & US Visa",
      rating: 5,
      text: "Excellent service! Got my passport and US visa processed within the promised timeframe. The team was very professional and kept me updated throughout the process."
    },
    {
      name: "Priya Sharma",
      service: "MEA Apostille",
      rating: 5,
      text: "Needed urgent apostille for my documents. ADS International made it happen in just 3 days! Highly recommend their services for document attestation."
    },
    {
      name: "Mohammed Ali",
      service: "Driving License",
      rating: 5,
      text: "Got my driving license renewed without any hassle. The online process was smooth and the team handled everything efficiently."
    },
    {
      name: "Anjali Patel",
      service: "Pan Card & GST",
      rating: 5,
      text: "Professional service for both Pan Card correction and GST registration. They guided me through the entire process and completed everything quickly."
    },
    {
      name: "Vikram Singh",
      service: "Name Change in Passport",
      rating: 5,
      text: "Complex name change process made simple by their expert team. They handled all legal formalities and got my passport updated successfully."
    },
    {
      name: "Neha Gupta",
      service: "Student Visa - Canada",
      rating: 5,
      text: "Got my Canadian student visa approved on first attempt! Their guidance on documentation and interview preparation was invaluable."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 relative">
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-blue-200" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-blue-600 text-sm font-medium">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Happy Customers</h3>
            <div className="flex items-center justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">4.9/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">2,500+</div>
                <div className="text-gray-600">Reviews</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">10,000+</div>
                <div className="text-gray-600">Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
