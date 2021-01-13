import React from 'react';
import styles from './nav-headers.module.scss';

const MenuNavHeader = () => {
    return (
        <div className="container">
            <div className={`row ${styles['menu-nav-header']}`}>
                <div className={`col-8 ${styles['menu-nav-header__logotype']}`}>
                    <a href="#">.nordwaldberg</a>
                </div>
                <div className={`col-4 ${styles['menu-nav-header__close-btn']}`}>
                    <a href="#">.close_menu</a>
                </div>
            </div>
        </div>
    );
};

export default MenuNavHeader;