import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  
  const [showThankYou, setShowThankYou] = useState(false);
  const [activeTab, setActiveTab] = useState('appointment');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log(formData);
    // Show thank you message
    setShowThankYou(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });
    // Hide thank you message after 5 seconds
    setTimeout(() => {
      setShowThankYou(false);
    }, 5000);
  };
  
  const services = [
    { value: '', label: 'Select a service' },
    { value: 'consultation', label: 'Ayurvedic Consultation' },
    { value: 'panchkarma', label: 'Panchkarma Therapies' },
    { value: 'diet', label: 'Ayurvedic Diet Planning' },
    { value: 'weight', label: 'Weight Reduction Package' },
    { value: 'skin', label: 'Hair & Skin Care Package' },
    { value: 'stress', label: 'Stress Management Program' },
    { value: 'platinum', label: 'Platinum Package' },
    { value: 'other', label: 'Other Services' }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-amber-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're here to help you on your wellness journey. Reach out to book an appointment, ask questions, or learn more about our services.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-stone-50 p-8 rounded-lg shadow-sm h-full">
                <h2 className="text-3xl font-serif text-stone-800 mb-8">Get in Touch</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-amber-100 rounded-full p-3 mr-4 shrink-0">
                      <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-stone-800 mb-1">Visit Us</h3>
                      <p className="text-stone-600">
                        LUSH AYURVEDA PANCHKARMA & HOLISTIC HEALING CENTRE<br />
                        BR-11, SEC-116, NOIDA
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-amber-100 rounded-full p-3 mr-4 shrink-0">
                      <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-stone-800 mb-1">Call Us</h3>
                      <p className="text-stone-600">
                        +918882321081
                      </p>
                      <p className="text-stone-500 text-sm mt-1">
                        Monday to Saturday: 10:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-amber-100 rounded-full p-3 mr-4 shrink-0">
                      <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-stone-800 mb-1">Email Us</h3>
                      <p className="text-stone-600">
                        lushayurveda@gmail.com
                      </p>
                      <p className="text-stone-500 text-sm mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-12">
                  <h3 className="text-lg font-medium text-stone-800 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-amber-100 rounded-full p-3 text-amber-700 hover:bg-amber-200 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-amber-100 rounded-full p-3 text-amber-700 hover:bg-amber-200 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-amber-100 rounded-full p-3 text-amber-700 hover:bg-amber-200 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-1">
                {/* Tab Navigation */}
                <div className="mb-8 border-b">
                  <div className="flex">
                    <button
                      onClick={() => setActiveTab('appointment')}
                      className={`px-6 py-3 font-medium ${
                        activeTab === 'appointment' 
                          ? 'border-b-2 border-amber-700 text-amber-700' 
                          : 'text-stone-500 hover:text-stone-700'
                      } transition-colors`}
                    >
                      Book Appointment
                    </button>
                    <button
                      onClick={() => setActiveTab('callback')}
                      className={`px-6 py-3 font-medium ${
                        activeTab === 'callback' 
                          ? 'border-b-2 border-amber-700 text-amber-700' 
                          : 'text-stone-500 hover:text-stone-700'
                      } transition-colors`}
                    >
                      Request Callback
                    </button>
                  </div>
                </div>
                
                {showThankYou && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded mb-8 flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-0.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <div>
                      <h3 className="font-medium">Thank you for contacting us!</h3>
                      <p>We have received your message and will get back to you shortly.</p>
                    </div>
                  </div>
                )}
                
                {activeTab === 'appointment' && (
                  <div>
                    <h2 className="text-3xl font-serif text-stone-800 mb-6">Book an Appointment</h2>
                    <p className="text-stone-600 mb-8">
                      Fill out the form below to schedule your appointment at Lush Ayurveda. 
                      Our team will confirm your booking within 24 hours.
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-stone-700 mb-1">Full Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                            placeholder="Your full name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-stone-700 mb-1">Email Address *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                            placeholder="Your email address"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-stone-700 mb-1">Phone Number *</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                            placeholder="Your phone number"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="service" className="block text-stone-700 mb-1">Service Interested In *</label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                          >
                            {services.map((service) => (
                              <option key={service.value} value={service.value}>
                                {service.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="preferredDate" className="block text-stone-700 mb-1">Preferred Date</label>
                          <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="preferredTime" className="block text-stone-700 mb-1">Preferred Time</label>
                          <input
                            type="time"
                            id="preferredTime"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-stone-700 mb-1">Additional Information</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                          placeholder="Please share any specific concerns or health conditions we should be aware of"
                        ></textarea>
                      </div>
                      
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="bg-amber-700 text-white px-8 py-3 rounded hover:bg-amber-800 transition-colors"
                        >
                          Book Appointment
                        </button>
                      </div>
                    </form>
                  </div>
                )}
                
                {activeTab === 'callback' && (
                  <div>
                    <h2 className="text-3xl font-serif text-stone-800 mb-6">Request a Callback</h2>
                    <p className="text-stone-600 mb-8">
                      Leave your details and our team will call you back at your preferred time to discuss your 
                      health concerns and answer any questions you may have.
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-stone-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-stone-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                          placeholder="Your phone number"
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="preferredDate" className="block text-stone-700 mb-1">Preferred Date for Callback</label>
                          <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="preferredTime" className="block text-stone-700 mb-1">Preferred Time for Callback</label>
                          <input
                            type="time"
                            id="preferredTime"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-stone-700 mb-1">Reason for Callback</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                          placeholder="Please briefly describe what you'd like to discuss during the callback"
                        ></textarea>
                      </div>
                      
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="bg-amber-700 text-white px-8 py-3 rounded hover:bg-amber-800 transition-colors"
                        >
                          Request Callback
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-stone-800 mb-8 text-center">Visit Our Center</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-amber-700 mb-4">How to Find Us</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-amber-100 rounded-full p-2 mr-3 shrink-0">
                    <svg className="w-4 h-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-stone-600">
                      Our center is conveniently located in Sector 116, Noida. We're easily accessible via public transport and have ample parking space.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 rounded-full p-2 mr-3 shrink-0">
                    <svg className="w-4 h-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-stone-600">
                      Opening Hours:<br />
                      Monday to Saturday: 10:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 rounded-full p-2 mr-3 shrink-0">
                    <svg className="w-4 h-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-stone-600">
                      We recommend scheduling an appointment before visiting to ensure we can provide you with the best possible care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-96 bg-stone-200 rounded-lg overflow-hidden">
              {/* Here you would typically embed a Google Maps iframe */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-stone-500">Map will be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-stone-800 mb-10 text-center">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-amber-700 mb-3">What should I bring to my appointment?</h3>
              <p className="text-stone-600">
                Please bring any relevant medical records, a list of current medications, comfortable clothing for treatments, and your identification. For specific therapies, our staff will provide you with additional preparation guidelines when confirming your appointment.
              </p>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-amber-700 mb-3">How do I prepare for Ayurvedic treatments?</h3>
              <p className="text-stone-600">
                We recommend having a light meal 1-2 hours before your appointment. Avoid heavy, oily foods on the day of treatment. Stay hydrated but avoid consuming large amounts of water immediately before your session. Come with an open mind and in a relaxed state for maximum benefit.
              </p>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-amber-700 mb-3">What payment methods do you accept?</h3>
              <p className="text-stone-600">
                We accept cash, all major credit and debit cards, UPI payments, and bank transfers. Payment is typically collected after your consultation or treatment. For package bookings, we may request an advance payment to secure your appointments.
              </p>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-amber-700 mb-3">What is your cancellation policy?</h3>
              <p className="text-stone-600">
                We request that you provide at least 24 hours notice for cancellations. Late cancellations or no-shows may incur a fee. We understand that emergencies happen and will handle these situations on a case-by-case basis. Please call us directly if you need to reschedule.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;