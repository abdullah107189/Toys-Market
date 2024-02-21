import React, { useContext } from 'react';
import loadingImg from '../../public/loading.png'
import { authContext } from '../Provider/AuthProvider';
const Loading = () => {
    const { loading } = useContext(authContext)
    return (
        loading && <div className='absolute h-screen w-full flex justify-center items-center bg-black opacity-60 z-10 '>
            <img className='animate-spin w-40' src={loadingImg} alt="" />
        </div>
    );
};

export default Loading;