import { Course, BlogPost, Service, Testimonial, SiteSettings } from './types';

export const INITIAL_SETTINGS: SiteSettings = {
  name: "Unnyati Shiksalayaa",
  tagline: "Empowering Minds with Digital Excellence",
  email: "info@unnyati.edu",
  phone: "+91 9051977715",
  address: "2nd Floor, Tech Plaza, Main Road, City Center",
  facebookUrl: "https://facebook.com",
  instagramUrl: "https://instagram.com",
  youtubeUrl: "https://youtube.com",
};

export const INITIAL_COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Advanced Diploma in Computer Application (ADCA)',
    description: 'A comprehensive course covering MS Office, Tally, DTP, and Internet basics suitable for job seekers.',
    duration: '12 Months',
    level: 'Beginner',
    image: 'https://picsum.photos/800/600?random=1',
    topics: ['MS Office', 'Tally Prime', 'Photoshop', 'HTML/CSS']
  },
  {
    id: 'c2',
    title: 'Full Stack Web Development',
    description: 'Master frontend and backend technologies including React, Node.js, and Databases.',
    duration: '6 Months',
    level: 'Advanced',
    image: 'https://picsum.photos/800/600?random=2',
    topics: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    id: 'c3',
    title: 'CCC & O-Level',
    description: 'Government recognized certification courses for government job aspirants.',
    duration: '3 Months',
    level: 'Intermediate',
    image: 'https://picsum.photos/800/600?random=3',
    topics: ['Computer Fundamentals', 'LibreOffice', 'Networking']
  }
];

export const INITIAL_BLOGS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Future of AI in Education',
    excerpt: 'How Artificial Intelligence is transforming the way we learn and teach computer science.',
    content: 'Artificial Intelligence is revolutionizing education...',
    author: 'Admin',
    date: '2023-10-15',
    category: 'Technology',
    image: 'https://picsum.photos/800/400?random=4'
  },
  {
    id: 'b2',
    title: 'Top 5 Skills to Learn in 2024',
    excerpt: 'Stay ahead of the curve by mastering these essential IT skills this year.',
    content: 'In the rapidly evolving tech landscape...',
    author: 'Faculty',
    date: '2023-11-02',
    category: 'Career Guidance',
    image: 'https://picsum.photos/800/400?random=5'
  }
];

export const INITIAL_SERVICES: Service[] = [
  { id: 's1', title: 'Classroom Training', description: 'Interactive offline classes with hands-on practicals.', iconName: 'Users' },
  { id: 's2', title: 'Online Certification', description: 'Learn from anywhere with our verified online courses.', iconName: 'Globe' },
  { id: 's3', title: 'Exam Preparation', description: 'Special batches for government technical exams.', iconName: 'BookOpen' },
  { id: 's4', title: 'Placement Assistance', description: 'Resume building and interview preparation support.', iconName: 'Briefcase' }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  { id: 't1', name: 'Rahul Sharma', role: 'Software Engineer', text: 'The faculty at Unnyati is exceptional. The practical approach helped me land my first job.', avatar: 'https://picsum.photos/100/100?random=10' },
  { id: 't2', name: 'Priya Verma', role: 'Accountant', text: 'I learned Tally here and it gave me the confidence to start my career in accounting.', avatar: 'https://picsum.photos/100/100?random=11' }
];