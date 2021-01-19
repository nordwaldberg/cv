import React from 'react';
import { Link } from "react-router-dom";
import styles from './nav-headers.module.scss';

const MainNavHeader = ({ menuSwitcher, visibleMenu }) => {
    let menuBtnName = visibleMenu ? <p>.close</p> : <p>.menu</p>;

    return (
        <div className="container">
            <div className={`row ${styles['menu-nav-header']}`}>
               <div className={`col-8 ${styles['menu-nav-header__logotype']}`}>
                   <Link to="/" onClick={ visibleMenu = false }>.nordwaldberg</Link>
               </div>
               <div className={`col-4 ${styles['menu-nav-header__menu-btn']}`}>
                   <button onClick={ menuSwitcher }>{ menuBtnName }</button>
               </div>
            </div>
        </div>
    );
};

export default MainNavHeader;

