import React from "react";
import Button from "../components/button";
import Icon from "../components/icons";

const Download: React.FC = () => {
    return (
        <section className="bg-black">
            <div className="container mx-auto text-gray-50 max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-between items-center py-16">
                <p className="text-3xl">Getting started is easy.</p>
                <p className="text-xl pt-2 pb-10 text-center ">
                    Transform your log management with a single command. No
                    complicated setup, just instant enterprise-grade power.
                </p>
                <Button>
                    <span className="mr-2">
                        <Icon name="download" />
                    </span>
                    Try us out!
                </Button>
            </div>
        </section>
    );
};

export default Download;
