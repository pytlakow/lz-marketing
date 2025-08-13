"use client";
import React from "react";
import Button from "../components/button";
import Icon from "../components/icons";
import Image from "next/image";
import { useState } from "react";

const Feedback: React.FC = () => {
    return (
        <section className="border-t border-gray-200 bg-gray-100 flex flex-col justify-center items-center py-16 px-4">
            <p className="text-3xl">
                There&apos;s A Reason Why 98% Of Our Customers Renew Annually.
            </p>
            <p className="text-xl pt-2 pb-10 text-center">
                Everyone is changing their life with Logzilla.
            </p>
            <TestimonialCarousel />
        </section>
    );
};

export default Feedback;

const TestimonialCarousel: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () =>
        setCurrent((current - 1 + testimonials.length) % testimonials.length);
    const nextSlide = () => setCurrent((current + 1) % testimonials.length);
    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);
    return (
        <>
            <div className="max-sm:hidden w-full max-w-4xl mx-auto relative">
                <div className="overflow-hidden rounded shadow-lg bg-white min-h-[300px] relative">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className={
                                "transition-all duration-500 ease-in-out absolute w-full h-full flex flex-row items-center justify-center " +
                                (idx === current
                                    ? "opacity-100 z-10"
                                    : "opacity-0 pointer-events-none z-0")
                            }
                            aria-hidden={idx !== current}
                        >
                            <div className="p-6">
                                <img
                                    src={t.quoteIcon}
                                    alt=""
                                    className="w-10 h-10"
                                />
                                <p className="text-lg md:text-xl text-gray-800 font-medium text-justify my-6">
                                    {t.quote}
                                </p>
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={t.companyImg}
                                        alt=""
                                        className="w-12 h-12 rounded-full border border-white"
                                    />
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            {t.author}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {t.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img
                                src={t.bgImg}
                                alt=""
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-4 gap-2">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            className={
                                "w-3 h-3 rounded-full " +
                                (idx === current
                                    ? "bg-orange-500"
                                    : "bg-gray-300")
                            }
                            onClick={() => setCurrent(idx)}
                            aria-label={`Show testimonial ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
            <div className="sm:hidden w-full max-w-4xl mx-auto relative">
                <div className="overflow-hidden rounded bg-white shadow-lg min-h-[400px] relative">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className={
                                "transition-all duration-500 ease-in-out absolute w-full h-full flex flex-row items-start justify-center " +
                                (idx === current
                                    ? "opacity-100 z-10"
                                    : "opacity-0 pointer-events-none z-0")
                            }
                            aria-hidden={idx !== current}
                        >
                            <div className="p-6">
                                <img
                                    src={t.quoteIcon}
                                    alt=""
                                    className="w-10 h-10"
                                />
                                <p className="text-lg md:text-xl text-gray-800 font-medium text-justify my-6">
                                    {t.quote}
                                </p>
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={t.companyImg}
                                        alt=""
                                        className="w-12 h-12 rounded-full border border-white"
                                    />
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            {t.author}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {t.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-4 gap-2">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            className={
                                "w-3 h-3 rounded-full " +
                                (idx === current
                                    ? "bg-orange-500"
                                    : "bg-gray-300")
                            }
                            onClick={() => setCurrent(idx)}
                            aria-label={`Show testimonial ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

// const TestimonialCard: React.FC = () => {
//             const [current, setCurrent] = useState(0);

//             return (
//                 <div className="w-full max-w-3xl mx-auto relative min-h-[400px]">
//                     <div className="overflow-hidden rounded-lg shadow-lg bg-white min-h-[350px] relative">
//                         {testimonials.map((t, idx) => (
//                             <div
//                                 key={idx}
//                                 className={
//                                     'transition-all duration-500 ease-in-out absolute w-full h-full flex flex-col items-center justify-center px-6 py-10 ' +
//                                     (idx === current ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0")
//                                 }
//                                 aria-hidden={idx !== current}
//                             >
//                                 <img src={t.quoteIcon} alt="" className="w-10 h-10 mb-4" />
//                                 <p className="text-lg md:text-xl text-gray-800 font-medium text-center mb-6">{t.quote}</p>
//                                 <div className="flex items-center gap-4 mb-4">
//                                     <img src={t.companyImg} alt="" className="w-12 h-12 rounded-full border border-white" />
//                                     <div>
//                                         <div className="font-semibold text-gray-900">{t.author}</div>
//                                         <div className="text-sm text-gray-500">{t.role}</div>
//                                     </div>
//                                 </div>
//                                 <img src={t.bgImg} alt="" className="w-24 h-24 object-cover rounded-lg border" />
//                             </div>
//                         ))}
//                     </div>
//                     <div className="flex justify-center mt-4 gap-2">
//                         {testimonials.map((_, idx) => (
//                             <button
//                                 key={idx}
//                             className={
//                                 'w-3 h-3 rounded-full ' + (idx === current ? "bg-orange-500" : "bg-gray-300")
//                             }
//                             onClick={() => setCurrent(idx)}
//                             aria-label={`Show testimonial ${idx + 1}`}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             );
//         };

const testimonials = [
    {
        quote: "This is like in my top five tools - everywhere I go from now on, this is gonna be one of my tools.",
        author: "Darren Cantrill",
        role: "Information Technology Manager",
        companyImg:
            "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/66c672791d77d50046bdd554_Seal_of_the_Hawaii_Department_of_Transportation-100x100.png",
        quoteIcon:
            "https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a91e612aae8_quote-mark.svg",
        bgImg: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/66c676573e3df09e28f09cb4_transportation-man-on-bus-300x300.webp",
    },
    {
        quote: "Our network teams began making improvements within minutes of installation. Even after 6 months of developing our own homegrown solutions, we couldn’t match what LogZilla delivered from day one.",
        author: "Scott Bulger",
        role: "Sr. Network Reliability Engineer",
        companyImg:
            "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6644d73af0adb9348d7c06cd_Providence-Health-100x100.png",
        quoteIcon:
            "https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a91e612aae8_quote-mark.svg",
        bgImg: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623d0b8684b79bb3094d94ba_hospital-healthcare-300x300.jpg",
    },
    {
        quote: "Our teams are under pressure to handle more data than ever, yet have limited visibility into broader executive goals. Management is seeking alternatives to endless spending, especially as data growth continues to accelerate without any signs of slowing down.",
        author: "Michael Kelly",
        role: "Director of Data Management",
        companyImg:
            "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/66bba068337269cc9f435c92_PowerGrid-100x100.webp",
        quoteIcon:
            "https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a91e612aae8_quote-mark.svg",
        bgImg: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/641c762cde21111fc9128d89_how-veks-uses-logzilla-to-secure-their-power-plant-networks-300x300.webp",
    },
    {
        quote: "Thanks to the team from LogZilla, who have gone to the mat to help make us successful. LogZilla's genius product has allowed us to start making improvements in our environment within minutes, a stark contrast to the six months of development the other tools required",
        author: "Dan Colden",
        role: "Network Engineering",
        companyImg:
            "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6644d73af0adb9348d7c06cd_Providence-Health-100x100.png",
        quoteIcon:
            "https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a91e612aae8_quote-mark.svg",
        bgImg: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623d0b8684b79bb3094d94ba_hospital-healthcare-300x300.jpg",
    },
    {
        quote: "LogZilla’s rapid deployment and immediate usability are unmatched. It's become one of the most valued tools in our inventory for managing network reliability.",
        author: "Tom Feld",
        role: "Sr NetOps Engineer",
        companyImg:
            "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6644d73af0adb9348d7c06cd_Providence-Health-100x100.png",
        quoteIcon:
            "https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a91e612aae8_quote-mark.svg",
        bgImg: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623d1550ca72292ab841ba37_healthcare-with-icons-light-blue-300x300.jpg",
    },
    {
        quote: "The platform’s intuitive design meant that most users required no support to become productive immediately. This tool will definitely become part of our operational support framework.",
        author: "Eric Badley",
        role: "Sr. Network Reliability Engineer",
        companyImg:
            "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6644d73af0adb9348d7c06cd_Providence-Health-100x100.png",
        quoteIcon:
            "https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a91e612aae8_quote-mark.svg",
        bgImg: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623d1550ca72292ab841ba37_healthcare-with-icons-light-blue-300x300.jpg",
    },
    {
        quote: "Man the setup method is fast! If it were any easier, it would have installed by me thinking it.",
        author: "Dave Laramee",
        role: "Senior Network Security Advisor",
        companyImg:
            "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6240bf6aafcb7ab734e8d462_ssense-logo-100x100.png",
        quoteIcon:
            "https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a91e612aae8_quote-mark.svg",
        bgImg: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623d29d4772d20a40c9f4c2c_retail-digital-e-commerce-300x300.jpg",
    },
    {
        quote: "I spent almost my entire holiday chasing down Java patches. The one application I didn’t have to worry about was LogZilla since it has no Java at all.",
        author: "Dan Keeling",
        role: "Senior IT Manager",
        companyImg:
            "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/66bcd8cfe43d592b6d5d3d6d_Summit%20Financial%20100x100.webp",
        quoteIcon:
            "https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a91e612aae8_quote-mark.svg",
        bgImg: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623d048b6fe4b94745b09dba_finance-wall-street-300x300.jpg",
    },
    {
        quote: "Data Storms can never be planned and often result in limited visibility when we most need it. The ability to scale on a single instance is clearly the reason why significant data surges are easily managed.",
        author: "Tim Jackson",
        role: "Sr. Network Architect",
        companyImg:
            "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/66bb8f65162dc8d3257d86d1_NexaSoft%20SOLUTIONS%20100x100.webp",
        quoteIcon:
            "https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a91e612aae8_quote-mark.svg",
        bgImg: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623d29d4772d20a40c9f4c2c_retail-digital-e-commerce-300x300.jpg",
    },
    {
        quote: "LogZilla is the best syslog server I've ever seen. It's truly a great product and obviously built for users by users. The entire LogZilla team is extremely knowledgeable and has often gone above & beyond to help.",
        author: "Eric Thompson",
        role: "Solutions Architect",
        companyImg:
            "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/66bb9a61c9e077b0d9985937_DataForge-100x100.webp",
        quoteIcon:
            "https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a91e612aae8_quote-mark.svg",
        bgImg: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/62324503960e1f69fdc768ed_data-center-server-racks-blue-300x300.jpg",
    },
    {
        quote: "LogZilla is incredibly functional right out of the box. Unlike other solutions like Splunk and ALA [Microsoft’s Azure Log Analytics], which start with a blank screen and require extensive setup, LogZilla’s landing page displays the most actionable events immediately.",
        author: "Jason Turner",
        role: "IT Infrastructure Manager",
        companyImg:
            "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6644d73af0adb9348d7c06cd_Providence-Health-100x100.png",
        quoteIcon:
            "https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a91e612aae8_quote-mark.svg",
        bgImg: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623d0b8684b79bb3094d94ba_hospital-healthcare-300x300.jpg",
    },
    {
        quote: "Using LogZilla as a pre-processor to ServiceNow allowed us to eliminate more than 4,000 false positive tickets per week, dramatically improving our operational efficiency. This integration streamlined our alert management process, enabling our team to focus on true incidents and reduce unnecessary noise.",
        author: "Andy Green",
        role: "IT Ops Manager",
        companyImg:
            "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6240c45b47ac56466bc0fccc_aig-100x100.png",
        quoteIcon:
            "https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a91e612aae8_quote-mark.svg",
        bgImg: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623d048b6fe4b94745b09dba_finance-wall-street-300x300.jpg",
    },
    {
        quote: "With LogZilla deployed as part of the broader Splunk platform, we’ve reduced incident management resources by 70% and incident response effort by 99%. We also raised the bar in customer service by making the positive shift from reactive to proactive problem-solving reducing our Mean Time To Restore services.",
        author: "Brian Kelly",
        role: "Network Security Administrator",
        companyImg:
            "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6240c3b51c83f75b0b7beafa_montclair-100x100.png",
        quoteIcon:
            "https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a91e612aae8_quote-mark.svg",
        bgImg: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/623d068bd934a13f84c26cec_university-education-300x300.jpg",
    },
    {
        quote: "It’s that automation and that functionality from LogZilla that allows me to have intelligence in my network. That was a game changer for us!",
        author: "Steve Sneed",
        role: "Senior Manager of Network Architecture",
        companyImg:
            "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/6240c38136589adc24c46f25_vmware-100x100.png",
        quoteIcon:
            "https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a91e612aae8_quote-mark.svg",
        bgImg: "https://cdn.prod.website-files.com/61b0f5a8f462f63f670fb7b8/62313593b060cb201042a3c4_automation-300x300.jpg",
    },
];
