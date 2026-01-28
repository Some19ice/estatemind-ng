'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Upload, Video, MapPin, Check } from 'lucide-react';

export default function NewListingPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulation of upload
    await new Promise(r => setTimeout(r, 2000));
    alert("Property submitted for TrueVerify™ review!");
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <Link href="/dashboard/listings" className="flex items-center text-slate-500 hover:text-emerald-600 mb-4 gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Listings
        </Link>
        <h1 className="text-3xl font-bold text-slate-900">Post a New Property</h1>
        <p className="text-slate-500 mt-2">
          Step {step} of 3: {step === 1 ? 'Basic Details' : step === 2 ? 'Media & Verification' : 'Review'}
        </p>
        
        {/* Progress Bar */}
        <div className="w-full h-2 bg-slate-200 rounded-full mt-4 overflow-hidden">
          <div 
            className="h-full bg-emerald-600 transition-all duration-500 ease-out"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
        
        {/* STEP 1: Basic Info */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Title</label>
                <input type="text" placeholder="e.g. Luxury 3-Bed in Lekki" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Type</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none">
                  <option>For Rent</option>
                  <option>For Sale</option>
                  <option>Short-let</option>
                </select>
              </div>
            </div>

            <div>
               <label className="block text-sm font-bold text-slate-700 mb-2">Description</label>
               <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Describe the property..." />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                 <label className="block text-sm font-bold text-slate-700 mb-2">Price (₦)</label>
                 <input type="number" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="0.00" />
              </div>
              <div>
                 <label className="block text-sm font-bold text-slate-700 mb-2">Location</label>
                 <div className="relative">
                    <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                    <input type="text" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Address / Area" />
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {['Bedrooms', 'Bathrooms', 'Toilets', 'Parking'].map((label) => (
                <div key={label}>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase">{label}</label>
                  <input type="number" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
              ))}
            </div>

            <div className="pt-4 flex justify-end">
              <button 
                type="button" 
                onClick={() => setStep(2)}
                className="px-8 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Media & TrueVerify */}
        {step === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
            
            {/* Image Upload */}
            <div>
              <label className="block text-lg font-bold text-slate-900 mb-4">Property Photos</label>
              <div className="border-2 border-dashed border-slate-300 rounded-2xl p-10 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                <Upload className="w-10 h-10 text-slate-400 mx-auto mb-4" />
                <p className="font-medium text-slate-600">Click to upload or drag and drop</p>
                <p className="text-sm text-slate-400 mt-2">JPG, PNG up to 5MB</p>
              </div>
            </div>

            {/* TrueVerify Video Section */}
            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Video className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-emerald-900 mb-1">TrueVerify™ Video Requirement</h3>
                  <p className="text-emerald-700 text-sm mb-4 leading-relaxed">
                    To get the "Verified" badge and 3x more views, you must upload a continuous video walkthrough of the property starting from the street view.
                  </p>
                  <button type="button" className="px-5 py-2 bg-emerald-600 text-white text-sm font-bold rounded-lg hover:bg-emerald-700 transition-colors">
                    Upload Walkthrough
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <button 
                type="button" 
                onClick={() => setStep(1)}
                className="px-6 py-3 text-slate-500 font-bold hover:text-slate-800 transition-colors"
              >
                Back
              </button>
              <button 
                type="submit" 
                disabled={loading}
                className="px-8 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors flex items-center gap-2"
              >
                {loading ? 'Submitting...' : 'Post Property'}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
