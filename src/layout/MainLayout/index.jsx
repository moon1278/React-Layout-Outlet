import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftBar from '../../component/leftbar';
import Topbar from '../../component/topbar';
import './layout.scss';

function MainLayout() {

    return (
        <div className='main-layout'>
            <Topbar />
            <LeftBar/>
            <div className='main-layout-container'>
                <Outlet/>
            </div>
        </div>
    )
}
export default MainLayout;
