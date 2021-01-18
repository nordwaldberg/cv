import React from 'react';
import styles from './main-page.module.scss';
import SocialLinks from "../social-links";
import { description, htmlDecor } from "../text-content";


const MainPage = () => {
    return (
        <div>
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

