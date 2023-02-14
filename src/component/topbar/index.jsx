import React from 'react';
import './topbar.scss';

const Topbar = () => {
    return (
        <div className='topbar-layout'>
            <div className='logo'>
                logo
            </div>
            <div className='actions'>
                <div className='action-item'>Search</div>
                <div className='action-item'>Rocket</div>
                <div className='action-item'>Notification</div>
                <div className='profile'>D</div>
            </div>
        </div>
    )
}

export default Topbar;