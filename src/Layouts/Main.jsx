import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Navber from '../Components/Shared/Navber';
import { Outlet } from 'react-router-dom';
import Loading from '../Components/Loading';
import Footer from '../Components/Shared/Footer';

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
        <div className=''>
            <Loading></Loading>
            <Navber></Navber>
            <div className='container mx-auto'>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default Main;