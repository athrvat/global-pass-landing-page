
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="hidden md:flex justify-between items-center py-3 text-sm border-b border-gray-100">
          <div className="flex items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+91 9876543210</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="font-medium">info@adsinternational.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <MapPin className="w-4 h-4" />
              <span className="font-medium">Mumbai, India</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-emerald-600 font-semibold">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span>Trusted by 10,000+ Customers</span>
          </div>
        </div>
        
        {/* Main navigation */}
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                ADS INTERNATIONAL
              </h1>
              <span className="ml-3 text-xs bg-gradient-to-r from-amber-400 to-amber-500 text-white px-3 py-1 rounded-full font-semibold shadow-sm">
                Since 2010
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-semibold transition-all hover:scale-105">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-semibold transition-all hover:scale-105">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-semibold transition-all hover:scale-105">
              Contact
            </a>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold">
              Get Quote Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-semibold py-2">
                Services
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-semibold py-2">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-semibold py-2">
                Contact
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold mt-2">
                Get Quote Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
