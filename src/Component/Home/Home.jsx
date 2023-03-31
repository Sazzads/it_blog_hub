import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Home = ({handleWatchTime}) => {
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setMovies(data))
    },[])

    return (
        <div >
            <div className="movie-container ">
                {
                    movies.map((movie)=>(
                       <SingleBlog key={movie.id} handleWatchTime={handleWatchTime} movie={movie}></SingleBlog>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;