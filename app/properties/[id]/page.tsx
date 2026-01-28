import React from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, Share2, Heart, CheckCircle, Shield, MessageSquare, Phone, Calendar, PlayCircle } from 'lucide-react';
import { MOCK_PROPERTIES } from '@/app/data/properties';

export default async function PropertyDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = MOCK_PROPERTIES.find(p => p.id === id) || MOCK_PROPERTIES[0];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/search" className="flex items-center text-slate-600 hover:text-emerald-600 font-medium gap-2">
            <ArrowLeft className="w-5 h-5" />
            Back to Search
          </Link>
          <div className="flex gap-2">
            <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Gallery (Placeholder for Grid) */}
            <div className="aspect-video bg-slate-200 rounded-2xl overflow-hidden relative group">
              <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
              <button className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                 <div className="flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur rounded-full text-slate-900 font-bold shadow-lg transform group-hover:scale-105 transition-transform">
                   <PlayCircle className="w-5 h-5 text-emerald-600" />
                   Watch Video Tour
                 </div>
              </button>
            </div>

            {/* Title & Price */}
            <div>
               <div className="flex items-start justify-between gap-4">
                 <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">{property.title}</h1>
                    <div className="flex items-center text-slate-500 mb-4">
                      <MapPin className="w-5 h-5 mr-2 text-emerald-600" />
                      {property.location.address}, {property.location.city}
                    </div>
                 </div>
                 <div className="text-right">
                    <div className="text-3xl font-bold text-emerald-900">
                      ₦{(property.price).toLocaleString()}
                    </div>
                    {property.period && <div className="text-slate-500">per {property.period}</div>}
                 </div>
               </div>
               
               {/* Badges */}
               <div className="flex gap-3">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-semibold rounded-full flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    TrueVerify™ Checked
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                    No Inspection Fee
                  </span>
               </div>
            </div>

            <hr className="border-slate-200" />

            {/* Description */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Overview</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                This stunning {property.specs.bedrooms}-bedroom property located in the heart of {property.location.area} offers the perfect blend of luxury and comfort. 
                Recently renovated with premium finishes, it features {property.features.join(', ')}. 
                Ideal for professionals seeking proximity to the business district.
              </p>
            </div>

            {/* Features Grid */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar (Agent & Contact) */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-xl font-bold text-slate-500">
                   {property.agent.name[0]}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">{property.agent.name}</h3>
                  <div className="flex items-center text-sm text-emerald-600 gap-1 font-medium">
                    <Shield className="w-3 h-3 fill-emerald-600" />
                    Verified Agent
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Typical response: {property.agent.response_time}</div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-600/20">
                  <MessageSquare className="w-5 h-5" />
                  Chat with Agent
                </button>
                <button className="w-full py-3 bg-white border-2 border-slate-200 hover:border-emerald-600 hover:text-emerald-600 text-slate-700 font-bold rounded-xl flex items-center justify-center gap-2 transition-all">
                  <Calendar className="w-5 h-5" />
                  Schedule Inspection
                </button>
                <button className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl flex items-center justify-center gap-2 transition-colors">
                  <Phone className="w-5 h-5" />
                  Request Call Back
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-blue-900">Safety Tip</h4>
                    <p className="text-xs text-blue-700 mt-1 leading-snug">
                      Never pay for inspection fees before viewing. Use EstateMind Escrow for secure payments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
