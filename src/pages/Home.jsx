import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "New Delhi",
      text: "Lush Ayurveda's holistic approach to weight management has completely transformed my health. Dr. Mariya's personalized diet plan and the therapeutic massages helped me lose 8kg in just two months!",
    },
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      text: "I've struggled with chronic back pain for years. The Panchkarma treatments I received at Lush Ayurveda provided relief that no other therapy could. Highly recommended for anyone dealing with persistent pain.",
    },
    {
      name: "Ananya Patel",
      location: "Bangalore",
      text: "The stress management program helped me deal with my anxiety and sleep issues. Their combination of herbal remedies, therapeutic treatments, and meditation has given me a new perspective on wellness.",
    }
  ];

  const featuredServices = [
    {
      title: "Panchkarma Therapies",
      description: "Traditional Ayurvedic detoxification and rejuvenation treatments",
      icon: <Calendar className="w-6 h-6" />,
      link: "/services"
    },
    {
      title: "Ayurvedic Diet Plans",
      description: "Personalized nutrition based on your body constitution",
      icon: <Calendar className="w-6 h-6" />,
      link: "/services"
    },
    {
      title: "Wellness Programs",
      description: "Holistic packages for specific health goals",
      icon: <Calendar className="w-6 h-6" />,
      link: "/packages"
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/images/ayurvedic-header.jpg"
            alt="Ayurvedic treatment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              Ancient Wisdom for Modern Wellness
            </h1>
            <p className="text-xl mb-8">
              Experience traditional Ayurvedic treatments tailored to your unique constitution at Lush Ayurveda
            </p>
            <Link 
              to="/contact" 
              className="bg-amber-700 text-white px-8 py-3 rounded-lg text-lg hover:bg-amber-800 transition-colors inline-block"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-800 mb-6">Welcome to Lush Ayurveda</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Your premier destination for holistic wellness through authentic Ayurvedic treatments 
              and personalized care in Noida and Delhi NCR.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-stone-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-amber-700 mb-4">{service.icon}</div>
                <h3 className="text-xl font-medium text-stone-800 mb-3">{service.title}</h3>
                <p className="text-stone-600 mb-6">{service.description}</p>
                <Link to={service.link} className="text-amber-700 font-medium hover:text-amber-800 transition-colors">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Dr. Mariya Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/dr_mariya.jpeg" 
                alt="Dr. Mariya Parvez" 
                className="rounded-lg shadow-md w-full h-auto max-h-102 object-cover object-center"
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif text-stone-800 mb-6">Meet Dr. Mariya Parvez</h2>
              <p className="text-stone-600 mb-4">
                Lush Ayurveda is the brainchild of Dr. Mariya Parvez, an Ayurvedic Doctor who holds extensive 
                experience in the field of Ayurveda and Nutrition. She is also a certified Medical Cannabis Practitioner
                with a known name in the field of Medical cannabis practice in India.
              </p>
              <p className="text-stone-600 mb-6">
                She has treated hundreds of patients with chronic lifestyle and mental disorders, incorporating
                the ancient legacy of Ayurveda in an all-in-one Holistic approach for helping people live a disease-free life.
              </p>
              <Link 
                to="/about" 
                className="bg-amber-700 text-white px-6 py-2 rounded hover:bg-amber-800 transition-colors inline-block"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-stone-800 mb-6 text-center">Our Signature Packages</h2>
          <p className="text-xl text-stone-600 text-center max-w-3xl mx-auto mb-16">
            Discover our specialized treatment packages designed to address specific health concerns
            and promote holistic wellbeing.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-stone-50 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
              <img 
                src="/images/weight_reduction.jpg" 
                alt="Weight Reduction" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-amber-700 mb-3">Weight Reduction Package</h3>
                <p className="text-stone-600 mb-4">
                  A combination of therapies designed to help remove excess fat and enhance metabolic activities.
                </p>
                <Link to="/packages" className="text-amber-700 font-medium hover:text-amber-800 transition-colors">
                  View Package Details →
                </Link>
              </div>
            </div>
            
            <div className="bg-stone-50 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
              <img 
                src="/images/hair_skin.jpg" 
                alt="Hair & Skin Care" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-amber-700 mb-3">Hair & Skin Care Package</h3>
                <p className="text-stone-600 mb-4">
                  Specialized treatments to improve skin texture, enhance blood circulation, and restore natural beauty.
                </p>
                <Link to="/packages" className="text-amber-700 font-medium hover:text-amber-800 transition-colors">
                  View Package Details →
                </Link>
              </div>
            </div>
            
            <div className="bg-stone-50 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
              <img 
                src="/images/stress_management.jpg" 
                alt="Stress Management" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-amber-700 mb-3">Stress Management Program</h3>
                <p className="text-stone-600 mb-4">
                  Digital detox and Ayurvedic therapies to relieve stress, control anxiety, and calm the mind.
                </p>
                <Link to="/packages" className="text-amber-700 font-medium hover:text-amber-800 transition-colors">
                  View Package Details →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/packages" 
              className="bg-amber-700 text-white px-8 py-3 rounded-lg text-lg hover:bg-amber-800 transition-colors inline-block"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-stone-800 mb-16 text-center">What Our Clients Say</h2>
          
          <div className="relative bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-xl text-stone-600 italic mb-6">"{testimonials[activeTestimonial].text}"</p>
              <div className="font-medium text-amber-700">{testimonials[activeTestimonial].name}</div>
              <div className="text-stone-500">{testimonials[activeTestimonial].location}</div>
            </div>
            
            <div className="mt-8 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeTestimonial === index ? 'bg-amber-700' : 'bg-stone-300'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-amber-700 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-6">Begin Your Wellness Journey Today</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Experience the transformative power of authentic Ayurvedic treatments at Lush Ayurveda. 
            Our team of experts is ready to guide you toward optimal health and wellbeing.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-amber-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-stone-100 transition-colors inline-block"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;