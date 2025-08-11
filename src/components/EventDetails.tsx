import React from 'react';
import { MapPin, Car, Clock, Phone } from 'lucide-react';

const EventDetails: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Event <span className="text-blue-600">Details</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="bg-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <MapPin className="text-red-500" />
              Location & Directions
            </h3>
            
            {/* Mock Map */}
            <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg h-64 flex items-center justify-center mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20"></div>
              <div className="text-center z-10">
                <MapPin className="w-12 h-12 text-red-500 mx-auto mb-2" />
                <p className="text-lg font-semibold text-gray-700">Shoreline Community College</p>
                <p className="text-gray-600">Interactive Map</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <p className="text-gray-600">16101 Greenwood Ave N, Shoreline, WA 98133</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Car className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Parking</p>
                  <p className="text-gray-600">Free parking available on campus. Additional street parking nearby.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Event Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Clock className="text-yellow-500" />
                Schedule
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-900">Gates Open</span>
                  <span className="text-gray-600">11:00 AM</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-900">Food & Art Exhibits</span>
                  <span className="text-gray-600">11:30 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-900">Live Performances</span>
                  <span className="text-gray-600">12:00 PM - 4:30 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Cultural Activities</span>
                  <span className="text-gray-600">1:00 PM - 4:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Important Information</h3>
              
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Free admission and open to all ages</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Food and beverages available for purchase</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Weather-appropriate clothing recommended</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>ADA accessible venue with accommodations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;