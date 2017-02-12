import React from 'react';
import DashHeader from '../components/DashHeader';

export const LayoutDash = ({content}) => (
    <div className="main-layout">
        <div id="wrapper">
            <DashHeader/>
            {content}
        </div>
    </div>
)