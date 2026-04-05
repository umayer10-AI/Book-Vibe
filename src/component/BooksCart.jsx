import React from 'react';
import { FaRegStar } from "react-icons/fa";

const BooksCart = ({p}) => {
    return (
        <div>
            <div className='border border-gray-300 p-5 rounded-2xl h-full space-y-2 shadow-xl hover:scale-105 transition duration-500'>
                <div className='bg-gray-100 p-4 rounded-2xl'>
                    <img className='h-30 mx-auto' src="https://i.ibb.co.com/khHN7Pk/9780143454212.jpg" alt="logo" />
                </div>
                <div className='flex gap-3 mt-4'>
                    <button className='btn btn-info btn-outline'>{p.tags[0]}</button>
                    <button className='btn btn-info btn-outline'>{p.tags[1]}</button>
                </div>
                <h2 className='text-lg font-bold'>{p.bookName}</h2>
                <p>{p.author}</p>
                <div className='flex justify-between font-semibold'>
                    <p>{p.category}</p>
                    <p className='flex gap-2 items-center font-bold text-green-500'>{p.rating} <span><FaRegStar /></span></p>
                </div>
                <button className='btn btn-warning'>Details</button>
            </div>
        </div>
    );
};

export default BooksCart;