import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
    <button
        {...props}
        className={`flex justify-center items-center bg-orange-500 hover:bg-orange-400 focus:bg-orange-600  text-white font-semibold py-2 px-4 rounded hover:shadow-md transition-colors duration-200 ${props.className ?? ''}`}
    >
        {children}
    </button>
);

export default Button;