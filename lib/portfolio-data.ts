export type Project = {
  id: string
  name: string
  type: string
  year: string
  tags: string
  description: string
  tone: 'blue' | 'paper' | 'grid' | 'mono' | 'emerald' | 'serif'
  link: string
  websiteLink: string
  image: string
}

export type Certification = {
  name: string
  issuer: string
  year: string
  link: string
}

// Add or edit your projects here. For Google Drive images, paste the file URL.
export const projects: Project[] = [
  {
    id: '01',
    name: 'Neuracap',
    type: 'An AI Integrated Financial Research Platform.',
    year: '2025 - 2026',
    tags: 'Next.js · Django REST Framework · MySql · AWS · Aurora RDS · Docker',
    description: 'During my employment as a Machine Learning Engineer with Jinnah Tech (This product is under the ownership of Jinnah Tech), I have worked on this project. I have build RAG pipelines, AI Assistants, Scraping + AI Research Automatic Pipelines, MySql procedures and Database Management etc.',
    tone: 'emerald',
    link: 'https://dev.chat.neuracap.ai/login',
    websiteLink: 'https://dev.chat.neuracap.ai/login',
    image: 'https://drive.google.com/file/d/1yx8nisE53_MsRpC4fmnxrcoC4R2T72x3/view?usp=sharing',
  },
  {
    id: '02',
    name: 'Rahat Pharmacy ERP',
    type: 'Pharmacy chain management platform',
    year: '2026',
    tags: 'Next.js · Django REST Framework · PostgreSQL · Supabase',
    description: 'A full-stack multi-branch pharmacy ERP with role-based dashboards for owners, cashiers, pharmacists and accountants — covering POS, inventory with expiry/FEFO tracking, suppliers, finance, and real-time analytics powered by Postgres stored procedures.',
    tone: 'emerald',
    link: 'https://github.com/Sahibzada88/Pharmacy-erp-backend',
    websiteLink: 'https://pharmacy-erp-frontend-ten.vercel.app/',
    image: 'https://drive.google.com/file/d/1gWQyBM9sPy6gMwtvShjXUNBpyMncAPep/view?usp=sharing',
  },
  {
    id: '03',
    name: 'Salon Flow',
    type: 'Salons Business management',
    year: '2026',
    tags: 'Python · Next.js · Supabase ·  FastApi',
    description: 'A modern salon management SaaS for managing appointments, customers, staff, services, memberships, inventory, cash billing, and business reports in one streamlined platform.',
    tone: 'paper',
    link: 'https://github.com/Sahibzada88/SalonFlow',
    websiteLink: 'https://salon-flow-frontend.vercel.app/',
    image: 'https://drive.google.com/file/d/1NlM-2s45z4--tO0v_L50TUfc4SIq7-iw/view?usp=sharing',
  },
  {
    id: '04',
    name: 'Remote Laboratory Management System',
    type: 'Online Remote Deleivery of samples and test results.',
    year: '2025',
    tags: 'Flutter · Dart · Firebase · Android · Cross-Platform',
    description: 'A cross-platform fully functional software for online management system for laboratories.',
    tone: 'grid',
    link: 'https://github.com/Sahibzada88/RSLS',
    websiteLink: 'https://remotelab.netlify.app/',
    image: 'https://drive.google.com/file/d/1GhFcnQasRJEQwJuxmCvoo8O_aHEhabGP/view?usp=sharing',
  },
  {
    id: '05',
    name: 'Cardiologist Portfolio Website',
    type: 'Healthcare portfolio and appointment booking',
    year: '2026',
    tags: 'Next.js · TypeScript · Neon · Better Auth · Three.js',
    description: 'A high quality and premium cardiology website featuring patient appointment booking, manual call-confirmation workflows, an admin dashboard, heart-health articles, and an interactive heart explorer.',
    tone: 'serif',
    link: 'https://github.com/Sahibzada88/cardiologist-portfolio-website',
    websiteLink: 'https://cardiologist-portfolio-website.vercel.app',
    image: 'https://drive.google.com/file/d/1uBhfFuuu-x66yh-zVhsHJGGTfREMo-ys/view?usp=sharing',
  },
]

