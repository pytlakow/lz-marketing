import React from "react";
import Button from "../components/button";
import Icon from "../components/icons";

const Download: React.FC = () => {
    return (
        <section className="bg-slate-100 border-y border-slate-200">
            <div className="container mx-auto text-slate-800 max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-between items-center py-16">
                <p className="text-3xl">LogZilla Cloud</p>
                <p className="text-xl pt-2 pb-10 text-center ">
                    Cut log noise. Cut costs. Fix incidents fast.
                </p>
                <Button href="/cloud">
                    LogZilla Cloud
                </Button>
            </div>
        </section>
    );
};

export default Download;
