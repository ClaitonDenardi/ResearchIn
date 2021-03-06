import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './pages/Login/PrivateRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewProject from './pages/NewProject';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute paht="/projects/new" component={NewProject} />
            </Switch>
        </BrowserRouter>
    );
}