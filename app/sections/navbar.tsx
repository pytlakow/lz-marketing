"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
// Removed framer-motion import
import Logo from "../components/logo";
import LinkButton from "../components/link";
import Button from "../components/button";
import Search from "../components/search";
import Icon from "../components/icons";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isDropdownPricingOpen, setDropdownPricingOpen] = useState(false);
    const pathname = usePathname();
    return (
        <nav className="sticky top-0 z-50 bg-[#fafafa] text-slate-700">
            <div className="container mx-auto max-w-7xl my-8 px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
                <div className="flex flex-row items-center">
                    <div className="flex items-center w-[200px] min-h-[40px]">
                        <Link href="/" aria-label="Home" className="block w-full h-full">
                            <Logo />
                        </Link>
                    </div>
                    <div className="hidden text-2xl md:flex space-x-8 ml-20 pt-2">
                        <LinkButton isActive={pathname === "/"} href="/">
                            Product
                        </LinkButton>
                        <LinkButton href="/pricing" isActive={pathname === "/pricing"}>Pricing</LinkButton>
                        <div
                            className="relative"
                            onMouseEnter={() => setDropdownPricingOpen(true)}
                            onMouseLeave={() => setDropdownPricingOpen(false)}
                        >
                            <div className="flex items-center cursor-pointer">
                                <LinkButton
                                    href="/pricing"
                                    isActive={pathname === "/pricing"}
                                    className="flex items-center"
                                >
                                    Pricing
                                    <span className="ml-2 mt-2">
                                        <Icon name="chavrionDown" />
                                    </span>
                                </LinkButton>
                            </div>
                            {/* Dropdown menu */}
                            <div
                                className={`absolute left-0 top-full w-[200px] bg-white shadow-lg rounded-lg transition-all duration-200 z-50 ${
                                    isDropdownPricingOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                                }`}
                            >
                                <div className="flex flex-col p-6 space-y-2 flex-1">
                                        <LinkButton href="/pricing/docs">Cloud</LinkButton>
                                        <LinkButton href="/pricing/blog">VM</LinkButton>
                                        <LinkButton href="/pricing/tutorials">Direct install</LinkButton>
                                        
                                </div>
                            </div>
                        </div>
                        <div
                            className="relative"
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <div className="flex items-center cursor-pointer">
                                <LinkButton
                                    href="/resources"
                                    isActive={pathname === "/resources"}
                                    className="flex items-center"
                                >
                                    Resources
                                    <span className="ml-2 mt-2">
                                        <Icon name="chavrionDown" />
                                    </span>
                                </LinkButton>
                            </div>
                            {/* Dropdown menu */}
                            <div
                                className={`absolute left-0 top-full w-[400px] bg-white shadow-lg rounded-lg transition-all duration-200 z-50 ${
                                    dropdownOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                                }`}
                            >
                                <div className="flex flex-row p-6 gap-8">
                                    <div className="flex flex-col space-y-2 flex-1">
                                        <LinkButton href="/resources/docs">Documentation</LinkButton>
                                        <LinkButton href="/resources/blog">Blog</LinkButton>
                                        <LinkButton href="/resources/tutorials">Tutorials</LinkButton>
                                    </div>
                                    <div className="flex flex-col space-y-2 flex-1">
                                        <LinkButton href="/resources/support">Support</LinkButton>
                                        <LinkButton href="/resources/community">Community</LinkButton>
                                        <LinkButton href="/resources/faq">FAQ</LinkButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <LinkButton href="/about" isActive={pathname === "/about"}>About</LinkButton>
                    </div>
                </div>
                <div className="hidden lg:flex space-x-8">
                    <Search />
                </div>
                <div className="md:flex space-x-8">
                    <Button href="/download">
                        <span className="md:mr-2">
                            <Icon name="download" />
                        </span>
                        <span className="hidden md:inline">Try us out!</span>
                    </Button>
                </div>
                <div className="md:hidden">
                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="text-gray-600 hover:text-gray-900 focus:outline-none cursor-pointer"
                        aria-label="Open menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div
                className={`fixed top-0 left-0 w-full h-screen flex flex-col z-50 transition-all duration-500 ease-in-out ${
                    isOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto backdrop-blur-xs"
                        : "opacity-0 -translate-y-full pointer-events-none"
                }`}
            >
                <div className="shadow-lg bg-white relative z-60">
                    <div className="flex flex-row items-center justify-between mx-4 mt-6">
                        <div className="flex w-[200px]">
                            <Logo />
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            type="button"
                            className=" text-gray-600 hover:text-gray-900 focus:outline-none cursor-pointer"
                            aria-label="Close menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="flex text-xl flex-col space-y-4 mt-8 px-8 mb-8">
                        <LinkButton onClick={() => setIsOpen(false)} isActive={pathname === "/"} href="/">
                            Product
                        </LinkButton>
                        <LinkButton onClick={() => setIsOpen(false)} href="/pricing" isActive={pathname === "/pricing"}>Pricing</LinkButton>
                        <LinkButton onClick={() => setIsOpen(false)} isActive={pathname === "/resources"} href="/resources">
                            Resources
                        </LinkButton>
                        <LinkButton onClick={() => setIsOpen(false)} isActive={pathname === "/about"} href="/about">
                            About
                        </LinkButton>
                        <Search />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
