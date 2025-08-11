import React from 'react';

type IconName = 'calendar' | 'download' | 'search' | 'chavrionDown';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: IconName;
    color?: string;
    size?: number;
}

type IconComponent = React.FC<{ color: string }>;

const CalendarIcon: IconComponent = ({ color, ...props }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

const DownloadIcon: IconComponent = ({ color, ...props }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

const SearchIcon: IconComponent = ({ color, ...props }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const ChavrionDwonIcon: IconComponent = ({ color, ...props }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

const icons: Record<IconName, IconComponent> = {
    calendar: CalendarIcon,
    download: DownloadIcon,
    search: SearchIcon,
    chavrionDown: ChavrionDwonIcon,
};

type ExtendedIconName = IconName;

const Icon: React.FC<IconProps> = ({ name, color = 'currentColor', size = 24, ...props }) => {
    const SvgIcon = icons[name];
    return (
        <span style={{ display: 'inline-flex', width: size, height: size }}>
            <SvgIcon color={color} width={size} height={size} {...props} />
        </span>
    );
};

export default Icon;