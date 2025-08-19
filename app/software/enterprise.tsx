import React from 'react';
const EnterpriseIntegration: React.FC = () => (
    <section className="flex flex-col justify-center items-center pt-26 pb-16 px-4">
        <h2>Enterprise Integration</h2>
        <p>
            Seamlessly connect your business systems and applications to improve efficiency, collaboration, and scalability.
        </p>
        <img
            src="/images/enterprise-integration-illustration.png"
            alt="Enterprise Integration Illustration"
            style={{ maxWidth: '400px', width: '100%', margin: '2rem auto' }}
        />
    </section>
);

export default EnterpriseIntegration;