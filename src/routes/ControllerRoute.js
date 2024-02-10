import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Utils } from '../_utils/Utils'
import ControllerLayout from '../views/Controller/ControllerLayout'

const ControllerRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<ControllerLayout/>}>
                
            </Route>
            <Route path='*' element={<Utils.PageNotFound/>}/>
        </Routes>
    );
};

export default ControllerRoute;