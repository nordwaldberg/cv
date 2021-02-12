import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import styles from './app.module.scss';

import NavHeader from "../nav-header";
import Menu from "../menu";
import ErrorBoundary from "../error-handler";
import Preloader from "../preloader";
import {
    AboutPage,
    ContactsPage,
    ExperiencePage,
    MainPage,
    PortfolioPage,
    SkillsPage
} from '../pages';


export default class App extends React.Component {
    state = {
        visibleMenu: false,
        loading: true,
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

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 2000);
    }

    render() {
        let preloader = this.state.loading ? <Preloader/> : null;

        if (this.state.loading) {
            return (
                preloader
            );
        }

        if (this.state.visibleMenu) {
            return (
                <ErrorBoundary>
                    <Router>
                        <NavHeader menuSwitcher={this.menuSwitcher} visibleMenu={this.state.visibleMenu}/>
                        <Menu menuSwitcher={this.menuSwitcher}/>
                    </Router>
                </ErrorBoundary>
            );
        }

        return (
            <ErrorBoundary>
                <Router>
                    <div>
                        <NavHeader menuSwitcher={this.menuSwitcher} visibleMenu={this.state.visibleMenu}/>
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