'use client'
import React, { useEffect } from "react";

const webinars = [
    {
        href: "/resources/webinars/soar-in-5",
        label: "Learn Log Tools in 5 Minutes",
        desc: "Watch LogZilla Become Fully Operational in 5 Minutes",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/62313b85e7fb486b271718d1_big-data-blue-waves-960x540.jpg",
            alt: "Big data blue waves",
        },
    },
    {
        href: "/resources/webinars/remote-vpn-a-challenge-for-your-workforce",
        label: "Remote VPN Challenges Isn't Just a Pandemic Issue",
        desc: "Are Remote VPNs a Challenge for Your Workforce All the Time?",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/62316edbe1655d3ce204078d_cloud-metal-wheel-circling-960x540.jpg",
            alt: "Cloud metal wheel circling",
        },
    },
    {
        href: "/resources/webinars/log-tools-finally-changed-it-just-took-25-years",
        label: "Log Tools Finally Upgraded",
        desc: "...and Still No New Log Tools",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/62376614e85f6f7d98ff6f58_robot-finger-typing-on-keyboard-960x5540.jpg",
            alt: "Robot Hand Typing on Laptop",
        },
    },
    {
        href: "/resources/webinars/how-to-reduce-splunks-costs-by-50",
        label: "The Cost of Splunk",
        desc: "Reduce Splunk's Costs by 50%",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623757d154f15dffb8d87564_rising-splunk-costs-960x540.jpg",
            alt: "Rising Splunk Costs",
        },
    },
    {
        href: "/resources/webinars/improving-data-security-for-it-in-ot",
        label: "IoT Data Security Has Changed",
        desc: "Improving Data Security for IT in OT",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6233d3ab06f90d2dd0066eb1_iot-spinners-wifi-cloud-zero-trust-960x540.jpg",
            alt: "IOT, Spinners, Wifi, Cloud, Zero-trust",
        },
    },
    {
        href: "/resources/webinars/how-to-execute-remote-device-commands-using-logzilla",
        label: "How To Execute Remote Device Commands Using LogZilla",
        desc: "Automatic Cisco device configuration and Slack",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6231358edf29f32fdab2e1e8_automoation-960x540.jpg",
            alt: "Automation",
        },
    },
    {
        href: "/resources/webinars/network-compliance-made-easy",
        label: "Network Compliance Made Easy",
        desc: "Automatic compliance management using LogZilla",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/62316fc106f001f823c6a550_compliance-gear-wheel-960x540.jpg",
            alt: "Compliance gear wheel",
        },
    },
    {
        href: "/resources/webinars/improving-legacy-log-tools",
        label: "Improving Legacy Log Tools",
        desc: "Ready to Watch How to Make Legacy Log Tools Faster and Smarter",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623a2c476a793fc4b01b8ef7_turbo-charge-siem-lz-logo-960x540.webp",
            alt: "Turbo Charge with LZ Logo HERO",
        },
    },
    {
        href: "/resources/webinars/the-modern-day-soc-fill-the-gaps-to-preserve-your-business",
        label: "Data & the Modern Day SOC",
        desc: "Fill The Gaps to Preserve Your Business",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/62314f667f9d2a751add39d6_business-buildings-and-networks-960x540.jpg",
            alt: "Business transformation hallways",
        },
    },
    {
        href: "/resources/webinars/how-to-get-the-most-out-of-your-watchguard-events",
        label: "Do More with Your WatchGuard Firewalls",
        desc: "Get the Most Out of Your WatchGuard Events",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623760a7b811e659c6d7047e_watchguard-webinar-image-only-960x540.jpg",
            alt: "Watchguard Webinar Logo Only",
        },
    },
    {
        href: "/resources/webinars/to-catch-a-thief",
        label: "To Catch a Thief",
        desc: "Locate and apprehend laptop thieves in 5 seconds",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6237516fa6f11960c4faede5_phishing-hook-blue-background-960x540.jpg",
            alt: "Phishing Hook Blue Background",
        },
    },
    {
        href: "/resources/webinars/what-is-logzilla",
        label: "LogZilla NEO in 4-Minutes",
        desc: "Meet the World's Quickest CLM platform in Less than Four Minutes",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623757a454f15d4180d8672f_lz-circle-logo-on-multicolor-background-960x540.jpg",
            alt: "LZ Circle Logo on Multicolor Background",
        },
    },
    {
        href: "/resources/webinars/extracting-value-from-cisco-ise-logs",
        label: "Cisco Identity Services Engine",
        desc: "How to Get More Value From Cisco ISE Events",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623762ba8cf9c613c7c7a615_identiy-engine-wheel-blue-green-960x540.jpg",
            alt: "Engine Identity Wheel Blue Green",
        },
    },
    {
        href: "/resources/webinars/siem-soar-whats-still-missing",
        label: "What's Missing from SIEM and SOAR",
        desc: "LogZilla Fills the Gaps Between SIEM and SOAR with the Power of NEO's Data Ingestion",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623764c98acf4f1923886338_ai-black-and-gold-background-960x540.jpg",
            alt: "Artificial Intelligence",
        },
    },
    {
        href: "/resources/webinars/logzilla-30-second-install",
        label: "LogZilla's 30 Second Install",
        desc: "How to install LogZilla in 30 seconds",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6239ffb51775b903f9c63a41_dashboard-multiple-960x540.webp",
            alt: "LogZilla Dashboard Multiple",
        },
    },
    {
        href: "/resources/webinars/zeek-pcap-analysis",
        label: "Zeek PCAP Analysis - Real-Time Threat Hunting",
        desc: "Zeek PCAP Analysis - Real-Time Threat Hunting",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6233e42ff5ea8d1d8e53d4bc_us-dep-of-cyber-operations-960x540.jpg",
            alt: "US Dept of Cyber Operations",
        },
    },
];

