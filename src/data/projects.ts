// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Thời Trang 👗',
    description: 'Website thương mại điện tử bán quần áo thời trang với tích hợp thanh toán Stripe và quản lý kho hàng real-time.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind'],
    link: '#',
    category: 'Web App'
  },
  {
    id: 2,
    title: 'App Quản Lý Công Việc 📝',
    description: 'Ứng dụng quản lý task theo nhóm với tính năng real-time collaboration, drag-and-drop và thông báo.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    link: '#',
    category: 'Web App'
  },
  {
    id: 3,
    title: 'Portfolio Website ✨',
    description: 'Portfolio cá nhân với animations đẹp mắt, responsive design và performance tối ưu.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    tags: ['Next.js', 'GSAP', 'Chakra UI', 'TypeScript'],
    link: '#',
    category: 'Portfolio'
  },
  {
    id: 4,
    title: 'Food Delivery App 🍕',
    description: 'App đặt đồ ăn online với tích hợp map, tracking đơn hàng real-time và thanh toán điện tử.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
    tags: ['React Native', 'Firebase', 'Google Maps', 'Stripe'],
    link: '#',
    category: 'Mobile App'
  },
  {
    id: 5,
    title: 'Social Media Dashboard 📊',
    description: 'Dashboard quản lý social media với analytics chi tiết, schedule posts và performance metrics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'Chart.js', 'Express', 'Redis'],
    link: '#',
    category: 'Dashboard'
  },
  {
    id: 6,
    title: 'Learning Platform 📚',
    description: 'Nền tảng học online với video lessons, quiz, progress tracking và certificate.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Prisma', 'AWS', 'Stripe'],
    link: '#',
    category: 'Web App'
  },
];