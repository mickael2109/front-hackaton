import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-bootstrap';
import BusRoute from './routes/BusRoute'
import AdminRoute from './routes/AdminRoute'
import ControllerRoute from './routes/ControllerRoute'
import ClientRoute from './routes/ClientRoute'
import './App.css';
import AuthRoute from './routes/AuthRoute';

function App() {
  return (
    <BrowserRouter>
        <ToastContainer position='top-center'/>
        <Routes>    
            <Route path="/*" element={<ClientRoute/>}/>
            <Route path="/bus*" element={<BusRoute/>}/>
            <Route path="/admin/*" element={<AdminRoute/>}/>
            <Route path="/controller/*" element={<ControllerRoute/>}/>
            <Route path="/login/*" element={<AuthRoute/>}/>
        </Routes>  
    </BrowserRouter>
  );
}

export default App;
