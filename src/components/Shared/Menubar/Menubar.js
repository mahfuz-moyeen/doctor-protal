import React from 'react';
import { Link } from 'react-router-dom';

const Menubar = () => {
    const menuList = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/contact-us'>Contact Us</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/login'>Login</Link></li></>
    return (
        <div className="navbar bg-base-100 bg-opacity-80 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuList}
                    </ul>
                </div>
                <Link to='/' className="hidden lg:flex btn btn-ghost normal-case text-xl">Doctor Portal</Link>
            </div>

            <div className='lg:hidden navbar-end'>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Doctor Portal</Link>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuList}
                </ul>
            </div>
        </div>
    );
};

export default Menubar;