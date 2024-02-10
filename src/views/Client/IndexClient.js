import React from 'react';
import { Link } from 'react-router-dom';

const IndexClient = () => {
    return (
        <div>
            Index Client

            <div>
                <ul>
                    <li><Link to='/admin'>Admin</Link></li>
                    <li><Link to='/controller'>Controller</Link></li>
                    <li><Link to='/bus'>Bus</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default IndexClient;