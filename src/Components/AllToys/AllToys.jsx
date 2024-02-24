import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/TitleHooks';
import ToysTableRow from './ToysTableRow';
import AllloadingImg from '../../../public/loading.png'
import { useLoaderData } from 'react-router-dom';
const AllToys = () => {
    useTitle('All Toys');
    const [toysData, setToysData] = useState([]);
    const [filterData, setFilterData] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/allToys?page=${currentPage}&limit=${itemsPerPage}`);
            const jsonData = await response.json();
            setToysData(jsonData);
            // setFilterData(toysData);
            setLoading(false)
        };
        fetchData();
    }, []);

    // serch page 
    const search = async (e) => {
        e.preventDefault();
        const searchTerm = e.target.sarchTerm.value;
        if (searchTerm) {
            const response = await fetch(`http://localhost:5000/allToys?page=${currentPage}&limit=${itemsPerPage}`);
            const jsonData = response.json();
            // setToysData(jsonData);
            // setFilterData(toysData);
            setLoading(false)
            const result = jsonData.filter(toy => toy.toy_Name.toLowerCase().includes(searchTerm.toLowerCase()));
            setToysData(result);
        }
    }




    // pagination
    const [currentPage, setCurrentPage] = useState(0)
    const totalLength = useLoaderData()
    const productlength = totalLength.result;

    const options = [5, 10, 15]
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const totalPage = Math.ceil(productlength / itemsPerPage)

    const forButton = [...Array(totalPage).keys()]
    const handleSelectChange = (e) => {
        setItemsPerPage(parseInt(e.target.value))
        setCurrentPage(0)
    }
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/allToys?page=${currentPage}&limit=${itemsPerPage}`);
            const jsonData = await response.json();
            setToysData(jsonData);
            // setFilterData(toysData);
            setLoading(false)
        };
        fetchData();
    }, [currentPage, itemsPerPage]);


    // active class 
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };



    return (
        <div> {
            loading ?
                <div className='text-9xl flex justify-center items-center h-screen '>
                    <img className='w-40 animate-spin' src={AllloadingImg} alt="" />
                </div>
                :
                <div>
                    <div className='bg-white md:top-16 top-[70px] sticky z-10'>
                        <form onSubmit={search} className='flex w-2/3 mx-auto my-3 '>
                            <input
                                className='border w-full px-4 py-2 rounded-l-lg border-r-0 focus:outline-none'
                                type="search"
                                name='sarchTerm'
                                placeholder="Search by Toy Name or Seller Name"
                            />
                            <button type='submit' className='border px-4 py-1 rounded-r-lg hover:bg-slate-400 hover:text-white'>
                                Search
                            </button>
                        </form>
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
                                {toysData.length ? toysData.map((toyData, index) =>
                                    <ToysTableRow
                                        key={toyData._id}
                                        toyData={toyData}
                                        index={index}
                                    />
                                ) :
                                    <tr><td>serch is not founded</td></tr>
                                }
                            </tbody>
                        </table>
                        {/* pagination */}
                        <div className='space-x-2 flex justify-center'>
                            {forButton.map(number => (
                                <button
                                    key={number}
                                    className={number === currentPage ? 'active btn btn-primary' : 'btn'}

                                    onClick={() => setCurrentPage(number)}
                                >{number + 1}</button>
                            ))}
                        </div>
                        <div>
                            <select value={itemsPerPage} onChange={handleSelectChange}>
                                {
                                    options.map(option =>
                                        <option key={option} value={option}>
                                            {option}
                                        </option>)
                                }
                            </select>
                        </div>
                    </div>
                </div>
        }

        </div>

    );
};

export default AllToys;
