import Allusers from '@/app/components/Allusers';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className='border-b-[1px] border-[#E4E4E4] pb-5 mb-8'>
                <h2 className='text-2xl font-bold'>Account List</h2>
            </div>
            <Allusers/>
        </div>
    );
};

export default page;