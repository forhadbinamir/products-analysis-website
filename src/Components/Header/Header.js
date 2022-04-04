import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import './Header.css'
const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <nav className='bg-slate-200 py-3'>
                <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                    {open ? <XIcon></XIcon> : <MenuIcon ></MenuIcon>}
                </div>
                <ul className={`flex flex-col md:flex-row justify-center w-full absolute md:sticky duration-300 ease-in bg-slate-200 my-2 ${open ? 'top-10' : 'top-[-220px]'}`}>
                    <Link to='/'>Home</Link>
                    <Link to='/reviews'>Reviews</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/about'>About</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;