
import { Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="flex flex-wrap justify-between items-center py-2 text-sm border-b border-gray-100">
          <div className="flex flex-wrap items-center gap-4 text-gray-600">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <span>info@adsinternational.com</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Mumbai, India</span>
            </div>
          </div>
          <div className="text-blue-600 font-medium">
            ⭐ Trusted by 10,000+ Customers
          </div>
        </div>
        
        {/* Main navigation */}
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-800">ADS INTERNATIONAL</h1>
            <span className="ml-2 text-sm bg-gold-100 text-gold-800 px-2 py-1 rounded">
              Since 2010
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Quote Now
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
