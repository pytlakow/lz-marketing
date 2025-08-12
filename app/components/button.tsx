import React from 'react';
import Link from 'next/link';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    href?: string; // Optional href prop for Link compatibility
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
    (props as any).href ? (
        <Link href={(props as any).href} passHref>
             <button 
        {...props}
        className={`flex justify-center items-center cursor-pointer bg-orange-500 hover:bg-orange-400 focus:bg-orange-600  text-white font-semibold py-2 px-4 rounded hover:shadow-md transition-colors duration-200 ${props.className ?? ''}`}
    >
        {children}
    </button>
        </Link>
    ) : 
    <button 
        {...props}
        className={`flex justify-center items-center cursor-pointer  bg-orange-500 hover:bg-orange-400 focus:bg-orange-600  text-white font-semibold py-2 px-4 rounded hover:shadow-md transition-colors duration-200 ${props.className ?? ''}`}
    >
        {children}
    </button>
);

export default Button;