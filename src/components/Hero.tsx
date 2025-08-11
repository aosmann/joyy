import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg" 
          alt="Festival celebration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        {/* Colorful overlays */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-32 right-20 w-40 h-40 bg-red-500/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          <span className="block text-yellow-400">JOYY</span>
          <span className="block text-white">FEST</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 font-medium text-gray-100 max-w-2xl mx-auto leading-relaxed">
          Dive into a world of flavors, rhythms, and colors
        </p>

        {/* Event Details */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 text-lg">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Calendar className="w-5 h-5 text-yellow-400" />
            <span>May 18, 2025</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Clock className="w-5 h-5 text-yellow-400" />
            <span>11 AM – 5 PM</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <MapPin className="w-5 h-5 text-yellow-400" />
            <span>Shoreline Community College, WA</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-gradient-to-r from-yellow-400 to-red-500 hover:from-yellow-300 hover:to-red-400 text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
          Join the Celebration
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;