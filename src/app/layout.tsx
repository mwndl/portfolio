import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Marcos Wiendl • Portfólio',
  description: 'Desenvolvedor full-stack especializado em React, Next.js e Spring Boot.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-screen py-4">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
