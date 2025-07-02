
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ADS INTERNATIONAL</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted partner for all documentation services. With 13+ years of experience, 
              we provide professional, fast, and reliable services.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Passport Services</a></li>
              <li><a href="#" className="hover:text-white">Visa Services</a></li>
              <li><a href="#" className="hover:text-white">Pan Card</a></li>
              <li><a href="#" className="hover:text-white">Driving License</a></li>
              <li><a href="#" className="hover:text-white">Apostille Documents</a></li>
              <li><a href="#" className="hover:text-white">MEA Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#services" className="hover:text-white">Our Services</a></li>
              <li><a href="#" className="hover:text-white">Track Application</a></li>
              <li><a href="#" className="hover:text-white">Download Forms</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>info@adsinternational.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <span>ADS International Building,<br />Mumbai - 400001</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Business Hours</h5>
              <p className="text-gray-300 text-sm">
                Mon-Sat: 9:00 AM - 7:00 PM<br />
                Sunday: 10:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 ADS International. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
