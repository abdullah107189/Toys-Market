import React from 'react';
import useTitle from './Hooks/TitleHooks';
import errorPage from '../public/errorPage.png'
const Error = () => {
    useTitle('404 page')
    return (
        <div className=''>
            <div className='flex justify-center items-center'>
                <img src={errorPage} alt="" />
            </div>
        </div>
    );
};

export default Error;