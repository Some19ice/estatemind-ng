'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Home, MessageSquare, Settings, LogOut, PlusCircle, Building } from 'lucide-react';

const MENU_ITEMS = [
  { label: 'Overview', icon: LayoutDashboard, href: '/dashboard' },
  { label: 'My Listings', icon: Home, href: '/dashboard/listings' },
  { label: 'Messages', icon: MessageSquare, href: '/dashboard/messages' },
  { label: 'Settings', icon: Settings, href: '/dashboard/settings' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col fixed h-full">
        <div className="p-6 border-b border-slate-800">
           <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">EstateMind</span>
           </Link>
           <div className="mt-4 px-3 py-2 bg-slate-800 rounded-lg flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-sm">
                AM
              </div>
              <div className="overflow-hidden">
                <div className="text-sm font-bold truncate">Alhaji Musa</div>
                <div className="text-xs text-slate-400 truncate">Verified Agent</div>
              </div>
           </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {MENU_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${
                  isActive 
                    ? 'bg-emerald-600 text-white' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-slate-400 hover:text-red-400 transition-colors font-medium">
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8">
         {children}
      </main>
    </div>
  );
}
