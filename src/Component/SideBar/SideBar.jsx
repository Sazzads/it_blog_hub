import React, { useEffect, useState } from 'react';

const SideBar = ({title}) => {
    // console.log(title.title)
    
    

    return (
        <div className='card p-2 m-1 text-start'>
           <h5 >{title.title}</h5>
        </div>
    );
};

export default SideBar;