import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-amber-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif mb-6">About Lush Ayurveda</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our journey of bringing ancient Ayurvedic wisdom to modern wellness
          </p>
        </div>
      </div>
      
      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/api/placeholder/600/800" 
                alt="Dr. Mariya Parvez" 
                className="rounded-lg shadow-md w-full h-auto max-h-96 object-cover object-center"
              />
            </div>
            <div className="space-y-5">
              <h2 className="text-4xl font-serif text-stone-800 mb-4">Our Founder's Vision</h2>
              <p className="text-stone-700">
                Lush Ayurveda was founded by <strong>Dr. Mariya Parvez</strong>, an accomplished Ayurvedic Doctor with extensive 
                experience in Ayurveda and Nutrition. As a certified Medical Cannabis Practitioner renowned in India, 
                she has successfully treated hundreds of patients with chronic lifestyle and mental disorders.
              </p>
              <p className="text-stone-700">
                Dr. Mariya's vision was simple yet profound: to create a space where the ancient science of Ayurveda could 
                be practiced in its authentic form while being accessible to everyone in today's fast-paced world.
              </p>
              <p className="text-stone-700">
                Her journey began with a deep appreciation for Ayurveda's holistic approach to wellness – understanding that 
                true health comes from balance in body, mind, and spirit. This vision has now blossomed into Lush Ayurveda, 
                a center dedicated to preserving and sharing these time-tested healing traditions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Philosophy */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-800 mb-6">Our Philosophy</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              At Lush Ayurveda, we believe that wellness is not merely the absence of disease, but a state of complete 
              physical, mental, and social well-being
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-amber-700">1</span>
              </div>
              <h3 className="text-xl font-medium text-stone-800 mb-4">Personalized Care</h3>
              <p className="text-stone-600">
                We recognize that each person is unique with their own constitution (Prakriti) and imbalances (Vikriti). 
                Our treatments are tailored to your specific needs, not generic solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-amber-700">2</span>
              </div>
              <h3 className="text-xl font-medium text-stone-800 mb-4">Holistic Approach</h3>
              <p className="text-stone-600">
                We address the root causes of health issues rather than just treating symptoms. Our approach integrates 
                physical therapies, nutrition, herbs, and lifestyle recommendations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-amber-700">3</span>
              </div>
              <h3 className="text-xl font-medium text-stone-800 mb-4">Authentic Practice</h3>
              <p className="text-stone-600">
                We remain true to the authentic principles of Ayurveda that have stood the test of time for over 5,000 years, 
                while integrating modern understanding of health and wellness.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-serif text-stone-800 mb-6">Our Mission</h2>
              <p className="text-stone-700 mb-6">
                We exist to find ways to make truly great wellness accessible to everyone. We believe taking care of yourself
                should be easy, affordable, & fun.
              </p>
              <p className="text-stone-700 mb-6">
                Lush Ayurveda is committed to bringing back the goodness of traditional Ayurvedic practices through 
                meticulously crafted products, diet plans, therapies, and wellness sessions led by experts.
              </p>
              <p className="text-stone-700">
                Our approach is to use food as medicine – the cornerstone principle of Ayurveda. We provide holistic 
                therapies complemented by personalized diet plans to help our patients treat chronic ailments in a 
                natural and effective way.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/api/placeholder/600/400" 
                alt="Our Mission" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-stone-800 mb-12 text-center">The Lush Ayurveda Difference</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/api/placeholder/600/400" 
                alt="Holistic Approach" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-amber-700 mb-2">Customized Wellness</h3>
                <p className="text-stone-700">
                  Our efficient team of Ayurvedic & Holistic doctors and expert post-graduate dietitians 
                  create customized treatments based on your unique body type, blood group, and even regional/cultural 
                  background for truly personalized care.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-amber-700 mb-2">Balancing the Doshas</h3>
                <p className="text-stone-700">
                  We focus on the physical and mental constitution (Prakriti) of each individual, working to balance the three 
                  doshas – Vata, Pitta, and Kapha – while supporting the development of Dhatus (body tissues).
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-amber-700 mb-2">Comprehensive Treatment</h3>
                <p className="text-stone-700">
                  Our center specializes in managing conditions ranging from thyroid disorders, obesity, and PCOS to 
                  chronic pain, mental health issues, and digestive problems through holistic, natural methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Wellness Center */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-stone-800 mb-12 text-center">Our Wellness Center</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <img 
              src="/api/placeholder/600/400" 
              alt="Center Image 1" 
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img 
              src="/api/placeholder/600/400" 
              alt="Center Image 2" 
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img 
              src="/api/placeholder/600/400" 
              alt="Center Image 3" 
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
          </div>
          
          <div className="bg-stone-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif text-amber-700 mb-4">Our Sanctuary of Healing</h3>
            <p className="text-stone-700 mb-6">
              Our Panchkarma & Wellness Center in Noida offers comprehensive Ayurvedic services and OPD consultations. 
              We've created a serene space where traditional therapies are performed with the highest standards of 
              authenticity and care.
            </p>
            <p className="text-stone-700 mb-6">
              The center features specialized treatment rooms equipped with traditional tools and materials required for 
              various Panchkarma procedures. Our expertise extends to weight loss management, joint disorders, pain management, 
              and mental disorders, with a special focus on Medical cannabis therapies when appropriate.
            </p>
            <p className="text-stone-700 mb-6">
              Every aspect of our center is designed to promote relaxation, healing, and self-awareness – creating an 
              environment where both body and mind can begin their journey toward optimal wellness.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/contact" 
                className="bg-amber-700 text-white px-6 py-2 rounded hover:bg-amber-800 transition-colors inline-block"
              >
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-stone-800 mb-12 text-center">Meet Our Team of Experts</h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <img 
                src="/api/placeholder/400/400" 
                alt="Dr. Mariya Parvez" 
                className="rounded-full w-48 h-48 object-cover mx-auto mb-6"
              />
              <h3 className="text-xl font-medium text-stone-800 mb-2">Dr. Mariya Parvez</h3>
              <p className="text-amber-700 mb-4">Founder & Chief Ayurvedic Physician</p>
              <p className="text-stone-600">
                Experienced Ayurvedic Doctor specializing in nutrition and Medical Cannabis treatment with a passion for 
                making holistic wellness accessible to all.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <img 
                src="/api/placeholder/400/400" 
                alt="Dr. Aditi Sharma" 
                className="rounded-full w-48 h-48 object-cover mx-auto mb-6"
              />
              <h3 className="text-xl font-medium text-stone-800 mb-2">Dr. Aditi Sharma</h3>
              <p className="text-amber-700 mb-4">Senior Ayurvedic Physician</p>
              <p className="text-stone-600">
                Specialized in Panchkarma and chronic pain management with over 10 years of experience in treating 
                musculoskeletal disorders and autoimmune conditions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <img 
                src="/api/placeholder/400/400" 
                alt="Ms. Priya Verma" 
                className="rounded-full w-48 h-48 object-cover mx-auto mb-6"
              />
              <h3 className="text-xl font-medium text-stone-800 mb-2">Ms. Priya Verma</h3>
              <p className="text-amber-700 mb-4">Chief Dietitian</p>
              <p className="text-stone-600">
                Expert in Ayurvedic nutrition and personalized diet plans with special focus on gut health, hormonal 
                balance, and medical nutrition therapy for chronic conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-amber-700 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-6">Begin Your Journey to Holistic Wellness</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Experience the transformative power of authentic Ayurveda with our team of dedicated experts who are 
            committed to guiding you toward balanced health and vitality.
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

export default About;