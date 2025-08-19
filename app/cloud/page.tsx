import React from 'react';
import CloudFeatures from './cloud-features';

export default function CloudPage() {
    return (
        <>
            <CloudFeatures />
            <section className="">
                <stripe-pricing-table
                    pricing-table-id="prctbl_1QgxNABjYBeFaZwP2Gqme3he"
                    publishable-key="pk_live_51Pyd2xBjYBeFaZwPNBMnLtw2hZuessmCU7m7EkTzedssntJt4NeC3UmT8iTI1AsMFeCW4mr6e0NfdT2n5BdkIG8s00u32BBL9M"
                ></stripe-pricing-table>
            </section>
        </>
    );
}