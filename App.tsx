import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import AdminLayout from './pages/admin/AdminLayout';
import { INITIAL_COURSES, INITIAL_BLOGS, INITIAL_SETTINGS, INITIAL_TESTIMONIALS, INITIAL_SERVICES } from './constants';
import { Course, BlogPost, SiteSettings } from './types';
import { generateContent } from './services/geminiService';
import { Plus, Trash, Edit, RefreshCw } from 'lucide-react';

// --- Placeholder Components for other pages ---
const About = () => <div className="container mx-auto px-4 py-20 text-center"><h1 className="text-4xl font-bold mb-4">About Us</h1><p>Welcome to Unnyati Shiksalayaa. We are a premier institute dedicated to computer literacy.</p></div>;
const Services = () => <div className="container mx-auto px-4 py-20 text-center"><h1 className="text-4xl font-bold mb-4">Our Services</h1><p>We offer Classroom Training, Online Certification, and more.</p></div>;
const Blog = ({ posts }: { posts: BlogPost[] }) => (
    <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Blog</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
                <div key={post.id} className="bg-white shadow rounded-lg overflow-hidden">
                    <img src={post.image} className="w-full h-48 object-cover"/>
                    <div className="p-6">
                        <span className="text-brand-600 text-sm font-bold">{post.category}</span>
                        <h3 className="text-xl font-bold mt-2 mb-2">{post.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                        <span className="text-gray-400 text-xs">{post.date}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
const Contact = ({ settings }: { settings: SiteSettings }) => (
    <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
            <p className="mb-6 text-center text-gray-600">Have questions? Reach out to us directly or visit our center.</p>
            <div className="grid gap-4 mb-8 text-center">
                <p><strong>Address:</strong> {settings.address}</p>
                <p><strong>Email:</strong> {settings.email}</p>
                <p><strong>Phone:</strong> {settings.phone}</p>
            </div>
            <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full border p-3 rounded" />
                <input type="email" placeholder="Your Email" className="w-full border p-3 rounded" />
                <textarea placeholder="Message" rows={4} className="w-full border p-3 rounded"></textarea>
                <button className="w-full bg-brand-600 text-white py-3 rounded font-bold">Send Message</button>
            </form>
        </div>
    </div>
);

// --- Admin Sub-Pages ---

const AdminDashboard = ({ courses, blogs }: { courses: Course[], blogs: BlogPost[] }) => (
    <div>
        <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-brand-500">
                <h3 className="text-gray-500">Total Courses</h3>
                <p className="text-3xl font-bold">{courses.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-accent-500">
                <h3 className="text-gray-500">Total Blog Posts</h3>
                <p className="text-3xl font-bold">{blogs.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
                <h3 className="text-gray-500">Site Status</h3>
                <p className="text-3xl font-bold text-green-600">Live</p>
            </div>
        </div>
    </div>
);

const AdminCourses = ({ courses, setCourses }: { courses: Course[], setCourses: any }) => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [newCourse, setNewCourse] = useState<Partial<Course>>({ title: '', description: '', duration: '', level: 'Beginner', topics: [] });

    const handleAdd = () => {
        if (!newCourse.title) return;
        const course: Course = {
            id: Date.now().toString(),
            title: newCourse.title!,
            description: newCourse.description || '',
            duration: newCourse.duration || '3 Months',
            level: newCourse.level as any || 'Beginner',
            image: `https://picsum.photos/800/600?random=${Date.now()}`,
            topics: newCourse.topics || ['General']
        };
        setCourses([...courses, course]);
        setNewCourse({ title: '', description: '', duration: '', level: 'Beginner', topics: [] });
    };

    const handleAIHelp = async () => {
        if (!newCourse.title) return alert("Enter a title first");
        setIsGenerating(true);
        const desc = await generateContent(`Write a short, engaging description for a computer course titled "${newCourse.title}".`, 'course');
        setNewCourse({ ...newCourse, description: desc });
        setIsGenerating(false);
    };

    const handleDelete = (id: string) => {
        setCourses(courses.filter(c => c.id !== id));
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Manage Courses</h1>
            
            <div className="bg-white p-6 rounded-lg shadow mb-8">
                <h3 className="font-bold mb-4">Add New Course</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                        className="border p-2 rounded" 
                        placeholder="Course Title" 
                        value={newCourse.title} 
                        onChange={e => setNewCourse({...newCourse, title: e.target.value})}
                    />
                    <div className="flex gap-2">
                        <textarea 
                            className="border p-2 rounded flex-1" 
                            placeholder="Description" 
                            value={newCourse.description}
                            onChange={e => setNewCourse({...newCourse, description: e.target.value})}
                        />
                        <button 
                            onClick={handleAIHelp} 
                            disabled={isGenerating}
                            className="bg-purple-100 text-purple-700 p-2 rounded hover:bg-purple-200"
                            title="Generate Description with AI"
                        >
                            {isGenerating ? <RefreshCw className="animate-spin" size={20}/> : <RefreshCw size={20}/>}
                        </button>
                    </div>
                    <input 
                        className="border p-2 rounded" 
                        placeholder="Duration (e.g., 3 Months)" 
                        value={newCourse.duration}
                        onChange={e => setNewCourse({...newCourse, duration: e.target.value})}
                    />
                    <select 
                        className="border p-2 rounded"
                        value={newCourse.level}
                        onChange={e => setNewCourse({...newCourse, level: e.target.value as any})}
                    >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>
                <button onClick={handleAdd} className="mt-4 bg-brand-600 text-white px-4 py-2 rounded flex items-center">
                    <Plus size={16} className="mr-2" /> Add Course
                </button>
            </div>

            <div className="space-y-4">
                {courses.map(course => (
                    <div key={course.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                        <div>
                            <h4 className="font-bold">{course.title}</h4>
                            <p className="text-sm text-gray-500">{course.level} • {course.duration}</p>
                        </div>
                        <button onClick={() => handleDelete(course.id)} className="text-red-500 hover:bg-red-50 p-2 rounded">
                            <Trash size={18} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Main App Component ---

const App: React.FC = () => {
  // Global State (Mocking a Database)
  const [courses, setCourses] = useState<Course[]>(() => {
    const saved = localStorage.getItem('courses');
    return saved ? JSON.parse(saved) : INITIAL_COURSES;
  });

  const [blogs, setBlogs] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('blogs');
    return saved ? JSON.parse(saved) : INITIAL_BLOGS;
  });

  const [settings, setSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('settings');
    return saved ? JSON.parse(saved) : INITIAL_SETTINGS;
  });

  // Sync with LocalStorage
  useEffect(() => localStorage.setItem('courses', JSON.stringify(courses)), [courses]);
  useEffect(() => localStorage.setItem('blogs', JSON.stringify(blogs)), [blogs]);
  useEffect(() => localStorage.setItem('settings', JSON.stringify(settings)), [settings]);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout settings={settings}><Home courses={courses} testimonials={INITIAL_TESTIMONIALS} settings={settings} /></Layout>} />
        <Route path="/about" element={<Layout settings={settings}><About /></Layout>} />
        <Route path="/courses" element={<Layout settings={settings}><Courses courses={courses} /></Layout>} />
        <Route path="/services" element={<Layout settings={settings}><Services /></Layout>} />
        <Route path="/blog" element={<Layout settings={settings}><Blog posts={blogs} /></Layout>} />
        <Route path="/contact" element={<Layout settings={settings}><Contact settings={settings} /></Layout>} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboard courses={courses} blogs={blogs} /></AdminLayout>} />
        <Route path="/admin/courses" element={<AdminLayout><AdminCourses courses={courses} setCourses={setCourses} /></AdminLayout>} />
        <Route path="/admin/blog" element={<AdminLayout><div className="p-4">Blog Management (Similar to Courses)</div></AdminLayout>} />
        <Route path="/admin/settings" element={<AdminLayout><div className="p-4">Settings Form (Update Site Info)</div></AdminLayout>} />
      </Routes>
    </Router>
  );
};

export default App;