import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recipe Page App",
  description: "A simple recipe page",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        sizes: "32x32",
        url: "/favicon.png",
        href: "/favicon.png",
        type: "image/png",
      }, {
        media: "(prefers-color-scheme: dark)",
        sizes: "32x32",
        url: "/favicon.png",
        href: "/favicon.png",
        type: "image/png",
      },
    ],

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
