import React from 'react';
import './SingleBlog.css'

const SingleBlog = ({ movie }) => {
    return (
        <div>
            <div className="card text-center w-100">
                <div className="w-100">
                    <img className='w-100' src={movie.cover_image} alt="" />
                </div>
                <div className="d-flex justify-content-between ">
                    <div className='d-flex '>
                        <img className='author-dp' src={movie.author_image} alt="" />
                        <div className='text-start ms-2'>
                            <h6>{movie.author_name}</h6>
                            <p>{movie.date}</p>
                        </div>
                    </div>
                    <div className='d-flex'>
                    <small className='d-flex'>{movie.read_time} min read</small>
                    <p>font awesome</p>
                    </div>
                </div>
                <h2>dark</h2>
                <p>Lorem, ipsum.</p>
                <button className='btn btn-info w-75 m-auto'>book now</button>
            </div>
        </div>
    );
};

export default SingleBlog;