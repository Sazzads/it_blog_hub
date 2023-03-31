import React, { useEffect, useState } from 'react';

const SideBar = ({title}) => {
    return (
        <div className='card p-2'>
           {title.title}
        </div>
    );
};

export default SideBar;