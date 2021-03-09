import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavHeader from "../nav-header";
import Menu from "../menu";
import ErrorBoundary from "../error-handler";
import Preloader from "../preloader";
import { AboutPage, ContactsPage, ExperiencePage, MainPage, PortfolioPage, SkillsPage } from '../pages';


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
                            <Route path={`${process.env.PUBLIC_URL}/`} component={MainPage} exact/>
                            <Route path={`${process.env.PUBLIC_URL}/about_me`} component={AboutPage} exact/>
                            <Route path={`${process.env.PUBLIC_URL}/skills`} component={SkillsPage} exact/>
                            <Route path={`${process.env.PUBLIC_URL}/experience`} component={ExperiencePage} exact/>
                            <Route path={`${process.env.PUBLIC_URL}/portfolio`} component={PortfolioPage} exact/>
                            <Route path={`${process.env.PUBLIC_URL}/contacts`} component={ContactsPage} exact/>
                        </Switch>
                    </div>
                </Router>
            </ErrorBoundary>
        );
    };
};