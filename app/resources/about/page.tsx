import React from "react";

export default function About() {
    return (
      
        <section className="bg-[#fafafa] container mx-auto text-gray-700 max-w-7xl px-4 sm:px-6 lg:px-8">

            <div>
                <h1 className="mx-auto max-w-4xl text-4xl font-medium tracking-tight text-slate-900 text-center">
                    LogZilla is the world&apos;s first platform to provide real-time
                    Operational Intelligence at enterprise scale, using a
                    fraction of the resources required by other solutions.
                </h1>
                <div className="mx-auto max-w-4xl my-8 w-3/5">
                  <hr className="border-t-4 border-orange-500" />
                </div>
                <div className="mx-auto max-w-4xl text-2xl font-medium tracking-tight text-slate-900 text-center">
                    <p className="pt-8">
                        We&apos;ve worked on the largest networks in the world. We
                        were the people getting called when something went wrong
                        at the Fortune 1000. We decided to do something about
                        the endless incidents and the manual processes required
                        to solve them.
                    </p>
                    <p className="pt-8">
                        Born from a small open source experiment years ago by
                        our CEO, we&apos;ve taken the core concepts and lessons
                        learned along the way of providing real-time visibility
                        and automation in network operations from that open
                        source &quot;hobby&quot; to a mature, intelligent, Network Event
                        Orchestration
                        <span className="super-script">TM</span> platform.
                        LogZilla operates with easy to use dashboards delivering
                        intelligent, automatic network operations for use by
                        every enterprise on the planet.
                    </p>
                </div>
            </div>
            <div>
              <h1 className="mx-auto max-w-4xl text-4xl font-medium tracking-tight text-slate-900 text-center mt-20">
                    Leadership Team
                </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-8 my-12">
              
              <div className="bg-white shadow-lg rounded-lg p-6 w-72 flex flex-col items-center">
                <img
                  src="https://cdn.prod.website-files.com/61b0f5a8f462f6cda30fb7a5/61b0f5a8f462f624a50fb7e3_Clayton-headshot-min.jpg"
                  alt="Clayton Dukes"
                  className="w-40 h-40 rounded-full object-cover mb-4"
                />
                <h2 className="text-xl font-bold text-center">CLAYTON DUKES</h2>
                <p className="italic text-center text-yellow-900 mt-2">Founder, CEO</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 w-72 flex flex-col items-center">
                <img
                  src="https://cdn.prod.website-files.com/61b0f5a8f462f6cda30fb7a5/61b0f5a8f462f627b30fb820_Pete-Headshot-min.jpg"
                  alt="Pete Willis"
                  className="w-40 h-40 rounded-full object-cover mb-4"
                />
                <h2 className="text-xl font-bold text-center">PETE WILLIS</h2>
                <p className="italic text-center text-yellow-900 mt-2">Co-Founder, Sales</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 w-72 flex flex-col items-center">
                <img
                  src="https://cdn.prod.website-files.com/61b0f5a8f462f6cda30fb7a5/61b0f5a8f462f642c30fb7f9_Richard-Headshot-min.jpg"
                  alt="Richard Piotrowski"
                  className="w-40 h-40 rounded-full object-cover mb-4"
                />
                <h2 className="text-xl font-bold text-center">RICHARD PIOTROWSKI</h2>
                <p className="italic text-center text-yellow-900 mt-2">Co-Founder, COO</p>
              </div>
            </div>
        </section>
    );
}
