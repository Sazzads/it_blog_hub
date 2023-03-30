import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">IT Blog Hub</a>
                <div>
                    <a className='text-decoration-none text-secondary me-1' href="/home">Home</a>
                    <a className='text-decoration-none text-secondary me-1' href="/blog">Blog</a>
                    <a className='text-decoration-none text-secondary me-1' href="/about">About</a>
                    <a href=""><img className='nav-image' src="../../../images/nav_dp.jpg" alt="" /></a>
                </div>
            </nav>
        </div>
    );
};

export default Header;