import React from 'react';
import AiPowered from './ai-powered';
import EnterpriseIntegration from './enterprise';
import Meeting from '../sections/meeting';

export default function SoftwarePage() {
    return (
        <main>
            <AiPowered />
            <EnterpriseIntegration />
            <div className="border-t border-slate-200 mt-8">
                <Meeting  />
            </div>
        </main>
    );
}