import Trusted from "./sections/trusted";
import Main from "./sections/main";
import Download from "./sections/download";
import Features_1 from "./sections/fearures_1";
import Meeting from "./sections/meeting";
import Features_2 from "./sections/features_2";
import Feedback from "./sections/feedback";

export default function Home() {
    return (
        <>
            <Main />
            <Trusted />
            <Download />
            <Features_1 />
            <Meeting />
            <Features_2 />
            <Feedback />

            <div className="hidden">
                {/* Aurora Background */}
                <div className="absolute inset-0 z-0 aurora-bg pointer-events-none" />
                {/* Foreground Content */}
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-bold mb-4">Aurora Lights</h1>
                    <p className="text-lg text-gray-300">
                        Next.js + Tailwind CSS
                    </p>
                </div>
            </div>
        </>
    );
}
