import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='flex flex-col items-center justify-center text-center'>
            <h3 className='text-[#333333] font-semibold text-2xl'>{heading}</h3>
            <p className='text-[#5C5C5C] text-[14px] font-normal mt-5 w-2/3'>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;