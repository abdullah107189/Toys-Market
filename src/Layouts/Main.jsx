import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Navber from '../Components/Shared/Navber';
import { Outlet } from 'react-router-dom';
import Loading from '../Components/Loading';

const Main = () => {
    return (
        <div >
            <Loading></Loading>
            <div className='container mx-auto py-3 relative'>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
                <Navber></Navber>
                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default Main;