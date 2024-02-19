import React, { useContext, useState } from 'react';
import toyImg from '../../../public/toy-shop.png'
import UserImg from '../../../public/user-interface.png'
import { Link } from 'react-router-dom';
import { authContext } from '../../Provider/AuthProvider';
const Navber = () => {
    const { user } = useContext(authContext)
    return (
        <div className='flex justify-between items-center'>
            <Link to={'/'} className='flex gap-3 items-center'>
                <img className='w-10' src={toyImg} alt="" />
                <h1 className='text-2xl font-bold'>Toys Market</h1>
            </Link>
            <div className="flex gap-3">
                <Link to={'/'}>  <h1 className='text-xl p-2 border rounded-lg hover:bg-gray-500 hover:text-white transform duration-200 font-semibold'>Home </h1></Link >

                <Link to={'/all-toys'}> <h1 className='text-xl p-2 border rounded-lg hover:bg-gray-500 hover:text-white transform duration-200 font-semibold'>All Toys</h1></Link >

                <Link to={'/my-toys'}> <h1 className='text-xl p-2 border rounded-lg hover:bg-gray-500 hover:text-white transform duration-200 font-semibold'>My Toy</h1></Link >

                <Link to={'/add-toy'}> <h1 className='text-xl p-2 border rounded-lg hover:bg-gray-500 hover:text-white transform duration-200 font-semibold'>Add Toy</h1></Link >

                <Link to={'/blogs'}> <h1 className='text-xl p-2 border rounded-lg hover:bg-gray-500 hover:text-white transform duration-200 font-semibold'>Blogs</h1></Link >
            </div>

            <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className="hover:bg-slate-400 transform duration-300 rounded-full">
                    <img className='w-14 p-1 rounded-full' src={user ? user.photoURL : UserImg} alt='user Img' title={user?.displayName} />
                </div>
                {
                    user ?
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-52">
                            <li><button>Log Out</button></li>
                        </ul>
                        :
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/login'}>Login</Link></li>
                            <li><Link to={'/reg'}>Register</Link></li>
                        </ul>
                }
            </div>
        </div >
    );
};

export default Navber;