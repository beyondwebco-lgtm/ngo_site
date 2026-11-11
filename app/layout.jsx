import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#EAB308',
};

export const metadata = {
  metadataBase: new URL('https://www.anandgroupcharitabletrust.org.in'),
  title: 'Anand Group Charitable Trust | Empowering Education. Creating Awareness.',
  description:
    'Anand Group Charitable Trust works across Andhra Pradesh and Telangana to advance educational awareness, teacher training, child psychology support, responsible mobile usage, mental wellness, social awareness, healthcare, elderly care, and community welfare.',
  keywords: [
    'Anand Group Charitable Trust',
    'Educational awareness India',
    'Mobile phone awareness programmes',
    'Digital wellness activity book',
    'Teacher training values child psychology',
    'Child development and psychology sessions',
    'Mental wellness awareness',
    'Traffic awareness Swachh Bharat Save Water',
    'Charitable trust Andhra Pradesh Telangana',
    'CSR Partnerships India',
  ],
  icons: {
    icon: '/favicon-anand-trust.svg',
    shortcut: '/favicon-anand-trust.svg',
    apple: '/favicon-anand-trust.svg',
  },
  openGraph: {
    title: 'Anand Group Charitable Trust | Empowering Education. Creating Awareness.',
    description:
      'Building a brighter future through educational awareness, teacher training, child psychology sessions, digital wellness, mental wellness, and social service.',
    url: 'https://www.anandgroupcharitabletrust.org.in/',
    siteName: 'Anand Group Charitable Trust',
    images: [
      {
        url: '/images/school-awareness/school-awareness-youth-inspiration-assembly.webp',
        width: 1040,
        height: 780,
        alt: 'Anand Group Charitable Trust Educational & School Awareness Assembly',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anand Group Charitable Trust | Empowering Education. Creating Awareness.',
    description:
      'Educational awareness, teacher training, child development, digital wellness, mental wellness, and charitable service across Andhra Pradesh & Telangana.',
    images: ['/images/school-awareness/school-awareness-youth-inspiration-assembly.webp'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
