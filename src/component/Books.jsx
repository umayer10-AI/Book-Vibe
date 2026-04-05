import React from 'react';
import { useLoaderData } from 'react-router';
import BooksCart from './BooksCart';

const Books = () => {

    const p = useLoaderData()
    console.log(p)

    return (
        <div className='max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20'>
            {
                p.map(v => <BooksCart key={v.bookId} p={v}></BooksCart>)
            }
        </div>
    );
};

export default Books;