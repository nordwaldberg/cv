import React from 'react';
import styles from './nav-headers.module.scss';

const MainNavHeader = () => {
    return (
        <div className="container">
            <div className={`row ${styles['menu-nav-header']}`}>
               <div className={`col-8 ${styles['menu-nav-header__logotype']}`}>
                   <a href="/">.nordwaldberg</a>
               </div>
               <div className={`col-4 ${styles['menu-nav-header__menu-btn']}`}>
                   <a href="/menu">.menu</a>
               </div>
            </div>
        </div>
    );
};

export default MainNavHeader;

