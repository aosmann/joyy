import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              About <span className="text-yellow-500">Joyyfest</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Joyyfest is a vibrant celebration of heritage, bringing together flavors, creativity, and culture. From sizzling street food to live performances, bold art, and cultural showcases — Joyyfest is where diversity meets pure joy.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Experience the rich tapestry of global cultures through authentic cuisine, mesmerizing performances, and interactive art installations that tell the stories of our diverse community.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="bg-red-500 w-16 h-2 rounded-full"></div>
              <div className="bg-yellow-400 w-12 h-2 rounded-full"></div>
              <div className="bg-blue-400 w-8 h-2 rounded-full"></div>
            </div>
          </div>

          {/* Image Collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg" 
                alt="Cultural performance"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg" 
                alt="Art exhibition"
                className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg" 
                alt="Food stalls"
                className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg" 
                alt="Festival atmosphere"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;