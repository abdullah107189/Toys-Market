import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../Hooks/TitleHooks';
import { authContext } from '../../Provider/AuthProvider';

const MyToys = () => {
    useTitle('My Toys');
    const { user } = useContext(authContext);
    const [loadData, setLoadData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (user && user.email) {
            fetch(`http://localhost:5000/allToys/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setLoadData(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [user]); // Only re-fetch data when user object changes

    return (
        <div>
            {loading ? (
                <div>....Loading</div>
            ) : (
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Photo</th>
                                <th>Toy Name</th>
                                <th>Seller Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loadData.map((data, index) =>
                                <tr key={data._id} >
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-24 h-24">
                                                <img className='' src={data.photo} alt={data.toy_Name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{data.toy_Name}</p>
                                    </td>
                                    <td>
                                        <p>{data.user_name}</p>
                                    </td>
                                    <td>
                                        <p>{data.category}</p>
                                    </td>
                                    <td>
                                        <p>$ {data.price}</p>
                                    </td>
                                    <td>
                                        <p>{data.quantity}</p>
                                    </td>
                                    <td>
                                        <button onClick={() => handleView(data._id)} className='font-bold btn'>View</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div>
            )}
        </div>
    );
};

export default MyToys;
