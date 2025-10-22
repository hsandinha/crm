import type { Metadata } from "next";
import { Fira_Code, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const mono = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Nova CRM",
  description:
    "Uma plataforma CRM envolvente e moderna para nutrir relacionamentos e fechar negócios com eficiência."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-slate-100 text-slate-900">
        {children}
      </body>
    </html>
  );
}
