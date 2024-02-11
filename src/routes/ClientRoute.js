import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ClientLayout from '../views/Client/ClientLayout';
import { Utils } from '../_utils/Utils';
import IndexClient from '../views/Client/IndexClient';
import ClientBus from '../views/Client/ClientBus';
import ClientArret from '../views/Client/ClientArret';

const ClientRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<ClientLayout/>}>
                <Route index element={<IndexClient/>}/>
                <Route path='/listebus' element={<ClientBus/>}/>
                <Route path='/listearret' element={<ClientArret/>}/>
            </Route>
            <Route path='*' element={<Utils.PageNotFound/>}/>
        </Routes>
    );
};

export default ClientRoute;