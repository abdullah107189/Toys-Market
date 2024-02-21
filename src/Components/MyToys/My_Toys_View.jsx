import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../Hooks/TitleHooks';

const My_Toys_View = () => {
    useTitle('Toy View')
    const navigate = useNavigate()
    const ViewData = useLoaderData()
    const { _id, photo, toy_Name, user_email, user_name, category, price, reating, quantity, description } = ViewData;
    return (
        <div>
            <button onClick={() => navigate(-1)} className='my-3 border px-6 py-2 rounded-lg text-2xl hover:text-white hover:bg-slate-600 font-semibold'>Back</button>
            <div className='grid md:grid-cols-2'>
                <div >
                    <div className='border p-10 my-3 rounded-lg shadow-lg'>
                        <img className='mx-auto  w-[650px] mb-3 rounded-lg' src={photo} alt="" />
                        <div className='flex gap-4 justify-center'>
                            <img className='lg:w-40 md:w-24 w-20 rounded-lg' src={photo} alt="" />
                            <img className='lg:w-40 md:w-24 w-20 rounded-lg' src={photo} alt="" />
                            <img className='lg:w-40 md:w-24 w-20 rounded-lg' src={photo} alt="" />
                        </div>
                    </div>
                </div>
                <div className='p-10'>
                    <h1 className='text-2xl font-bold text-purple-400'>{toy_Name}</h1>
                    <p>Price : $ {price}</p>
                    <p className='mb-4'>Quantity Product : {quantity}</p>
                    <hr />
                    <p>Category : {category}</p>
                    <p>Reating : {reating}</p>
                    <hr className='my-4' />
                    <p>Description : {description}</p>

                    <hr className='my-3' />
                    <p className='text-2xl'>Product Seller Info</p>
                    <p>Seller Name : {user_name}</p>
                    <p>Seller Email : {user_email}</p>
                </div>
            </div>
        </div>
    );
};

export default My_Toys_View;