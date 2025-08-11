import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black mb-4">
              <span className="text-yellow-400">JOYY</span>FEST
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              The International Food & Art Festival bringing together flavors, creativity, and culture in one unforgettable celebration.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-500 p-3 rounded-full transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-500 p-3 rounded-full transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-400 hover:bg-blue-300 p-3 rounded-full transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:contact@oasiswa.org" className="bg-red-600 hover:bg-red-500 p-3 rounded-full transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About Joyyfest</a></li>
              <li><a href="#highlights" className="text-gray-300 hover:text-white transition-colors duration-300">Festival Highlights</a></li>
              <li><a href="#details" className="text-gray-300 hover:text-white transition-colors duration-300">Event Details</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors duration-300">Gallery</a></li>
              <li><a href="#involved" className="text-gray-300 hover:text-white transition-colors duration-300">Get Involved</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-400">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <a href="mailto:contact@oasiswa.org" className="text-gray-300 hover:text-white transition-colors duration-300">
                  contact@oasiswa.org
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Shoreline Community College</p>
                  <p>16101 Greenwood Ave N</p>
                  <p>Shoreline, WA 98133</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2025 Joyyfest. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Accessibility</a>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex justify-center gap-4">
              <div className="bg-yellow-400 w-16 h-1 rounded-full"></div>
              <div className="bg-red-500 w-12 h-1 rounded-full"></div>
              <div className="bg-blue-400 w-8 h-1 rounded-full"></div>
              <div className="bg-teal-500 w-6 h-1 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;