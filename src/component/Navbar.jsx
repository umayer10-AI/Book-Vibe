import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='px-10 lg:px-20 flex gap-5 lg:gap-0 flex-col lg:flex-row justify-between items-center font-semibold py-5 border-b border-b-gray-300'>
            <h2 className='text-2xl font-bold'>Book Vibe</h2>
            <ul className='flex items-center gap-5 lg:gap-7'>
                <NavLink to='/'  className={({ isActive }) => isActive ? "btn btn-outline btn-accent" : "btn"}>Home</NavLink>
                <NavLink to='/book'  className={({ isActive }) => isActive ? "btn btn-outline btn-accent" : "btn"}>Listed Books</NavLink>
                <NavLink to='/page'  className={({ isActive }) => isActive ? "btn btn-outline btn-accent" : "btn"}>Pages to Read</NavLink>
            </ul>
            <div className='flex gap-4'>
                <button className='btn btn-success text-white'>Sign In</button>
                <button className='btn btn-info text-white'>Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;