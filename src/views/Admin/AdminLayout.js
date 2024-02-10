import React from 'react';
import { Outlet } from 'react-router-dom';
import ASidebar from '../../components/Admin/ASidebar'
import ANavbar from '../../components/Admin/ANavbar'

const AdminLayout = () => {
    return (
        <div className='adminPage'>
             <div className='sidebar_admin' id='sidebarFront'>
                <ASidebar />
            </div>
            <div className='contentPageAdmin'>
                <div className='navbar_admin'>
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