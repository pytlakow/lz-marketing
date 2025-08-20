import React from 'react';



export const CloudFeatures: React.FC = () => (
        <section className="flex flex-col justify-center items-center mt-10 pb-4 px-4 text-slate-700">
        <div className="mx-auto max-w-7xl px-4 font-medium  sm:text-7xl text-center">
            <h1 className="text-5xl  sm:text-7xl text-center">
                Logzilla Cloud
            </h1>
            <p className="text-3xl py-2">
               Cut log noise. Cut costs. Fix incidents fast.
            </p>
            <p className="text-xl py-4">
                Trusted for 15 years on‑prem and now in the cloud. Real‑time deduplication, enrichment, and trigger‑based automation move teams from fire‑fighting to outcomes in seconds.
            </p>
            <p className="text-xl py-1">
                Reduce downstream spend by forwarding only what matters (Business tier)
            </p>
            <p className="text-xl py-1">
               Unlimited users on every plan
            </p>
            <p className="text-xl py-1">
                Transparent limits: events/day, storage, retention
            </p>
        </div>
    </section>
);

export default CloudFeatures;