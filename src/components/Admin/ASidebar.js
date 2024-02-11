import React, { useEffect, useState } from 'react';
import { FaBars, FaEllipsisV, FaTachometerAlt } from 'react-icons/fa';
import { FaBusAlt } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';

const ASidebar = () => {

    const [activeTab, setActiveTab] = useState('Dashboard')
    const location = useLocation()
    const [reduice, setReduice] = useState(false)

    const reduiceSidebar = () => {
        const sidebar =  document.getElementById("sidebarFront");
        const logoS =  document.getElementById("logoS");

        sidebar.classList.toggle("miniSidebare");
        logoS.classList.toggle("logoReduice");
    }

    const reduiceTab = () => {
        setReduice(true)
    }
    const agrandirTab = () => {
        setReduice(false)
    }
    useEffect(() => {
        if(location.pathname === '/admin'){
            setActiveTab('Dashboard')
        }else if (location.pathname === '/admin/bus'){
            setActiveTab('Prof')
        }else if (location.pathname === '/admin/conntrolleur'){
            setActiveTab('Controlleur')
        }else if (location.pathname === '/admin/parametre'){
            setActiveTab('Parametre')
        }
    }, [location.pathname])
    return (
        <div className=''>
            <div className='logo-place'>
               <div className='logo' id='logoS'>
                    <div className='logo_min' id='mini-logo'><img src='../media/bus/logo.png' alt='logo'/></div>
               </div>
               <div className='icon-bar'>
                    <div className={`${!reduice ? "reduce_sidebar" : "desactiveMaxSidebar"}`} onClick={() => { reduiceSidebar(); reduiceTab(); }}><i><FaBars/></i></div>
                    <div className={`${reduice ? "reduce_sidebar" : "desactiveMaxSidebar"}`} onClick={() => { reduiceSidebar(); agrandirTab(); }}><i><FaBars/></i></div>
               </div>
            </div>
            <div className='profile-sidebar'>
                <div className='profile-image'>
                    <div className='' id='profile-image'><img src='../media/user.png' alt='profile'/></div>
                </div>
                <div className={`${!reduice ? "profile-information" : "desactiveMaxSidebar"}`}>
                    <div><span className='info-nom'>Mickael</span></div>
                    <div><span className='info-fonction'>Administrateur</span></div>
                </div>
                <div className={`${!reduice ? "profile-parametre" : "desactiveMaxSidebar"}`} id='info-parametre'>
                    <i><FaEllipsisV/></i>
                </div>
            </div>
            <div className='navigation'>
                <div className='titre'><span id='titre-navigation'>Navigation</span></div>
                
                <Link to='/admin'>
                    <li className={`${activeTab === "Dashboard" ? "active" : ""}`} onClick={() => setActiveTab("Dashboard")}>
                        <i className=''><FaTachometerAlt/></i>
                        <span className={`${!reduice ? "" : "desactiveMaxSidebar"}`}>Dashboard</span>
                    </li>
                </Link>
                <Link to='/admin/bus'>
                    <li className={`${activeTab === "Bus" ? "active" : ""}`} onClick={() => setActiveTab("Bus")}>
                        <i className=''><FaBusAlt/></i>
                        <span className={`${!reduice ? "" : "desactiveMaxSidebar"}`}>Bus</span>
                    </li>
                </Link>
                <Link to='/admin/controlleur'>
                    <li className={`${activeTab === "Arrêt" ? "active" : ""}`} onClick={() => setActiveTab("Controlleur")} >
                        <i className=''><FaPersonCircleCheck/></i>
                        <span className={`${!reduice ? "" : "desactiveMaxSidebar"}`}>Controlleur</span>
                    </li>
                </Link>
                <Link to='/admin/classe'>
                    <li className={`${activeTab === "Parametre" ? "active" : ""}`} onClick={() => setActiveTab("Parametre")}>
                        <i className=''><IoSettings/></i>
                        <span className={`${!reduice ? "" : "desactiveMaxSidebar"}`}>Paramètre</span>
                    </li>
                </Link>
            </div>
        </div>
    );
};

export default ASidebar;