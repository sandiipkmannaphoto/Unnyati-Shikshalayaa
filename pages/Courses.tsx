import React from 'react';
import { Course } from '../types';
import { Clock, Book, CheckCircle } from 'lucide-react';

interface CoursesPageProps {
  courses: Course[];
}

const Courses: React.FC<CoursesPageProps> = ({ courses }) => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Skill up with our comprehensive computer courses designed for beginners to advanced professionals.
          </p>
        </div>

        <div className="grid gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition">
              <div className="md:w-1/3 h-64 md:h-auto">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:w-2/3 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                        course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                        course.level === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                        'bg-purple-100 text-purple-700'
                    }`}>
                        {course.level}
                    </span>
                    <span className="flex items-center text-gray-500 text-sm">
                        <Clock size={14} className="mr-1" /> {course.duration}
                    </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-6">{course.description}</p>
                
                <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center"><Book size={16} className="mr-2"/> What you will learn:</h4>
                    <div className="flex flex-wrap gap-2">
                        {course.topics.map((topic, i) => (
                            <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center">
                                <CheckCircle size={12} className="mr-1 text-green-500" /> {topic}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <button className="bg-brand-600 hover:bg-brand-700 text-white font-semibold py-2 px-6 rounded transition">
                        Enroll Now
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;