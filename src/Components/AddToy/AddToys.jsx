import React, { useContext, useState } from 'react';
import useTitle from '../../Hooks/TitleHooks';
import toast from 'react-hot-toast';
import { authContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AddToys = () => {
    useTitle('Add Toys')
    const { user } = useContext(authContext)
    const navigate = useNavigate()
    const [selectedCategory, setSelectedCategory] = useState('');
    const [des, setDes] = useState()
    const handleAddBtn = (e) => {
        e.preventDefault();
        if (selectedCategory == '') {
            return toast.error('please select categroy')
        }
        const form = e.target;
        const photoURL = form.photoURL.value;
        const name = form.Product_Name.value;
        const category = form.category.value;
        const price = form.product_price.value;
        const reating = form.product_reating.value;
        const quantity = form.quantity.value;
        const description = des;
        const toyInfo = {
            photo: photoURL,
            toy_Name: name,
            user_email: user?.email,
            user_name: user?.displayName,
            category: category,
            price: price,
            reating: reating,
            quantity: quantity,
            description: description
        }

        fetch('http://localhost:5000/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('Toy Added Successfully Done ')
                    navigate('/')
                }
            })
    }

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div>
            <div className='my-10 border p-4 rounded-lg shadow-lg bg-gray-200 '>
                <h1 className='text-center font-bold text-3xl'>Add Toy</h1>
                <form action="" onSubmit={handleAddBtn} className='grid grid-cols-2 gap-5 mt-4'>
                    <div>
                        <input className='rounded-lg w-full p-2' type="url" name="photoURL" placeholder='Enter photo URL' required />
                    </div>
                    <div>
                        <input className='rounded-lg w-full p-2' type="text" name="Product_Name" placeholder='Enter product name' required />
                    </div>
                    <div>
                        <input className='rounded-lg w-full p-2' type="email" placeholder='Enter your Email' readOnly defaultValue={user?.email} required />
                    </div>
                    <div>
                        <input className='rounded-lg w-full p-2' type="text" placeholder='Enter your name' readOnly defaultValue={user?.displayName} required />
                    </div>

                    <select id="category" name="category" onChange={handleCategoryChange} >
                        <option value=''>Select Category</option>
                        <option value="sports">Sports Car</option>
                        <option value="Truck">Truck</option>
                        <option value="Regular">Regular Car</option>
                        <option value="Mini fire truck">Mini fire truck</option>
                        <option value="Mini police car">Mini police car</option>
                    </select>

                    <div>
                        <input className='rounded-lg w-full p-2' type="number" name="product_price" placeholder='Enter product price' required />
                    </div>
                    <div>
                        <input className='rounded-lg w-full p-2' type="number" min="1" max="10" name="product_reating" placeholder='Enter product reating' required />
                    </div>
                    <div>
                        <input className='rounded-lg w-full p-2' type="number" name="quantity" placeholder='Enter product quantity' required />
                    </div>
                    <div className='col-span-2'>
                        <textarea onChange={(e) => setDes(e.target.value)} className='rounded-lg w-full p-2 ' id="comment" name="description" placeholder="Write toy description here..." required></textarea>
                    </div>
                    <button type='submit' className='font-bold w-full btn col-span-2'>Add Toy</button>
                </form>
            </div>
        </div>
    );
};

export default AddToys;