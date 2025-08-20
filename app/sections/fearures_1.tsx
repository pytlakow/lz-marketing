import React from "react";
import Image from "next/image";

const Features_1: React.FC = () => {
    return (
                    <section className="bg-[#fafafa] container mx-auto text-gray-700 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center py-16">
                    <div className="md:flex-1/2 sm:flex-1 md:pr-6">
                        <p className="text-3xl">
                            Log Management Made Easy
                        </p>
                        <p className="text-xl py-4 text-justify">
                            LogZilla centralizes and manages logs in real-time
                            with advanced features like deduplication,
                            normalization, event correlation, and automation to
                            streamline incident remediation and reduce downtime.
                        </p>
                        <div className="relative md:hidden pb-6">
                            <Image
                                src="/dash.png"
                                alt="Network"
                                width={1759}
                                height={1671}
                            />
                            <div
                                className="absolute left-0 bottom-0 w-full"
                                style={{
                                    height: "45%",
                                    background:
                                        "linear-gradient(to top, #fafafa 0%, transparent 100%)",
                                    pointerEvents: "none",
                                }}
                            />
                        </div>
                        <p className="text-2xl">
                            Scalable and Flexible
                        </p>
                        <p className="text-xl py-4 text-justify">
                            LogZilla allows you to scale seamlessly as your
                            business grows and adapt to various operational
                            needs without hassle.
                        </p>
                        <p className="text-2xl">Know Everything</p>
                        <p className="text-xl py-4 text-justify">
                            LogZilla integrates with external sources to provide
                            detailed context, ensuring full visibility, reducing
                            false positives, speeding investigations, and
                            enabling automation.
                        </p>
                        <p className="text-2xl">SIEM Turbocharger</p>
                        <p className="text-xl py-4 text-justify">
                            LogZilla can be positioned directly in front as a
                            pre-processor to add enriched metadata, remove
                            duplicates, and reduce SIEM costs by analyzing,
                            deduplicating, collecting, enriching, and routing
                            data at any scale.
                        </p>
                    </div>
                    <div className="relative max-md:hidden md:flex-1/2 py-6">
                        <Image
                            src="/dash.png"
                            alt="Network"
                            width={1759}
                            height={1671}
                            unoptimized
                        />
                        <div
                            className="absolute left-0 bottom-0 w-full"
                            style={{
                                height: "45%",
                                background:
                                    "linear-gradient(to top, #fafafa 0%, transparent 100%)",
                                pointerEvents: "none",
                            }}
                        />
                    </div>
                </div>
            </section>
    );
};

export default Features_1;
