import React from 'react';
import Link from 'next/link';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    href?: string;
    target?: string;
};

const baseClass = "flex justify-center items-center cursor-pointer bg-orange-500 hover:bg-orange-400 text-white text-lg font-semibold py-2 px-4 rounded hover:shadow-md transition-colors duration-200";

const Button: React.FC<ButtonProps> = ({ children, href, className = '', ...props }) => {
    if (href) {
        return (
            <a
                href={href}
                className={`${baseClass} ${className}`}
                style={props.style}
                target={props.target}
                rel={props.rel}
            >
                {children}
            </a>
        );
    }
    return (
        <button
            {...props}
            className={`${baseClass} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;