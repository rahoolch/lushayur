import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-serif text-stone-800">LUSH AYURVEDA</Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-stone-600 hover:text-amber-700 transition-colors">Home</Link>
            <Link to="/about" className="text-stone-600 hover:text-amber-700 transition-colors">About</Link>
            <Link to="/services" className="text-stone-600 hover:text-amber-700 transition-colors">Services</Link>
            <Link to="/treatments" className="text-stone-600 hover:text-amber-700 transition-colors">Treatments</Link>
            <Link to="/packages" className="text-stone-600 hover:text-amber-700 transition-colors">Packages</Link>
            <Link to="/contact" className="text-stone-600 hover:text-amber-700 transition-colors">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            {/* Icons here */}
            <Link to="/contact" className="bg-amber-700 text-white px-6 py-2 rounded hover:bg-amber-800 transition-colors">
              Book now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};