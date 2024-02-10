import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ClientLayout from '../views/Client/ClientLayout';
import { Utils } from '../_utils/Utils';
import IndexClient from '../views/Client/IndexClient';

const ClientRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<ClientLayout/>}>
                <Route index element={<IndexClient/>}/>
            </Route>
            <Route path='*' element={<Utils.PageNotFound/>}/>
        </Routes>
    );
};

export default ClientRoute;