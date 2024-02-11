import React from 'react';
import { Outlet } from 'react-router-dom';
import CONavbar from '../../components/Controller/CONavbar';
import "../../assets/controller/styleController.css";

const ControllerLayout = () => {
    return (
        <div className='controller-layout'>
            <div className='sidebar'>
                <CONavbar />
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

export default ControllerLayout;
