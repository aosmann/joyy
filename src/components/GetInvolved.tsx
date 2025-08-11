import React from 'react';
import { Users, Mic, Store, Mail } from 'lucide-react';

const GetInvolved: React.FC = () => {
  const opportunities = [
    {
      icon: Users,
      title: 'Volunteer',
      description: 'Join our amazing team of volunteers and help create magical moments for festival attendees.',
      color: 'bg-yellow-400'
    },
    {
      icon: Mic,
      title: 'Perform',
      description: 'Share your talent with our diverse audience. We welcome musicians, dancers, and artists.',
      color: 'bg-red-500'
    },
    {
      icon: Store,
      title: 'Become a Vendor',
      description: 'Showcase your food, crafts, or cultural products to thousands of festival visitors.',
      color: 'bg-blue-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Get <span className="text-red-500">Involved</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Be part of something special! Join our community of passionate individuals who make Joyyfest an unforgettable experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {opportunities.map((opportunity, index) => {
            const IconComponent = opportunity.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1"
              >
                <div className={`${opportunity.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{opportunity.title}</h3>
                <p className="text-gray-600 leading-relaxed">{opportunity.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <Mail className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Us?</h3>
            <p className="text-gray-600 mb-6">
              Whether you want to volunteer, perform, or become a vendor, we'd love to hear from you!
            </p>
            <a 
              href="mailto:contact@oasiswa.org"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;