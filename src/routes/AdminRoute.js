import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Utils } from '../_utils/Utils';
import AdminLayout from '../views/Admin/AdminLayout'
import Dashboard from '../views/Admin/Dashboard';

const AdminRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<AdminLayout/>}>
                <Route index element={<Dashboard/>}/>
            </Route>
            <Route path='*' element={<Utils.PageNotFound/>}/>
        </Routes>
    );
};

export default AdminRoute;