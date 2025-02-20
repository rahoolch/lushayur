import React, { useState } from 'react';
import { Calendar, Search, ShoppingBag, User } from 'lucide-react';

const LAWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const services = [
    {
      title: "Ayurvedic Consultation",
      description: "Personalized wellness plans based on your unique constitution",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "Therapeutic Treatments",
      description: "Traditional bodywork and healing therapies",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "Wellness Programs",
      description: "Comprehensive programs for sustained wellbeing",
      icon: <Calendar className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-serif text-stone-800"> Lush Ayurveda </h1>
              <div className="hidden md:flex space-x-8">
                {['services', 'locations', 'shop', 'about'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`text-stone-600 hover:text-stone-900 transition-colors ${
                      activeSection === section ? 'text-amber-700' : ''
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-stone-600 cursor-pointer hover:text-stone-900 transition-colors" />
              <ShoppingBag className="w-5 h-5 text-stone-600 cursor-pointer hover:text-stone-900 transition-colors" />
              <User className="w-5 h-5 text-stone-600 cursor-pointer hover:text-stone-900 transition-colors" />
              <button 
                onClick={() => scrollToSection('booking')}
                className="bg-amber-700 text-white px-6 py-2 rounded hover:bg-amber-800 transition-colors"
              >
                Book now
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/1080"
            alt="Ayurvedic treatment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-6xl font-serif mb-6">
              Ancient Wisdom for Modern Wellness
            </h1>
            <p className="text-xl mb-8">
              Experience traditional Ayurvedic treatments tailored to your unique constitution
            </p>
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-amber-700 text-white px-8 py-3 rounded-lg text-lg hover:bg-amber-800 transition-colors"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </div>

      <section id="services" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-stone-800 mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-amber-700 mb-4">{service.icon}</div>
                <h3 className="text-xl font-serif text-stone-800 mb-4">{service.title}</h3>
                <p className="text-stone-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-4xl font-serif text-stone-800 mb-8 text-center">
              Book Your Consultation
            </h2>
            <form className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-stone-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-stone-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border border-stone-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                />
                <select className="w-full px-4 py-2 border border-stone-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-700">
                  <option value="">Select Service</option>
                  <option value="consultation">Ayurvedic Consultation</option>
                  <option value="treatment">Therapeutic Treatment</option>
                  <option value="program">Wellness Program</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-700 text-white py-3 rounded hover:bg-amber-800 transition-colors"
              >
                Schedule Appointment
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Lush Ayurveda</h3>
            <p className="text-stone-400">Ancient wisdom for modern wellness</p>
          </div>
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-stone-400">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection('locations')} className="hover:text-white transition-colors">Locations</button></li>
              <li><button onClick={() => scrollToSection('shop')} className="hover:text-white transition-colors">Shop</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-stone-400">
              <li>Lush Ayurveda Punchkarma & Holistic Healing Centre</li>
              <li>BR-11, Sec-116, Noida, UP</li>
              <li>lushayurveda@gmail.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg mb-4">Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-stone-800 rounded-l focus:outline-none focus:ring-2 focus:ring-amber-700"
              />
              <button className="bg-amber-700 px-4 rounded-r hover:bg-amber-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LAWebsite;