import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeTab, setActiveTab] = useState('panchkarma');
  
  const panchkarmaServices = [
    {
      name: 'Abhyangam',
      description: 'Full Body Massage with Herbal Oils',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'Diet Consultation',
      description: 'On The Basis Of Nadi Pariksha',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'Deepan',
      description: 'With Medication',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'Swedana',
      description: 'Full Body Steam Bath',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'Udavartan',
      description: 'Full Body Massage with Medicated Powder',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'Netra Tarpan',
      description: 'Eyes Relaxation/Medication',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'Vamana',
      description: 'Detoxification through Emesis',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'Virechana',
      description: 'Cleaning Through Motion',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'Nasayam',
      description: 'Drug Administration through Nose',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'Shirodhara',
      description: 'Stream Of Warm Oil Poured On Forehead With Massage',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'Janubasti, Katibasti, Greeva Basti',
      description: 'Curative Oil Retained On Knee/Back/Neck',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'Leech Therapy',
      description: 'Therapy through Leeches',
      image: '/api/placeholder/400/300'
    }
  ];
  
  const dietPrograms = [
    {
      name: 'WEIGHT LOSS',
      description: 'Customized diet plans to help you lose weight naturally and sustainably',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'PCOS MANAGEMENT',
      description: 'Specialized nutrition for managing PCOS symptoms and hormonal balance',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'HAIR AND SKIN HEALTH',
      description: 'Nutrition programs to improve hair and skin from within',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'CHOLESTEROL MANAGEMENT',
      description: 'Diet plans to help regulate cholesterol levels naturally',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'PRE WEDDING DIETS',
      description: 'Special programs to look and feel your best for your special day',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'GUT HEALING DIET',
      description: 'Focused nutrition to repair and optimize digestive health',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'STRESS MANAGEMENT',
      description: 'Dietary approaches to reduce stress and improve mental wellbeing',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'PREGNANCY DIETS',
      description: 'Nutritional support for a healthy pregnancy and delivery',
      image: '/api/placeholder/400/300'
    }
  ];
  
  const consultations = [
    {
      name: 'Video Consultation',
      description: 'Consult with our Ayurvedic doctors from the comfort of your home. Comprehensive assessment and personalized treatment planning.',
      price: 'Rs 600',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'Telephonic Consultation',
      description: 'Quick and convenient phone consultation for follow-ups and simple health concerns.',
      price: 'Rs 500',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'In-Person Consultation',
      description: 'Visit our clinic for a detailed assessment including Nadi Pariksha (pulse diagnosis) and personalized treatment planning.',
      price: 'Rs 800',
      image: '/api/placeholder/400/300'
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-amber-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our comprehensive range of authentic Ayurvedic treatments and wellness services
          </p>
        </div>
      </div>
      
      {/* Services Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 flex justify-center border-b">
            <button
              onClick={() => setActiveTab('panchkarma')}
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === 'panchkarma' 
                  ? 'text-amber-700 border-b-2 border-amber-700' 
                  : 'text-stone-600 hover:text-amber-700'
              }`}
            >
              Panchkarma
            </button>
            <button
              onClick={() => setActiveTab('diet')}
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === 'diet' 
                  ? 'text-amber-700 border-b-2 border-amber-700' 
                  : 'text-stone-600 hover:text-amber-700'
              }`}
            >
              Ayurvedic Diet
            </button>
            <button
              onClick={() => setActiveTab('consultation')}
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === 'consultation' 
                  ? 'text-amber-700 border-b-2 border-amber-700' 
                  : 'text-stone-600 hover:text-amber-700'
              }`}
            >
              Consultation
            </button>
          </div>
          
          <div className="min-h-[600px]">
            {activeTab === 'panchkarma' && (
              <div>
                <div className="mb-10 text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl font-serif text-stone-800 mb-4">Panchkarma Therapies</h2>
                  <p className="text-stone-600">
                    Panchkarma is the cornerstone of Ayurvedic detoxification and rejuvenation 
                    therapy. These traditional treatments help remove toxins, balance the doshas, 
                    and restore the body's natural healing abilities.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {panchkarmaServices.map((service, index) => (
                    <div key={index} className="bg-stone-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-medium text-amber-700 mb-2">{service.name}</h3>
                        <p className="text-stone-600 mb-4">{service.description}</p>
                        <Link 
                          to="/contact" 
                          className="text-amber-700 font-medium hover:text-amber-800 transition-colors"
                        >
                          Book this treatment →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'diet' && (
              <div>
                <div className="mb-10 text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl font-serif text-stone-800 mb-4">Ayurvedic Diet Programs</h2>
                  <p className="text-stone-600">
                    Our diet programs are customized based on your body type, blood group, and specific health 
                    needs. We focus on the overall development of Dhatus (body tissues) and balancing 
                    of Doshas through proper nutrition.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {dietPrograms.map((program, index) => (
                    <div key={index} className="bg-stone-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                      <img 
                        src={program.image} 
                        alt={program.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-medium text-amber-700 mb-2">{program.name}</h3>
                        <p className="text-stone-600 mb-4">{program.description}</p>
                        <Link 
                          to="/contact" 
                          className="text-amber-700 font-medium hover:text-amber-800 transition-colors"
                        >
                          Enquire about this program →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'consultation' && (
              <div>
                <div className="mb-10 text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl font-serif text-stone-800 mb-4">Consultation Services</h2>
                  <p className="text-stone-600">
                    Our experienced Ayurvedic physicians provide personalized consultations to understand 
                    your unique constitution and design appropriate treatment plans for your specific health needs.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {consultations.map((consultation, index) => (
                    <div key={index} className="bg-stone-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                      <img 
                        src={consultation.image} 
                        alt={consultation.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-medium text-amber-700 mb-2">{consultation.name}</h3>
                        <p className="text-stone-600 mb-4">{consultation.description}</p>
                        <p className="text-xl font-medium text-stone-800 mb-4">{consultation.price}</p>
                        <Link 
                          to="/contact" 
                          className="bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-800 transition-colors inline-block"
                        >
                          Book Consultation
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-stone-800 mb-12 text-center">Our Treatment Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-6">1</div>
              <h3 className="text-xl font-medium text-stone-800 mb-3">Initial Consultation</h3>
              <p className="text-stone-600">
                Assessment of your health concerns, medical history, and dosha determination through pulse diagnosis.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-6">2</div>
              <h3 className="text-xl font-medium text-stone-800 mb-3">Personalized Planning</h3>
              <p className="text-stone-600">
                Creating a customized treatment plan including therapies, diet, and lifestyle recommendations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-6">3</div>
              <h3 className="text-xl font-medium text-stone-800 mb-3">Treatment & Therapy</h3>
              <p className="text-stone-600">
                Implementation of recommended Ayurvedic therapies, treatments, and dietary adjustments.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-6">4</div>
              <h3 className="text-xl font-medium text-stone-800 mb-3">Follow-up & Maintenance</h3>
              <p className="text-stone-600">
                Regular follow-ups to track progress and make necessary adjustments to your treatment plan.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-stone-800 mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-amber-700 mb-3">What is Panchkarma?</h3>
              <p className="text-stone-600">
                Panchkarma is a set of five detoxification procedures that eliminate toxins from the body and balance the 
                doshas. It includes Vamana (therapeutic emesis), Virechana (purgation), Basti (medicated enema), 
                Nasya (nasal administration), and Raktamokshana (bloodletting).
              </p>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-amber-700 mb-3">How long does a typical treatment course last?</h3>
              <p className="text-stone-600">
                The duration varies depending on the condition and treatment plan. Some therapies may show results after 
                a single session, while chronic conditions might require a treatment course of 7-21 days or longer.
              </p>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-amber-700 mb-3">Are the treatments safe?</h3>
              <p className="text-stone-600">
                Yes, all our treatments are performed by qualified Ayurvedic physicians and therapists following 
                traditional protocols. We conduct a thorough assessment before recommending any therapy to ensure 
                it's appropriate for your condition.
              </p>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-amber-700 mb-3">What should I eat before and after treatments?</h3>
              <p className="text-stone-600">
                Our doctors will provide specific dietary guidelines based on your treatment. Generally, light, 
                easily digestible foods are recommended before and after treatments to support the detoxification 
                and healing process.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-amber-700 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-6">Experience the Healing Power of Ayurveda</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Book a consultation with our expert physicians and begin your journey toward holistic wellness.
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

export default Services;