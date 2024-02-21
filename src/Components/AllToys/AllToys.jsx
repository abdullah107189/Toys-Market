import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/TitleHooks';
import ToysTableRow from './ToysTableRow';
import AllloadingImg from '../../../public/loading.png'
const AllToys = () => {
    useTitle('All Toys');
    const [toysData, setToysData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/allToys');
            const jsonData = await response.json();
            setToysData(jsonData);
            setLoading(false)
        };
        fetchData();
    }, []);

    return (
        <div> {
            loading ?
                <div className='text-9xl flex justify-center items-center h-screen '>
                    <img className='w-40 animate-spin' src={AllloadingImg} alt="" />
                </div>
                :
                <div>
                    <div className='bg-white md:top-16 top-[70px] sticky z-10 '>
                        <div className='flex w-2/3 mx-auto my-3 '>
                            <input
                                className='border w-full px-4 py-2 rounded-l-lg border-r-0 focus:outline-none'
                                type="search"
                                placeholder="Search by Toy Name or Seller Name"
                            />
                            <button className='border px-4 py-1 rounded-r-lg hover:bg-slate-400 hover:text-white'>
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto my-10">
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
                                {toysData.map((toyData, index) =>
                                    <ToysTableRow
                                        key={toyData._id}
                                        toyData={toyData}
                                        index={index}
                                    />
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
        }

        </div>

    );
};

export default AllToys;
