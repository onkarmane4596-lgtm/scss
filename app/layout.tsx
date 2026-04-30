import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#00d4ff',
}

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Skyline Cyber Security Solutions & Forensic Consultancy Services',
  description: 'Industry-focused cybersecurity training and digital forensics education, empowering students with real-world skills.',
  generator: 'Next.js',
  keywords: ['Cyber Security', 'Digital Forensics', 'Ethical Hacking', 'Risk & Compliance', 'Incident Response', 'Education', 'Skyline', 'Satara', 'Maharashtra', 'Certification'],
  authors: [{ name: 'Skyline Cyber Security Solutions' }],
  creator: 'Skyline Cyber Security Solutions',
  publisher: 'Chhatrapati Shahu Maharaj Sevabhavi Sanstha',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Skyline Cyber Security Solutions & Forensic Consultancy Services',
    description: 'Where Security Meets Intelligence. Master Ethical Hacking, Digital Forensics, and Incident Response with expert-led training.',
    url: 'https://skycyberforensics.in',
    siteName: 'Skyline Cyber Security Solutions',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Skyline Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skyline Cyber Security Solutions',
    description: 'Where Security Meets Intelligence. Build your career in Cyber Security.',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.className} font-sans antialiased bg-[#020813] text-slate-200`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
