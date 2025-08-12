import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./sections/navbar";
import Footer from "./sections/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LogZilla AI | Intelligent Observability for Modern IT Ops",
  description: "Log Management made simple. LogZilla centralizes and manages logs in real-time with advanced features like deduplication, normalization, event correlation, and automation to streamline incident remediation and reduce downtime.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-700`}
      >
        
          <Navbar></Navbar>
          
          <main className="relative h-screen overflow-hiddenflex items-center justify-center ">
            {children}
            <Footer></Footer>
          </main>
          
           
          
        
       
      </body>
    </html>
  );
}
