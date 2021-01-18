import React from 'react';
import { Link } from "react-router-dom";
import styles from './menu.module.scss';

const Menu = () => {
    return (
        <div className={`${styles['menu']}`}>
            <div className={`${styles['menu__nav-links-list']}`}>
                <div className={`${styles['menu__nav-links-list__item']}`}>
                    <div className={`${styles['menu__nav-links-list__item__number']}`}>01</div>
                    <Link to="/">.about_me</Link>
                </div>
                <div className={`${styles['menu__nav-links-list__item']}`}>
                    <div className={`${styles['menu__nav-links-list__item__number']}`}>02</div>
                    <Link to="/">.skills</Link>
                </div>
                <div className={`${styles['menu__nav-links-list__item']}`}>
                    <div className={`${styles['menu__nav-links-list__item__number']}`}>03</div>
                    <Link to="/">.experience</Link>
                </div>
                <div className={`${styles['menu__nav-links-list__item']}`}>
                    <div className={`${styles['menu__nav-links-list__item__number']}`}>04</div>
                    <Link to="/">.works</Link>
                </div>
                <div className={`${styles['menu__nav-links-list__item']}`}>
                    <div className={`${styles['menu__nav-links-list__item__number']}`}>05</div>
                    <Link to="/">.contacts</Link>
                </div>
            </div>
            <div className={`${styles['menu__bg-lettering']}`}>
                <p>.menu</p>
            </div>
        </div>
    );
};

export default Menu;