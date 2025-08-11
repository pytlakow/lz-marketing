import React from 'react';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
};
interface Props extends LinkProps {
    href: string;
    isActive?: boolean;
}

const Link: React.FC<Props> = ({ children, href, isActive = false, ...props }) => {
    return (
        <a href={href} {...props} className={`text-gray-700 hover:text-orange-500 transition-colors duration-300 cursor-pointer flex items-center justify-center ${isActive ? 'text-orange-500' : ''}`}>
            {children}
        </a>
    );
};

export default Link;