import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import SingleBlog from '../SingleBlog/SingleBlog';

const Home = ({handleReadTime,handleTitleShow}) => {
    const [blogs,setMovies]=useState([])
    

    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setMovies(data))
    },[]);

    const [bookmark, setBookmark] = useState([]);
         handleTitleShow = (title) =>{
           const newBookmark = [...bookmark, title]
           setBookmark(newBookmark)
         }

    const [time, setTime] = useState(0)
    handleReadTime = (timezone) =>{
        if(timezone){
            const newTime = timezone + time;
            setTime(newTime)
        }
        else{
            setTime(time)
        }
    }



    return (
        <div className='row' >
            <div className="blog-container col-8 ">
                
                {
                    blogs.map((blog)=>(
                       <SingleBlog  key={blog.id}  
                       handleReadTime={handleReadTime}
                       handleTitleShow={handleTitleShow}
                       blog={blog} ></SingleBlog>
                    ))
                }
            </div>
            <div className='col-4'>
                <h3 className='card'>time {time}</h3>
                <h3> length {bookmark.length}</h3>
                {
                    bookmark.map(title => <SideBar title={title}></SideBar>)
                }

            </div>
        </div>
    );
};

export default Home;