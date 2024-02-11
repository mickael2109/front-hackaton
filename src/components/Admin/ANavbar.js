import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../assets/Admin/styleAdmin.css'


const ANavbar = () => {
    return (
        <div className='navbar-bus-content'>
             <div className='info-admin'>
                <div className='profile-image-admin'>
                    <img src='../media/user.png' alt='profile'/>
                </div>
                <div className='profile-info-admin'>
                    <span>Mickael<i><Link to='/admin/parametre'><FaCaretDown/></Link></i></span>
                </div>
             </div>
        </div>
    );
};

export default ANavbar;