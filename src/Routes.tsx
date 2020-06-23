import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Album from './components/Album';
import SigninPage from './components/SigninPage';
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