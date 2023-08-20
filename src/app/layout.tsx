import "./globals.css";
import type { Metadata } from "next";
import localFont from 'next/font/local';
import { Unbounded } from "next/font/google";

const badScript = localFont({
  src: '../../public/el_primo.otf',
  display: 'swap',
  variable: '--font-bad',
});

const inter = Unbounded({
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "Свадьба Данила и Дарья",
  description: "Приглашение на свадьбу",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${badScript.variable} font-inter relative`}>
        {children}
      </body>
    </html>
  );
}
