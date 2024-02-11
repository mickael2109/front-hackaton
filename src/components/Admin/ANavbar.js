import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../assets/admin/styleAdmin.css'


const ANavbar = () => {
    return (
        <div className='navbar-education'>
             <div className='icon-navbar'>
             </div>
             <div className='info-user'>
                <div className='profile-image'>
                    <img src='../media/user.png' alt='profile'/>
                </div>
                <div className='profile-info'>
                    <span>Mickael<i><Link to='/admin/parametre'><FaCaretDown/></Link></i></span>
                </div>
             </div>
        </div>
    );
};

export default ANavbar;