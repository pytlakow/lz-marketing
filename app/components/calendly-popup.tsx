"use client";
import React from "react";
import Icon from "./icons";

interface CalendlyPopupProps {
    url: string;
    buttonText?: string;
    className?: string;
}

const openCalendlyPopup = (url: string) => {
    const calendly = (
        window as Window & {
            Calendly?: { initPopupWidget: (options: { url: string }) => void };
        }
    ).Calendly;
    if (calendly) {
        calendly.initPopupWidget({ url });
    } else {
        window.open(url, "_blank");
    }
};

const CalendlyPopup: React.FC<CalendlyPopupProps> = ({
    url,
    buttonText = "Get a Personalized Demo",
    className,
}) => {
    React.useEffect(() => {
        if (!document.getElementById("calendly-script")) {
            const script = document.createElement("script");
            script.id = "calendly-script";
            script.src =
                "https://assets.calendly.com/assets/external/widget.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <button
            type="button"
            className={
                className ||
                "flex justify-center items-center cursor-pointer bg-orange-500 hover:bg-orange-400 focus:bg-orange-600 text-white font-semibold py-2 px-4 rounded hover:shadow-md transition-colors duration-200"
            }
            onClick={() => openCalendlyPopup(url)}
        >
            <span className="mr-2">
                <Icon name="calendar" />
            </span>
            {buttonText}
        </button>
    );
};

export default CalendlyPopup;
