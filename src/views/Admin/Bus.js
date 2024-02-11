import React from "react";
import { Link, Outlet } from 'react-router-dom';


const Bus = () => {
    return (
        <>
        <div className=''>
            <div className="navbarPage">
                <div className='titre-page' >BUS</div>
                <div><button className='button is-success' ><Link to={`/admin/bus/addEditBus`}>Nouveau BUS</Link></button></div>
            </div>
            <div className='outlet-page' id='list-content'>
                <Outlet/>
            </div>
        </div>
        </>
    );
}

export default Bus;