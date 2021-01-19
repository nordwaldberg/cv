import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import styles from './app.module.scss';

import MainNavHeader from "../nav-header";
import Menu from "../menu";
import MainPage from "../main-page";
import AboutPage from "../about-page";
import SkillsPage from "../skills-page";
import ExperiencePage from "../experience-page";
import WorksPage from "../works-page";
import ContactsPage from "../contacts-page";


export default class App extends React.Component {
    state = {
        visibleMenu: false,
    };

    menuSwitcher = () => {
        this.setState(({ visibleMenu }) => {
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
                    <Menu menuSwitcher={this.menuSwitcher}/>
                </Router>
            );
        }
        return (
            <Router>
                <div>
                    <MainNavHeader menuSwitcher={this.menuSwitcher} visibleMenu={this.state.visibleMenu}/>
                    <Switch>
                        <Route path="/" component={MainPage} exact/>
                        <Route path="/about_me" component={AboutPage} exact/>
                        <Route path="/skills" component={SkillsPage} exact/>
                        <Route path="/experience" component={ExperiencePage} exact/>
                        <Route path="/works" component={WorksPage} exact/>
                        <Route path="/contacts" component={ContactsPage} exact/>
                    </Switch>
                </div>
            </Router>
        );
    };
};