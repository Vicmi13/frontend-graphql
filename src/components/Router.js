import React from "react";
import { BrowserRouter, Route, Switch, Link }  from 'react-router-dom'
import App from './App'
import NotFound  from './NotFound'
import Dashboard from "./Dashboard";

const Router = () => (
    <BrowserRouter>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dashboard">About</Link>
                </li>
                <li>
                    <Link to="/topics">Not Found</Link>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/dashboard" component={Dashboard} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)


export default Router