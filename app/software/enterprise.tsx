import React from "react";
import Image from "next/image";

const EnterpriseIntegration: React.FC = () => (
    <section className="bg-[#fafafa] container mx-auto text-gray-700 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-16">
            <div className="md:flex-1/2 sm:flex-1 md:pr-6">
                <p className="text-3xl">Complete Visibility & Context</p>
                <p className="text-xl py-4 text-justify">
                    LogZilla integrates with external sources and security tools
                    to provide comprehensive log context and enriched metadata.
                    Reduce false positives, accelerate investigations, and
                    enable intelligent automation with full visibility across
                    your entire infrastructure and security stack.
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
                <p className="text-3xl">SIEM Cost Optimization</p>
                <p className="text-xl py-4 text-justify">
                    Deploy LogZilla as a powerful SIEM pre-processor to
                    dramatically reduce licensing costs and improve performance.
                    Advanced deduplication, data enrichment, and intelligent
                    routing analyze and filter massive log volumes before they
                    reach your SIEM, delivering cleaner data and faster threat
                    detection at enterprise scale.
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

export default EnterpriseIntegration;
