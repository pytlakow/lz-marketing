import React, { useEffect } from "react";
interface CalendlyEmbedProps {
    url: string;
}
const CalendlyEmbed = ({ url }: CalendlyEmbedProps) => {
  useEffect(() => {
    const head = document.querySelector("head") as HTMLElement;

    const link = document.createElement("link");
    link.setAttribute("href", "https://assets.calendly.com/assets/external/widget.css");
    link.setAttribute("rel", "stylesheet");
    head.appendChild(link);

    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      style={{ minHeight: "650px", width: "100%" }}
    ></div>
    

  );
};

export default CalendlyEmbed;