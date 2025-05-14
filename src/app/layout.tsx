import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Marcos Wiendl • Portfolio',
  description: 'Full-stack developer specialized in React, Next.js and Spring Boot.',
  openGraph: {
    title: 'Marcos Wiendl • Portfolio',
    description: 'Full-stack developer specialized in React, Next.js and Spring Boot.',
    images: [
      {
        url: `https://www.gravatar.com/avatar/d87fbc718cafb7c4a7ce26efd1f227cc?s=400`,
        width: 200,
        height: 200,
        alt: 'Marcos Wiendl - Full-stack Developer',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
