import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-serif mb-4">Lush Ayurveda</h3>
          <p className="text-stone-400">Ancient wisdom for modern wellness</p>
          <div className="mt-4 text-stone-400">
            <p>LUSH AYURVEDA PANCHKARMA &</p>
            <p>HOLISTIC HEALING CENTRE</p>
            <p>BR-11, SEC-116, NOIDA</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-stone-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/treatments" className="hover:text-white transition-colors">Treatments</Link></li>
            <li><Link to="/packages" className="hover:text-white transition-colors">Packages</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg mb-4">Contact</h4>
          <ul className="space-y-2 text-stone-400">
            <li>Phone: +918882321081</li>
            <li>Email: lushayurveda@gmail.com</li>
          </ul>
          <div className="mt-6">
            <h4 className="text-lg mb-2">Working Hours</h4>
            <p className="text-stone-400">Monday to Saturday: 10:00 AM - 7:00 PM</p>
            <p className="text-stone-400">Sunday: Closed</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg mb-4">Newsletter</h4>
          <p className="text-stone-400 mb-4">Subscribe to receive updates on our services and promotions.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 bg-stone-800 rounded-l text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-700 w-full"
            />
            <button className="bg-amber-700 px-4 py-2 rounded-r hover:bg-amber-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-stone-800">
        <div className="flex flex-col md:flex-row justify-between items-center text-stone-400 text-sm">
          <p>© {new Date().getFullYear()} Lush Ayurveda. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
            <Link to="/faqs" className="hover:text-white transition-colors">FAQs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;