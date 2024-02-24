import React, { useEffect, useState } from 'react';
import useTitle from '../Hooks/TitleHooks';
import bgimg from '../../public/bg-img-car.webp'
import '../../src/Components/Home.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link, useLoaderData } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';;
const Home = () => {
    useTitle('Home')
    const allToys = useLoaderData()

    const [sports, setSports] = useState([])
    const [truck, setTruck] = useState([])
    const [Regular, setRegular] = useState([])
    const [miniTruck, setMiniTruck] = useState([])
    const [miniCar, setMiniCar] = useState([])
    useEffect(() => {
        const sportCategory = allToys.filter(data => data.category == "sports")
        setSports(sportCategory)

        const TruckCategory = allToys.filter(data => data.category == "Truck")
        setTruck(TruckCategory)

        const RegularCategory = allToys.filter(data => data.category == "Regular")
        setRegular(RegularCategory)

        const miniTruckCategory = allToys.filter(data => data.category == "Mini fire truck")
        setMiniTruck(miniTruckCategory)

        const miniCarCategory = allToys.filter(data => data.category == "Mini police car")
        setMiniCar(miniCarCategory)
    }, [allToys, setSports, setTruck, setRegular, setMiniTruck, setMiniCar])

    // aos 
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            {/* start section  */}
            <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                className=" bg-cover bg-m-cover" style={{ backgroundImage: `url(${bgimg})` }}>
                <div className="flex justify-center items-center bg-black text-center w-full h-full bg-opacity-60 text-white">
                    <div className='p-10'>
                        <h1 className=" text-5xl font-bold">Hello there</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            {/* toys tabs  */}
            <section
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="0.5s"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                className='pt-20'>
                <h1 className='text-3xl text-center mt-12 mb-3'>All Toys in Tabs Style</h1>
                <div className='py-3'>
                    <Tabs>
                        <TabList>
                            <Tab>Sports Car</Tab>
                            <Tab>Truck</Tab>
                            <Tab>Regular Car</Tab>
                            <Tab> Mini fire truck</Tab>
                            <Tab> Mini police car</Tab>
                        </TabList>

                        <TabPanel>
                            {/* sports */}
                            <div className='grid grid-cols-4 gap-3'>
                                {
                                    sports.map(data =>
                                        <div key={data._id} className='shadow-lg rounded-xl'>
                                            <img className='h-[250px] w-full rounded-t-xl' src={data.photo} alt="" />
                                            <div className='p-3'>
                                                <p>Name : {data.toy_Name}</p>
                                                <p>Category : {data.category}</p>
                                                <p>Price : {data.price}</p>
                                                <p>Quantity : {data.quantity}</p>
                                                <div className='text-end'>
                                                    <Link to={`/toy-view/${data._id}`}> <button className='font-semibold px-3 py-1 shadow-lg border rounded-lg hover:text-white hover:bg-slate-600'>View</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </TabPanel>

                        <TabPanel>
                            {/* truck */}
                            <div className='grid grid-cols-4 gap-3'>
                                {
                                    truck.map(data =>
                                        <div key={data._id} className='shadow-lg rounded-xl'>
                                            <img className='h-[250px] w-full rounded-t-xl' src={data.photo} alt="" />
                                            <div className='p-3'>
                                                <p>Name : {data.toy_Name}</p>
                                                <p>Category : {data.category}</p>
                                                <p>Price : {data.price}</p>
                                                <p>Quantity : {data.quantity}</p>
                                                <div className='text-end'>
                                                    <Link to={`/toy-view/${data._id}`}> <button className='font-semibold px-3 py-1 shadow-lg border rounded-lg hover:text-white hover:bg-slate-600'>View</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </TabPanel>

                        <TabPanel>
                            {/* Regular */}
                            <div className='grid grid-cols-4 gap-3'>
                                {
                                    Regular.map(data =>
                                        <div key={data._id} className='shadow-lg rounded-xl'>
                                            <img className='h-[250px] w-full rounded-t-xl' src={data.photo} alt="" />
                                            <div className='p-3'>
                                                <p>Name : {data.toy_Name}</p>
                                                <p>Category : {data.category}</p>
                                                <p>Price : {data.price}</p>
                                                <p>Quantity : {data.quantity}</p>
                                                <div className='text-end'>
                                                    <Link to={`/toy-view/${data._id}`}> <button className='font-semibold px-3 py-1 shadow-lg border rounded-lg hover:text-white hover:bg-slate-600'>View</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </TabPanel>

                        <TabPanel>
                            {/*miniTruck */}
                            <div className='grid grid-cols-4 gap-3'>
                                {
                                    miniTruck.map(data =>
                                        <div key={data._id} className='shadow-lg rounded-xl'>
                                            <img className='h-[250px] w-full rounded-t-xl' src={data.photo} alt="" />
                                            <div className='p-3'>
                                                <p>Name : {data.toy_Name}</p>
                                                <p>Category : {data.category}</p>
                                                <p>Price : {data.price}</p>
                                                <p>Quantity : {data.quantity}</p>
                                                <div className='text-end'>
                                                    <Link to={`/toy-view/${data._id}`}> <button className='font-semibold px-3 py-1 shadow-lg border rounded-lg hover:text-white hover:bg-slate-600'>View</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </TabPanel>

                        <TabPanel>
                            {/*miniCar*/}
                            <div className='grid grid-cols-4 gap-3'>
                                {
                                    miniCar.map(data =>
                                        <div key={data._id} className='shadow-lg rounded-xl'>
                                            <img className='h-[250px] w-full rounded-t-xl' src={data.photo} alt="" />
                                            <div className='p-3'>
                                                <p>Name : {data.toy_Name}</p>
                                                <p>Category : {data.category}</p>
                                                <p>Price : {data.price}</p>
                                                <p>Quantity : {data.quantity}</p>
                                                <div className='text-end'>
                                                    <Link to={`/toy-view/${data._id}`}> <button className='font-semibold px-3 py-1 shadow-lg border rounded-lg hover:text-white hover:bg-slate-600'>View</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </section>


        </div>
    );
};

export default Home;