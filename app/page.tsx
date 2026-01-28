import React from 'react';
import { Search, MapPin, ShieldCheck, MessageSquare, ArrowRight, Menu, X, Building, Key, Star } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-emerald-950">EstateMind</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Rent</Link>
              <Link href="#" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Buy</Link>
              <Link href="#" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Short-let</Link>
              <Link href="#" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Agents</Link>
            </div>
            <div className="flex items-center gap-4">
              <button className="hidden md:block text-emerald-600 font-semibold hover:text-emerald-700">Login</button>
              <button className="bg-emerald-600 text-white px-5 py-2 rounded-full font-medium hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-slate-100 opacity-80"></div>
          {/* Abstract blobs/shapes could go here */}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
              <Star className="w-4 h-4 fill-emerald-700" />
              <span>The #1 AI Real Estate Agent in Nigeria</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Don't just search. <br/>
              <span className="text-emerald-600">Instruct.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Find your dream home in Lagos, Abuja, or PH without the stress. 
              Chat with our AI agent to find verified listings, schedule inspections, and negotiate deals.
            </p>

            {/* Search Interface Mockup */}
            <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-200 max-w-2xl mx-auto transform hover:scale-[1.01] transition-transform duration-300">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-grow relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-4 border-none ring-1 ring-slate-200 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all outline-none"
                    placeholder="Describe what you want (e.g. '3-bed in Ikoyi with a pool')"
                  />
                </div>
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
                  <Search className="w-5 h-5" />
                  <span>Find It</span>
                </button>
              </div>
              <div className="mt-3 flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                {['Lekki Phase 1', 'Ikoyi', 'Victoria Island', 'Ikeja GRA', 'Maitama'].map((tag) => (
                  <button key={tag} className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-medium rounded-full whitespace-nowrap transition-colors">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Verified Listings', value: '10k+' },
              { label: 'Happy Tenants', value: '5,000+' },
              { label: 'Cities Covered', value: '12' },
              { label: 'Agent Response', value: '< 5m' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-emerald-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Nigeria Trusts EstateMind</h2>
            <p className="text-slate-600 text-lg">We've rebuilt the house hunting experience from the ground up to solve the unique challenges of the Nigerian market.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">TrueVerify™ Listings</h3>
              <p className="text-slate-600 leading-relaxed">
                No more "inspection fees" for properties that don't exist. Every listing is verified via video walkthroughs and agent KYC.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Personal Broker</h3>
              <p className="text-slate-600 leading-relaxed">
                Chat with "Chinedu" (our AI) to negotiate prices, check tenancy laws, and schedule viewings instantly.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Local Intelligence</h3>
              <p className="text-slate-600 leading-relaxed">
                Know before you go. Get real data on power stability, flood risks, and traffic patterns for every neighborhood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-800 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-emerald-950 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to find your next place?</h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of Nigerians who have found their perfect home with EstateMind. 
            No stress. No scams. Just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-colors">
              Start Searching Now
            </button>
            <button className="bg-transparent border-2 border-emerald-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-800 transition-colors">
              List Your Property
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-emerald-600 rounded flex items-center justify-center">
                  <Building className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-lg text-white">EstateMind</span>
              </div>
              <p className="text-sm leading-relaxed">
                The first agentic real estate marketplace for Nigeria. Driven by AI, built on trust.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-emerald-500">For Renters</Link></li>
                <li><Link href="#" className="hover:text-emerald-500">For Agents</Link></li>
                <li><Link href="#" className="hover:text-emerald-500">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-emerald-500">About Us</Link></li>
                <li><Link href="#" className="hover:text-emerald-500">Careers</Link></li>
                <li><Link href="#" className="hover:text-emerald-500">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-emerald-500">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-emerald-500">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm">
            &copy; {new Date().getFullYear()} EstateMind Nigeria. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
