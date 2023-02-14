import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

// {/* Layouts */}
import MainLayout from '../layout/MainLayout';

// {/* Pages */}
import DashboardPage from '../component/pages/DashboardPage';
import SalesPage from '../component/pages/SalesPage';
import NewSalePage from '../component/pages/SalesPage/NewSale';

function AppRouter() {

    return (
        <BrowserRouter>
            <Routes>

                {/* Main Router */}
                <Route element={<MainLayout/>}>
                    <Route path='/' element={<DashboardPage/>}/>

                    {/* Sales Page Layout*/}
                    <Route element={<SalesPage />}>
                        <Route path='/sales/newsale' element={<NewSalePage/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
