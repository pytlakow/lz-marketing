import React from 'react';
import Link from 'next/link';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    href?: string;
};

const Button: React.FC<ButtonProps> = ({ children, href, ...props }) => {
    if (href) {
        return (
            <Link href={href} passHref>
                <button
                    {...props}
                    className={`flex justify-center items-center cursor-pointer bg-orange-500 hover:bg-orange-400 focus:bg-orange-600 text-white font-semibold py-2 px-4 rounded hover:shadow-md transition-colors duration-200 ${props.className ?? ''}`}
                >
                    {children}
                </button>
            </Link>
        );
    }
    return (
        <button
            {...props}
            className={`flex justify-center items-center cursor-pointer bg-orange-500 hover:bg-orange-400 focus:bg-orange-600 text-white font-semibold py-2 px-4 rounded hover:shadow-md transition-colors duration-200 ${props.className ?? ''}`}
        >
            {children}
        </button>
    );
};

export default Button;