import React from 'react';
import { Link } from "react-router-dom";
import styles from './menu.module.scss';

const Menu = ({ toggleMenu }) => {
    return (
        <div className={`${styles['menu']}`}>
            <div className={`${styles['menu__nav-links-list']}`}>
                <div className={`${styles['menu__nav-links-list__item']}`}>
                    <div className={`${styles['menu__nav-links-list__item__number']}`}>01</div>
                    <Link to={`${process.env.PUBLIC_URL}/about_me`} onClick={toggleMenu}>.about_me</Link>
                </div>
                <div className={`${styles['menu__nav-links-list__item']}`}>
                    <div className={`${styles['menu__nav-links-list__item__number']}`}>02</div>
                    <Link to={`${process.env.PUBLIC_URL}/skills`} onClick={toggleMenu}>.skills</Link>
                </div>
                <div className={`${styles['menu__nav-links-list__item']}`}>
                    <div className={`${styles['menu__nav-links-list__item__number']}`}>03</div>
                    <Link to={`${process.env.PUBLIC_URL}/experience`} onClick={toggleMenu}>.experience</Link>
                </div>
                <div className={`${styles['menu__nav-links-list__item']}`}>
                    <div className={`${styles['menu__nav-links-list__item__number']}`}>04</div>
                    <Link to={`${process.env.PUBLIC_URL}/portfolio`} onClick={toggleMenu}>.portfolio</Link>
                </div>
                <div className={`${styles['menu__nav-links-list__item']}`}>
                    <div className={`${styles['menu__nav-links-list__item__number']}`}>05</div>
                    <Link to={`${process.env.PUBLIC_URL}/contacts`} onClick={toggleMenu}>.contacts</Link>
                </div>
            </div>
            <div className={`${styles['menu__bg-lettering']}`}>
                <p>.menu</p>
            </div>
        </div>
    );
};

export default Menu;