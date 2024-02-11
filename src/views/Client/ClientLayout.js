import React from 'react';
import CNavbar from '../../components/Client/CNavbar';
import { Outlet } from 'react-router-dom';
import '../../assets/Client/styleClient.css'

const ClientLayout = () => {
    return (
        <div className='adminPage'>
             <div className='navbar_client'>
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