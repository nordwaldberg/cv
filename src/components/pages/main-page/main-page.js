import React from 'react';
import styles from './main-page.module.scss';
import SocialLinks from "../../social-links";
import { description, greeting, htmlDecor } from "../../text-content";
import Typing from 'react-typing-animation';

const MainPage = () => {
    return (
        <div>
            <div className={styles["main-content"]}>
                <div className={styles["main-content__html-decor"]}>
                    {htmlDecor}
                </div>
                <div className={styles["main-content__text"]}>
                    <Typing hideCursor="true"
                            className={styles["main-content__text_greeting"]}
                            speed={50}>
                        {greeting}
                    </Typing>
                    <Typing hideCursor="true"
                            className={styles["main-content__text_description"]}
                            speed={20}
                            startDelay={1800}>
                        {description}
                    </Typing>
                </div>
            </div>
            <SocialLinks/>
        </div>
    );
};

export default MainPage;

