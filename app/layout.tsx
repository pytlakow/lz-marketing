
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";
import ScrollToTop from "./components/scroll-to-top";

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
    description:
        "Log Management made simple. LogZilla centralizes and manages logs in real-time with advanced features like deduplication, normalization, event correlation, and automation to streamline incident remediation and reduce downtime.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
          <head>
            <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
            
          </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-700`}
            >
                <ScrollToTop />
                <Navbar></Navbar>
                

                <main className="relative h-screen overflow-hiddenflex items-center justify-center ">
                    <div className="flex flex-col min-h-screen">
                        <div className="flex-1">{children}</div>
                        <Footer />
                    </div> 
                </main>
            </body>
        </html>
    );
}
