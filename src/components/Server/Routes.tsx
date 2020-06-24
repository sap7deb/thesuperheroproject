import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Album from '../Client/Album';
import SigninPage from '../Client/SigninPage';
import history from './history';


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={SigninPage} />
                    <Route path="/Album" component={Album} />
                    <Route path="/SigninPage" component={SigninPage} />
                </Switch>
            </Router>
        )
    }
}