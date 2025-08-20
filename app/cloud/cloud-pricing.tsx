import React from 'react';



export const CloudPricing: React.FC = () => (
        <>
<section className="flex flex-col justify-center items-center mt-10 pb-4 pt-8 px-4 bg-white text-slate-700">
    <h2 className="text-4xl  pb-4">Pricing that scales with your data</h2>
    <p className="text-xl">
        Plans are based on maximum events per day. Forwarding to downstream SIEMs is available on Business. 
    </p>
    <p className="text-xl">
        Yearly pricing is shown with the toggle below.
    </p>
</section>
<section className="">
                <stripe-pricing-table
                    pricing-table-id="prctbl_1QgxNABjYBeFaZwP2Gqme3he"
                    publishable-key="pk_live_51Pyd2xBjYBeFaZwPNBMnLtw2hZuessmCU7m7EkTzedssntJt4NeC3UmT8iTI1AsMFeCW4mr6e0NfdT2n5BdkIG8s00u32BBL9M"
                ></stripe-pricing-table>
            </section>
        </>
);

export default CloudPricing;