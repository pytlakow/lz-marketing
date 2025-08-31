'use client'
import React from "react";
import Button from "../components/button";
import Icon from "../components/icons";
import { InlineWidget } from "react-calendly";

const Meeting: React.FC = () => {
    return (
        // <section className="bg-white flex flex-col justify-center items-center py-16">
        //     <p className="text-3xl ">Lets talk.</p>
        //     <p className="text-xl pt-2 pb-10 text-center">
        //         Contact us to learn how LogZilla can transform your log
        //         management and security operations.
        //     </p>
        //     <Button>
        //         <span className="mr-2">
        //             <Icon name="calendar" />
        //         </span>
        //         Get a Personalized Demo
        //     </Button>
        // </section>
        <section id="schedule-consultation" className="bg-white  text-gray-700 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start py-16 max-w-7xl mx-auto">
                <div className="md:flex-1/2 sm:flex-1 md:pr-6">
                    <h2 className="text-4xl text-gray-900 mb-4">
                        Schedule a Consultation
                    </h2>
                    <p className="text-lg text-gray-500 mb-8">
                        Let us help you find the right appliance configuration
                        for your specific requirements.
                    </p>
                    <div className="bg-slate-100 rounded-lg shadow-sm p-6 border-l-2 border-orange-500 mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            What to Expect:
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center">
                                <span className="text-orange-600 mr-2">✓</span>
                                Technical requirements assessment
                            </li>
                            <li className="flex items-center">
                                <span className="text-orange-600 mr-2">✓</span>
                                Appliance sizing recommendations
                            </li>
                            <li className="flex items-center">
                                <span className="text-orange-600 mr-2">✓</span>
                                Deployment planning guidance
                            </li>
                            <li className="flex items-center">
                                <span className="text-orange-600 mr-2">✓</span>
                                Custom configuration options
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="relative md:flex-1/2 py-6">
                    <InlineWidget
                        url="https://calendly.com/teamneo/logzilla-discovery?hide_event_type_details=1&hide_gdpr_banner=1"
                        pageSettings={{
                            backgroundColor: 'ffffff', // white
                            primaryColor: 'ff6600',    // orange
                            textColor: '777777',       // orange
                            hideEventTypeDetails: false,
                            hideLandingPageDetails: false,
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Meeting;
