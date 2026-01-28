import React from 'react';
import Link from 'next/link';
import { Plus, Search, Edit2, Trash2, Eye, MoreVertical } from 'lucide-react';
import { MOCK_PROPERTIES } from '@/app/data/properties';

export default function MyListingsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Listings</h1>
          <p className="text-slate-500">Manage your active properties and draft listings.</p>
        </div>
        <Link 
          href="/dashboard/listings/new" 
          className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20"
        >
          <Plus className="w-5 h-5" />
          Add New Property
        </Link>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
           <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
           <input 
             type="text" 
             placeholder="Search by title or location..." 
             className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
           />
        </div>
        <select className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none">
          <option>All Status</option>
          <option>Active</option>
          <option>Pending</option>
          <option>Draft</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm font-semibold uppercase tracking-wider">
              <th className="px-6 py-4">Property</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Views</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {MOCK_PROPERTIES.map((property) => (
              <tr key={property.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                   <div className="flex items-center gap-4">
                     <div className="w-16 h-12 bg-slate-200 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={property.images[0]} alt="" className="w-full h-full object-cover" />
                     </div>
                     <div>
                       <div className="font-bold text-slate-900">{property.title}</div>
                       <div className="text-xs text-slate-500">{property.location.address}</div>
                     </div>
                   </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    property.verified ? 'bg-emerald-100 text-emerald-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {property.verified ? 'Active' : 'Pending'}
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-slate-700">
                   ₦{(property.price).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-slate-500">
                   1,204
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
