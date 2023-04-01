import { faBookBookmark, faCoffee, faTag, faTags, faUserTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react';
import './SingleBlog.css'

const SingleBlog = ({ blog, handleReadTime,handleTitleShow}) => {

    return (
        <div>
            <div className="card text-center w-100">
                <div className="w-100">
                    <img className='w-100' src={blog.cover_image} alt="" />
                </div>
                <div className='row mt-2'>
                    <div className='col d-flex align-items-center'>
                        <img className='w-25 rounded-5' src={blog.author_image} alt="" />
                        <div className='col text-start ms-2'>
                            <h6>{blog.author_name}</h6>
                            <p>{blog.date}</p>
                        </div>
                    </div>

                    <div className='col d-flex justify-content-end'>
                        <small className='read-time'>{blog.read_time} mins read</small>
                        <a onClick={()=>handleTitleShow(blog)}   className='ms-2'><FontAwesomeIcon icon={faBookBookmark} /></a>
                    </div>
                </div>
                <h3 className='text-start mt-2'>{blog.title}</h3>
                <h6 className='text-start mt-2 fw-lighter'>{blog.hashTag}</h6>
                <a onClick={() => handleReadTime(blog.read_time)} className='text-start mt-2 text-decoration-underline pointer'>Mark as read</a>
            </div>
        </div>
    );
};





export default SingleBlog;