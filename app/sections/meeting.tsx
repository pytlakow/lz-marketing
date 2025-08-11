import React from "react";
import Button from "../components/button";
import Icon from "../components/icon";

const Meeting: React.FC = () => {
    return (
        <section className="border-t border-gray-200 bg-gray-200 flex flex-col justify-center items-center py-16">
            <p className="text-3xl ">Lets talk.</p>
            <p className="text-xl pt-2 pb-10 text-center">
                Contact us to learn how LogZilla can transform your log
                management and security operations.
            </p>
            <Button>
                <span className="mr-2">
                    <Icon name="calendar" />
                </span>
                Get a Personalized Demo
            </Button>
        </section>
    );
};

export default Meeting;
