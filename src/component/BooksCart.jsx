import React, { useContext } from 'react';
import { FaRegStar } from "react-icons/fa";
import img from "../assets/pngwing 1.png"
import { Data } from '../Context/Context';
import { Link } from 'react-router';

const BooksCart = ({p}) => {

    const {setCart} = useContext(Data)

    return (
        <div>
            <div className='border border-gray-300 p-5 rounded-2xl h-full space-y-2 shadow-xl hover:scale-105 transition duration-500'>
                <div className='bg-gray-100 p-4 rounded-2xl'>
                    <img className='h-30 mx-auto' src={img} alt="logo" />
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
                <Link to='/info'><button onClick={() => setCart(p)} className='btn btn-warning'>Details</button></Link>
            </div>
        </div>
    );
};

export default BooksCart;