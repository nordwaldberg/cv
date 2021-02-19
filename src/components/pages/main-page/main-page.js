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
                <div className={styles["main-content__greeting"]}>
                    <Typing hideCursor="true"
                            speed={55}>
                        {greeting}
                    </Typing>
                </div>
                <div className={styles["main-content__description"]}>
                    <Typing hideCursor="true"
                            speed={20}
                            startDelay={2000}>

                        {description}
                    </Typing>
                </div>
            </div>
            <SocialLinks/>
        </div>
    );
};

export default MainPage;

