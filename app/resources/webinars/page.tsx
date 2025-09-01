"use client";
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
        vidId: "hnbDeBB57pc",
    },
    {
        href: "/resources/webinars/remote-vpn-a-challenge-for-your-workforce",
        label: "Remote VPN Challenges Isn't Just a Pandemic Issue",
        desc: "Are Remote VPNs a Challenge for Your Workforce All the Time?",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/62316edbe1655d3ce204078d_cloud-metal-wheel-circling-960x540.jpg",
            alt: "Cloud metal wheel circling",
        },
        vidId: "pLcydNmzNHA",
    },
    {
        href: "/resources/webinars/log-tools-finally-changed-it-just-took-25-years",
        label: "Log Tools Finally Upgraded",
        desc: "...and Still No New Log Tools",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/62376614e85f6f7d98ff6f58_robot-finger-typing-on-keyboard-960x5540.jpg",
            alt: "Robot Hand Typing on Laptop",
        },
        vidId: "DsCktacf_d8",
    },
    {
        href: "/resources/webinars/how-to-reduce-splunks-costs-by-50",
        label: "The Cost of Splunk",
        desc: "Reduce Splunk's Costs by 50%",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623757d154f15dffb8d87564_rising-splunk-costs-960x540.jpg",
            alt: "Rising Splunk Costs",
        },
        vidId: "ddNlJ6L4c1U",
    },
    {
        href: "/resources/webinars/improving-data-security-for-it-in-ot",
        label: "IoT Data Security Has Changed",
        desc: "Improving Data Security for IT in OT",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6233d3ab06f90d2dd0066eb1_iot-spinners-wifi-cloud-zero-trust-960x540.jpg",
            alt: "IOT, Spinners, Wifi, Cloud, Zero-trust",
        },
        vidId: "",
    },
    {
        href: "/resources/webinars/how-to-execute-remote-device-commands-using-logzilla",
        label: "How To Execute Remote Device Commands Using LogZilla",
        desc: "Automatic Cisco device configuration and Slack",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6231358edf29f32fdab2e1e8_automoation-960x540.jpg",
            alt: "Automation",
        },
        vidId: "lYXPdT50lsM",
    },
    {
        href: "/resources/webinars/network-compliance-made-easy",
        label: "Network Compliance Made Easy",
        desc: "Automatic compliance management using LogZilla",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/62316fc106f001f823c6a550_compliance-gear-wheel-960x540.jpg",
            alt: "Compliance gear wheel",
        },
        vidId: "",
    },
    {
        href: "/resources/webinars/improving-legacy-log-tools",
        label: "Improving Legacy Log Tools",
        desc: "Ready to Watch How to Make Legacy Log Tools Faster and Smarter",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623a2c476a793fc4b01b8ef7_turbo-charge-siem-lz-logo-960x540.webp",
            alt: "Turbo Charge with LZ Logo HERO",
        },
        vidId: "",
    },
    {
        href: "/resources/webinars/the-modern-day-soc-fill-the-gaps-to-preserve-your-business",
        label: "Data & the Modern Day SOC",
        desc: "Fill The Gaps to Preserve Your Business",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/62314f667f9d2a751add39d6_business-buildings-and-networks-960x540.jpg",
            alt: "Business transformation hallways",
        },
        vidId: "43aygjHJteA",
    },
    {
        href: "/resources/webinars/how-to-get-the-most-out-of-your-watchguard-events",
        label: "Do More with Your WatchGuard Firewalls",
        desc: "Get the Most Out of Your WatchGuard Events",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623760a7b811e659c6d7047e_watchguard-webinar-image-only-960x540.jpg",
            alt: "Watchguard Webinar Logo Only",
        },
        vidId: "OEZSzpO1VU4",
    },
    {
        href: "/resources/webinars/to-catch-a-thief",
        label: "To Catch a Thief",
        desc: "Locate and apprehend laptop thieves in 5 seconds",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6237516fa6f11960c4faede5_phishing-hook-blue-background-960x540.jpg",
            alt: "Phishing Hook Blue Background",
        },
        vidId: "_wHM2qByCLI",
    },
    {
        href: "/resources/webinars/what-is-logzilla",
        label: "LogZilla NEO in 4-Minutes",
        desc: "Meet the World's Quickest CLM platform in Less than Four Minutes",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623757a454f15d4180d8672f_lz-circle-logo-on-multicolor-background-960x540.jpg",
            alt: "LZ Circle Logo on Multicolor Background",
        },
        vidId: "yGQqkXegdoo",
    },
    {
        href: "/resources/webinars/extracting-value-from-cisco-ise-logs",
        label: "Cisco Identity Services Engine",
        desc: "How to Get More Value From Cisco ISE Events",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623762ba8cf9c613c7c7a615_identiy-engine-wheel-blue-green-960x540.jpg",
            alt: "Engine Identity Wheel Blue Green",
        },
        vidId: "B6YEZCUU8gk",
    },
    {
        href: "/resources/webinars/siem-soar-whats-still-missing",
        label: "What's Missing from SIEM and SOAR",
        desc: "LogZilla Fills the Gaps Between SIEM and SOAR with the Power of NEO's Data Ingestion",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623764c98acf4f1923886338_ai-black-and-gold-background-960x540.jpg",
            alt: "Artificial Intelligence",
        },
        vidId: "siIv2mYztYY",
    },
    {
        href: "/resources/webinars/logzilla-30-second-install",
        label: "LogZilla's 30 Second Install",
        desc: "How to install LogZilla in 30 seconds",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6239ffb51775b903f9c63a41_dashboard-multiple-960x540.webp",
            alt: "LogZilla Dashboard Multiple",
        },
        vidId: "pjtIqrqmc0k",
    },
    {
        href: "/resources/webinars/zeek-pcap-analysis",
        label: "Zeek PCAP Analysis - Real-Time Threat Hunting",
        desc: "Zeek PCAP Analysis - Real-Time Threat Hunting",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6233e42ff5ea8d1d8e53d4bc_us-dep-of-cyber-operations-960x540.jpg",
            alt: "US Dept of Cyber Operations",
        },
        vidId: "ZRruAJXNups",
    },
    {
        href: "/webinars/elk-revealed",
        label: "Painful ELK Costs Revealed",
        desc: "ELK Installation Walkthrough",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/62375a82b1fb53b719b2e72d_elk-eyeball-960x540.jpg",
            alt: "Painful ELK Costs Revealed",
        },
        vidId: "r5YhWLRf5a4",
    },
    {
        href: "/webinars/mitigating-ccpa",
        label: "Mitigating Compliance and Mandates Is Easy!",
        desc: "Better Data Privacy and Compliance for CCPA, HIPPA, Executive Orders, etc.",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623151078361b9ec2c958a84_CCPA-blue-960x540.jpg",
            alt: "Mitigating Compliance and Mandates Is Easy!",
        },
        vidId: "bEKg9YHbqhY",
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
        <main className="min-h-screen">
            <section className="relative overflow-hidden pt-26 pb-16">
                <h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl text-center">
                    LogZilla{" "}
                    <span className="relative whitespace-nowrap text-orange-600">
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 418 42"
                            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-300/70"
                            preserveAspectRatio="none"
                        >
                            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                        </svg>
                        <span className="relative">Webinars</span>
                    </span>
                </h1>
            </section>
            {/* Featured Webinar */}
            <section className="mb-12 flex justify-center bg-gradient-to-r from-slate-300 via-slate-900 to-slate-300 py-10">
                <a
                    target="_blank"
                    href={webinars[11].href}
                    className="relative w-full max-w-7xl overflow-hidden group min-h-[700px] bg-cover bg-center border-2 border-amber-50"
                    style={{
                        backgroundImage: `url(${webinars[11].img.src})`,
                    }}
                >
                    <div className="absolute inset-0 hover:bg-white/50 transition-colors" />
                    <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                        <div className="text-white text-2xl font-bold mb-2 drop-shadow">
                            {webinars[11].label}
                        </div>
                        <div className="text-white text-lg mb-4 drop-shadow">
                            {webinars[11].desc}
                        </div>
                        <span className="inline-flex items-center gap-2 px-5 py-2 bg-orange-600 text-white rounded-lg font-medium shadow hover:bg-orange-700 transition-colors">
                            <img
                                src="https://cdn.prod.website-files.com/61b0f5a8f462f6cda30fb7a5/61b91bf20ac13b1067d4d1f2_cu-button-play%20(1).svg"
                                alt=""
                                width={28}
                                height={28}
                                className="inline-block"
                            />
                            Watch Featured Webinar
                        </span>
                    </div>
                </a>
            </section>

            {/* Webinars Grid */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {webinars
                        .filter((_, i) => i !== 11)
                        .map((w, i) => (
                            <div
                                key={w.vidId || i}
                                style={{ backgroundImage: `url(${w.img.src})` }}
                                className="
                                    relative
                                    overflow-hidden
                                    block
                                    z-10
                                    bg-cover
                                    bg-no-repeat
                                    bg-center
                                    before:content-['']
                                    before:absolute
                                    before:inset-0
                                    before:block
                                    before:bg-gradient-to-t
                                    before:from-slate-700
                                    before:to-transparent
                                    before:opacity-80
                                    before:z-[-5]
                                    h-[400px]
                                    hover:before:opacity-100
                                    transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl
                                "
                            >
                                <a
                                    href={`https://www.youtube.com/watch?v=${w.vidId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="relative z-10 flex flex-col justify-between h-full p-4 cursor-pointer">
                                        <div>
                                            <img
                                                src="https://cdn.prod.website-files.com/61b0f5a8f462f6cda30fb7a5/61b91bf20ac13b1067d4d1f2_cu-button-play%20(1).svg"
                                                alt=""
                                                width={28}
                                                height={28}
                                                className="inline-block"
                                            />
                                        </div>
                                        <div className="h-1/4">
                                            <div className="text-white text-xl font-bold drop-shadow">
                                                {w.label}
                                            </div>
                                            <div className="text-white drop-shadow">
                                                {w.desc}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                </div>
            </section>
        </main>
    );
}
