import React from 'react';
import { Outlet } from 'react-router-dom';
import BUNavbar from '../../components/Bus/BUNavbar';

const BusLayout = () => {
    return (
        <div className='controller-layout'>
            <div className='sidebar'>
                <BUNavbar/>
            </div>
            <div className='main-content'>
                <Outlet />
            </div>
        </div>
    );
};

export default BusLayout;