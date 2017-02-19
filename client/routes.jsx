import React from 'react';
import {mount} from 'react-mounter';

import {LayoutLogin} from '../imports/ui/layouts/LayoutLogin';
import {LayoutDash} from '../imports/ui/layouts/LayoutDash';
import App from '../imports/ui/components/App';
import Dash from '../imports/ui/components/Dash';
import ChahidaPotro from '../imports/ui/components/ChahidaPotro';
import Note from '../imports/ui/components/Note';
import StandardDocument from '../imports/ui/components/StandardDocument';


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

FlowRouter.route('/Note', {
    action(){
        mount(LayoutDash, {
            content: (<Note />)
        })
    }
});
<<<<<<< HEAD

FlowRouter.route('/StandardDocument', {
    action(){
        mount(LayoutDash, {
            content: (<StandardDocument />)
        })
    }
});

=======
FlowRouter.route('/Note/:id', {
    action(params){
        mount(LayoutDash, {
            content: (<Note id={params.id} />)
        })
    }
});
>>>>>>> 7a249586e3789f6b668c7e33951eb00735e27379
