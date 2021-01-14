import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import styles from './app.module.scss';

import MainPage from "../main-page";


const App = () => {
    return (
        <Router>
            <div>
                <MainPage/>
            </div>
        </Router>

    );
};

export default App;
