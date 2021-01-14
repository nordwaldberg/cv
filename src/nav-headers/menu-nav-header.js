import React from 'react';
import { Link, withRouter } from "react-router-dom";
import styles from './nav-headers.module.scss';

const MenuNavHeader = ({ history }) => {
    const goToPreviousPath = () => {
        history.goBack();
    };
    return (
        <div className="container">
            <div className={`row ${styles['menu-nav-header']}`}>
                <div className={`col-8 ${styles['menu-nav-header__logotype']}`}>
                    <Link to="/">.nordwaldberg</Link>
                </div>
                <div className={`col-4 ${styles['menu-nav-header__close-btn']}`}>
                    <Link to={goToPreviousPath()}>.close_menu</Link>
                </div>
            </div>
        </div>
    );
};

export default withRouter(MenuNavHeader);