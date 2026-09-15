import type { Metadata } from 'next';
import { Inter, Vazirmatn, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { CustomCursor } from '@/components/common/custom-cursor';
import { Loader } from '@/components/layout/loader'; // <-- ENSURE THIS IS IMPORTED
import { Navbar } from '@/components/layout/navbar'; // Import Navbar
import { Footer } from '@/components/layout/footer'; // Import Footer
import { getDictionary } from '@/lib/i18n/dictionaries'; // Import Dictionary
import type { Locale } from '@/lib/i18n/config';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const vazirmatn = Vazirmatn({
  subsets: ['latin', 'arabic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

const jetbrains_mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://moienkashfi.dev'), // Replace with your actual domain later
  title: {
    default: "Mohammad Moein Kashfi Nejad | Full-Stack Developer",
    template: "%s | Mohammad Moein Kashfi Nejad",
  },
  description: "Full-Stack Developer specializing in React, Next.js, and Node.js. Turning ideas into real, fast, and beautiful web products.",
  
  // Favicon Configuration
  icons: {
    icon: '/assets/favicon.svg',
    shortcut: '/assets/favicon.svg',
    apple: '/assets/favicon.svg',
  },

  keywords: ["Full-Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "Portfolio", "Web Developer", "Frontend", "Backend"],
  authors: [{ name: "Mohammad Moein Kashfi Nejad" }],
  creator: "Mohammad Moein Kashfi Nejad",
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moienkashfi.dev",
    siteName: "Mohammad Moein Kashfi Nejad",
    title: "Mohammad Moein Kashfi Nejad | Full-Stack Developer",
    description: "Turning ideas into real web products. Fast, precise, and on time.",
    images: [
      {
        url: "/og-image.png", // You can add a custom OG image to /public later
        width: 1200,
        height: 630,
        alt: "Mohammad Moein Kashfi Nejad Portfolio",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Moein Kashfi Nejad | Full-Stack Developer",
    description: "Turning ideas into real web products.",
    images: ["/og-image.png"],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isFa = locale === 'fa';
  const dict = getDictionary(locale);

  // Prepare Nav Links for the Navbar component
  const navLinks = [
    { label: dict.nav.projects, href: '#projects' },
    { label: dict.nav.skills, href: '#skills' },
    { label: dict.nav.experience, href: '#experience' },
    { label: dict.nav.about, href: '#about' },
    { label: dict.nav.contact, href: '#contact' },
  ];

  const fontVariables = `${inter.variable} ${vazirmatn.variable} ${jetbrains_mono.variable}`;

  return (
    <html
      lang={locale}
      dir={isFa ? 'rtl' : 'ltr'}
      suppressHydrationWarning
      className={fontVariables}
    >
            {/* FORCE THE FAVICON HERE */}
      <link rel="icon" href="/assets/favicon.svg" type="image/png" />
      <link rel="shortcut icon" href="/assets/favicon.svg" type="image/png" />
      <body
        className={`bg-background min-h-screen font-sans antialiased ${isFa ? 'font-fa' : 'font-en'} flex flex-col`}
      >
        <ThemeProvider defaultTheme="dark">
          <Loader />
          <CustomCursor />

          {/* Navbar is fixed, so it sits on top */}
          <Navbar navLinks={navLinks} isRtl={isFa} />

          {/* Main Content grows to push footer down */}
          <main className="flex-grow pt-20">{children}</main>

          <Footer text={dict.footer.text} />

          <Toaster position={isFa ? 'bottom-left' : 'bottom-right'} richColors theme="system" />
        </ThemeProvider>
      </body>
    </html>
  );
}
