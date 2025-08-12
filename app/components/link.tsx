import Link from 'next/link';
import React from 'react';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
};
interface Props extends LinkProps {
    href: string;
    isActive?: boolean;
}

const LinkButton: React.FC<Props> = ({ children, href, isActive = false, ...props }) => {
    return (
        <Link href={href} {...props} className={`text-gray-700 hover:text-orange-500 transition-colors duration-300 cursor-pointer flex items-center justify-center ${isActive ? 'text-orange-500' : ''}`}>
            {children}
        </Link>
    );
};

export default LinkButton;