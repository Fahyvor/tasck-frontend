import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
const myFont = localFont({ src: './NHaasGroteskTXPro-55Rg.ttf' })

export const metadata: Metadata = {
  title: "TASCK",
  description: "TASCK",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
      className={myFont.className}
      >
          {children}
      </body>
    </html>
  );
}
