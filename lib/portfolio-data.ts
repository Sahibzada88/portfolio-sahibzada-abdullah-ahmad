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
    websiteLink: '',
    image: 'https://drive.google.com/file/d/1gWQyBM9sPy6gMwtvShjXUNBpyMncAPep/view?usp=sharing',
  },
  {
    id: '02',
    name: 'Digital Darzi',
    type: 'Business management',
    year: '2024',
    tags: 'Flutter · Hive · Provider · Local Storage',
    description: 'A practical business management application for customer records, measurements, orders, delivery reminders, and reporting.',
    tone: 'paper',
    link: 'https://github.com',
    websiteLink: '',
    image: '',
  },
  {
    id: '03',
    name: 'PharmaStream ERP',
    type: 'Offline-first desktop app',
    year: '2024',
    tags: 'Python · SQLite · CustomTkinter · PyInstaller',
    description: 'A desktop pharmacy ERP designed for inventory, barcode POS, reports, alerts, users, and offline-first operation.',
    tone: 'grid',
    link: 'https://github.com',
    websiteLink: '',
    image: '',
  },
  {
    id: '04',
    name: 'AI Jobs Finder',
    type: 'Intelligent matching',
    year: '2024',
    tags: 'Next.js · Django · DRF · AI',
    description: 'A system designed to analyze candidate profiles and match them with relevant opportunities.',
    tone: 'mono',
    link: 'https://github.com',
    websiteLink: '',
    image: '',
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
