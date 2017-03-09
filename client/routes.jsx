import React from 'react';
import {mount} from 'react-mounter';

import {LayoutLogin} from '../imports/ui/layouts/LayoutLogin';
import {LayoutDash} from '../imports/ui/layouts/LayoutDash';
import App from '../imports/ui/components/App';
import Dash from '../imports/ui/components/Dash';
import ChahidaPotro from '../imports/ui/components/ChahidaPotro';
import DemoChahidaPotro from '../imports/ui/components/DemoChahidaPotro';
import ChahidaPotroLoad from '../imports/ui/components/ChahidaPotroLoad';
import Note from '../imports/ui/components/Note';
import StandardDocument from '../imports/ui/components/StandardDocument';
import LoginCaraousal from '../imports/ui/components/LoginCaraousal';


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
FlowRouter.route('/demochahidapotro', {
    action(){
        mount(LayoutDash, {
            content: (<DemoChahidaPotro />)
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


    FlowRouter.route('/Note/:id', {
    action(params){
        mount(LayoutDash, {
            content: (<Note id={params.id} />)
        })
    }
});



FlowRouter.route('/Chahidapotroload/:id', {
    action(params){
        mount(LayoutDash, {
            content: (<ChahidaPotroLoad id={params.id} />)
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
