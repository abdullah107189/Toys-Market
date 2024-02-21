import React, { useContext, useState } from 'react';
import useTitle from '../../Hooks/TitleHooks';
import toast from 'react-hot-toast';
import { authContext } from '../../Provider/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';

const My_Toys_Update = () => {
    useTitle('Update Toy')
    const willUpdate = useLoaderData()
    const { _id, category, price, quantity, description } = willUpdate;
    const navigate = useNavigate()
    const [selectedCategory, setSelectedCategory] = useState('');
    const [des, setDes] = useState(description)
    const handleAddBtn = (e) => {
        e.preventDefault();
        const form = e.target;
        const category = form.category.value;
        const price = form.product_price.value;
        const quantity = form.quantity.value;
        const description = des;
        const toyInfo = {
            category: category,
            price: price,
            quantity: quantity,
            description: description
        }

        fetch(`http://localhost:5000/myToys/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    navigate('/my-toys')
                    toast.success('Toy Added Successfully Done ')
                }
            })
    }
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }
    return (
        <div>
            <div>
                <button onClick={() => navigate(-1)} className='my-3 border px-6 py-2 rounded-lg text-2xl hover:text-white hover:bg-slate-600 font-semibold'>Back</button>
                <div className='mb-10 mt-3 border p-4 rounded-lg shadow-lg bg-gray-200 '>
                    <h1 className='text-center font-bold text-3xl'>Update Toy</h1>
                    <form action="" onSubmit={handleAddBtn} className='grid grid-cols-2 gap-5 mt-5'>
                        <select id="category" name="category" defaultValue={category} className='row-span-2 p-3 rounded-lg' onChange={handleCategoryChange} >
                            <option value=''>Select Category</option>
                            <option value="sports">Sports Car</option>
                            <option value="Truck">Truck</option>
                            <option value="Regular">Regular Car</option>
                            <option value="Mini fire truck">Mini fire truck</option>
                            <option value="Mini police car">Mini police car</option>
                        </select>

                        <div>
                            <input className='rounded-lg w-full p-2' defaultValue={price} type="number" name="product_price" placeholder='Enter product price' required />
                        </div>
                        <div>
                            <input className='rounded-lg w-full p-2' defaultValue={quantity} type="number" name="quantity" placeholder='Enter product quantity' required />
                        </div>
                        <div className='col-span-2'>
                            <textarea rows={4} onChange={(e) => setDes(e.target.value)} className='rounded-lg w-full p-2 ' id="comment" name="description" defaultValue={description} placeholder="Write toy description here..." required></textarea>
                        </div>
                        <button type='submit' className='font-bold w-full btn col-span-2'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default My_Toys_Update;