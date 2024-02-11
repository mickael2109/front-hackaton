import React from "react";
import { Link, Outlet } from 'react-router-dom';


const Bus = () => {
    return (
        <>
        <div className=''>
            
            <div className='outlet-page' id='list-content'>
                <Outlet/>
            </div>
        </div>
        </>
    );
}

export default Bus;