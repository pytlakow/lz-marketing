import React from 'react';

type IconName = 'calendar' | 'download' | 'search' | 'chavrionDown' | 'webinar' | 'blogzilla' | 'university' | 'support' | 'documentation' | 'demo' | 'faq';

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

const WebinarIcon: IconComponent = ({ color, ...props }) => (
    <svg viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="4" y="6" width="24" height="18" rx="2" />
        <line x1="16" y1="6" x2="16" y2="24" />
        <circle cx="10" cy="13" r="3" />
        <circle cx="22" cy="11" r="1.5" />
        <circle cx="22" cy="15" r="1.5" />
        <circle cx="22" cy="19" r="1.5" />
    </svg>
);


const BlogzillaIcon: IconComponent = ({ color, ...props }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 8h8v8H8z" />
        <circle cx="12" cy="12" r="1.5" />
    </svg>
);

const UniversityIcon: IconComponent = ({ color, ...props }) => (
    <svg viewBox="0 0 64 64" fill="none" {...props} width="1em" height="1em">
        <polygon points="32,8 4,24 60,24" stroke={color} strokeWidth="2" fill="none"/>
        <rect x="8" y="24" width="48" height="24" stroke={color} strokeWidth="2" fill="none"/>
        <rect x="4" y="48" width="56" height="4" stroke={color} strokeWidth="2" fill="none"/>
        <rect x="16" y="24" width="4" height="24" fill={color}/>
        <rect x="28" y="24" width="4" height="24" fill={color}/>
        <rect x="40" y="24" width="4" height="24" fill={color}/>
        <rect x="52" y="24" width="4" height="24" fill={color}/>
    </svg>
)


const SupportIcon: IconComponent = ({ color, ...props }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
    </svg>
);

const DocumentationIcon: IconComponent = ({ color, ...props }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="10" x2="16" y2="10" />
        <line x1="8" y1="14" x2="12" y2="14" />
    </svg>
);

const DemoIcon: IconComponent = ({ color, ...props }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
);
const FAQIcon: IconComponent = ({ color, ...props }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M9 10a3 3 0 0 1 6 0c0 2-3 2-3 4" />
        <line x1="12" y1="17" x2="12" y2="17" />
    </svg>
);


const icons: Record<IconName, IconComponent> = {
    calendar: CalendarIcon,
    download: DownloadIcon,
    search: SearchIcon,
    chavrionDown: ChavrionDwonIcon,
    webinar: WebinarIcon,
    blogzilla: BlogzillaIcon,
    university: UniversityIcon,
    support: SupportIcon,
    documentation: DocumentationIcon,
    demo: DemoIcon,
    faq: FAQIcon,
};

const Icon: React.FC<IconProps> = ({ name, color = 'currentColor', size = 24, ...props }) => {
    const SvgIcon = icons[name];
    return (
        <span style={{ display: 'inline-flex', width: size, height: size }}>
            <SvgIcon color={color} width={size} height={size} {...props} />
        </span>
    );
};

export default Icon;