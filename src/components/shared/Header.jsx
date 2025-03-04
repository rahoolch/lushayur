import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/treatments', label: 'Treatments' },
    { path: '/packages', label: 'Packages' },
    { path: '/contact', label: 'Contact' }
  ];
  
  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            {/* <h1 className="text-2xl font-serif text-stone-800">LUSH AYURVEDA</h1> */}
            <img 
            src="/images/logo.png" 
            alt="Lush Ayurveda Logo" 
            className="h-8 md:h-10 lg:h-12" // Adjust height as needed
            />
            <h1 className="text-2x3 font-serif text-stone-700">Lush Ayurveda</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-base font-medium ${
                  isActive(link.path) 
                    ? 'text-amber-700 border-b-2 border-amber-700' 
                    : 'text-stone-600 hover:text-amber-700 transition-colors'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-stone-600 cursor-pointer hover:text-amber-700 transition-colors" />
            <ShoppingBag className="w-5 h-5 text-stone-600 cursor-pointer hover:text-amber-700 transition-colors" />
            <User className="w-5 h-5 text-stone-600 cursor-pointer hover:text-amber-700 transition-colors" />
            <Link 
              to="/contact" 
              className="bg-amber-700 text-white px-6 py-2 rounded hover:bg-amber-800 transition-colors hidden sm:block"
            >
              Book now
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-3 bg-white border-t">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-base ${
                  isActive(link.path) 
                    ? 'text-amber-700 font-medium' 
                    : 'text-stone-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-amber-700 text-white text-center px-6 py-2 rounded hover:bg-amber-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Book now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;