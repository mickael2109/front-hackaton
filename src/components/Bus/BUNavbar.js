import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { IoSettingsSharp } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import "../../assets/controller/styleController.css";

const BUNavbar = () => {

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
    <div className="navbar-employe"> {/* Ajoutez la classe 'navbar-blue' */}
        <div className='icon-navbar'>
          <Link to='/'>
              <div className={`${activeTab === "accueil" ? "icon-link" : "active-link"}`} ><i><FaHome /></i></div>
          </Link>
          <Link to='/listearret'>
              <div className={`${activeTab === "listeArret" ? "icon-link" : "active-link"}`}><i><IoSettingsSharp  /></i></div>
          </Link>
          <Link to='/login' target="_blank">
              <div className="active-link"><i><IoLogOut /></i></div>
          </Link>
      </div>
    </div>
  );
};

export default BUNavbar;
