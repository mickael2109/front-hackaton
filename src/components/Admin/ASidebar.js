import React, { useEffect, useState } from 'react';
import { FaBars, FaBook, FaBus, FaChalkboardTeacher, FaEllipsisV, FaTachometerAlt, FaUser } from 'react-icons/fa';
import { MdMeetingRoom } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { Link, useLocation } from 'react-router-dom';
import '../../assets/admin/styleAdmin.css'

const ASidebar = () => {

    const [activeTab, setActiveTab] = useState('Dashboard')
    const location = useLocation()
    const [reduice, setReduice] = useState(false)

    const reduiceSidebar = () => {
        const sidebarSolarma =  document.getElementById("sidebarFront");
        const logoS =  document.getElementById("logoS");

        sidebarSolarma.classList.toggle("miniSidebar");
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
            setActiveTab('bus')
        }else if (location.pathname === '/admin/controller'){
            setActiveTab('controller')
        }
    }, [location.pathname])
    return (
        <div className=''>
            <div className='logo-place'>
               <div className='logo' id='logoS'>
                    <div className='logo_min' id='mini-logo'><img src='../media/logo.png' alt='logo'/></div>
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
                    <li className={`${activeTab === "bus" ? "active" : ""}`} onClick={() => setActiveTab("bus")}>
                        <i className=''><FaBus/></i>
                        <span className={`${!reduice ? "" : "desactiveMaxSidebar"}`}>Bus</span>
                    </li>
                </Link>
                <Link to='/admin/controller'>
                    <li className={`${activeTab === "controller" ? "active" : ""}`} onClick={() => setActiveTab("controller")} >
                        <i className=''><PiStudentFill/></i>
                        <span className={`${!reduice ? "" : "desactiveMaxSidebar"}`}>controller</span>
                    </li>
                </Link>
            </div>
        </div>
    );
};

export default ASidebar;