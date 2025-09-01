"use client";
import React, { useEffect } from "react";

const webinars = [
    {
        href: "",
        label: "Advanced Triggering in LogZilla with Slack Integration | Real-Time Remediation Demo",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/62313b85e7fb486b271718d1_big-data-blue-waves-960x540.jpg",
            alt: "Big data blue waves",
        },
        vidId: "eSjT0LOLSnE",
    },
    {
        href: "",
        label: "LZ 2647 Intro to LogZilla Rules",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/62316edbe1655d3ce204078d_cloud-metal-wheel-circling-960x540.jpg",
            alt: "Cloud metal wheel circling",
        },
        vidId: "YdF97GZbwQI",
    },
    {
        href: "",
        label: "LZ-2422: LogZilla User Tags/Metadata Tracking",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/62376614e85f6f7d98ff6f58_robot-finger-typing-on-keyboard-960x5540.jpg",
            alt: "Robot Hand Typing on Laptop",
        },
        vidId: "NKM-cj95J8A",
    },
    {
        href: "",
        label: "LZ-2427 LogZilla Triggers Deep Dive",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623757d154f15dffb8d87564_rising-splunk-costs-960x540.jpg",
            alt: "Rising Splunk Costs",
        },
        vidId: "f-DTwIxlUuE",
    },
    {
        
        label: "LZ-2424 LogZilla Dashboards",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6233d3ab06f90d2dd0066eb1_iot-spinners-wifi-cloud-zero-trust-960x540.jpg",
            alt: "IOT, Spinners, Wifi, Cloud, Zero-trust",
        },
        vidId: "eSVLXP96nKw",
    },
    {
        
        label: "LZ-2637 - Deep Dive: LogZilla Lua Rules Coding",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6231358edf29f32fdab2e1e8_automoation-960x540.jpg",
            alt: "Automation",
        },
        vidId: "QcvaD2g1Urc",
    },
    {
        label: "LZ-2418: GeoIP Lookups in LogZilla",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/62316fc106f001f823c6a550_compliance-gear-wheel-960x540.jpg",
            alt: "Compliance gear wheel",
        },
        vidId: "3EKapGYf46w",
    },
    {
        
        label: "LZ-2642 LogZilla Apps and Rules",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623a2c476a793fc4b01b8ef7_turbo-charge-siem-lz-logo-960x540.webp",
            alt: "Turbo Charge with LZ Logo HERO",
        },
        vidId: "70fODLQXpBs",
    },
    {
        
        label: "LZ-2650 Intro to LogZilla Triggers",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/62314f667f9d2a751add39d6_business-buildings-and-networks-960x540.jpg",
            alt: "Business transformation hallways",
        },
        vidId: "RyCxGdhyjjU",
    },
    {
        
        label: "The LogZilla App Store",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623760a7b811e659c6d7047e_watchguard-webinar-image-only-960x540.jpg",
            alt: "Watchguard Webinar Logo Only",
        },
        vidId: "wD5dNFScH3k",
    },
    {
        label: "LZ-2640 - LogZilla API Intro",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6237516fa6f11960c4faede5_phishing-hook-blue-background-960x540.jpg",
            alt: "Phishing Hook Blue Background",
        },
        vidId: "mXVZg16z0DM",
    },
    {
        label: "LZ-2426 LogZilla Event Correlation",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623757a454f15d4180d8672f_lz-circle-logo-on-multicolor-background-960x540.jpg",
            alt: "LZ Circle Logo on Multicolor Background",
        },
        vidId: "4eNEvCIbbic",
    },
    {
        label: "LZ-2652 - LogZilla Architecture Overview",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623762ba8cf9c613c7c7a615_identiy-engine-wheel-blue-green-960x540.jpg",
            alt: "Engine Identity Wheel Blue Green",
        },
        vidId: "D0p06dlITe8",
    },
    {
        label: "Understanding Syslog: Message Structure, Protocols, and Implementation",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623764c98acf4f1923886338_ai-black-and-gold-background-960x540.jpg",
            alt: "Artificial Intelligence",
        },
        vidId: "vxdXtcpPEgY",
    },
    {
        label: "LZ-2651 - Advanced Pattern Matching, Processing Logic, and Operational Use",
        img: {
            src: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6239ffb51775b903f9c63a41_dashboard-multiple-960x540.webp",
            alt: "LogZilla Dashboard Multiple",
        },
        vidId: "Qix-DTAMVH8",
    }
   
];

export default function University() {
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
                        <span className="relative">University</span>
                    </span>
                </h1>
            </section>
            {/* Featured Webinar */}
            <section className="mb-12 flex justify-center bg-gradient-to-r from-slate-300 via-slate-900 to-slate-300 py-10">
                <a
                    target="_blank"
                    href={`https://www.youtube.com/watch?v=${webinars[0].vidId}`}
                    className="relative w-full max-w-7xl overflow-hidden group min-h-[700px] bg-cover bg-center border-2 border-amber-50"
                    style={{
                        backgroundImage: `url(${webinars[0].img.src})`,
                    }}
                >
                    <div className="absolute inset-0 hover:bg-white/50 transition-colors" />
                    <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                        <div className="text-white text-2xl font-bold mb-2 drop-shadow">
                            {webinars[0].label}
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
                        .filter((_, i) => i !== 0)
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
                                        <div className="h-1/5">
                                            <div className="text-white text-xl font-bold drop-shadow">
                                                {w.label}
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
