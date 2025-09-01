import React from 'react';
import Meeting from '../sections/meeting';

const AppliancesPage: React.FC = () => {
    return (
        <>
        
        <section className="flex flex-col justify-center items-center pt-26 pb-16 px-4">
            <h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl text-center">
                LogZilla{" "}
                <span className="relative whitespace-nowrap text-orange-600">
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 418 42"
                        className="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-300/70"
                        preserveAspectRatio="none"
                    >
                        <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                    </svg>
                    <span className="relative">Appliances</span>
                </span>
            </h1>
            <p className="mx-auto max-w-4xl text-2xl pt-10 pb-10 text-center leading-relaxed">
                LogZilla Appliances are pre-tuned with everything needed to manage your environment.
                Effortlessly deploy, scale, and secure your log management with our purpose-built hardware.
                Experience lightning-fast performance, zero-maintenance updates, and enterprise-grade reliability.
                Unlock actionable insights and maximize uptime with LogZilla’s plug-and-play appliances—engineered for simplicity and power.
            </p>

        </section>
        <section className="w-full flex flex-col items-center">
            <h2 className="text-4xl text-slate-900 mb-4 text-center">
                Appliance Configurations
            </h2>
            <p className="text-2xl text-slate-600 mb-10 text-center max-w-2xl">
                Choose the LogZilla appliance configuration that best fits your log processing requirements.
            </p>
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center">
                {/* SMB Appliance */}
                <div className="flex-1 bg-white rounded-xl shadow-md p-8 flex flex-col items-center border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">SMB Appliance</h3>
                    <span className="text-2xl font-semibold text-orange-500 mb-1">Small</span>
                    <span className="text-slate-500 mb-4 text-xl">Business</span>
                    <p className="text-slate-600 text-center mb-6">
                        Perfect for small to medium businesses with moderate log processing needs.
                    </p>
                    <ul className="text-slate-700 mb-6 space-y-2 self-start">
                        <li>✔ 19.0TB raw storage capacity</li>
                        <li>✔ 256GB ECC memory</li>
                        <li>✔ 24-core/48-thread processor</li>
                        <li>✔ Dual-port 10G networking</li>
                        <li>✔ 10x high-performance NVMe drives</li>
                        <li>✔ Dedicated boot drive</li>
                        <li>✔ Ready-to-deploy configuration</li>
                        <li>✔ Professional installation support</li>
                    </ul>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition">
                        Schedule Consultation
                    </button>
                </div>
                {/* MSE Appliance */}
                <div className="flex-1 bg-white rounded-xl shadow-md p-8 flex flex-col items-center border border-orange-400 relative">
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-lg font-bold px-4 py-1 rounded-full shadow">
                        Most Popular
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">MSE Appliance</h3>
                    <span className="text-2xl font-semibold text-orange-500 mb-1">Mid-Size</span>
                    <span className="text-slate-500 mb-4 text-xl">Enterprise</span>
                    <p className="text-slate-600 text-center mb-6">
                        Designed for mid-size enterprises with growing log processing requirements.
                    </p>
                    <ul className="text-slate-700 mb-6 space-y-2 self-start">
                        <li>✔ 76.8TB raw storage capacity</li>
                        <li>✔ 256GB ECC memory</li>
                        <li>✔ 24-core/48-thread processor</li>
                        <li>✔ Dual-port 10G networking</li>
                        <li>✔ 10x high-performance NVMe drives</li>
                        <li>✔ Dedicated boot drive</li>
                        <li>✔ High-performance log processing</li>
                        <li>✔ Enterprise-grade reliability</li>
                    </ul>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition">
                        Schedule Consultation
                    </button>
                </div>
                {/* Enterprise Appliance */}
                <div className="flex-1 bg-white rounded-xl shadow-md p-8 flex flex-col items-center border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise Appliance</h3>
                    <span className="text-2xl font-semibold text-orange-500 mb-1">Large</span>
                    <span className="text-slate-500 mb-4 text-xl">Enterprise</span>
                    <p className="text-slate-600 text-center mb-6">
                        Built for large enterprises with massive log processing and retention needs.
                    </p>
                    <ul className="text-slate-700 mb-6 space-y-2 self-start">
                        <li>✔ 153.6TB raw storage capacity</li>
                        <li>✔ 256GB ECC memory</li>
                        <li>✔ 24-core/48-thread processor</li>
                        <li>✔ Dual-port 10G networking</li>
                        <li>✔ 10x high-performance NVMe drives</li>
                        <li>✔ Enterprise-grade boot drive</li>
                        <li>✔ Maximum performance configuration</li>
                        <li>✔ Custom sizing and support available</li>
                    </ul>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition">
                        Schedule Consultation
                    </button>
                </div>
            </div>
            <p className="text-slate-500 mt-10 text-center max-w-3xl">
                All appliance configurations include comprehensive documentation and support resources. For detailed specifications or custom requirements, please contact our team below to discuss your specific needs.
            </p>
        </section>
        <div className="border-t border-slate-200 mt-8">
                <Meeting  />
            </div>
        </>
    );
};

export default AppliancesPage;