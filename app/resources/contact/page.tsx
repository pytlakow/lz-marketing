export default function ContactPage() {
    return (
        <section className="flex flex-col justify-center items-center pt-26 pb-16 px-4">
            <div className="mb-10 w-full flex flex-col items-center">
                 <h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl text-center">Contact Us</h1>
                <p className="mx-auto max-w-4xl text-2xl pt-10 pb-10 text-center leading-relaxed">
                    Reach out today to learn how you can do more with your data for better business decisions.
                </p>
                <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl justify-center">
                    <div className="flex-1 bg-white rounded-lg shadow p-6 border-t-4 border-cyan-600">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">West Location</h3>
                        <div className="text-center text-gray-700">
                            <div>1900 S Norfolk</div>
                            <div>Suite 350</div>
                            <div>San Mateo, CA 94403</div>
                        </div>
                    </div>
                    <div className="flex-1 bg-white rounded-lg shadow p-6 border-t-4 border-yellow-400">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Central Location</h3>
                        <div className="text-center text-gray-700 mb-2">
                            <div>166 Hargraves Dr.,</div>
                            <div>Ste. C400-218</div>
                            <div>Austin, TX, 78737</div>
                        </div>
                        <div className="flex items-center justify-center text-yellow-600 font-semibold mt-2">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h6zm0 0V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2"></path>
                            </svg>
                            Toll Free (844) 44ITOPS
                        </div>
                    </div>
                    <div className="flex-1 bg-white rounded-lg shadow p-6 border-t-4 border-yellow-300">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">East Location</h3>
                        <div className="text-center text-gray-700">
                            <div>4819 Emperor Boulevard</div>
                            <div>Suite 400</div>
                            <div>RTP, NC, 27703</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="max-w-xl w-full bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Contact Us</h1>
                <p className="text-gray-700 mb-4 text-center">
                    We&#39;d love to hear from you! Please reach out with any questions or feedback.
                </p>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Type your message here..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div> */}
        </section>
    );
}