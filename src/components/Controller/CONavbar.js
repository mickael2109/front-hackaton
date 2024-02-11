import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../assets/controller/styleController.css";
import { Utils } from "../../_utils/Utils";
import { IoLogOut, IoSettingsSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

const CONavbar = () => {

  const [activeTab, setActiveTab] = useState('accueil')
  const location = useLocation()
  
  useEffect(() => {
      Utils.verifyToken()
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
              <div className="active-link" onClick={Utils.Logout}><i><IoLogOut /></i></div>
          </Link>
      </div>
    </div>

   
  );
};

export default CONavbar;
