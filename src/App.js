import React from 'react';
//import Login from './login';
import { Routes, Route } from 'react-router-dom';
import DoPLogin from './pages/login';
import DriverLogin from './pages/DriverLogin';
import FleetManager from './pages/FleetManagerLogin';
import RegisterDriver from './pages/registerDriver';
import RegisterFleetManager from './pages/FleetManagerLogin';
import RegisterHeadOffice from './pages/registerDOP';
import Register3PL from './pages/register3PL';
// import dashboardDop from './pages/dashboard_dop';
import './index.css';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<DoPLogin/>} />
            <Route path="/dop3pllogin" element={<DoPLogin />} />
            <Route path="/driverLogin" element={<DriverLogin />} />
            <Route path="/fleetManagerLogin" element={<FleetManager/>} />
            <Route path="/registerDriver" element={<RegisterDriver/>} />
            <Route path="/registerFleetManager" element={<RegisterFleetManager/>} />
            <Route path="/registerDop" element={<RegisterHeadOffice/>} />
            <Route path="/register3PL" element={<Register3PL/>} />
            {/* <Route path="/dashboarddop" element={<dashboardDop/>} /> */}
      </Routes>
    </>
  );
}

export default App;
