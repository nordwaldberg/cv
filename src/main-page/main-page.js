import React from 'react';
import styles from './main-page.module.scss';
import MainNavHeader from "../nav-headers/main-nav-header";
import SocialLinks from "../social-links";
import { description, htmlDecor } from "../text-content";


const MainPage = () => {
    return (
        <div>
            <MainNavHeader/>
            <div className={styles["main-content"]}>
                <div className={styles["main-content__html-decor"]}>
                    {htmlDecor}
                </div>
                <p className={styles["main-content__greeting"]}>Hi.</p>
                <div className={styles["main-content__description"]}>
                    {description}
                </div>
            </div>
            <SocialLinks/>
        </div>
    );
};

export default MainPage;

