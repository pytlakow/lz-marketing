import React from 'react';
import CloudFeatures from './cloud-features';
import CloudPricing from './cloud-pricing';
import CloudTable from './cloud-table';

export default function CloudPage() {
    return (
        <>
            <CloudFeatures />
            <CloudPricing />
            <CloudTable />
        </>
    );
}