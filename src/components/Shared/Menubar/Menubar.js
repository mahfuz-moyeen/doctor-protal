import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Menubar = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    const menuList = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/appointment'>Appointment</NavLink ></li>
        <li><NavLink to='/reviews'>Reviews</NavLink ></li>
        <li><NavLink to='/contact-us'>Contact Us</NavLink ></li>
        <li><NavLink to='/about'>About</NavLink ></li>
        {
            user?.uid ?
                <li>
                    <button onClick={() => handleSignOut()}>Logout</button>
                </li>
                :
                <li><NavLink to='/login'>Login</NavLink ></li>

        }
    </>

    return (
        <div className="navbar bg-base-100 bg-opacity-80 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
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
                <ul className="menu menu-horizontal p-0 gap-2">
                    {menuList}
                </ul>
            </div>
        </div>
    );
};

export default Menubar;