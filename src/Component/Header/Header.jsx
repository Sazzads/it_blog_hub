import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">IT Blog Hub</a>
                    <div className="d-flex justify-content-between header">
                        <a href="/home">Home</a>
                        <a href="/blog">Blog</a>
                        <a href="/author">Author</a>
                        <a href="/about">About</a>
                        <a href=""><img className='nav-image' src="../../../images/nav_dp.jpg" alt="" /></a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;