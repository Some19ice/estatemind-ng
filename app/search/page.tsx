import React from 'react';
import Link from 'next/link';
import { MapPin, BedDouble, Bath, Car, CheckCircle, Shield, Filter, Star } from 'lucide-react';
import { MOCK_PROPERTIES } from '@/app/data/properties';

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Properties in Lagos</h1>
            <p className="text-slate-500">Showing 3 matches for "Lekki & Ikoyi"</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 font-medium">
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium shadow-sm">
              <Star className="w-4 h-4" />
              Ask AI Agent
            </button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PROPERTIES.map((property) => (
            <Link href={`/properties/${property.id}`} key={property.id} className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Image Section */}
              <div className="relative h-64 bg-slate-200">
                <img 
                  src={property.images[0]} 
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    property.type === 'Rent' ? 'bg-blue-600 text-white' : 
                    property.type === 'Sale' ? 'bg-emerald-600 text-white' : 
                    'bg-orange-500 text-white'
                  }`}>
                    For {property.type}
                  </span>
                  {property.verified && (
                    <span className="flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur text-emerald-700 text-xs font-bold rounded-full">
                      <Shield className="w-3 h-3 fill-emerald-700" />
                      Verified
                    </span>
                  )}
                </div>
                <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  ₦{(property.price).toLocaleString()}
                  {property.period && <span className="text-slate-300 font-normal">/{property.period}</span>}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-slate-900 line-clamp-1 group-hover:text-emerald-600 transition-colors">
                    {property.title}
                  </h3>
                </div>
                
                <div className="flex items-center text-slate-500 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1 text-slate-400" />
                  {property.location.address}
                </div>

                <div className="flex items-center gap-6 mb-6 text-slate-700 text-sm">
                  <div className="flex items-center gap-2">
                    <BedDouble className="w-4 h-4 text-emerald-600" />
                    <span className="font-semibold">{property.specs.bedrooms}</span>
                    <span className="text-slate-400">Bed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-4 h-4 text-emerald-600" />
                    <span className="font-semibold">{property.specs.bathrooms}</span>
                    <span className="text-slate-400">Bath</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-emerald-600" />
                    <span className="font-semibold">{property.specs.parking}</span>
                    <span className="text-slate-400">Park</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold text-slate-500">
                      {property.agent.name[0]}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{property.agent.name}</div>
                      <div className="text-[10px] text-slate-500">Replied in {property.agent.response_time}</div>
                    </div>
                  </div>
                  {property.agent.verified && (
                     <CheckCircle className="w-5 h-5 text-emerald-500" aria-label="Verified Agent" />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
