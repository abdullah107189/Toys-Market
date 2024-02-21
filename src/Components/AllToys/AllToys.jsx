import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/TitleHooks';
import ToysTableRow from './ToysTableRow';

const AllToys = () => {
    useTitle('All Toys');
    const [toysData, setToysData] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/allToys');
            const jsonData = await response.json();
            setToysData(jsonData);
        };
        fetchData();
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filtering toysData based on search term
    const [filteredToysData, setFilteredToysData] = useState([])
    console.log(filteredToysData)
    const handleFinalSearch = () => {
        const result = (toysData.filter(toy =>
            toy.toy_name && toy.toy_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            toy.user_name && toy.user_name.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredToysData(result)
    }


    return (
        <div>
            <div className='flex w-2/3 mx-auto my-3'>
                <input
                    className='border w-full px-4 py-2 rounded-l-lg border-r-0 focus:outline-none'
                    type="search"
                    placeholder="Search by Toy Name or Seller Name"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button className='border px-4 py-1 rounded-r-lg hover:bg-slate-400 hover:text-white' onClick={handleFinalSearch}>
                    Search
                </button>
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
                        {filteredToysData.map((toyData, index) =>
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
    );
};

export default AllToys;
