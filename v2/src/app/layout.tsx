import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcos Wiendl — Full Stack Developer",
  description:
    "Portfólio de Marcos Wiendl. Desenvolvedor Full Stack especializado em Java, Spring Boot, React, Next.js e TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className="antialiased min-h-screen selection:bg-blue-500 selection:text-white bg-[#f5f5f7] text-[#1d1d1f]">
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false}>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
