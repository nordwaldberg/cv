import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import styles from './app.module.scss';

import MainNavHeader from "../nav-header";
import Menu from "../menu";
import MainPage from "../main-page";
import AboutPage from "../about-page";
import SkillsPage from "../skills-page";
import ExperiencePage from "../experience-page";
import PortfolioPage from "../portfolio-page";
import ContactsPage from "../contacts-page";
import ErrorBoundary from "../error-handler";


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
                <ErrorBoundary>
                    <Router>
                        <MainNavHeader menuSwitcher={this.menuSwitcher} visibleMenu={this.state.visibleMenu}/>
                        <Menu menuSwitcher={this.menuSwitcher}/>
                    </Router>
                </ErrorBoundary>
            );
        }
        return (
            <ErrorBoundary>
                <Router>
                    <div>
                        <MainNavHeader menuSwitcher={this.menuSwitcher} visibleMenu={this.state.visibleMenu}/>
                        <Switch>
                            <Route path="/" component={MainPage} exact/>
                            <Route path="/about_me" component={AboutPage} exact/>
                            <Route path="/skills" component={SkillsPage} exact/>
                            <Route path="/experience" component={ExperiencePage} exact/>
                            <Route path="/portfolio" component={PortfolioPage} exact/>
                            <Route path="/contacts" component={ContactsPage} exact/>
                        </Switch>
                    </div>
                </Router>
            </ErrorBoundary>
        );
    };
};