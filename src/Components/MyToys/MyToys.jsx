import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../Hooks/TitleHooks';
import { authContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import AllloadingImg from '../../../public/loading.png'
import Swal from 'sweetalert2';
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
    const handleDelete = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/myToys/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            const remaining = loadData.filter(nowData => nowData._id !== id)
                            setLoadData(remaining)
                            swalWithBootstrapButtons.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        })
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire({
                        title: "Cancelled",
                        text: "Your imaginary file is safe :)",
                        icon: "error"
                    });
                }
            });

    }

    return (
        <div>
            {loading ? (
                <div className='text-9xl flex justify-center items-center h-screen'>
                    <img className='w-40 animate-spin' src={AllloadingImg} alt="" />
                </div>
            ) : (
                <div>
                    <h1 className='text-3xl font-semibold text-center my-4'>This is my Added Toys</h1>
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
                                        <div className=''>
                                            <Link to={`/my-toy-view/${data._id}`}><button className='border w-full rounded-xl hover:text-white hover:bg-slate-600 font-semibold my-1'>View</button></Link>
                                            <Link to={`/my-toy-update/${data._id}`}><button className='border w-full rounded-xl hover:text-white hover:bg-slate-600 font-semibold my-1'>Update</button></Link>

                                            <button className='border w-full rounded-xl hover:text-white hover:bg-slate-600 font-semibold my-1' onClick={() => handleDelete(data._id)}>Delete</button>
                                        </div>
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
