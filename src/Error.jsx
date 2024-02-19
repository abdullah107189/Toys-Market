import React from 'react';
import useTitle from './Hooks/TitleHooks';

const Error = () => {
    useTitle('404 page')
    return (
        <div className=''>
            <div className='text-10xl flex justify-center items-center h-screen'>
                404
            </div>
        </div>
    );
};

export default Error;