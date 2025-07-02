
import { Clock, Shield, Users, Award, Phone, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Quick turnaround times with express services available for urgent requirements."
    },
    {
      icon: Shield,
      title: "100% Safe & Secure",
      description: "Your documents and personal information are completely safe with our secure processes."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals who understand government procedures and requirements."
    },
    {
      icon: Award,
      title: "Government Approved",
      description: "Authorized service provider with all necessary government approvals and licenses."
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock customer support to answer your queries and provide assistance."
    },
    {
      icon: CheckCircle,
      title: "100% Success Rate",
      description: "Perfect track record with successful completion of all application processes."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ADS International?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 13 years of experience and 10,000+ satisfied customers, we are your trusted partner 
            for all documentation services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all">
              <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                <reason.icon className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 mt-16 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of satisfied customers who trust us with their documentation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Application
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Call: +91 9876543210
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
