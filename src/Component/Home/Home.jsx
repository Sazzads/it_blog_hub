import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import SingleBlog from '../SingleBlog/SingleBlog';
import { ToastContainer, toast } from 'react-toastify';

const Home = ({ handleReadTime, handleTitleShow }) => {
    const [blogs, setMovies] = useState([])


    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setMovies(data))
    }, []);

    const [bookmark, setBookmark] = useState([]);
    handleTitleShow = (title) => {
        // const newBookmark = [...bookmark, title]
        // setBookmark(newBookmark)
        // handleTost()
        if(bookmark.find(item=>item.id==title.id)){
            const newBookmark = [...bookmark, title];
            setBookmark(newBookmark);
            handleTost()
        }
        else{
            const newBookmark = [...bookmark, title];
            setBookmark(newBookmark);
        }
    }

    const handleTost = () => {
        toast("you already have a book mark")
    }

    const [time, setTime] = useState(0)
    handleReadTime = (timezone) => {
        if (timezone) {
            const newTime = timezone + time;
            setTime(newTime)
        }
        else {
            setTime(time)
        }
    }



    return (
        <div className='row' >
            <div className="blog-container col-8 ">

                {
                    blogs.map((blog) => (
                        <SingleBlog key={blog.id}
                            handleReadTime={handleReadTime}
                            handleTitleShow={handleTitleShow}
                            blog={blog} ></SingleBlog>
                    ))
                }
            </div>
            <div style={{ position: "sticky", height: "100%" ,top:"0px"}} className='col-4 card bg-light text-left position'>
                <h4 className='card text-left'>Spent time on read : {time} mins </h4>
                <h3 className='card m-1 text-left'> Bookmarked Blogs :  {bookmark.length}</h3>
                <div className="div">
                {
                    bookmark.map(title => <SideBar key={title.id} title={title}></SideBar>)
                }
                </div>

            </div>
        </div>
    );
};

export default Home;