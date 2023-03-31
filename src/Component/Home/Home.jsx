import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Home = ({handleReadTime}) => {
    const [blogs,setMovies]=useState([])
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setMovies(data))
    },[])

    return (
        <div >
            <div className="blog-container ">
                {
                    blogs.map((blog)=>(
                       <SingleBlog key={blog.id} handleReadTime={handleReadTime} blog={blog}></SingleBlog>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;