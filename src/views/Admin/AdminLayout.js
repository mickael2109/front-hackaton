import React from 'react';
import { Outlet } from 'react-router-dom';
import ASidebar from '../../components/Admin/ASidebar'
import ANavbar from '../../components/Admin/ANavbar'
import '../../assets/Admin/styleAdmin.css'


const AdminLayout = () => {
    return (
        <div className='admin' >
            <div className='sidebar_admin' id='sidebarFront'>
                <ASidebar/>
            </div>
            <div className='contentPageAdmin'>
                <div className='navbar-bus'>
                    <ANavbar/>
                </div>
                <div className='borderContenuAdmin'>
                    <div className='contenuAdmin'>
                        <Outlet/>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default AdminLayout;