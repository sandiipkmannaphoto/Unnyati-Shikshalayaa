import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BookOpen, FileText, Settings, LogOut, Home } from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Manage Courses', path: '/admin/courses', icon: BookOpen },
    { name: 'Manage Blog', path: '/admin/blog', icon: FileText },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col hidden md:flex">
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-xl font-bold flex items-center gap-2">
             Admin CMS
          </h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                isActive(item.path) ? 'bg-brand-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <item.icon size={20} className="mr-3" />
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-800">
          <Link to="/" className="flex items-center px-4 py-2 text-gray-400 hover:text-white transition">
            <Home size={20} className="mr-3" /> View Site
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm z-10 p-4 flex justify-between items-center md:hidden">
             <span className="font-bold">Admin Panel</span>
             <Link to="/" className="text-sm text-brand-600">Back to Site</Link>
        </header>

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
            {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;