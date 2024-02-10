import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { BiSolidTrain } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";

const CNavbar = () => {

    const [activeTab, setActiveTab] = useState('gare')
    const location = useLocation()
    
    useEffect(() => {
        // Utils.verifyToken()
        if(location.pathname === '/client'){
            setActiveTab('gare')
        }else if (location.pathname === '/admin/prof'){
            setActiveTab('Prof')
        }else if (location.pathname === '/admin/etudiant'){
            setActiveTab('Etudiant')
        }else if (location.pathname === '/admin/classe'){
            setActiveTab('Classe')
        }else if (location.pathname === '/admin/matiere'){
            setActiveTab('Matiere')
        }
    }, [location.pathname])

    return (
        <div className='sidebar-top'>
            <div className='sidebar-element'>
                <div className='image-user'>
                    <div className=''><img src='../../media/user.png' alt='profile'/></div>
                </div>
                <div className='icon-sidebar'>
                    <Link to='/client'>
                        <div className={`${activeTab === "gare" ? "icon-link" : "active-link"}`} ><i><BiSolidTrain /></i></div>
                    </Link>
                    <Link to=''>
                        <div className={`${activeTab === "reservation" ? "icon-link" : "active-link"}`}><i><FaChalkboardTeacher /></i></div>
                    </Link>
                    <Link to=''>
                        <div className={`${activeTab === "parametre" ? "icon-link" : "active-link"}`}><i><IoSettingsSharp  /></i></div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CNavbar;