import React from 'react';
import navImg from '../../images/nav_dp.jpg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">ITBlog Hub</a>
                    <div className="d-flex justify-content-between header">
                        <a href="/home">Home</a>
                        <a href="/blog">Blog</a>
                        <a href="/author">Author</a>
                        <a href="/about">About</a>
                        <a href=""><img className='nav-image' src={navImg} alt="image link is broken" /></a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;