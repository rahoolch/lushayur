import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Treatments = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedTreatment, setExpandedTreatment] = useState(null);
  
  const treatmentCategories = [
    { id: 'all', name: 'All Treatments' },
    { id: 'pain', name: 'Pain Management' },
    { id: 'mental', name: 'Mental Health' },
    { id: 'digestive', name: 'Digestive Health' },
    { id: 'weight', name: 'Weight Management' },
    { id: 'skin', name: 'Skin & Hair Care' },
    { id: 'others', name: 'Other Conditions' }
  ];
  
  const treatments = [
    {
      id: 1,
      name: 'Joint Pain',
      category: 'pain',
      shortDescription: 'Ayurvedic treatments for arthritis, joint inflammation, and chronic pain.',
      longDescription: 'Our comprehensive approach to joint pain combines traditional Ayurvedic therapies including Janu Basti (localized oil treatment), herbal medicines, and customized diet plans. We address underlying causes like Vata imbalance while providing symptomatic relief. Treatments typically include warm oil massages, medicated steam therapy, and herbal formulations to reduce inflammation and rebuild joint tissues.',
      benefits: ['Reduces inflammation and pain', 'Improves joint mobility', 'Strengthens surrounding muscles', 'Addresses underlying imbalances'],
      recommendedTherapies: ['Janu Basti', 'Pizichilli', 'Kashaya Dhara', 'Specific herbal medicines'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      name: 'Back Pain',
      category: 'pain',
      shortDescription: 'Specialized therapies for acute and chronic back pain including sciatica and disc issues.',
      longDescription: 'Our back pain treatment program addresses various conditions from muscular tension to disc herniation. We combine traditional therapies like Kati Basti (localized oil pooling on the lower back) with modern understanding of spinal mechanics. Our approach works to reduce inflammation, relieve muscle spasm, and correct underlying postural and lifestyle factors contributing to back pain.',
      benefits: ['Relief from acute and chronic pain', 'Improved spinal alignment', 'Enhanced core strength', 'Prevention of recurrence'],
      recommendedTherapies: ['Kati Basti', 'Pinda Sweda', 'Therapeutic Yoga', 'Marma therapy'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      name: 'Cervical Spondylosis',
      category: 'pain',
      shortDescription: 'Treatment for neck pain, stiffness and associated symptoms of cervical spondylosis.',
      longDescription: 'Cervical spondylosis treatment at Lush Ayurveda combines traditional Greeva Basti (localized treatment for the neck) with muscle-relaxing herbal applications and gentle manipulation techniques. We also address work ergonomics, stress levels, and provide specific exercises to strengthen neck muscles and improve posture.',
      benefits: ['Reduced pain and stiffness', 'Improved range of motion', 'Relief from headaches and radiating pain', 'Better posture'],
      recommendedTherapies: ['Greeva Basti', 'Nasya therapy', 'Shirovasti', 'Specialized neck exercises'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      name: 'Rheumatoid Arthritis',
      category: 'pain',
      shortDescription: 'Comprehensive management of autoimmune joint inflammation and associated symptoms.',
      longDescription: 'Our approach to Rheumatoid Arthritis focuses on managing autoimmune responses through specialized herbal formulations, detoxification therapies, and anti-inflammatory diet protocols. We use gentle oil treatments to reduce pain and swelling while addressing the Ama (toxins) and imbalanced immunity through internal medications and lifestyle modifications.',
      benefits: ['Reduced joint inflammation and pain', 'Improved immunity regulation', 'Enhanced energy levels', 'Better quality of life'],
      recommendedTherapies: ['Valuka Sweda', 'Patrapotali Sweda', 'Specialized detoxification', 'Immunomodulatory herbs'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      name: 'Depression and Anxiety',
      category: 'mental',
      shortDescription: 'Natural approaches to managing depression, anxiety, and mood disorders.',
      longDescription: 'Our mental health program combines traditional Ayurvedic brain treatments like Shirodhara (continuous oil flow on forehead) with mind-calming herbs, meditation practices, and lifestyle counseling. We address both neurological imbalances and emotional factors, creating a comprehensive approach to mental wellbeing that works alongside conventional treatments when necessary.',
      benefits: ['Reduced anxiety and stress', 'Improved mood stability', 'Better sleep quality', 'Enhanced mental clarity'],
      recommendedTherapies: ['Shirodhara', 'Takradhara', 'Brahmi Nasya', 'Meditation therapy'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 6,
      name: 'Insomnia',
      category: 'mental',
      shortDescription: 'Ayurvedic solutions for sleep disorders and improving sleep quality.',
      longDescription: 'Our insomnia treatment program addresses the underlying causes of sleep disturbances, whether they\'re physical, mental, or emotional in nature. We use calming head treatments, specific evening routines, dietary adjustments, and herbal formulations to naturally induce restful sleep without creating dependency or side effects common with sleep medications.',
      benefits: ['Improved sleep initiation and maintenance', 'Reduced sleep anxiety', 'Regulated sleep cycle', 'Enhanced daytime energy'],
      recommendedTherapies: ['Shirodhara', 'Shiroabhyanga', 'Padabhyanga', 'Sleep-promoting herbs'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 7,
      name: 'Irritable Bowel Syndrome',
      category: 'digestive',
      shortDescription: 'Management of IBS symptoms including abdominal pain, bloating, and irregular bowel movements.',
      longDescription: 'Our IBS management program focuses on restoring the balance of digestive fire (Agni) and normalizing gut function. We combine specialized herbal formulations, abdominal treatments, dietary protocols based on your constitution, and stress management techniques to address both the physical and psychological aspects of this condition.',
      benefits: ['Reduced abdominal pain and bloating', 'Normalized bowel movements', 'Improved digestion', 'Decreased stress-related flare-ups'],
      recommendedTherapies: ['Udara Marma therapy', 'Specialized herbal medications', 'Customized diet plan', 'Stress management techniques'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 8,
      name: 'Hyperacidity/GERD',
      category: 'digestive',
      shortDescription: 'Treatment for acid reflux, heartburn, and gastroesophageal reflux disease.',
      longDescription: 'Our approach to acid reflux and GERD focuses on balancing Pitta dosha (fire element) in the digestive system while addressing structural issues that contribute to symptoms. We use cooling herbs, dietary modifications, gentle detoxification, and specific therapies to strengthen the lower esophageal sphincter and promote proper digestive function.',
      benefits: ['Reduced heartburn and regurgitation', 'Healed esophageal tissue', 'Improved digestive function', 'Prevention of complications'],
      recommendedTherapies: ['Pitta-pacifying diet', 'Specialized herbal compounds', 'Abdominal therapies', 'Lifestyle modifications'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 9,
      name: 'Constipation',
      category: 'digestive',
      shortDescription: 'Natural solutions for chronic constipation and digestive sluggishness.',
      longDescription: 'Our constipation treatment program addresses the root causes of sluggish digestion and bowel function. We use specialized herbal laxatives, abdominal massage techniques, dietary fiber adjustments, and hydration therapy to restore natural bowel movements without creating dependency. We also address Vata imbalance which commonly underlies this condition.',
      benefits: ['Regular, comfortable bowel movements', 'Improved nutrient absorption', 'Reduced abdominal discomfort', 'Prevention of complications'],
      recommendedTherapies: ['Udara Abhyanga', 'Specialized herbal formulations', 'Fiber-rich diet plan', 'Basti (therapeutic enema)'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 10,
      name: 'Weight Loss',
      category: 'weight',
      shortDescription: 'Holistic weight management programs combining diet, herbs, and therapies.',
      longDescription: 'Our weight management program goes beyond simple calorie counting to address metabolic imbalances, improper digestion, and lifestyle factors contributing to weight gain. We use specialized detoxification procedures, metabolism-enhancing herbs, body sculpting treatments, and sustainable dietary approaches customized to your body type.',
      benefits: ['Sustainable weight loss', 'Improved metabolism', 'Reduced food cravings', 'Enhanced energy and vitality'],
      recommendedTherapies: ['Udwarthanam (herbal powder massage)', 'Langhana therapy', 'Customized diet plan', 'Herbal supplements'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 11,
      name: 'Skin and Hair Care',
      category: 'skin',
      shortDescription: 'Natural treatments for various skin conditions and hair problems.',
      longDescription: 'Our skin and hair treatments utilize Ayurvedic principles to address conditions ranging from acne and psoriasis to hair thinning and premature graying. We use specialized herb-infused oils, facial treatments, scalp therapies, and internal detoxification to improve skin radiance and hair health from within, addressing doshas that affect these tissues.',
      benefits: ['Improved skin texture and complexion', 'Relief from skin conditions', 'Enhanced hair growth and quality', 'Prevention of premature aging'],
      recommendedTherapies: ['Mukhalepam (herbal face packs)', 'Kesharajaneyam (hair treatments)', 'Specialized herbal medications', 'Skin-friendly diet plan'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 12,
      name: 'Immunity',
      category: 'others',
      shortDescription: 'Boosting immune function through Ayurvedic herbs, diet, and lifestyle.',
      longDescription: 'Our immunity enhancement program combines Rasayana (rejuvenation) therapies with immune-modulating herbs, customized diet plans, and lifestyle practices to strengthen natural defense mechanisms. We focus on improving digestion, reducing toxin buildup, and enhancing the production of Ojas (vital immunity) through time-tested Ayurvedic protocols.',
      benefits: ['Reduced frequency of illness', 'Shorter recovery time when sick', 'Improved energy and resilience', 'Enhanced overall vitality'],
      recommendedTherapies: ['Rasayana herbs', 'Specialized dietary protocol', 'Yogic breathing practices', 'Detoxification procedures'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 13,
      name: 'Eye Care',
      category: 'others',
      shortDescription: 'Treatments for eye strain, dryness, and general eye health.',
      longDescription: 'Our eye care program addresses common problems like computer vision syndrome, dry eyes, and age-related vision changes through specialized Netra treatments, herbal eye drops, vision-enhancing herbs, and lifestyle modifications. We provide both therapeutic and preventive care for maintaining optimal eye health in our digital age.',
      benefits: ['Reduced eye strain and fatigue', 'Improved moisture balance', 'Enhanced vision clarity', 'Prevention of age-related changes'],
      recommendedTherapies: ['Netra Tarpana', 'Akshi Sekam', 'Specialized eye exercises', 'Herbal supplements'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 14,
      name: 'Asthma',
      category: 'others',
      shortDescription: 'Management of asthma symptoms and improving respiratory health.',
      longDescription: 'Our asthma management program focuses on reducing Kapha congestion in the respiratory tract while strengthening lung tissue and improving breathing capacity. We combine specialized chest treatments, breathing exercises, herbal formulations, and dietary guidelines to provide comprehensive care that works alongside conventional treatments when necessary.',
      benefits: ['Reduced frequency and severity of attacks', 'Improved breathing capacity', 'Enhanced respiratory immunity', 'Decreased dependency on rescue medications'],
      recommendedTherapies: ['Uro Basti', 'Specialized herbal compounds', 'Pranayama (breathing techniques)', 'Steam inhalation with herbs'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 15,
      name: 'Parkinson\'s disease',
      category: 'others',
      shortDescription: 'Supportive care for managing Parkinson\'s symptoms and improving quality of life.',
      longDescription: 'Our Parkinson\'s support program provides complementary care to help manage symptoms and improve quality of life. We use specialized nervous system treatments, mobility-enhancing therapies, specialized herbal formulations, and targeted exercises to address tremors, rigidity, and balance issues while working alongside conventional medical treatment.',
      benefits: ['Improved movement and coordination', 'Reduced tremors', 'Enhanced balance and stability', 'Better overall quality of life'],
      recommendedTherapies: ['Dhara treatments', 'Pinda Sweda', 'Specialized oil massages', 'Targeted physical exercises'],
      image: '/api/placeholder/400/300'
    }
  ];
  
  const filteredTreatments = selectedCategory === 'all' 
    ? treatments 
    : treatments.filter(treatment => treatment.category === selectedCategory);

  const toggleTreatmentDetails = (treatmentId) => {
    if (expandedTreatment === treatmentId) {
      setExpandedTreatment(null);
    } else {
      setExpandedTreatment(treatmentId);
      // Scroll to the expanded treatment
      setTimeout(() => {
        const element = document.getElementById(`treatment-${treatmentId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div className="bg-amber-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif mb-6">Ayurvedic Treatments</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our comprehensive range of traditional Ayurvedic treatments for various health conditions
          </p>
        </div>
      </div>
      
      {/* Treatments Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif text-stone-800 mb-6">Holistic Healing for Body & Mind</h2>
          <p className="text-lg text-stone-600 max-w-4xl mx-auto">
            At Lush Ayurveda, we offer authentic treatments for a wide range of health conditions using 
            traditional Ayurvedic methods that address the root causes rather than just symptoms. Our 
            approach combines herbal medicines, therapeutic procedures, dietary guidance, and lifestyle 
            modifications tailored to your unique constitution and needs.
          </p>
        </div>
      </section>
      
      {/* Treatments Content */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter Categories */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-2 min-w-max pb-2">
              {treatmentCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setExpandedTreatment(null);
                  }}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-amber-700 text-white'
                      : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
                  } transition-colors`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Treatment Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map((treatment) => (
              <div 
                key={treatment.id} 
                id={`treatment-${treatment.id}`}
                className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
                  expandedTreatment === treatment.id ? 'lg:col-span-3 md:col-span-2' : ''
                }`}
              >
                <div className={expandedTreatment === treatment.id ? 'md:flex' : ''}>
                  <div className={expandedTreatment === treatment.id ? 'md:w-1/3' : ''}>
                    <img 
                      src={treatment.image} 
                      alt={treatment.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className={`p-6 ${expandedTreatment === treatment.id ? 'md:w-2/3' : ''}`}>
                    <h3 className="text-xl font-medium text-amber-700 mb-2">{treatment.name}</h3>
                    
                    {expandedTreatment === treatment.id ? (
                      <div>
                        <p className="text-stone-600 mb-6">{treatment.longDescription}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-medium text-stone-800 mb-2">Benefits:</h4>
                            <ul className="text-stone-600 space-y-1">
                              {treatment.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-amber-700 mr-2">•</span>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-stone-800 mb-2">Recommended Therapies:</h4>
                            <ul className="text-stone-600 space-y-1">
                              {treatment.recommendedTherapies.map((therapy, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-amber-700 mr-2">•</span>
                                  <span>{therapy}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center mt-6">
                          <button
                            onClick={() => toggleTreatmentDetails(treatment.id)}
                            className="text-amber-700 hover:text-amber-800 transition-colors flex items-center"
                          >
                            Show less
                            <svg className="ml-1 w-5 h-5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          
                          <Link 
                            to="/contact" 
                            className="bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-800 transition-colors"
                          >
                            Book a Consultation
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <p className="text-stone-600 mb-4">{treatment.shortDescription}</p>
                        <button
                          onClick={() => toggleTreatmentDetails(treatment.id)}
                          className="text-amber-700 hover:text-amber-800 transition-colors flex items-center"
                        >
                          Learn more
                          <svg className="ml-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredTreatments.length === 0 && (
            <div className="text-center py-12">
              <p className="text-stone-600">No treatments found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Treatment Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-stone-800 mb-12 text-center">Our Treatment Approach</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-stone-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-medium text-amber-700">1</span>
              </div>
              <h3 className="text-lg font-medium text-stone-800 mb-3">Assessment</h3>
              <p className="text-stone-600">
                Comprehensive evaluation using pulse diagnosis (Nadi Pariksha), physical examination, and detailed history to determine your unique constitution and imbalances.
              </p>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-medium text-amber-700">2</span>
              </div>
              <h3 className="text-lg font-medium text-stone-800 mb-3">Customization</h3>
              <p className="text-stone-600">
                Development of a personalized treatment plan combining specific therapies, herbs, dietary recommendations, and lifestyle modifications tailored to your needs.
              </p>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-medium text-amber-700">3</span>
              </div>
              <h3 className="text-lg font-medium text-stone-800 mb-3">Treatment</h3>
              <p className="text-stone-600">
                Implementation of therapeutic procedures, administration of herbal formulations, and guidance on dietary and lifestyle practices to restore balance.
              </p>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-medium text-amber-700">4</span>
              </div>
              <h3 className="text-lg font-medium text-stone-800 mb-3">Follow-up</h3>
              <p className="text-stone-600">
                Regular monitoring of progress, adjustment of treatment protocols as needed, and ongoing support to ensure optimal results and lasting wellness.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-stone-800 mb-12 text-center">Success Stories</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm relative">
              <div className="absolute -top-6 left-8">
                <svg className="w-12 h-12 text-amber-700 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-stone-600 italic mb-6 pt-6">
                "I had been suffering from chronic back pain for over 10 years. After just three weeks of 
                treatment at Lush Ayurveda, I experienced significant relief. The combination of Kati Basti 
                and herbal oils has been life-changing."
              </p>
              <div className="font-medium text-amber-700">Rajesh Khanna</div>
              <div className="text-stone-500">Delhi</div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm relative">
              <div className="absolute -top-6 left-8">
                <svg className="w-12 h-12 text-amber-700 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-stone-600 italic mb-6 pt-6">
                "My PCOS symptoms were getting worse despite conventional treatments. The Ayurvedic approach at 
                Lush Ayurveda, combining diet, herbs, and specific therapies, has helped regulate my cycles and 
                significantly reduced other symptoms."
              </p>
              <div className="font-medium text-amber-700">Sneha Sharma</div>
              <div className="text-stone-500">Gurgaon</div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm relative">
              <div className="absolute -top-6 left-8">
                <svg className="w-12 h-12 text-amber-700 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-stone-600 italic mb-6 pt-6">
                "I've struggled with anxiety and insomnia for years. The stress management program at Lush Ayurveda 
                has given me tools to manage my anxiety naturally. The Shirodhara therapy in particular has done 
                wonders for my sleep quality."
              </p>
              <div className="font-medium text-amber-700">Amit Patel</div>
              <div className="text-stone-500">Noida</div>
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
              <h3 className="text-xl font-medium text-amber-700 mb-3">How long does it take to see results?</h3>
              <p className="text-stone-600">
                The timeframe varies depending on the condition and its severity. Some patients experience improvements after just a few sessions, while chronic conditions may require several weeks of consistent treatment. During your consultation, our physicians will provide a more specific timeline based on your individual case.
              </p>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-amber-700 mb-3">Can Ayurvedic treatments be used alongside conventional medicine?</h3>
              <p className="text-stone-600">
                Yes, in most cases Ayurvedic treatments can complement conventional medical care. Our physicians are experienced in integrative approaches and will work with your existing treatment plan. Always inform us about any medications you're taking so we can ensure there are no contraindications.
              </p>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-amber-700 mb-3">Are there any side effects from Ayurvedic treatments?</h3>
              <p className="text-stone-600">
                When administered properly by qualified practitioners, Ayurvedic treatments have minimal side effects. Some patients may experience mild detoxification symptoms in the beginning, which typically subside quickly. Our physicians carefully assess your constitution and health status to ensure safe and appropriate treatments.
              </p>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-amber-700 mb-3">How many sessions will I need?</h3>
              <p className="text-stone-600">
                The number of sessions depends on your specific condition, its chronicity, and your body's response to treatment. Some acute conditions may improve in 3-5 sessions, while chronic conditions typically require longer treatment courses. We'll provide a treatment plan with estimated duration during your initial consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-amber-700 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-6">Begin Your Healing Journey Today</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us to schedule a consultation with our expert physicians and discover 
            the most suitable treatment approach for your specific health concerns.
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

export default Treatments;