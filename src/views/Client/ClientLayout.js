import React from 'react';
import CNavbar from '../../components/Client/CNavbar';
import { Outlet } from 'react-router-dom';

const ClientLayout = () => {
    return (
        <div className='adminPage'>
             <div className='sidebar_admin' id='sidebarFront'>
                <CNavbar/>
            </div>
            <div className='contentPageAdmin'>
                <div className='contenuAdmin'>
                    <Outlet/>
                </div>
            </div>
           
        </div>
    );
};

export default ClientLayout;