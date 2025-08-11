import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      url: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      alt: "Festival crowd enjoying food"
    },
    {
      url: "https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg",
      alt: "Traditional dance performance"
    },
    {
      url: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg",
      alt: "Colorful food display"
    },
    {
      url: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      alt: "Art exhibition"
    },
    {
      url: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg",
      alt: "Family enjoying festival"
    },
    {
      url: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg",
      alt: "Cultural showcase"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Festival <span className="text-yellow-400">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get a taste of the vibrant atmosphere and unforgettable moments from previous Joyyfest celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              <img 
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">More memories to be made at Joyyfest 2025!</p>
          <div className="flex justify-center gap-4">
            <div className="bg-yellow-400 w-12 h-2 rounded-full"></div>
            <div className="bg-red-500 w-8 h-2 rounded-full"></div>
            <div className="bg-blue-400 w-6 h-2 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;