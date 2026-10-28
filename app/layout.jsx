import './globals.css';

export const metadata = {
  metadataBase: new URL('https://www.anandgroupcharitabletrust.org.in'),
  title: 'Anand Group Charitable Trust | Empowering Lives. Building Hope.',
  description: 'Anand Group Charitable Trust is a premier charitable trust and NGO in India dedicated to community empowerment, child education, healthcare, and sustainable grassroots development.',
  keywords: ['Anand Group Charitable Trust', 'Anand Group NGO', 'NGO in India', 'charitable trust', 'child education', 'women empowerment', 'community healthcare', 'sustainable development'],
  icons: {
    icon: '/favicon-anand-trust.svg',
    shortcut: '/favicon-anand-trust.svg',
    apple: '/favicon-anand-trust.svg',
  },
  openGraph: {
    title: 'Anand Group Charitable Trust | Empowering Lives. Building Hope.',
    description: 'Creating meaningful opportunities for underserved communities through education, healthcare, empowerment, and sustainable development.',
    url: 'https://www.anandgroupcharitabletrust.org.in/',
    siteName: 'Anand Group Charitable Trust',
    images: [
      {
        url: '/images/hero_community_hope.jpg',
        width: 1200,
        height: 675,
        alt: 'Anand Group Charitable Trust Community Education',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anand Group Charitable Trust | Empowering Lives. Building Hope.',
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
