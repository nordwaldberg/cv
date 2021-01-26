import React from 'react';
import { Link } from "react-router-dom";
import styles from './menu.module.scss';

const Menu = ({menuSwitcher}) => {
    return (
        <div className={`${styles['menu']}`}>
            <div className={`${styles['menu__nav-links-list']}`}>
                <div className={`${styles['menu__nav-links-list__item']}`}>
                    <div className={`${styles['menu__nav-links-list__item__number']}`}>01</div>
                    <Link to="/about_me" onClick={ menuSwitcher }>.about_me</Link>
                </div>
                <div className={`${styles['menu__nav-links-list__item']}`}>
                    <div className={`${styles['menu__nav-links-list__item__number']}`}>02</div>
                    <Link to="/skills" onClick={ menuSwitcher }>.skills</Link>
                </div>
                <div className={`${styles['menu__nav-links-list__item']}`}>
                    <div className={`${styles['menu__nav-links-list__item__number']}`}>03</div>
                    <Link to="/experience" onClick={ menuSwitcher }>.experience</Link>
                </div>
                <div className={`${styles['menu__nav-links-list__item']}`}>
                    <div className={`${styles['menu__nav-links-list__item__number']}`}>04</div>
                    <Link to="/portfolio" onClick={ menuSwitcher }>.portfolio</Link>
                </div>
                <div className={`${styles['menu__nav-links-list__item']}`}>
                    <div className={`${styles['menu__nav-links-list__item__number']}`}>05</div>
                    <Link to="/contacts" onClick={ menuSwitcher }>.contacts</Link>
                </div>
            </div>
            <div className={`${styles['menu__bg-lettering']}`}>
                <p>.menu</p>
            </div>
        </div>
    );
};

export default Menu;