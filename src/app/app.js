import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import styles from './app.module.scss';

import MainPage from "../main-page";
import MainNavHeader from "../nav-headers";
import Menu from "../menu";

export default class App extends React.Component {
    state = {
        visibleMenu: false,
    };

    menuSwitcher = () => {
        this.setState(({visibleMenu}) => {
            if (visibleMenu) {
                return {
                    visibleMenu: false,
                };
            } else {
                return {
                    visibleMenu: true,
                };
            }
        });
    };

    render() {
        if (this.state.visibleMenu) {
            return (
                <Router>
                    <MainNavHeader menuSwitcher={this.menuSwitcher} visibleMenu={this.state.visibleMenu}/>
                    <Menu/>
                </Router>
            );
        }
        return (
            <Router>
                <div>
                    <MainNavHeader menuSwitcher={this.menuSwitcher} visibleMenu={this.state.visibleMenu}/>
                    <Switch>
                        <Route path="/" component={MainPage} exact/>
                        <Route path="/mimi" component={MainPage} exact/>
                    </Switch>
                </div>
            </Router>
        );
    };
};