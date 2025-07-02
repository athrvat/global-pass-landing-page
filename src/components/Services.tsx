
import { 
  FileText, 
  CreditCard, 
  Car, 
  Shield, 
  Award, 
  Globe, 
  UserCheck, 
  FileCheck,
  Building,
  Calculator,
  ArrowRight,
  Clock
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Passport Services",
      description: "New passport, renewal, re-issue, and emergency passport services with fast processing.",
      features: ["Fresh Passport", "Renewal", "Re-issue", "Emergency Services"],
      color: "blue",
      popular: true
    },
    {
      icon: Globe,
      title: "Visa Services",
      description: "Tourist, business, student, and work visas for all countries with expert guidance.",
      features: ["Tourist Visa", "Business Visa", "Student Visa", "Work Visa"],
      color: "purple",
      popular: true
    },
    {
      icon: CreditCard,
      title: "Pan Card",
      description: "New Pan Card application, corrections, and duplicate Pan Card services.",
      features: ["New Application", "Corrections", "Duplicate", "Quick Processing"],
      color: "emerald"
    },
    {
      icon: Car,
      title: "Driving License",
      description: "Learning license, permanent license, renewal, and duplicate license services.",
      features: ["Learning License", "Permanent License", "Renewal", "Duplicate"],
      color: "orange"
    },
    {
      icon: Shield,
      title: "Aadhar Card",
      description: "Online Aadhar Card services including new enrollment and updates.",
      features: ["New Enrollment", "Updates", "Corrections", "Download"],
      color: "red"
    },
    {
      icon: Award,
      title: "Apostille Documents",
      description: "Document apostille services for international use and verification.",
      features: ["Educational Docs", "Personal Docs", "Commercial Docs", "Fast Service"],
      color: "indigo"
    },
    {
      icon: Building,
      title: "MEA Services",
      description: "Ministry of External Affairs legalization and embassy attestation services.",
      features: ["HRD Attestation", "Embassy Legalization", "MEA Apostille", "Quick Processing"],
      color: "pink"
    },
    {
      icon: UserCheck,
      title: "Name Change",
      description: "Name change in passport and other official documents with legal support.",
      features: ["Passport Name Change", "Legal Documentation", "Gazette Notification", "Court Affidavit"],
      color: "teal"
    },
    {
      icon: FileCheck,
      title: "Birth Certificate",
      description: "Birth certificate services including new applications and corrections.",
      features: ["New Certificate", "Corrections", "Duplicate", "Online Service"],
      color: "cyan"
    },
    {
      icon: Calculator,
      title: "GST & ITR",
      description: "GST certificate and Income Tax Return filing services for businesses.",
      features: ["GST Registration", "ITR Filing", "Compliance", "Expert Support"],
      color: "violet"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; icon: string; border: string; button: string }> = {
      blue: { bg: "bg-blue-50", icon: "text-blue-600", border: "border-blue-200", button: "bg-blue-600 hover:bg-blue-700" },
      purple: { bg: "bg-purple-50", icon: "text-purple-600", border: "border-purple-200", button: "bg-purple-600 hover:bg-purple-700" },
      emerald: { bg: "bg-emerald-50", icon: "text-emerald-600", border: "border-emerald-200", button: "bg-emerald-600 hover:bg-emerald-700" },
      orange: { bg: "bg-orange-50", icon: "text-orange-600", border: "border-orange-200", button: "bg-orange-600 hover:bg-orange-700" },
      red: { bg: "bg-red-50", icon: "text-red-600", border: "border-red-200", button: "bg-red-600 hover:bg-red-700" },
      indigo: { bg: "bg-indigo-50", icon: "text-indigo-600", border: "border-indigo-200", button: "bg-indigo-600 hover:bg-indigo-700" },
      pink: { bg: "bg-pink-50", icon: "text-pink-600", border: "border-pink-200", button: "bg-pink-600 hover:bg-pink-700" },
      teal: { bg: "bg-teal-50", icon: "text-teal-600", border: "border-teal-200", button: "bg-teal-600 hover:bg-teal-700" },
      cyan: { bg: "bg-cyan-50", icon: "text-cyan-600", border: "border-cyan-200", button: "bg-cyan-600 hover:bg-cyan-700" },
      violet: { bg: "bg-violet-50", icon: "text-violet-600", border: "border-violet-200", button: "bg-violet-600 hover:bg-violet-700" }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Clock className="w-4 h-4" />
            Fast & Reliable Services
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Comprehensive Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From passport and visa services to document attestation, we provide end-to-end solutions 
            for all your documentation needs with professional expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border ${colors.border} group hover:scale-105`}>
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    POPULAR
                  </div>
                )}
                
                <div className="flex items-center mb-6">
                  <div className={`${colors.bg} p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className={`w-2 h-2 ${colors.icon.replace('text-', 'bg-')} rounded-full mr-3`}></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`group w-full ${colors.button} text-white py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2`}>
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6">We offer personalized services tailored to your specific requirements.</p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              View All Services & Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
