import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://portfolio-sahibzada-abdullah-ahmad.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sahibzada Abdullah Ahmad | AI Engineer & Full Stack Developer',
    template: '%s | Sahibzada Abdullah Ahmad',
  },
  description: 'Sahibzada Abdullah Ahmad is an AI Engineer and Full Stack Developer building intelligent digital products, AI systems, business software, and scalable web applications.',
  keywords: ['Sahibzada Abdullah Ahmad', 'AI Engineer', 'Full Stack Developer', 'AI development', 'web application development', 'business software', 'Pakistan developer'],
  authors: [{ name: 'Sahibzada Abdullah Ahmad', url: siteUrl }],
  creator: 'Sahibzada Abdullah Ahmad',
  publisher: 'Sahibzada Abdullah Ahmad',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Sahibzada Abdullah Ahmad',
    title: 'Sahibzada Abdullah Ahmad | AI Engineer & Full Stack Developer',
    description: 'AI Engineer and Full Stack Developer building intelligent digital products, AI systems, and scalable web applications.',
    images: [{ url: '/profile-photo.png', width: 1254, height: 1254, alt: 'Sahibzada Abdullah Ahmad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sahibzada Abdullah Ahmad | AI Engineer & Full Stack Developer',
    description: 'AI Engineer and Full Stack Developer building intelligent digital products and scalable web applications.',
    images: ['/profile-photo.png'],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Sahibzada Abdullah Ahmad',
          url: siteUrl,
          image: `${siteUrl}/profile-photo.png`,
          jobTitle: 'AI Engineer and Full Stack Developer',
          description: 'AI Engineer and Full Stack Developer building intelligent digital products, AI systems, and scalable web applications.',
          sameAs: ['https://github.com/Sahibzada88/', 'https://www.linkedin.com/in/sahibzada-abdullah/', 'https://www.facebook.com/profile.php?id=61594429306140'],
        }) }} />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
