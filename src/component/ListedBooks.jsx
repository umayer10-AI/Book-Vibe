import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import ReadBooks from './ReadBooks';

const ListedBooks = () => {

    const [show, setShow] = useState('read')

    return (
        <div className='max-w-[80%] mx-auto mb-20'>
            <div>
                <h2 className='text-2xl font-bold py-5 text-center mt-5 bg-gray-100 rounded-2xl'>Books</h2>
                <div className='flex justify-center mt-5'>
                    <button className='flex items-center gap-2 btn btn-success font-semibold text-white'>Sort By <IoIosArrowDown className='text-xl'/></button>
                </div>
            </div>
            <div className="tabs tabs-box mt-5">
                <input onClick={() => setShow('read')} type="radio" name="my_tabs_1" className="tab" aria-label="Read Books" defaultChecked />
                <input onClick={() => setShow('wish')} type="radio" name="my_tabs_1" className="tab" aria-label="Wishlist Books" />
            </div>

            <div>
                {
                    show === "read" && <ReadBooks></ReadBooks>
                }
                {/* {
                    show === "wish" && <ReadBooks></ReadBooks>
                } */}
            </div>
        </div>
    );
};

export default ListedBooks;