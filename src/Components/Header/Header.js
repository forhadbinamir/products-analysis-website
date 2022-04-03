import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <h1>header page</h1>
            <Link to='/'>Home</Link>
            <Link to='/review'>Reviews</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/about'>About</Link>
        </nav>
    );
};

export default Header;