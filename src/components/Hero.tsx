
import { CheckCircle, Star, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">4.9/5 Rating • 2,500+ Reviews</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Trusted Partner for 
              <span className="text-blue-600"> Passport & Visa</span> Services
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Fast, reliable, and professional documentation services. From passports to visas, 
              Pan Cards to Apostille - we handle it all with 100% success rate.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Government Approved</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Quick Processing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">100% Success Rate</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Expert Guidance</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                Start Your Application
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                Call Now: +91 9876543210
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600">10,000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">13+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
