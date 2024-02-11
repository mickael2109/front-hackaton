import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BusLayout from '../views/Bus/BusLayout';
import { Utils } from '../_utils/Utils';
import Bus from '../views/Bus/Bus';

const BusRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<BusLayout/>}>
                <Route index element={<Bus/>}/>
            </Route>
            <Route path='*' element={<Utils.PageNotFound/>}/>
        </Routes>
    );
};

export default BusRoute;