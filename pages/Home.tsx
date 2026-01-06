import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Book, Users, Award, Star } from 'lucide-react';
import { Course, Testimonial, SiteSettings } from '../types';

interface HomeProps {
  courses: Course[];
  testimonials: Testimonial[];
  settings: SiteSettings;
}

const Home: React.FC<HomeProps> = ({ courses, testimonials, settings }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 to-brand-800 opacity-90 z-0"></div>
        <div 
            className="absolute inset-0 bg-cover bg-center z-[-1]" 
            style={{ backgroundImage: 'url("https://picsum.photos/1920/1080?random=hero")' }}
        ></div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <span className="inline-block py-1 px-3 rounded-full bg-accent-500 text-xs font-bold text-white mb-4 uppercase tracking-wider">
              Admissions Open 2024
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Empowering Minds With <span className="text-accent-500">Digital Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-100 mb-8 max-w-lg">
              {settings.tagline}. Join the best computer training institute to upgrade your skills and boost your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses" className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-lg transition shadow-lg text-center">
                Explore Courses
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-900 text-white font-bold py-3 px-8 rounded-lg transition text-center">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://picsum.photos/600/400?random=tech" 
              alt="Students Learning" 
              className="rounded-lg shadow-2xl border-4 border-white/20 transform rotate-2 hover:rotate-0 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-brand-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <h3 className="text-3xl font-bold text-brand-700">10+</h3>
                    <p className="text-gray-600 font-medium">Years Experience</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-brand-700">5000+</h3>
                    <p className="text-gray-600 font-medium">Students Trained</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-brand-700">50+</h3>
                    <p className="text-gray-600 font-medium">Expert Faculty</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-brand-700">100%</h3>
                    <p className="text-gray-600 font-medium">Certification</p>
                </div>
            </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Popular Courses</h2>
            <div className="w-20 h-1 bg-accent-500 mx-auto rounded"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Choose from a wide range of industry-relevant courses designed to make you job-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 3).map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100 group">
                <div className="relative h-48 overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-700">
                    {course.level}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span className="flex items-center"><Book size={14} className="mr-1" /> {course.topics.length} Modules</span>
                    <span>{course.duration}</span>
                  </div>
                  <Link to="/courses" className="block w-full text-center py-2 border border-brand-500 text-brand-600 font-semibold rounded hover:bg-brand-50 transition">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/courses" className="inline-flex items-center text-brand-700 font-bold hover:text-brand-900 transition">
              View All Courses <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <img 
                        src="https://picsum.photos/800/600?random=lab" 
                        alt="Computer Lab" 
                        className="rounded-2xl shadow-xl"
                    />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Unnyati Shiksalayaa?</h2>
                    <p className="text-gray-600 mb-8">
                        We provide state-of-the-art infrastructure and expert guidance to ensure our students excel in the digital world.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="bg-brand-100 p-3 rounded-lg text-brand-600 mr-4">
                                <Users size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">Expert Faculty</h4>
                                <p className="text-gray-600 text-sm mt-1">Learn from industry experts with years of practical experience.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-brand-100 p-3 rounded-lg text-brand-600 mr-4">
                                <Book size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">Updated Curriculum</h4>
                                <p className="text-gray-600 text-sm mt-1">Course content regularly updated to match industry standards.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-brand-100 p-3 rounded-lg text-brand-600 mr-4">
                                <Award size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">Recognized Certification</h4>
                                <p className="text-gray-600 text-sm mt-1">Get certificates that are valued by employers across the industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {testimonials.map(t => (
                    <div key={t.id} className="bg-brand-800 p-8 rounded-xl relative">
                         <div className="flex items-center mb-4">
                            <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4 border-2 border-accent-500" />
                            <div className="text-left">
                                <h4 className="font-bold text-lg">{t.name}</h4>
                                <p className="text-brand-300 text-sm">{t.role}</p>
                            </div>
                        </div>
                        <p className="text-gray-300 text-left italic">"{t.text}"</p>
                        <Star className="absolute top-6 right-6 text-accent-500 opacity-20" size={40} />
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-accent-500">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Enroll now for the upcoming batch and get early bird discounts. Secure your future with us.
            </p>
            <Link to="/contact" className="bg-white text-accent-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition">
                Book a Free Counselling Session
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;