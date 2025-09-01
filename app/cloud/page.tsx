import React from 'react';
import CloudFeatures from './cloud-features';
import CloudPricing from './cloud-pricing';
import CloudTable from './cloud-table';
import Meeting from '../sections/meeting';

export default function CloudPage() {
    return (
        <>
            <CloudFeatures />
            <CloudPricing />
            <CloudTable />
            <div className="border-t border-slate-200 mt-8">
                <Meeting  />
            </div>
            
        </>
    );
}