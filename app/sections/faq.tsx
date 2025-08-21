import React, { useState } from "react";

const faqs = [
    {
        question: "What Is LogZilla?",
        answer: (
            <>
                <p>
                    LogZilla is a powerful log management and network event orchestration platform designed to reduce data overload and streamline incident response. It eliminates unnecessary noise by deduplicating logs in real-time, cutting down on storage costs and preventing alert fatigue. With LogZilla, businesses can focus on actionable insights, ensuring quick and effective decision-making without the complexity of traditional systems.
                </p>
                <picture>
                    <source srcSet="https://assets.logzilla.io/images/transparent/proactive-log-management-960x540.webp" type="image/webp" />
                    <source srcSet="https://assets.logzilla.io/images/backgrounds/logzilla-event-management-architecture-960x540.jpg" type="image/jpeg" />
                    <img
                        src="https://assets.logzilla.io/images/backgrounds/logzilla-event-management-architecture-960x540.jpg"
                        loading="lazy"
                        alt="LogZilla Syslog Management Architecture"
                        style={{ maxWidth: "100%", margin: "1em 0" }}
                    />
                </picture>
            </>
        ),
    },
    {
        question: "What kind of logs can LogZilla collect?",
        answer: (
            <p>
                LogZilla can collect logs from various sources, including servers, network devices, security appliances, databases, and applications. It supports a wide range of log formats, such as Syslog, SNMP, Windows Event Logs, and custom logs.
            </p>
        ),
    },
    {
        question: "How does LogZilla help with log analysis?",
        answer: (
            <p>
                LogZilla provides a centralized platform for log analysis, enabling users to search, filter, and correlate logs from different sources. It also offers visualizations and dashboards to help users understand their log data and identify trends, anomalies, and potential issues.
            </p>
        ),
    },
    {
        question: "Can LogZilla alert me when there is an issue?",
        answer: (
            <p>
                Yes, LogZilla can generate alerts based on predefined conditions such as specific log patterns, thresholds, or anomalies. It can also trigger actions like sending emails or executing scripts to automate responses to issues.
            </p>
        ),
    },
    {
        question: "What are the system requirements for LogZilla?",
        answer: (
            <p>
                The system requirements for LogZilla depend on the size and complexity of your log data. Typically, a server with sufficient CPU, memory, and storage capacity is required to handle the workload efficiently.
            </p>
        ),
    },
    {
        question: "How is LogZilla deployed?",
        answer: (
            <>
                <p>LogZilla can be deployed in various ways depending on your organization&apos;s needs:</p>
                <ul>
                    <li>On-premises: Installed on a physical or virtual server within your data center.</li>
                    <li>Cloud: Deployed on platforms like AWS, Google Cloud, or Azure, offering scalability and flexibility.</li>
                    <li>Appliance: Available as a pre-configured hardware appliance, combining software and hardware in a single package for simplicity and ease of deployment.</li>
                </ul>
            </>
        ),
    },
    {
        question: "Is LogZilla scalable?",
        answer: (
            <p>
                Yes, LogZilla is designed to be highly scalable, capable of handling large volumes of log data with unlimited retention.
            </p>
        ),
    },
    {
        question: "Can I try LogZilla before purchasing?",
        answer: (
            <p>
                Yes, LogZilla offers a free trial version that includes all the features of the paid version. You can test its functionality and performance with your own log data.
            </p>
        ),
    },
    {
        question: "What kind of support does LogZilla offer?",
        answer: (
            <p>
                LogZilla provides multiple support options, including comprehensive documentation, responsive email support, and support via Slack and Zoom. Additionally, LogZilla offers professional services such as training, consulting, and customization to help users maximize the value of their log data.
            </p>
        ),
    },
    {
        question: "How much does LogZilla cost?",
        answer: (
            <p>
                The cost of LogZilla depends on factors like the volume of log data, and the level of support required. LogZilla offers various pricing plans to fit different needs and budgets. For a customized quote, please contact LogZilla sales.
            </p>
        ),
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="container mx-auto max-w-3xl py-16 px-4 text-center">
            <h1 className="text-3xl mb-16">Frequently Asked Questions</h1>
            <ul className="text-xl" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {faqs.map((faq, idx) => (
                    <li key={faq.question} style={{ marginBottom: "1.5em" }}>
                        <button
                            aria-expanded={openIndex === idx}
                            aria-controls={`faq-panel-${idx}`}
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                width: "100%",
                                background: "none",
                                border: "none",
                                padding: "0.75em 0",
                                
                                
                                cursor: "pointer",
                                transition: "color 0.25s",
                            }}
                        >
                            <span style={{ flex: 1 }}>{faq.question}</span>
                            <img
                                src="https://cdn.prod.website-files.com/61b0f5a8f462f6cda30fb7a5/61b0f5a8f462f64dcc0fb801_plus.png"
                                alt={openIndex === idx ? "Minus" : "Plus"}
                                style={{
                                    width: 24,
                                    height: 24,
                                    transform: openIndex === idx ? "rotate(45deg)" : "none",
                                    transition: "transform 0.2s",
                                }}
                            />
                        </button>
                        <div
                            id={`faq-panel-${idx}`}
                            hidden={openIndex !== idx}
                            style={{
                                padding: openIndex === idx ? "0.75em 0" : 0,
                                transition: "max-height 0.3s",
                            }}
                        >
                            <div>{faq.answer}</div>
                        </div>
                        <div style={{ borderBottom: "1px solid #eee", marginTop: "1em" }} />
                    </li>
                ))}
            </ul>
        </section>
    );
}