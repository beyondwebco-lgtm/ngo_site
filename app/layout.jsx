import './globals.css';

export const metadata = {
  metadataBase: new URL('https://www.anandgroupcharitabletrust.org.in'),
  title: 'Anand Group Charitable Trust | Together, We Build a Better Tomorrow',
  description: 'Anand Group Charitable Trust is a dedicated Indian charitable trust empowering communities through education, social and environmental awareness, accessible healthcare, temple heritage, elderly care, Naadha Ashram support, and corporate CSR partnerships.',
  keywords: [
    'Anand Group Charitable Trust',
    'CSR Partnerships India',
    'Swachh Bharat cleanliness drives',
    'Save water campaigns',
    'Underprivileged child education',
    'Temple renovation and Annadanam',
    'Free medical and blood donation camps',
    'Elderly care and old age home support',
    'Naadha Ashram support',
    'Charitable trust in India',
  ],
  icons: {
    icon: '/favicon-anand-trust.svg',
    shortcut: '/favicon-anand-trust.svg',
    apple: '/favicon-anand-trust.svg',
  },
  openGraph: {
    title: 'Anand Group Charitable Trust | Together, We Build a Better Tomorrow',
    description: 'Empowering communities through education, social awareness, healthcare, cultural preservation, and compassionate community service.',
    url: 'https://www.anandgroupcharitabletrust.org.in/',
    siteName: 'Anand Group Charitable Trust',
    images: [
      {
        url: '/images/hero_community_hope.jpg',
        width: 1200,
        height: 675,
        alt: 'Anand Group Charitable Trust Community Initiatives',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anand Group Charitable Trust | Together, We Build a Better Tomorrow',
    description: 'Empowering communities through education, healthcare, environmental responsibility, and compassionate grassroots service.',
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
