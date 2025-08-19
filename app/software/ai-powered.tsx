import React from "react";

const AiPowered: React.FC = () => (
    <section className="flex flex-col justify-center items-center mt-10 pb-16 px-4">
        <div className="mx-auto max-w-7xl px-4 font-medium text-gray-700 sm:text-7xl text-center">
            <h1 className="text-5xl text-slate-900 sm:text-7xl text-center">
                AI-Powered Solutions
            </h1>
            <div className="mb-8 w-full flex justify-center">
                <iframe
                    width="1280"
                    height="720"
                    src="https://www.youtube.com/embed/yGQqkXegdoo"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ maxWidth: "100%", borderRadius: "12px" }}
                ></iframe>
            </div>
            <p className="text-3xl">
                Intelligent Log Management with AI Copilot
            </p>
            <p className="text-xl py-4 text-justify">
                LogZilla revolutionizes log analysis with AI-powered natural
                language querying, real-time centralization, and intelligent
                automation. Ask questions in plain English, get instant
                insights, and accelerate incident resolution with advanced
                deduplication, normalization, and event correlation — all
                designed to reduce downtime and streamline operations for
                enterprise IT teams.
            </p>
            <p className="text-3xl">
                Intelligent Log Management with AI Copilot
            </p>
            <p className="text-xl py-4 text-justify">
                LogZilla revolutionizes log analysis with AI-powered natural
                language querying, real-time centralization, and intelligent
                automation. Ask questions in plain English, get instant
                insights, and accelerate incident resolution with advanced
                deduplication, normalization, and event correlation — all
                designed to reduce downtime and streamline operations for
                enterprise IT teams.
            </p>
        </div>
    </section>
);

export default AiPowered;
