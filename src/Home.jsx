import React from 'react';
import Hero from './component/Hero';
import Books from './component/Books';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <h2 className='text-4xl font-semibold my-10 text-center'>Books</h2>
            <Books></Books>
        </div>
    );
};

export default Home;