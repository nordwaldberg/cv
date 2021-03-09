import React from 'react';
import { Link } from "react-router-dom";
import styles from './nav-header.module.scss';

const NavHeader = ({ toggleMenu, visibleMenu, closeMenu }) => {
    let menuBtnName = visibleMenu ? <p>.close</p> : <p>.menu</p>;

    return (
        <div className="container">
            <div className={`row ${styles['menu-nav-header']}`}>
                <div className={`col-8 ${styles['menu-nav-header__logotype']}`}>
                    <Link to={`${process.env.PUBLIC_URL}/`} onClick={closeMenu}>.nordwaldberg</Link>
                </div>
                <div className={`col-4 ${styles['menu-nav-header__menu-btn']}`}>
                    <button onClick={toggleMenu}>{menuBtnName}</button>
                </div>
            </div>
        </div>
    );
};

export default NavHeader;
