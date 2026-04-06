import React, { useContext } from 'react';
import { Data } from '../Context/Context';
import { toast,Bounce } from 'react-toastify';
import { AddReadlistLocalDB, AddWishlistLocalDB } from './utils/loaclDb';

const InformationCart = () => {

    const {cart,read,setRead,wish,setWish} = useContext(Data)

    const f = read.find(v => v.bookId === cart.bookId)
    const ff = wish.find(v => v.bookId === cart.bookId)
    const a = () => {
        if(!f && !ff){
            setRead(c => [...c,cart])
            AddReadlistLocalDB(cart)
            toast.success('Read Cart Added', {
                position: "top-right",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
        else{
            toast.error('Cart already Added', {
                position: "top-right",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }
    const b = () => {
        if(!f && !ff){
            setWish(c => [...c,cart])
            AddWishlistLocalDB(cart)
            toast.success('Wish Cart Added', {
                position: "top-right",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
        else{
            toast.error('Cart already Added', {
                position: "top-right",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }

    return (
        <div className='max-w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10'>
            <div className='rounded-2xl bg-gray-100 flex justify-center p-10'>
                <img src={cart.image} className='hover:scale-110 transition duration-500 h-100' alt="logo" />
            </div>
            <div className='space-y-3'>
                <h2 className='text-3xl font-bold'>{cart.bookName}</h2>
                <p className='font-semibold text-xl'>{cart.author}</p>
                <div>
                    <hr className='text-gray-300'/>
                    <p className='font-semibold text-xl'>{cart.category}</p>
                    <hr  className='text-gray-300'/>
                </div>
                <h2 className='font-bold'>Review : <span className='text-gray-500 font-normal line-clamp-4'>{cart.review}</span></h2>
                <div className='font-bold flex gap-5 items-center'>
                    <h2 className='text-xl'>Tag</h2>
                    <button className='btn btn-primary btn-outline'>#{cart.tags?.[0]}</button>
                    <button className='btn btn-primary btn-outline'>#{cart.tags?.[1]}</button>
                </div>
                <hr  className='text-gray-300'/>
                <div className='font-semibold flex justify-between items-center'>
                    <p className='text-gray-500'>Number of Pages:</p>
                    <p>{cart.totalPages}</p>
                </div>
                <div className='font-semibold flex justify-between items-center'>
                    <p className='text-gray-500'>Publisher:</p>
                    <p>{cart.publisher}</p>
                </div>
                <div className='font-semibold flex justify-between items-center'>
                    <p className='text-gray-500'>Year of Publishing:</p>
                    <p>{cart.yearOfPublishing}</p>
                </div>
                <div className='font-semibold flex justify-between items-center'>
                    <p className='text-gray-500'>Rating:</p>
                    <p>4.8</p>
                </div>
                <div className='flex gap-3'>
                    <button onClick={a} className='btn btn-outline'>Read</button>
                    <button onClick={b} className='btn btn-info text-white'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default InformationCart;