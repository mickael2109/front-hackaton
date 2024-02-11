import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Utils } from '../_utils/Utils'
import ControllerLayout from '../views/Controller/ControllerLayout'
import Check from '../views/Controller/Check';

const ControllerRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<ControllerLayout/>}>
                <Route index element={<Check/>}/>
            </Route>
            <Route path='*' element={<Utils.PageNotFound/>}/>
        </Routes>

    );
};

export default ControllerRoute;