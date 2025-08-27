"use client";
import React from "react";
import Button from "../components/button";

export function CloudPricing() {
    const [isYearly, setIsYearly] = React.useState(false);
    return (
        <>
            {/* <section className="">
                <stripe-pricing-table
                    pricing-table-id="prctbl_1QgxNABjYBeFaZwP2Gqme3he"
                    publishable-key="pk_live_51Pyd2xBjYBeFaZwPNBMnLtw2hZuessmCU7m7EkTzedssntJt4NeC3UmT8iTI1AsMFeCW4mr6e0NfdT2n5BdkIG8s00u32BBL9M"
                ></stripe-pricing-table>
            </section> */}
            <section className="w-full flex flex-col items-center">
                <h2 className="text-4xl text-slate-900 mb-4 text-center">
                    Pricing that scales with your data
                </h2>
                <p className="text-xl text-slate-600 mb-10 text-center max-w-2xl">
                    Plans are based on maximum events per day. Forwarding to
                    downstream SIEMs is available on Business.
                </p>

                <div className="flex justify-center mb-8">
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

                            <Button className="rounded-none">Subscribe</Button>
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
                            <Button className="rounded-none">Subscribe</Button>
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
                            <Button className="rounded-none">Subscribe</Button>
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
            <section className="w-full flex flex-col items-center mt-16" id="features">
                <h2 className="text-3xl text-slate-900 mb-6 text-center">Compare features</h2>
                <div className="overflow-x-auto w-full max-w-6xl mb-6">
                    <table className="min-w-full bg-white rounded-xl shadow border border-slate-200 text-lg">
                        <thead>
                            <tr className="bg-slate-50">
                                <th className="py-3 px-4 text-left font-semibold text-slate-700">Feature</th>
                                <th className="py-3 px-4 text-center font-semibold text-slate-700">Starter</th>
                                <th className="py-3 px-4 text-center font-semibold text-slate-700">Pro</th>
                                <th className="py-3 px-4 text-center font-semibold text-slate-700">Business</th>
                                <th className="py-3 px-4 text-center font-semibold text-slate-700">Enterprise</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Unlimited users", "✔", "✔", "✔", "✔"],
                                ["Deduplication engine", "✔", "✔", "✔", "✔"],
                                ["Dashboards & widgets", "✔", "✔", "✔", "✔"],
                                ["Triggers (email, webhook, notification, notes, flags)", "✔", "✔", "✔", "✔"],
                                ["Ingest API token", "✔", "✔", "✔", "✔"],
                                ["Automatic archive search (live + archive)", "✔", "✔", "✔", "✔"],
                                ["User tags (prebuilt from Apps)", "✔", "✔", "✔", "✔"],
                                ["Vendor parsing rules", "", "✔", "✔", "✔"],
                                ["Advanced log forwarder", "", "", "✔", "✔"],
                                ["Admin/Query API", "", "", "✔", "✔"],
                                ["Execute script (containerized)", "", "", "", "✔"],
                                ["Custom user tags (via rules)", "", "", "", "✔"],
                                ["Custom parsing (rewrite/Lua rules)", "", "", "", "✔"],
                                ["Event correlation", "", "", "", "✔"],
                                ["AI Copilot", "", "", "", "✔"],
                                ["Max events/day", "2M", "5M", "15M", "✔"],
                                ["Storage & retention", "100 GB, 30 days", "400 GB, 30 days", "800 GB, 30 days", "✔"],
                                ["Support", "Email", "Priority email", "Slack + Remote Hands-on", "✔"],
                            ].map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                    <td className="py-2 px-4 text-slate-700">{row[0]}</td>
                                    {row.slice(1).map((cell, j) => (
                                        <td
                                            key={j}
                                            className={`py-2 px-4 text-center ${!cell ? "text-slate-400" : "text-slate-700"}`}
                                            aria-label={!cell ? "Not available" : undefined}
                                            title={!cell ? "Not available" : undefined}
                                        >
                                            {cell || <span className="text-slate-300">—</span>}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-slate-500 text-sm max-w-3xl text-center mt-2">
                    Launch Special: Appstore, LDAP, and RBAC are included on all tiers for a limited time. Some features may move to Pro/Business after the launch period. Launch Special applies to new customers only. Discount applies to first billing cycle only.
                </p>
            </section>
        </>
    );
}

export default CloudPricing;
