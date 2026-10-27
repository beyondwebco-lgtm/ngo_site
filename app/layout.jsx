import './globals.css';

export const metadata = {
  metadataBase: new URL('https://www.aashrayafoundation.org.in'),
  title: 'Aashraya Foundation | Empowering Lives. Building Hope.',
  description: 'Aashraya Foundation is a premier charitable trust and NGO in India dedicated to community empowerment, child education, healthcare, and sustainable grassroots development.',
  keywords: ['Aashraya Foundation', 'NGO in India', 'charitable trust', 'child education', 'women empowerment', 'community healthcare', 'sustainable development'],
  icons: {
    icon: '/favicon-aashraya.svg',
    shortcut: '/favicon-aashraya.svg',
    apple: '/favicon-aashraya.svg',
  },
  openGraph: {
    title: 'Aashraya Foundation | Empowering Lives. Building Hope.',
    description: 'Creating meaningful opportunities for underserved communities through education, healthcare, empowerment, and sustainable development.',
    url: 'https://www.aashrayafoundation.org.in/',
    siteName: 'Aashraya Foundation',
    images: [
      {
        url: '/images/hero_community_hope.jpg',
        width: 1200,
        height: 675,
        alt: 'Aashraya Foundation Community Education',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aashraya Foundation | Empowering Lives. Building Hope.',
    description: 'Empowering communities through education, healthcare, compassion, and meaningful grassroots action.',
    images: ['/images/hero_community_hope.jpg'],
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
      <body>{children}</body>
    </html>
  );
}
