import React from 'react';
import { Link } from "react-router-dom";
import styles from './nav-headers.module.scss';

const MainNavHeader = () => {
    return (
        <div className="container">
            <div className={`row ${styles['menu-nav-header']}`}>
               <div className={`col-8 ${styles['menu-nav-header__logotype']}`}>
                   <Link to="/">.nordwaldberg</Link>
               </div>
               <div className={`col-4 ${styles['menu-nav-header__menu-btn']}`}>
                   <Link to="/menu">.menu</Link>
               </div>
            </div>
        </div>
    );
};

export default MainNavHeader;

