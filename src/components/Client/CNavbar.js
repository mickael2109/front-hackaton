import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { BiSolidTrain } from "react-icons/bi";
import { FaMapMarkedAlt } from "react-icons/fa";

const CNavbar = () => {

    const [activeTab, setActiveTab] = useState('accueil')
    const location = useLocation()
    
    useEffect(() => {
        // Utils.verifyToken()
        if(location.pathname === '/'){
            setActiveTab('accueil')
        }else if (location.pathname === '/listebus'){
            setActiveTab('busListe')
        }else if (location.pathname === '/listearret'){
            setActiveTab('listeArret')
        }
    }, [location.pathname])

    return (
        <div className='navbar-top'>
            <div className='navbar-element'>
                <div className='icon-navbar'>
                    <Link to='/'>
                        <div className={`${activeTab === "accueil" ? "icon-link" : "active-link"}`} ><i><FaHome /></i></div>
                    </Link>
                    <Link to='/listebus'>
                        <div className={`${activeTab === "busListe" ? "icon-link" : "active-link"}`}><i><BiSolidTrain  /></i></div>
                    </Link>
                    <Link to='/listearret'>
                        <div className={`${activeTab === "listeArret" ? "icon-link" : "active-link"}`}><i><FaMapMarkedAlt  /></i></div>
                    </Link>
                    <Link to='/login'>
                        <div className="active-link">Login</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CNavbar;