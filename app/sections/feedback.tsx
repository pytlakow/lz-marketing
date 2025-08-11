import React from "react";
import Button from "../components/button";
import Icon from "../components/icon";
import Image from "next/image";

const Feedback: React.FC = () => {
    return (
        <section className="border-t border-gray-200 bg-gray-100 flex flex-col justify-center items-center py-16 px-4">
            <p className="text-3xl font-bold">
                There's A Reason Why 98% Of Our Customers Renew Annually.
            </p>
            <p className="text-xl pt-2 pb-10 text-center">
                Everyone is changing their life with Logzilla.
            </p>
        </section>
    );
};

export default Feedback;
