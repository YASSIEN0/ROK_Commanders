
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sword, Shield, Book, Calculator, Home } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/simulator', icon: Sword, label: 'Simulator' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-orange-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shrink-0">
              <Shield className="text-white" size={20} />
            </div>
            <span className="text-sm sm:text-xl font-bold tracking-tighter uppercase italic truncate">Rise of Kingdoms Commanders</span>
          </Link>

          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-orange-500 ${
                  location.pathname === item.path ? 'text-orange-500' : 'text-zinc-400'
                }`}
              >
                <item.icon size={18} />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="border-t border-white/5 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-zinc-500 text-sm">
            © 2026 RoK Ultimate Database. Not affiliated with Lilith Games.
          </p>
        </div>
      </footer>
    </div>
  );
};
