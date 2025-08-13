"use client";
import Link from "next/link";
import React from "react";
import FAQ from "../sections/faq";


const DownloadPage: React.FC = () => {
  return (
    <>
    <section className="container mx-auto max-w-3xl py-16 px-4 text-center">
      <h1 className="text-4xl mb-6">Download LogZilla</h1>
      
      <p className="text-lg mb-8">
        Transform your log management with a single command.
No complicated setup, just instant enterprise-grade power.
      </p>
      <p className="text-lg mb-2">
        One command to install
      </p>
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center bg-gray-900 rounded-lg p-4 mb-8 gap-2 sm:gap-0 relative">
        <code className="text-white text-base overflow-x-auto flex-1 sm:w-auto w-full mb-2 sm:mb-0">
            curl -fsSL https://logzilla.sh | sudo bash
        </code>
        <button
            className="sm:ml-4 bg-orange-500 hover:bg-orange-600 text-white text-sm px-3 py-1 rounded w-full sm:w-auto"
            onClick={() => {
                navigator.clipboard.writeText("curl -fsSL https://logzilla.sh | sudo bash");
            }}
        >
            Copy 
        </button>
    </div>
      <p className="text-lg mt-8">
        Direct Install
      </p>
      <p>
        Requires any Linux system with Docker 27+, 12GB RAM, and 8 CPU cores.
        </p>      
        <p className="mt-8 text-gray-500 text-sm">
        Need help? Visit our <Link href="/resources/docs" className="text-orange-500 underline">Documentation</Link> or <Link href="/resources/support" className="text-orange-500 underline">Support</Link> page.
      </p>
    </section>
    <div className="bg-white">
        <FAQ />
    </div>
    
    </>
  );
};

export default DownloadPage;
