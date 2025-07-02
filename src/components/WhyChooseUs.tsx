import { Clock, Shield, Users, Award, Phone, CheckCircle, Zap, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Quick turnaround times with express services available for urgent requirements.",
      color: "yellow",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Shield,
      title: "100% Safe & Secure",
      description: "Your documents and personal information are completely safe with our secure processes.",
      color: "green",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals who understand government procedures and requirements.",
      color: "blue",
      image: "https://images.unsplash.com/photo-1553028826-f4804151e696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Award,
      title: "Government Approved",
      description: "Authorized service provider with all necessary government approvals and licenses.",
      color: "purple",
      image: "https://images.unsplash.com/photo-1569748130764-3fed0c102c59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock customer support to answer your queries and provide assistance.",
      color: "orange",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: CheckCircle,
      title: "100% Success Rate",
      description: "Perfect track record with successful completion of all application processes.",
      color: "emerald",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  function getColorClasses(color: string) {
    const colorMap: Record<string, { bg: string; icon: string; gradient: string }> = {
      yellow: { bg: "bg-yellow-100", icon: "text-yellow-600", gradient: "from-yellow-400 to-orange-500" },
      green: { bg: "bg-green-100", icon: "text-green-600", gradient: "from-green-400 to-emerald-500" },
      blue: { bg: "bg-blue-100", icon: "text-blue-600", gradient: "from-blue-400 to-blue-600" },
      purple: { bg: "bg-purple-100", icon: "text-purple-600", gradient: "from-purple-400 to-purple-600" },
      orange: { bg: "bg-orange-100", icon: "text-orange-600", gradient: "from-orange-400 to-red-500" },
      emerald: { bg: "bg-emerald-100", icon: "text-emerald-600", gradient: "from-emerald-400 to-green-500" }
    };
    return colorMap[color] || colorMap.blue;
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4" />
            Why We're Different
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Choose ADS International?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over 13 years of experience and 10,000+ satisfied customers, we are your trusted partner 
            for all documentation services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const colors = getColorClasses(reason.color);
            return (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-105">
                {/* Image section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={reason.image} 
                    alt={reason.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div className={`${colors.bg} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm bg-white/90`}>
                      <reason.icon className={`w-8 h-8 ${colors.icon}`} />
                    </div>
                  </div>
                </div>
                
                {/* Content section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-white/10 bg-grid-pattern"></div>
          
          {/* Background images */}
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1544077960-604201fe74bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-6">Ready to Get Started?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their documentation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Application
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                Call: +91 9876543210
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
