export type Project = {
  id: string
  name: string
  type: string
  year: string
  tags: string
  description: string
  tone: 'blue' | 'paper' | 'grid' | 'mono'
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
    name: 'MindCare.AI',
    type: 'AI wellness platform',
    year: '2025',
    tags: 'Flutter · FastAPI · MongoDB · LangChain',
    description: 'An AI-powered conversational platform combining structured assessments, conversational AI, sentiment analysis, and personalized recommendations.',
    tone: 'blue',
    link: 'https://github.com',
    websiteLink: '',
    image: '',
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
