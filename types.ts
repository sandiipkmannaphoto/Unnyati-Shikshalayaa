export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
  topics: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface SiteSettings {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  facebookUrl: string;
  instagramUrl: string;
  youtubeUrl: string;
}

export enum PageView {
  HOME,
  ABOUT,
  COURSES,
  SERVICES,
  BLOG,
  CONTACT,
  ADMIN_LOGIN,
  ADMIN_DASHBOARD
}