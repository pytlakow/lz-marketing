import React from "react";
import Button from "../components/button";
import Icon from "../components/icons";
import Image from "next/image";

const Features_2: React.FC = () => {
    return (
        <section className="border-t border-gray-200 bg-gray-50 ">
            <div className="flex flex-col md:flex-row justify-between items-center py-16 container mx-auto text-gray-700 max-w-7xl px-4 sm:px-6 lg:px-8">
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
                <div className="md:flex-1/2 sm:flex-1 md:pl-6">
                    <p className="text-3xl">
                        Real-Time Cyber Intelligence
                    </p>
                    <p className="text-xl py-4 text-justify">
                        Rapid data processing for immediate situational awareness.
                    </p>
                    <p className="text-3xl">Al-Driven Operations</p>
                    <p className="text-xl py-4">
                        Automated decision-making in dynamic environments.
                    </p>
                    <p className="text-3xl">Scalable and Portable</p>
                    <p className="text-xl py-4">
                        Easily adaptable to diverse operational scales and settings.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features_2;
