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

    toggleMenu = () => {
        this.setState({visibleMenu: !this.state.visibleMenu});
    };

    closeMenu = () => {
        this.setState({visibleMenu: false});
    }

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 2000);
    }

    render() {
        const preloader = this.state.loading ? <Preloader/> : null;
        const mainPage = (
            <ErrorBoundary>
                <Router>
                    <div>
                        <NavHeader toggleMenu={this.toggleMenu} visibleMenu={this.state.visibleMenu} closeMenu={this.closeMenu}/>
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
        const menu = (
            <ErrorBoundary>
                <Router>
                    <NavHeader toggleMenu={this.toggleMenu} visibleMenu={this.state.visibleMenu} closeMenu={this.closeMenu}/>
                    <Menu toggleMenu={this.toggleMenu}/>
                </Router>
            </ErrorBoundary>
        );

        if (this.state.loading) {
            return preloader;
        }

        if (this.state.visibleMenu) {
            return menu;
        }

        return mainPage;
    };
};