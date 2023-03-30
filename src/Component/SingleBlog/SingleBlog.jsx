import { faCoffee, faTag, faTags, faUserTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import './SingleBlog.css'

const SingleBlog = ({ movie }) => {
    return (
        <div>
            <div className="card text-center w-100">
                <div className="w-100">
                    <img className='w-100' src={movie.cover_image} alt="" />
                </div>
                <div className='row mt-2'>
                    <div className='col d-flex align-items-center'>
                            <img className='w-25 rounded-5' src={movie.author_image} alt="" />
                        <div className='col text-start ms-2'>
                            <h6>{movie.author_name}</h6>
                            <p>{movie.date}</p>
                        </div>
                    </div>

                    <div className='col d-flex justify-content-end'>
                        <small className='read-time'>{movie.read_time} mins read</small>
                        <button className='btn btn-light'><FontAwesomeIcon icon={faTag} /></button>
                    </div>
                </div>
                <h3 className='text-start mt-2'>{movie.title}</h3>
                <h6 className='text-start mt-2 fw-lighter'>{movie.hashTag}</h6>
                <a className='text-start mt-2 text-decoration-underline' href="">Mark as read</a>


            </div>
        </div>
    );
};

export default SingleBlog;