import React from 'react';
import { TrendingUp, Users, Home, Eye, ArrowUpRight } from 'lucide-react';

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
        <p className="text-slate-500">Welcome back, Musa. Here's what's happening with your listings.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Listings', value: '12', icon: Home, color: 'bg-blue-500' },
          { label: 'Total Views', value: '2.4k', icon: Eye, color: 'bg-purple-500' },
          { label: 'Leads (This Week)', value: '18', icon: Users, color: 'bg-emerald-500' },
          { label: 'Avg. Response Time', value: '5m', icon: TrendingUp, color: 'bg-orange-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" />
                +12%
              </span>
            </div>
            <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
            <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Recent Enquiries</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer border border-slate-100">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-bold">
                  {['JD', 'AO', 'MK'][i]}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-slate-900">{['John Doe', 'Amina Okon', 'Musa K.'][i]}</span>
                    <span className="text-xs text-slate-400">2h ago</span>
                  </div>
                  <p className="text-sm text-slate-600 line-clamp-1">
                    Hi, is the 3-bedroom apartment in Lekki still available for inspection?
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
             <button className="p-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl font-bold text-left transition-colors flex flex-col gap-2">
                <span className="text-2xl">+</span>
                Post New Listing
             </button>
             <button className="p-4 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl font-bold text-left transition-colors flex flex-col gap-2">
                <span className="text-2xl">⚡</span>
                Boost Listings
             </button>
             <button className="p-4 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-xl font-bold text-left transition-colors flex flex-col gap-2">
                <span className="text-2xl">📹</span>
                Verify Video
             </button>
             <button className="p-4 bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-xl font-bold text-left transition-colors flex flex-col gap-2">
                <span className="text-2xl">⚙️</span>
                Edit Profile
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
