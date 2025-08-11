import React from "react";

const pricingPlans = [
    {
        name: "Free",
        price: "$0",
        features: [
            "1 Project",
            "Basic Support",
            "Community Access",
        ],
    },
    {
        name: "Pro",
        price: "$19/mo",
        features: [
            "10 Projects",
            "Priority Support",
            "Advanced Analytics",
        ],
    },
    {
        name: "Enterprise",
        price: "Contact Us",
        features: [
            "Unlimited Projects",
            "Dedicated Support",
            "Custom Solutions",
        ],
    },
];

export default function PricingPage() {
    return (
        <main className="max-w-4xl mx-auto py-16 px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Pricing</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan) => (
                    <div
                        key={plan.name}
                        className="border rounded-lg p-6 flex flex-col items-center shadow"
                    >
                        <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
                        <div className="text-3xl font-bold mb-4">{plan.price}</div>
                        <ul className="mb-6 space-y-2">
                            {plan.features.map((feature) => (
                                <li key={feature} className="text-gray-700">
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="mt-auto px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                            {plan.name === "Free" ? "Get Started" : "Choose Plan"}
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}