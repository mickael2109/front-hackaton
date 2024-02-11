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
                <div className='top-navbar'>
                    {/* Contenu de la barre de navigation en haut */}
                </div>
                <div className='content-container'>
                    {/* Contenu principal */}
                    <div className='content'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusLayout;