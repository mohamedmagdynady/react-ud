import React, { Component } from 'react';
import {BrowserRouter,Switch,Route}  from"react-router-dom"
import App from "../src/App"
import Songlistpart from '../src/Songlistpart'
const Router =()=>(
<BrowserRouter>
<Switch>
<Route path="/" component={App} exact />
<Route path="/songlistpart" component={Songlistpart} />

</Switch>
</BrowserRouter>
);

export default Router;