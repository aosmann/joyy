import React from 'react';
import { UtensilsCrossed, Music, Palette, Globe } from 'lucide-react';

const Highlights: React.FC = () => {
  const highlights = [
    {
      icon: UtensilsCrossed,
      title: 'Global Food Stalls',
      description: 'Savor authentic dishes from around the world, prepared by local chefs and cultural communities.',
      color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      emoji: '🍜'
    },
    {
      icon: Music,
      title: 'Live Dance & Music',
      description: 'Experience energetic performances featuring traditional and contemporary music from diverse cultures.',
      color: 'bg-gradient-to-br from-red-500 to-pink-500',
      emoji: '🎶'
    },
    {
      icon: Palette,
      title: 'Art Exhibits',
      description: 'Discover stunning artworks and interactive installations created by talented local and international artists.',
      color: 'bg-gradient-to-br from-blue-400 to-purple-500',
      emoji: '🎨'
    },
    {
      icon: Globe,
      title: 'Cultural Activities',
      description: 'Participate in hands-on workshops, traditional games, and cultural demonstrations.',
      color: 'bg-gradient-to-br from-teal-400 to-blue-600',
      emoji: '🌍'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Festival <span className="text-red-500">Highlights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in a celebration that brings together the best of global culture, cuisine, and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`${highlight.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl mb-4">{highlight.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;