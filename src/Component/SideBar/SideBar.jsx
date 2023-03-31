import React, { useEffect, useState } from 'react';

const SideBar = ({ readTime }) => {
    const [time,setTime]=useState(readTime);
    useEffect(() => {
        const getReadTimeFromStorage = localStorage.getItem("readTime");
        setTime(getReadTimeFromStorage)
    }, [readTime])

    return (
        <div>
            <div className="cart-container">
                
                <h4 className='text-center card bg-light'>Spent time on read : {time} min</h4>

            </div>
        </div>
    );
};

export default SideBar;