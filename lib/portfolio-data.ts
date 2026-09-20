export type Project = {
  id: string
  name: string
  type: string
  year: string
  tags: string
  description: string
  tone: 'blue' | 'paper' | 'grid' | 'mono' | 'emerald'
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
    id: '02',
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
    id: '03',
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
  id: '04',
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
  // { name: 'Certification name', issuer: 'Issuing organization', year: '2025', link: 'https://...' },
]

export function getDriveImageUrl(url: string) {
  if (!url) return ''
  const match = url.match(/\/file\/d\/([^/]+)/) || url.match(/[?&]id=([^&]+)/)
  return match ? `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1600` : url
}
