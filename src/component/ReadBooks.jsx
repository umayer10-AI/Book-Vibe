import React, { useContext } from 'react';
import { Data } from '../Context/Context';
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from 'react-router';
import { toast,Bounce } from 'react-toastify';

const ReadBooks = () => {

    const {read,setRead,s} = useContext(Data)

    const sort = [...read].sort((a,b) => {
        if(s === "page") return a.totalPages - b.totalPages
        if(s === "rate") return a.rating - b.rating
        return 0
    })

    return (
        <div className='flex flex-col gap-4'>
            {
                sort.map(v => (
                    <div key={v.bookId} className='flex flex-col lg:flex-row gap-5 lg:gap-10 border border-gray-300 shadow-xl rounded-2xl p-4 transition duration-300 hover:-translate-y-2 hover:shadow-2xl'>
                        <div className='bg-gray-100 rounded-2xl flex justify-center items-center'>
                            <img src={v.image} className='h-40 w-30 mx-10 my-3 rounded-xl' alt="jio" />
                        </div>
                        <div className='space-y-2'>
                            <h2 className='text-2xl font-semibold'>{v.bookName}</h2>
                            <p className='font-semibold'>{v.author}</p>
                            <div className='font-bold flex gap-5 items-center flex-wrap'>
                                <h2 className='text-xl'>Tag</h2>
                                <button className='btn btn-primary btn-outline'>#{v.tags?.[1]}</button>
                                <button className='btn btn-primary btn-outline'>#{v.tags?.[1]}</button>
                                <h2 className='flex items-center font-normal gap-2'><SlLocationPin /> Year of Publishing: {v.yearOfPublishing}</h2>
                            </div>
                            <div className='flex items-center gap-7'>
                                <h2 className='flex items-center font-normal gap-2'><HiOutlineUsers /> Publisher: {v.publisher}</h2>
                                <h2 className='flex items-center font-normal gap-2'><IoDocumentTextOutline /> Page {v.totalPages}</h2>
                            </div>
                            <hr className='text-gray-400 py-1'/>
                            <div className='flex items-center gap-3 flex-wrap'>
                                <Link to='/info'><button className='btn btn-info rounded-full text-white'>Category: {v.category}</button></Link>
                                <button className='btn btn-warning rounded-full'>Rating: {v.rating}</button>
                                <button onClick={() => {
                                    setRead(c => c.filter(x => x.bookId !== v.bookId))
                                    toast.success('Cart remove Successfully', {
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
                                }} className='btn btn-success rounded-full text-white'>Delete</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ReadBooks;