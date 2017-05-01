import React from 'react';
import {mount} from 'react-mounter';

import {LayoutLogin} from '../imports/ui/layouts/LayoutLogin';
import {LayoutDash} from '../imports/ui/layouts/LayoutDash';
import App from '../imports/ui/components/App';
import Dash from '../imports/ui/components/Dash';
import ChahidaPotro from '../imports/ui/components/ChahidaPotro';
import DemoChahidaPotro from '../imports/ui/components/DemoChahidaPotro';
import Settings from '../imports/ui/components/Settings';
import ChahidaPotroLoad from '../imports/ui/components/ChahidaPotroLoad';
import Note from '../imports/ui/components/Note';
import StandardDocument from '../imports/ui/components/StandardDocument';
import StandardDocumentLoad from '../imports/ui/components/StandardDocumentLoad';
import StandardDocumentApply from '../imports/ui/components/StandardDocumentApply';
import LoginCaraousal from '../imports/ui/components/LoginCaraousal';
import FileUpload from '../imports/ui/components/FileUpload';
import AllowanceNikosh from '../imports/ui/components/AllowanceNikosh';
import MeetingNotice from '../imports/ui/components/MeetingNotice';
import Minutes from '../imports/ui/components/Minutes';
import CompanyS from '../imports/ui/components/CompanyS';
import WO from '../imports/ui/components/WO';




FlowRouter.route('/', {
    action(){
        mount(LayoutLogin, {
            content: (<App />)
        })
    }
});

FlowRouter.route('/dashboard', {
    action(){
        mount(LayoutDash, {
            content: (<Dash />)
        })
    }
});

FlowRouter.route('/Chahidapotro', {
    action(){
        mount(LayoutDash, {
            content: (<ChahidaPotro />)
        })
    }
});

FlowRouter.route('/File', {
    action(){
        mount(LayoutDash, {
            content: (<FileUpload />)
        })
    }
});


FlowRouter.route('/demochahidapotro', {
    action(){
        mount(LayoutDash, {
            content: (<DemoChahidaPotro />)
        })
    }
});

FlowRouter.route('/settings', {
    action(){
        mount(LayoutDash, {
            content: (<Settings />)
        })
    }
});

FlowRouter.route('/Note', {
    action(){
        mount(LayoutDash, {
            content: (<Note />)
        })
    }
});

FlowRouter.route('/StandardDocument/:id', {
    action(params){
        mount(LayoutDash, {
            content: (<StandardDocument id={params.id}/>)
        })
    }
});

FlowRouter.route('/StandardDocumentLoad/:id', {
    action(params){
        mount(LayoutDash, {
            content: (<StandardDocumentLoad id={params.id}/>)
        })
    }
});

FlowRouter.route('/StandardDocumentApply/:id', {
    action(params){
        mount(LayoutDash, {
            content: (<StandardDocumentApply id={params.id}/>)
        })
    }
});


FlowRouter.route('/Note/:id', {
    action(params){
        mount(LayoutDash, {
            content: (<Note id={params.id}/>)
        })
    }
});


FlowRouter.route('/Chahidapotroload/:id', {
    action(params){
        mount(LayoutDash, {
            content: (<ChahidaPotroLoad id={params.id}/>)
        })
    }
});


FlowRouter.route('/LoginCaraousal', {
    action(){
        mount(LayoutDash, {
            content: (<LoginCaraousal />)
        })
    }
});



FlowRouter.route('/AllowanceNikosh/:id', {
    action(params){
        mount(LayoutDash, {
            content: (<AllowanceNikosh id={params.id}/>)
        })
    }
});

FlowRouter.route('/MeetingNotice/:id', {
    action(params){
        mount(LayoutDash, {
            content: (<MeetingNotice id={params.id} />)
        })
    }
});

FlowRouter.route('/cs/:id', {
    action(params){
        mount(LayoutDash, {
            content: (<CompanyS id={params.id} />)
        })
    }
});


FlowRouter.route('/Minutes', {
    action(){
        mount(LayoutDash, {
            content: (<Minutes />)
        })
    }
});



FlowRouter.route('/CompanyS', {
    action(){
        mount(LayoutDash, {
            content: (<CompanyS />)
        })
    }
});


FlowRouter.route('/WO', {
    action(){
        mount(LayoutDash, {
            content: (<WO />)
        })
    }
});
