import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Packages = () => {
  const [activePackage, setActivePackage] = useState(null);
  
  const treatmentPackages = [
    {
      id: 'weight-reduction',
      title: 'Weight Reduction Package',
      shortDescription: 'A comprehensive program to help reduce weight naturally through Ayurvedic therapies and diet.',
      image: '/api/placeholder/600/400',
      description: 'Includes combination of therapies which last for about two-three hours every day depending upon the body condition of the guest.',
      therapies: [
        'Udwarthanam (Medicated herbal powder massages)',
        'Abhyanga (Herbal Massage)',
        'Medicated steam bath',
        'Vasti',
        'Vamanam',
        'Herbal juices and teas',
        'Special Ayurvedic diet'
      ],
      benefits: [
        'Helps to remove excess fat accumulated in the body',
        'Enhances proper digestion',
        'Improves metabolic activities of the body',
        'Rejuvenates body, mind and soul',
        'Tones up the skin',
        'Replenishes the reservoir of mental vitality and health',
        'Strengthens all systems of body so as to achieve sound health and longevity',
        'Prevention of disease, and for promoting good health'
      ],
      includes: [
        'Consultation with Ayurveda Doctor and daily follow up consultation',
        'Advice on Diet & Lifestyle Management',
        'Ayurveda Therapies – Customized for each client.'
      ]
    },
    {
      id: 'hair-skin-care',
      title: 'Hair & Skin Care Package',
      shortDescription: 'Specialized treatments to improve skin texture, complexion, and hair health naturally.',
      image: '/api/placeholder/600/400',
      description: 'Includes combination of therapies which last for about two-three hours every day depending upon the body condition of the guest.',
      therapies: [
        'Herbal Ayurvedic face pack',
        'Face massage',
        'Special head massage',
        'Abhyanga (Medicated herbal oil massages)',
        'Pizhichil',
        'Njavarakizhi',
        'Udwarthanam',
        'Ksheera dhara',
        'Steam bath',
        'Internal Herbal Medicines',
        'Fresh Handmade & Chemical free personalized hair & skincare products'
      ],
      benefits: [
        'Improves skin texture, complexion and beautifies body',
        'Enhances blood circulation',
        'Removes extra fat and tones the body',
        'Restores balance in the body, mind and consciousness',
        'Improves metabolic activities of the body',
        'Rejuvenates body, mind and soul',
        'Replenishes the reservoir of mental vitality and health'
      ],
      includes: [
        'Consultation with Ayurveda Doctor and daily follow up consultation',
        'Advice on Diet & Lifestyle Management',
        'Ayurveda Therapies – Customized for each client.',
        'Beauty Therapie'
      ]
    },
    {
      id: 'platinum',
      title: 'Platinum Package - 5 days Rejuvenation',
      shortDescription: 'A premium 5-day program designed for complete rejuvenation and relaxation.',
      image: '/api/placeholder/600/400',
      description: 'A luxurious 5-day program that offers a comprehensive set of Ayurvedic treatments to promote deep relaxation, detoxification, and rejuvenation.',
      therapies: [
        'Day 1 - Shirodhara (3rd eye therapy), Abhyanga (Ayurvedic whole body massage) and herbal steam bath',
        'Day 2 - Abhyanga, herbal steam bath & Nasya therapy',
        'Day 3 - Udvartana(exfoliating herbal powder massage), Abhyanga, herbal steam bath',
        'Day 4 - Kati basti(Nourishes and Strengthens the low back area), Head and Feet Massage, Shirodhara',
        'Day 5 - Head and Feet Massage, Shirodhara, Netra Tarpana (Eye treatment)'
      ],
      benefits: [
        'Deep relaxation and stress reduction',
        'Detoxification of body and mind',
        'Improved circulation and energy flow',
        'Enhanced mental clarity and focus',
        'Rejuvenation of tissues and cells',
        'Balanced nervous system',
        'Better sleep quality'
      ],
      includes: [
        'Consultation with Ayurveda Doctor',
        'Advice on diet and lifestyle management',
        'Daily Ayurvedic therapies as per schedule',
        'Herbal supplements as needed',
        'Follow-up consultation after completion'
      ]
    },
    {
      id: 'stress-management',
      title: 'Stress Management/ Digital Detox Program',
      shortDescription: 'Specialized treatments to reduce stress, anxiety and promote mental wellbeing.',
      image: '/api/placeholder/600/400',
      description: 'Includes combination of therapies which last for about two-three hours every day depending upon the body condition of the guest.',
      therapies: [
        'Abhyanga (Medicated herbal oil massages)',
        'Nasyam',
        'Netra Tarpan',
        'Sneha Vasti',
        'Dhara Pizhichil',
        'Karnapooranam',
        'Steam bath',
        'Internal Herbal Medicines'
      ],
      benefits: [
        'Relieves stress and eye strain',
        'Controls anxiety, depression and other psychosomatic disorders',
        'Calms the mind and correct hypertension',
        'Improves the systemic circulation associated with induction of sleep',
        'Helps to develop positive attitude towards life',
        'Improves metabolic activities of the body',
        'Rejuvenates body, mind and soul',
        'Tones up the skin',
        'Nourishes hair',
        'Replenishes the reservoir of mental vitality and health'
      ],
      includes: [
        'Consultation with Ayurveda Doctor and daily follow up consultation',
        'Advice on Diet & Lifestyle Management',
        'Ayurveda Therapies – Customized for each client.',
        'Yoga (once a day - Yoga Asanas, Breathing, Meditation and Relaxation)',
        'Mental Health Counseling by experts'
      ]
    }
  ];

  const togglePackageDetails = (packageId) => {
    if (activePackage === packageId) {
      setActivePackage(null);
    } else {
      setActivePackage(packageId);
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div className="bg-amber-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif mb-6">Our Treatment Packages</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our comprehensive treatment packages designed to address specific health concerns and promote holistic wellbeing
          </p>
        </div>
      </div>
      
      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif text-stone-800 mb-6">Experience Authentic Ayurvedic Care</h2>
          <p className="text-lg text-stone-600 max-w-4xl mx-auto">
            Our carefully designed treatment packages combine traditional Ayurvedic therapies, 
            personalized diet plans, and lifestyle recommendations to address specific health 
            concerns and promote overall wellbeing. Each package is customized to suit your unique 
            constitution and needs.
          </p>
        </div>
      </section>
      
      {/* Packages Section */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-12">
            {treatmentPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-2xl font-serif text-amber-700 mb-3">{pkg.title}</h3>
                    <p className="text-stone-600 mb-6">{pkg.shortDescription}</p>
                    
                    <button
                      onClick={() => togglePackageDetails(pkg.id)}
                      className="text-amber-700 font-medium flex items-center hover:text-amber-800 transition-colors"
                    >
                      {activePackage === pkg.id ? 'Hide details' : 'View package details'} 
                      <svg className={`ml-2 w-5 h-5 transition-transform ${activePackage === pkg.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    
                    {activePackage === pkg.id && (
                      <div className="mt-6 border-t pt-6 transition-all">
                        <p className="text-stone-700 mb-6">{pkg.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-medium text-stone-800 mb-3">Therapies Include:</h4>
                            <ul className="text-stone-700 space-y-2">
                              {pkg.therapies.map((therapy, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="mr-2 text-amber-700">•</span>
                                  <span>{therapy}</span>
                                </li>
                              ))}
                            </ul>
                            
                            {pkg.includes.length > 0 && (
                              <div className="mt-8">
                                <h4 className="text-lg font-medium text-stone-800 mb-3">Package Includes:</h4>
                                <ul className="text-stone-700 space-y-2">
                                  {pkg.includes.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                      <span className="mr-2 text-amber-700">•</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                          
                          {pkg.benefits.length > 0 && (
                            <div>
                              <h4 className="text-lg font-medium text-stone-800 mb-3">Benefits:</h4>
                              <ul className="text-stone-700 space-y-2">
                                {pkg.benefits.map((benefit, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="mr-2 text-amber-700">•</span>
                                    <span>{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        
                        <div className="mt-8">
                          <Link 
                            to="/contact" 
                            className="bg-amber-700 text-white px-6 py-2 rounded hover:bg-amber-800 transition-colors inline-block"
                          >
                            Book this Package
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Customization Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-stone-800 mb-6">Customized Treatment Plans</h2>
              <p className="text-stone-600 mb-4">
                We understand that every individual is unique, with specific health concerns and 
                constitutional characteristics. While our standard packages address common health 
                issues, we also offer completely customized treatment plans tailored to your specific needs.
              </p>
              <p className="text-stone-600 mb-6">
                After a thorough assessment by our expert Ayurvedic physicians, we can design a 
                personalized treatment program that combines the most suitable therapies, dietary 
                recommendations, and herbal supplements for your condition.
              </p>
              <Link 
                to="/contact" 
                className="bg-amber-700 text-white px-6 py-2 rounded hover:bg-amber-800 transition-colors inline-block"
              >
                Request a Custom Package
              </Link>
            </div>
            <div>
              <img 
                src="/api/placeholder/600/400" 
                alt="Customized Treatment" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-stone-800 mb-12 text-center">What Our Clients Say</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-stone-600 italic mb-6">
                "I completed the 5-day Platinum Package and it was absolutely transformative. The 
                Shirodhara treatments were particularly effective in reducing my stress levels. The 
                staff was professional and attentive throughout the entire process."
              </p>
              <div className="font-medium text-amber-700">Meera Kapoor</div>
              <div className="text-stone-500">New Delhi</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-stone-600 italic mb-6">
                "The Weight Reduction Package helped me lose 7 kg in just one month! The combination 
                of therapies and the personalized diet plan made the process so much easier than any 
                other weight loss method I've tried before."
              </p>
              <div className="font-medium text-amber-700">Vikram Singh</div>
              <div className="text-stone-500">Gurgaon</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-stone-800 mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-amber-700 mb-3">How long do the treatment packages typically last?</h3>
              <p className="text-stone-600">
                The duration varies depending on the package and your specific condition. Most packages 
                run for 7-21 days for optimal results, though we can customize the duration based on your 
                needs and availability.
              </p>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-amber-700 mb-3">Do I need to stay at your center during the treatment?</h3>
              <p className="text-stone-600">
                No, all our packages are designed as outpatient treatments. You'll visit our center for 
                your scheduled therapies and consultations, typically spending 2-3 hours each day.
              </p>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-amber-700 mb-3">Are there any side effects of the treatments?</h3>
              <p className="text-stone-600">
                Ayurvedic treatments are generally safe when performed by qualified practitioners. Some 
                mild detoxification symptoms may occur in the beginning, which is a normal part of the 
                healing process. Our physicians will guide you through any such experiences.
              </p>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-amber-700 mb-3">Can I combine different packages?</h3>
              <p className="text-stone-600">
                Yes, depending on your health needs, we can customize a program that combines elements from 
                different packages. Our physicians will help determine the most effective combination for your condition.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-amber-700 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-6">Begin Your Wellness Journey Today</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us to schedule a consultation and discover which treatment package is right for you.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-amber-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-stone-100 transition-colors inline-block"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Packages;