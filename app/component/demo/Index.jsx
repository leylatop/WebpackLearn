import React from 'react';
import {HashRouter, Route, NavLink,Redirect} from 'react-router-dom'
import {BundleFun} from '../common/Bundle'
import Dome1 from './demo1/Demo1.bundle'
import Dome2 from './demo2/Demo2.bundle'
import '../../public/css/demo.pcss'
const Index = () =>
    <HashRouter>
        <div className="content">
            <div className="nav">
                <NavLink to="/Dome1" activeClassName="selected" exact>demo1</NavLink>
                <NavLink to="/Dome2" activeClassName="selected">demo2</NavLink>
            </div>
            <Route exact path="/"
                   render={() => (<Redirect to="/Dome1"/>)}/>
            <Route path="/Dome1" component={() => BundleFun(Dome1)}/>
            <Route path="/Dome2" component={(props) => BundleFun(Dome2, props)}/>
        </div>
    </HashRouter>
;

export default Index;