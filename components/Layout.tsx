import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { SiteSettings } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  settings: SiteSettings;
}

const Layout: React.FC<LayoutProps> = ({ children, settings }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      {/* Top Bar */}
      <div className="bg-brand-900 text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center"><Phone size={14} className="mr-2" /> {settings.phone}</span>
            <span className="flex items-center"><Mail size={14} className="mr-2" /> {settings.email}</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href={settings.facebookUrl} target="_blank" rel="noreferrer" className="hover:text-accent-500"><Facebook size={16} /></a>
            <a href={settings.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-accent-500"><Instagram size={16} /></a>
            <a href={settings.youtubeUrl} target="_blank" rel="noreferrer" className="hover:text-accent-500"><Youtube size={16} /></a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">U</div>
            <div>
              <h1 className="text-xl font-bold text-brand-900 leading-tight">{settings.name}</h1>
              <p className="text-xs text-gray-500 hidden sm:block">Computer Training Institute</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.path) ? 'text-brand-600 border-b-2 border-brand-600' : 'text-gray-600 hover:text-brand-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 ${
                  isActive(link.path) ? 'bg-brand-50 text-brand-700 font-semibold' : 'text-gray-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">{settings.name}</h3>
              <p className="text-sm leading-relaxed mb-4 text-gray-400">
                {settings.tagline}. We are dedicated to providing high-quality computer education to empower students for a digital future.
              </p>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link to="/courses" className="hover:text-white transition">All Courses</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
                <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link to="/admin" className="hover:text-white transition">Admin Login</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-bold mb-4">Courses</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/courses" className="hover:text-white transition">ADCA / DCA</Link></li>
                <li><Link to="/courses" className="hover:text-white transition">Web Development</Link></li>
                <li><Link to="/courses" className="hover:text-white transition">Tally & Accounting</Link></li>
                <li><Link to="/courses" className="hover:text-white transition">Graphic Design</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-2 mt-0.5 text-brand-500" />
                  <span>{settings.address}</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-2 text-brand-500" />
                  <span>{settings.phone}</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-2 text-brand-500" />
                  <span>{settings.email}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} {settings.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;