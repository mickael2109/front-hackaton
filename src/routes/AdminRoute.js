import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Utils } from '../_utils/Utils';
import AdminLayout from '../views/Admin/AdminLayout'
import Dashboard from '../views/Admin/Dashboard';
import Bus from '../views/Admin/Bus';
import {ListBus, AddEditBus, updateBus} from '../components/Admin/ListBus';
import Controller from '../views/Admin/Controller';
import ListController from '../components/Admin/ListController';

const AdminRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<AdminLayout/>}>
                <Route index element={<Dashboard/>}/>

                <Route path='/bus' element={<Bus/>}>
                    <Route index element={<ListBus/>}/>
                    <Route path='/bus/addEditBus' element={<AddEditBus/>}/>
                    <Route path='/bus/updateBus' element={<updadeBus/>}/>
                </Route>
                <Route path='/controller' element={<Controller/>}>
                    <Route index element={<ListController/>}/>
                    
                </Route>
            </Route>
            <Route path='*' element={<Utils.PageNotFound/>}/>
        </Routes>
    );
};

export default AdminRoute;