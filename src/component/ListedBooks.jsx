import React, { useContext, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import ReadBooks from './ReadBooks';
import WishListBooks from './WishListBooks';
import { Data } from '../Context/Context';

const ListedBooks = () => {

    const [show,setShow] = useState('read')
    const {read,wish,setS} = useContext(Data)

    return (
        <div className='max-w-[80%] mx-auto mb-20'>
            <div>
                <h2 className='text-2xl font-bold py-5 text-center mt-5 bg-gray-100 rounded-2xl'>Books</h2>

                <div className="dropdown dropdown-start flex justify-center mt-5">
                    <div tabIndex={0} role="button"><button className='flex items-center gap-2 btn btn-success font-semibold text-white'>Sort By <IoIosArrowDown className='text-xl'/></button></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setS("page")}><a>Pages</a></li>
                        <li onClick={() => setS("rate")}><a>Rating</a></li>
                        <li onClick={() => setS("year")}><a>Year</a></li>
                    </ul>
                </div>

            </div>
            <div className="tabs tabs-box mt-5">
                <input onClick={() => setShow('read')} type="radio" name="my_tabs_1" className="tab" aria-label={`Read Books (${read.length})`} defaultChecked />
                <input onClick={() => setShow('wish')} type="radio" name="my_tabs_1" className="tab" aria-label={`Wishlist Books (${wish.length})`} />
            </div>

            <div>
                {
                    show === "read" && <ReadBooks></ReadBooks>
                }
                {
                    show === "wish" && <WishListBooks></WishListBooks>
                }
            </div>
        </div>
    );
};

export default ListedBooks;