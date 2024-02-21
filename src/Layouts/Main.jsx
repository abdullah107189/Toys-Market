import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Navber from '../Components/Shared/Navber';
import { Outlet } from 'react-router-dom';
import Loading from '../Components/Loading';

const Main = () => {
    // const [status, setStatus] = useState(false)
    // useEffect(() => {
    //     const handleOnline = () => {
    //         setStatus(true)
    //     }
    //     const handleOffline = () => {
    //         setStatus(false)
    //     }
    //     window.addEventListener("online", handleOnline)
    //     window.addEventListener("offline", handleOffline)
    //     return () => {
    //         window.addEventListener('online', handleOnline)
    //         window.addEventListener('offline', handleOffline)
    //     }
    // }, [])
    return (
        <div >
            <Loading></Loading>
            {/* {status === true ? */}
                {/* <div>
                    <p className='flex justify-center items-center h-screen'>
                        Your Offline
                    </p>
                </div>
                : */}
                <div className='container mx-auto py-3 relative'>
                    <Toaster
                        position="top-right"
                        reverseOrder={false}
                    />
                    <Navber></Navber>
                    <Outlet></Outlet>
                </div>
            {/* } */}
        </div >
    );
};

export default Main;