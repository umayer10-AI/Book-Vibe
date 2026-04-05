import React from 'react';
import img from "../assets/pngwing 1.png"

const Hero = () => {
    return (
        <div className='max-w-[80%] mx-auto flex flex-col-reverse lg:flex-row mb-20 justify-center gap-10 text-center lg:text-left lg:gap-30 items-center bg-gray-100 rounded-2xl py-10 px-5 lg:px-30 mt-5'>
            <div>
                <h2 className='text-5xl font-semibold mb-10'>Books to freshen up your bookshelf</h2>
                <button className='btn btn-success text-white'>View The List</button>
            </div>
            <img src={img} className='h-80' alt="Book" />
        </div>
    );
};

export default Hero;