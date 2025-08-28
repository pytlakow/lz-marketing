import React from 'react';


const CloudTable: React.FC = () => {
    return (
        <section
                className="w-full flex flex-col items-center mt-16"
                id="features"
            >
                <h2 className="text-3xl text-slate-900 mb-6 text-center">
                    Compare features
                </h2>
                <div className="overflow-x-auto w-full max-w-6xl mb-6">
                    <table className="min-w-full bg-white rounded-xl shadow border border-slate-200 text-lg">
                        <thead>
                            <tr className="bg-slate-50">
                                <th className="py-3 px-4 text-left font-semibold text-slate-700">
                                    Feature
                                </th>
                                <th className="py-3 px-4 text-center font-semibold text-slate-700">
                                    Starter
                                </th>
                                <th className="py-3 px-4 text-center font-semibold text-slate-700">
                                    Pro
                                </th>
                                <th className="py-3 px-4 text-center font-semibold text-slate-700">
                                    Business
                                </th>
                                <th className="py-3 px-4 text-center font-semibold text-slate-700">
                                    Enterprise
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Unlimited users", "✔", "✔", "✔", "✔"],
                                ["Deduplication engine", "✔", "✔", "✔", "✔"],
                                ["Dashboards & widgets", "✔", "✔", "✔", "✔"],
                                [
                                    "Triggers (email, webhook, notification, notes, flags)",
                                    "✔",
                                    "✔",
                                    "✔",
                                    "✔",
                                ],
                                ["Ingest API token", "✔", "✔", "✔", "✔"],
                                [
                                    "Automatic archive search (live + archive)",
                                    "✔",
                                    "✔",
                                    "✔",
                                    "✔",
                                ],
                                [
                                    "User tags (prebuilt from Apps)",
                                    "✔",
                                    "✔",
                                    "✔",
                                    "✔",
                                ],
                                ["Vendor parsing rules", "", "✔", "✔", "✔"],
                                ["Advanced log forwarder", "", "", "✔", "✔"],
                                ["Admin/Query API", "", "", "✔", "✔"],
                                [
                                    "Execute script (containerized)",
                                    "",
                                    "",
                                    "",
                                    "✔",
                                ],
                                [
                                    "Custom user tags (via rules)",
                                    "",
                                    "",
                                    "",
                                    "✔",
                                ],
                                [
                                    "Custom parsing (rewrite/Lua rules)",
                                    "",
                                    "",
                                    "",
                                    "✔",
                                ],
                                ["Event correlation", "", "", "", "✔"],
                                ["AI Copilot", "", "", "", "✔"],
                                ["Max events/day", "2M", "5M", "15M", "✔"],
                                [
                                    "Storage & retention",
                                    "100 GB, 30 days",
                                    "400 GB, 30 days",
                                    "800 GB, 30 days",
                                    "✔",
                                ],
                                [
                                    "Support",
                                    "Email",
                                    "Priority email",
                                    "Slack + Remote Hands-on",
                                    "✔",
                                ],
                            ].map((row, i) => (
                                <tr
                                    key={i}
                                    className={
                                        i % 2 === 0 ? "bg-white" : "bg-slate-50"
                                    }
                                >
                                    <td className="py-2 px-4 text-slate-700">
                                        {row[0]}
                                    </td>
                                    {row.slice(1).map((cell, j) => (
                                        <td
                                            key={j}
                                            className={`py-2 px-4 text-center ${
                                                !cell
                                                    ? "text-slate-400"
                                                    : "text-slate-700"
                                            }`}
                                            aria-label={
                                                !cell
                                                    ? "Not available"
                                                    : undefined
                                            }
                                            title={
                                                !cell
                                                    ? "Not available"
                                                    : undefined
                                            }
                                        >
                                            {cell || (
                                                <span className="text-slate-300">
                                                    —
                                                </span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-slate-500 text-sm max-w-3xl text-center mt-2">
                    Launch Special: Appstore, LDAP, and RBAC are included on all
                    tiers for a limited time. Some features may move to
                    Pro/Business after the launch period. Launch Special applies
                    to new customers only. Discount applies to first billing
                    cycle only.
                </p>
            </section>
    );
};

export default CloudTable;