export default function WebinarsPage() {
    function getLastPathSegment(url: string) {
        const parts = url.split("/").filter(Boolean);
        return parts[parts.length - 1];
    }

    useEffect(() => {  
        const currentUrl = window.location.pathname;
        console.log("Current URL:", currentUrl);
        const videoId = getLastPathSegment(currentUrl);
        console.log("Video ID:", videoId);
    }, []);

    return (
        <main className="bg-gray-50 min-h-screen">
            {/* Featured Webinar */}
            <section className="relative bg-white shadow-lg rounded-lg overflow-hidden mb-12">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-400 to-white opacity-30 pointer-events-none" />
                <div className="flex flex-col md:flex-row items-center p-8 gap-8 relative z-10">
                    <div className="flex-1">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Zeek PCAP Analysis - Real-Time Threat Hunting
                        </h1>
                        <div className="flex gap-3 mb-4">
                            <a href="#" className="hover:scale-110 transition">
                                <img
                                    src="https://platform-cdn.sharethis.com/img/linkedin.svg"
                                    alt="linkedin sharing button"
                                    className="w-8 h-8"
                                />
                            </a>
                            <a href="#" className="hover:scale-110 transition">
                                <img
                                    src="https://platform-cdn.sharethis.com/img/reddit.svg"
                                    alt="reddit sharing button"
                                    className="w-8 h-8"
                                />
                            </a>
                            <a href="#" className="hover:scale-110 transition">
                                <img
                                    src="https://platform-cdn.sharethis.com/img/sharethis.svg"
                                    alt="sharethis sharing button"
                                    className="w-8 h-8"
                                />
                            </a>
                        </div>
                        <p className="text-lg text-gray-700 mb-2">
                            Zeek PCAP Analysis - Real-Time Threat Hunting
                        </p>
                        <div className="mb-6">
                            <p className="text-gray-600">
                                Utilizing a simple, easy to deploy, minimal hardware footprint platform (rack-mounted or fly away kit) capable of combining LogZilla's performance capability and Zeek's network packet traffic analysis enables true real-time responses and orchestration resulting in a solution that functions both as a traditional "defensive" tool, and an offensive countermeasure platform.
                            </p>
                        </div>
                        <a
                            href="/webinars/zeek-pcap-analysis"
                            className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                        >
                            <img
                                src="https://cdn.prod.website-files.com/61b0f5a8f462f6cda30fb7a5/61b91aa13df99e3bac2a4e5d_hulu---home%20(5).svg"
                                alt=""
                                className="w-6 h-6"
                            />
                            <span>March 21, 2022</span>
                        </a>
                    </div>
                    <div
                        className="flex-1 h-64 md:h-80 rounded-lg bg-cover bg-center shadow-lg"
                        style={{
                            backgroundImage:
                                'url("https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6233e42ff5ea8d1d8e53d4bc_us-dep-of-cyber-operations-960x540.jpg")',
                        }}
                    />
                </div>
            </section>

            {/* Search */}
            <section className="mb-8">
                <form action="/search" className="flex justify-center gap-2">
                    <input
                        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        maxLength={256}
                        name="query"
                        placeholder="Search Webinars..."
                        type="search"
                        id="search"
                        required
                    />
                    <input
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition cursor-pointer"
                        value="Search"
                    />
                </form>
            </section>

            {/* Webinars Grid */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {webinars.map((w, i) => (
                        <div
                            key={w.href}
                            className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden flex flex-col"
                        >
                            <a href={w.href} className="block group">
                                <div className="relative">
                                    <img
                                        src={w.img.src}
                                        alt={w.img.alt}
                                        className="w-full h-40 object-cover group-hover:scale-105 transition"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                                </div>
                                <div className="p-4">
                                    <div className="font-semibold text-lg text-gray-900 mb-2">{w.label}</div>
                                    <div className="text-gray-600 text-sm">{w.desc}</div>
                                </div>
                            </a>
                            <a
                                href={w.href}
                                className="flex items-center justify-center gap-2 py-2 bg-blue-50 hover:bg-blue-100 transition"
                            >
                                <img
                                    src="https://cdn.prod.website-files.com/61b0f5a8f462f6cda30fb7a5/61b91bf20ac13b1067d4d1f2_cu-button-play%20(1).svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                    className="inline-block"
                                />
                                <span className="text-blue-700 font-medium">VIEW</span>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}