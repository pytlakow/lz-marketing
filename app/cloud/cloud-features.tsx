import React from 'react';

const cloudFeatures = [
    {
        title: 'Scalable Infrastructure',
        description: 'Automatically scale resources to meet demand and optimize costs.',
        icon: '🌥️',
    },
    {
        title: 'High Availability',
        description: 'Ensure your applications are always online with redundant systems.',
        icon: '🔒',
    },
    {
        title: 'Global Reach',
        description: 'Deploy applications closer to your users for better performance.',
        icon: '🌎',
    },
    {
        title: 'Security',
        description: 'Protect your data with advanced security features and compliance.',
        icon: '🛡️',
    },
];

export const CloudFeatures: React.FC = () => (
    <section>
        <h2>Cloud Features</h2>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {cloudFeatures.map((feature) => (
                <div
                    key={feature.title}
                    style={{
                        border: '1px solid #eee',
                        borderRadius: '8px',
                        padding: '1.5rem',
                        minWidth: '220px',
                        flex: '1 1 220px',
                        background: '#fafbfc',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    }}
                >
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{feature.icon}</div>
                    <h3 style={{ margin: '0 0 0.5rem 0' }}>{feature.title}</h3>
                    <p style={{ margin: 0 }}>{feature.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default CloudFeatures;