import Subscriptions from '@/app/components/Subscriptions';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className='border-b-[1px] border-[#E4E4E4] pb-5 mb-8'>
                <h2 className='text-2xl font-bold'>Manage Subscriptions</h2>
            </div>
            <Subscriptions/>
        </div>
    );
};

export default page;