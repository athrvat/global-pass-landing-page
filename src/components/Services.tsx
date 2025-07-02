
import { 
  FileText, 
  CreditCard, 
  Car, 
  Shield, 
  Award, 
  Globe, 
  UserCheck, 
  Certificate,
  Building,
  Calculator
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Passport Services",
      description: "New passport, renewal, re-issue, and emergency passport services with fast processing.",
      features: ["Fresh Passport", "Renewal", "Re-issue", "Emergency Services"]
    },
    {
      icon: Globe,
      title: "Visa Services",
      description: "Tourist, business, student, and work visas for all countries with expert guidance.",
      features: ["Tourist Visa", "Business Visa", "Student Visa", "Work Visa"]
    },
    {
      icon: CreditCard,
      title: "Pan Card",
      description: "New Pan Card application, corrections, and duplicate Pan Card services.",
      features: ["New Application", "Corrections", "Duplicate", "Quick Processing"]
    },
    {
      icon: Car,
      title: "Driving License",
      description: "Learning license, permanent license, renewal, and duplicate license services.",
      features: ["Learning License", "Permanent License", "Renewal", "Duplicate"]
    },
    {
      icon: Shield,
      title: "Aadhar Card",
      description: "Online Aadhar Card services including new enrollment and updates.",
      features: ["New Enrollment", "Updates", "Corrections", "Download"]
    },
    {
      icon: Award,
      title: "Apostille Documents",
      description: "Document apostille services for international use and verification.",
      features: ["Educational Docs", "Personal Docs", "Commercial Docs", "Fast Service"]
    },
    {
      icon: Building,
      title: "MEA Services",
      description: "Ministry of External Affairs legalization and embassy attestation services.",
      features: ["HRD Attestation", "Embassy Legalization", "MEA Apostille", "Quick Processing"]
    },
    {
      icon: UserCheck,
      title: "Name Change",
      description: "Name change in passport and other official documents with legal support.",
      features: ["Passport Name Change", "Legal Documentation", "Gazette Notification", "Court Affidavit"]
    },
    {
      icon: Certificate,
      title: "Birth Certificate",
      description: "Birth certificate services including new applications and corrections.",
      features: ["New Certificate", "Corrections", "Duplicate", "Online Service"]
    },
    {
      icon: Calculator,
      title: "GST & ITR",
      description: "GST certificate and Income Tax Return filing services for businesses.",
      features: ["GST Registration", "ITR Filing", "Compliance", "Expert Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From passport and visa services to document attestation, we provide end-to-end solutions 
            for all your documentation needs with professional expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg">
            View All Services & Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
