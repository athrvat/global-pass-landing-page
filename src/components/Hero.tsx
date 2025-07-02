
import { CheckCircle, Star, Users, Award, ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current drop-shadow-sm" />
                ))}
              </div>
              <span className="text-gray-700 font-semibold bg-white px-4 py-2 rounded-full shadow-sm">
                4.9/5 Rating • 2,500+ Reviews
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Trusted Partner for 
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent block mt-2">
                Passport & Visa
              </span>
              <span className="text-gray-700">Services</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Fast, reliable, and professional documentation services. From passports to visas, 
              Pan Cards to Apostille - we handle it all with 100% success rate.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-green-100">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-semibold">Government Approved</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                <Zap className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span className="text-gray-700 font-semibold">Quick Processing</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-emerald-100">
                <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-700 font-semibold">100% Success Rate</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-purple-100">
                <Award className="w-6 h-6 text-purple-500 flex-shrink-0" />
                <span className="text-gray-700 font-semibold">Expert Guidance</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2">
                Start Your Application
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                Call Now: +91 9876543210
              </button>
            </div>
          </div>
          
          <div className="relative">
            {/* Main hero image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
                alt="Passport and travel documents" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Overlay stats card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center group">
                    <div className="flex justify-center mb-3">
                      <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-3 rounded-xl group-hover:scale-110 transition-transform">
                        <Users className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">10,000+</div>
                    <div className="text-gray-600 font-medium text-sm">Happy Customers</div>
                  </div>
                  <div className="text-center group">
                    <div className="flex justify-center mb-3">
                      <div className="bg-gradient-to-r from-green-100 to-emerald-200 p-3 rounded-xl group-hover:scale-110 transition-transform">
                        <Award className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">100%</div>
                    <div className="text-gray-600 font-medium text-sm">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg animate-bounce">
              Express Service Available
            </div>
            
            {/* Additional floating stats */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">13+</div>
                <div className="text-gray-600 font-medium text-sm">Years Experience</div>
              </div>
            </div>
            
            <div className="absolute top-1/2 -right-8 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">24/7</div>
                <div className="text-gray-600 font-medium text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
