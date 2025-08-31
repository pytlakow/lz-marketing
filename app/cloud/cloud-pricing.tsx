"use client";
import React from "react";
import Button from "../components/button";

export function CloudPricing() {
    const [isYearly, setIsYearly] = React.useState(false);
    const [isClaimOpen, setIsClaimOpen] = React.useState(false);
    const [copyPromoButtonText, setCopyPromoButtonText] = React.useState("Copy");

    // Ref for the claim popup
    const claimPopupRef = React.useRef<HTMLDivElement>(null);

    // Close claim popup when clicking outside
    React.useEffect(() => {
        if (!isClaimOpen) return;
        function handleClickOutside(event: MouseEvent) {
            if (
                claimPopupRef.current &&
                !claimPopupRef.current.contains(event.target as Node)
            ) {
                setIsClaimOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isClaimOpen]);

    return (
        <>
            <section className="bg-slate-100 border-y border-slate-200 mb-6 text-slate-700">
                <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                    {/* Remove vertical space above the "claimed" badge by using absolute positioning */}
                    {/* <div className="relative h-0 w-0 flex justify-end">
                        <div
                            className="absolute right-0 w-[150px] bg-orange-700 text-white font-bold text-lg px-8 py-2 rounded shadow-lg"
                            style={{
                                transform: "rotate(45deg)",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                            }}
                        >
                            171 claimed
                        </div>
                    </div> */}
                    {/* Example: Centered horizontally using absolute positioning */}
                    <div className="absolute top-[360px] left-1/2 translate-x-[200px] max-md:hidden">
                        <div
                            className="w-[150px] bg-slate-700 text-white font-bold text-lg px-8 py-2 rounded shadow-lg"
                            style={{
                                transform: "rotate(30deg)",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                            }}
                        >
                            {(() => {
                                // Start at 171 on June 1, 2024, end at ~500 on Dec 1, 2025
                                const startDate = new Date("2024-08-26T00:00:00Z").getTime();
                                const endDate = new Date("2025-12-01T00:00:00Z").getTime();
                                const now = Date.now();
                                const min = 171;
                                const max = 500;
                                if (now <= startDate) return min;
                                if (now >= endDate) return max;
                                const progress = (endDate - now) / (endDate - startDate) > 1 ? 1 : (endDate - now) / (endDate - startDate);
                                const output = 100 + (389 * progress);
                                const eased = 1 - Math.pow(1 - progress, 2);
                                return Math.round(output);
                                
                            })()} claimed
                        </div>
                    </div>
                    <div className="flex justify-center mb-2">
                        <span className="text-4xl font-bold  animate-pulse">
                            Launch Special!
                        </span>
                    </div>
                    <div>
                        <h2 className="text-xl   text-center">
                            50% off your first billing cycle, only first 500
                            customers!
                        </h2>
                        <h2 className="text-xl text-center">
                            Save up to $750/month or $7,495/year!
                        </h2>
                        <h2 className="text-xl text-center">
                            All Apps included on all tiers for a limited time
                        </h2>
                        <div className="flex justify-center w-full mt-4">
                            <Button
                                className=" shadow-md"
                                onClick={() => setIsClaimOpen(true)}
                            >
                                Claim
                            </Button>
                            
                            {isClaimOpen && (
                              
                                <div className="absolute z-50 top-[560px] left-1/2 -translate-x-1/2 bg-white border border-slate-300 rounded-lg shadow-lg p-4">
                                    
                                    <p className="mb-4 text-slate-700 text-xl">
                                        Use code <span className="font-bold text-slate-900">LAUNCH50</span> at checkout.
                                    </p>
                                    <div className="flex flex-col gap-3">
                                        <Button
                                            className=" shadow-md"
                                            onClick={() => {
                                                navigator.clipboard.writeText("LAUNCH50");
                                                setCopyPromoButtonText("Copied!");
                                                setTimeout(() => {setCopyPromoButtonText("Copy"); setIsClaimOpen(false); }, 500);
                                            }}
                                        >
                                            {copyPromoButtonText}
                                        </Button>
                                    </div>
                                </div>
                                
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full flex flex-col items-center">
                <h2 className="text-4xl text-slate-900 mb-2 text-center">
                    Pricing that scales with your data
                </h2>
                <p className="text-xl text-slate-600 mb-4 text-center max-w-2xl">
                    Plans are based on maximum events per day. Forwarding to
                    downstream SIEMs is available on Business.
                </p>

                <div className="flex justify-center mb-4">
                    {/*
                  Add state to track pricing mode (monthly/yearly)
                */}
                    <Button
                        onClick={() => setIsYearly(false)}
                        className={
                            isYearly
                                ? "bg-white border border-orange-500 !text-orange-500 rounded-r-none text-lg font-bold"
                                : "rounded-r-none text-lg font-bold"
                        }
                    >
                        Monthly
                    </Button>
                    <Button
                        onClick={() => setIsYearly(true)}
                        className={
                            !isYearly
                                ? "bg-white border border-orange-500 !text-orange-500 rounded-l-none text-lg font-bold"
                                : "rounded-l-none text-lg font-bold"
                        }
                    >
                        Yearly
                    </Button>
                </div>
                <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center">
                    {/* SMB Appliance */}
                    <div className="flex-1 bg-white rounded-xl shadow-md py-8 flex flex-col items-center border border-slate-200">
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <div className="px-8">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                                        Starter
                                    </h3>

                                    <span className="text-2xl font-semibold text-orange-600 mb-1">
                                        {isYearly
                                            ? "$3,590/year"
                                            : "$399/month"}
                                    </span>
                                    <p className="text-slate-600 mb-6 text-xl border-b border-slate-200 pb-4">
                                        Best for growing businesses. Includes 5
                                        million events/day.
                                    </p>
                                </div>

                                <ul className="text-slate-700 mb-6 mx-8 space-y-2 self-start">
                                    <li>
                                        ✔ 100 GB storage with 30‑day retention
                                    </li>
                                    <li>✔ Pre‑built dashboards and alerts</li>
                                    <li>✔ Real‑time log search</li>
                                    <li>✔ Ingest API token included</li>
                                    <li>✔ Unlimited users</li>
                                </ul>
                                <ul className="mb-6 space-y-2 self-start px-8 py-4 bg-orange-50 w-full border-y border-orange-200">
                                    <li>Launch Special:</li>
                                    <li>✔ LDAP & RBAC included</li>
                                </ul>
                                <ul className=" mb-6 space-y-2 self-start px-8 py-4 bg-slate-50 w-full border-y border-slate-200">
                                    <li>Available in Business:</li>
                                    <li>✔ Advanced forwarder to SIEM</li>
                                    <li>✔ Admin/Query API</li>
                                </ul>
                                <ul className="text-slate-700 mb-6 space-y-2 self-start px-8 py-4 bg-slate-50 w-full border-y border-slate-200">
                                    <li>On request:</li>
                                    <li>✔ Event Correlation</li>
                                    <li>✔ AI Copilot</li>
                                    <li>
                                        <a
                                            href="/resources/contact"
                                            className="text-orange-500 underline cursor-pointer"
                                        >
                                            Contact us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex w-full px-8">
                                <Button
                                    href={
                                        isYearly
                                            ? "https://pay.logzilla.cloud/b/5kQdR84XN8oq51A3eyb7y09"
                                            : "https://pay.logzilla.cloud/b/6oUbJ0gGv8oq1PocP8b7y0a"
                                    }
                                    target="_blank"
                                    className="w-full"
                                >
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* MSE Appliance */}
                    <div className="flex-1 bg-white rounded-xl shadow-md py-8 flex flex-col items-center border border-slate-200">
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <div className="px-8">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                                        Pro
                                    </h3>
                                    <span className="text-2xl font-semibold text-orange-600 mb-1">
                                        {isYearly
                                            ? "$7,990/year"
                                            : "$799/month"}
                                    </span>
                                    <p className="text-slate-600 mb-6 text-xl border-b border-slate-200 pb-4">
                                        Best for growing businesses. Includes 5
                                        million events/day.
                                    </p>
                                </div>

                                <ul className="text-slate-700 mb-6 space-y-2 self-start px-8">
                                    <li>
                                        ✔ 400 GB storage with 30‑day retention
                                    </li>
                                    <li>✔ One‑click app integrations</li>
                                    <li>✔ Vendor‑specific parsing rules</li>
                                    <li>✔ Automated alerts</li>
                                    <li>✔ Ingest API token included</li>
                                    <li>✔ Unlimited users</li>
                                </ul>
                                <ul className="mb-6 space-y-2 self-start px-8 py-4 bg-orange-50 w-full border-y border-orange-200">
                                    <li>Launch Special:</li>
                                    <li>✔ LDAP & RBAC included</li>
                                </ul>
                                <ul className=" mb-6 space-y-2 self-start px-8 py-4 bg-slate-50 w-full border-y border-slate-200">
                                    <li>Available in Business:</li>
                                    <li>✔ Advanced forwarder to SIEM</li>
                                    <li>✔ Admin/Query API</li>
                                </ul>
                                <ul className="text-slate-700 mb-6 space-y-2 self-start px-8 py-4 bg-slate-50 w-full border-y border-slate-200">
                                    <li>On request:</li>
                                    <li>✔ Event Correlation</li>
                                    <li>✔ AI Copilot</li>
                                    <li>
                                        <a
                                            href="/resources/contact"
                                            className="text-orange-500 underline cursor-pointer"
                                        >
                                            Contact us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex w-full px-8">
                                <Button
                                    href={
                                        isYearly
                                            ? "https://pay.logzilla.cloud/b/5kQbJ03TJfQSalU8ySb7y0c"
                                            : "https://pay.logzilla.cloud/b/5kQdR875VcEGfGedTcb7y0b"
                                    }
                                    className="w-full"
                                    target="_blank"
                                >
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* Enterprise Appliance */}
                    <div className="flex-1 bg-white rounded-xl shadow-md py-8 flex flex-col items-center border border-orange-400 relative">
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-lg font-bold px-4 py-1 rounded-full shadow">
                            Most Popular
                        </div>
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <div className="px-8">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                                        Business
                                    </h3>
                                    <span className="text-2xl font-semibold text-orange-600 mb-1">
                                        {isYearly
                                            ? "$14,990/year"
                                            : "$1,499/month"}
                                    </span>
                                    <p className="text-slate-600 mb-6 text-xl border-b border-slate-200 pb-4">
                                        Optimized for growing companies managing
                                        multiple systems. Includes 15 million
                                        events/day.
                                    </p>
                                </div>
                                <ul className="text-slate-700 mb-6 space-y-3 px-8 self-start text-lg">
                                    <li>
                                        ✔ 800 GB storage with 30‑day retention
                                    </li>
                                    <li>✔ One‑click app integrations</li>
                                    <li>✔ Custom dashboards</li>
                                    <li>
                                        ✔ Pre‑built parsing for 20+ enterprise
                                        vendors
                                    </li>
                                    <li>
                                        ✔ Thousands of pre‑configured alerting
                                        rules
                                    </li>
                                    <li>
                                        ✔ Advanced automations (email, webhook,
                                        notification, notes, flags)
                                    </li>
                                    <li>
                                        ✔ Advanced log forwarding capabilities
                                    </li>
                                    <li>✔ Admin/Query API access</li>
                                    <li className="text-orange-500">
                                        ✔ LDAP & RBAC
                                    </li>
                                    <li>✔ Unlimited users</li>
                                </ul>
                                <ul className="text-slate-700 mb-6 space-y-2 self-start px-8 py-4 bg-slate-50 w-full border-y border-slate-200">
                                    <li>On request:</li>
                                    <li>✔ Event Correlation</li>
                                    <li>✔ AI Copilot</li>
                                    <li>
                                        <a
                                            className="text-orange-500 underline cursor-pointer"
                                            href="/resources/contact"
                                        >
                                            Contact us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex w-full px-8">
                                <Button
                                    href={
                                        isYearly
                                            ? "https://pay.logzilla.cloud/b/8x2eVcai7awyfGe9CWb7y0e"
                                            : "https://pay.logzilla.cloud/b/dRm5kC61RdIK3XwcP8b7y0d"
                                    }
                                    target="_blank"
                                    className="w-full"
                                >
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-slate-500 mt-10 text-center max-w-3xl">
                    All appliance configurations include comprehensive
                    documentation and support resources. For detailed
                    specifications or custom requirements, please contact our
                    team below to discuss your specific needs.
                </p>
            </section>
        </>
    );
}

export default CloudPricing;
