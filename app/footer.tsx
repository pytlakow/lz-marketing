import React from "react";
import Logo from "./components/logo";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-700 text-[#fafafa]">
            <div className="container mx-auto max-w-7xl my-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-8">
                    <div>
                        <h3 className="font-semibold mb-3">Product</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/software" className="hover:underline">
                                    Software
                                </a>
                            </li>
                            <li>
                                <a href="/cloud" className="hover:underline">
                                    Cloud
                                </a>
                            </li>
                            <li>
                                <a href="/appliances" className="hover:underline">
                                    Appliences
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/resources/about" className="hover:underline">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/resources/contact" className="hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/resources/faq" className="hover:underline">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Terms of Use
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    API Documentation
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:underline">
                                    Savings Calculator
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Webinars
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Blog Articles
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Use Cases
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between items-center h-16 border-t border-slate-600 pt-4">
                    <div className="flex w-[200px]">
                        <div className="flex items-center w-[200px] min-h-[40px]">
                            <Link
                                href="/"
                                aria-label="Home"
                                className="block w-full h-full"
                            >
                                <Logo textColor="#fafafa" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <a
                            href="https://www.youtube.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                        >
                            <svg
                                className="w-6 h-6 fill-current hover:text-red-500"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23.498 6.186a2.997 2.997 0 0 0-2.112-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.566A2.997 2.997 0 0 0 .502 6.186C0 8.347 0 12 0 12s0 3.653.502 5.814a2.997 2.997 0 0 0 2.112 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.566a2.997 2.997 0 0 0 2.112-2.12C24 15.653 24 12 24 12s0-3.653-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <svg
                                className="w-6 h-6 fill-current hover:text-blue-600"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.605 2.004 3.605 4.609v5.587z" />
                            </svg>
                        </a>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                        >
                            <svg
                                className="w-6 h-6 fill-current hover:text-blue-400"
                                viewBox="0 0 24 24"
                            >
                                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.007-.857 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="text-center text-sm text-slate-200 py-4">
                    <span>&copy; LogZilla Corp {new Date().getFullYear()}</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
