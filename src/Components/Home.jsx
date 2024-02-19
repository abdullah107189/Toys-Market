import React from 'react';
import useTitle from '../Hooks/TitleHooks';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <h1>This is home section</h1>
        </div>
    );
};

export default Home;