// Add your certifications here. They automatically appear in the Certifications section.
export const certifications: Certification[] = [
  {
    name: 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization',
    issuer: 'DeepLearning.AI',
    year: '2025',
    link: 'https://drive.google.com/file/d/1s-tZ9iQigI4sJebccZq3ArrRDh6JlAjb/view?usp=sharing',
  },
  {
    name: 'Natural Language Processing with Classification and Vector Spaces',
    issuer: 'DeepLearning.AI',
    year: '2025',
    link: 'https://drive.google.com/file/d/1SXekoFNrV9YgmuiLXmuCPfM7sBRtxhey/view?usp=sharing',
  },
  {
    name: 'Convolutional Neural Networks',
    issuer: 'DeepLearning.AI',
    year: '2025',
    link: 'https://drive.google.com/file/d/1ke4bvzyY8MQWFrvl2w_Ll1hVVu5GQmm4/view?usp=sharing',
  },
  {
    name: 'Neural Networks and Deep Learning',
    issuer: 'DeepLearning.AI',
    year: '2025',
    link: 'https://drive.google.com/file/d/1kjXEVJVajDib4x8GQHtOy-R6wq3WrZ1O/view?usp=sharing',
  },
  {
    name: 'AI For Everyone',
    issuer: 'DeepLearning.AI',
    year: '2024',
    link: 'https://drive.google.com/file/d/1Kcti-oNCyBkJqJunIMa-9H0866yI8CkB/view?usp=sharing',
  },
  {
    name: 'Data Analysis with Python',
    issuer: 'freeCodeCamp',
    year: '2024',
    link: 'https://drive.google.com/file/d/1QZ43xq3EsLld1upgfKMrZ0m88XNqGm8p/view?usp=sharing',
  },
  {
    name: 'Machine Learning with Python',
    issuer: 'freeCodeCamp',
    year: '2024',
    link: 'https://drive.google.com/file/d/1bPycU3oIYduGIe5RSPTaDl1kUdOOqwpP/view?usp=sharing',
  },
  {
    name: 'Introduction to Flutter Course',
    issuer: 'Simplilearn',
    year: '2024',
    link: '[link removed]',
  },
  {
    name: 'Career Essentials in Generative AI',
    issuer: 'Microsoft and LinkedIn',
    year: '2024',
    link: 'https://drive.google.com/file/d/1qeK-cyED-wrdmFtUTxP277W9vQzK17zp/view?usp=sharing',
  },
  {
    name: 'Introduction to Artificial Intelligence (2023)',
    issuer: 'LinkedIn Learning',
    year: '2024',
    link: 'https://drive.google.com/file/d/1tFGS-KBW-zneqc7Bf2qSpKQBth1bfHyu/view?usp=sharing',
  },
  {
    name: 'Ethics in the Age of Generative AI',
    issuer: 'LinkedIn Learning',
    year: '2024',
    link: 'https://drive.google.com/file/d/1IaaopKj0bwx0YQ_rZkXTzXk8nC-ot1Yz/view?usp=sharing',
  },
  {
    name: 'Certified Python Developer',
    issuer: 'W3Schools',
    year: '2021',
    link: 'https://drive.google.com/file/d/1E1TBpacK-pEINGu7JxMbFrsVN1HRYZpY/view?usp=sharing',
  },  
  {
    name: 'AI & Backend Developer Experience Certificate',
    issuer: 'DATA FUNCTION (SMC-PRIVATE) LIMITED',
    year: '2026',
    link: 'https://drive.google.com/file/d/1mvj8mjjH8Z_Eo4erBHeqZ65Iy2ohzmTX/view?usp=sharing',
  },
  {
    name: 'AI/ML Internship Experience Certificate',
    issuer: 'HelioCore Solutions',
    year: '2025',
    link: 'https://drive.google.com/file/d/1CbxHTzjQS-FEofPejFdpEgAYOeLL09I6/view?usp=sharing',
  },
]
export function getDriveImageUrl(url: string) {
  if (!url) return ''
  const match = url.match(/\/file\/d\/([^/]+)/) || url.match(/[?&]id=([^&]+)/)
  return match ? `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1600` : url
}
