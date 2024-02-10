import React from 'react';
import { Link } from 'react-router-dom';

const BusLayout = () => {
    return (
        <div>
            Bus layout
            <ul>
                <li><Link to='/admin'>Admin</Link></li>
                <li><Link to='/controller'>Controller</Link></li>
                <li><Link to='/client'>Bus</Link></li>
            </ul>
        </div>
    );
};

export default BusLayout;