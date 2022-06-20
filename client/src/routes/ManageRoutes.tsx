import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {DashboardPage} from "pages/dashboard";
import { NavBar } from 'components/NavBar';
import { Footer } from 'components/Footer';

export const ManageRoutes = () => {
    return (
        <div id="__next">
          <div className="root-page row justify-content-center" style={{ backgroundColor: '#202228' }}>
            <NavBar/>
            <Routes>
              <Route index element={<DashboardPage/>}/>
            </Routes>
            <Footer/>
          </div>
        </div>
    );
}