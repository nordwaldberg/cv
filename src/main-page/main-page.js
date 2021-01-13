import React from 'react';
import styles from './main-page.module.scss';
import MainNavHeader from "../nav-headers/main-nav-header";

const MainPage = () => {
    return (
        <div>
            <MainNavHeader/>
            <div className={styles.main_content}>
                <div className={styles.html_decor}>
                    &lt;!doctype html&gt;<br/>
                    &lt;html lang="ru en"&gt;<br/>
                    &lt;head&gt;<br/>
                    &lt;meta charset="utf-8" /&gt;<br/>
                    &lt;title&gt;&lt;/title&gt;<br/>
                    &lt;link rel="stylesheet" href="style.css" /&gt;<br/>
                    &lt;/head&gt;<br/>
                    &lt;body&gt;<br/>
                    ... <br/>
                    &lt;/body&gt;<br/>
                    &lt;/html&gt;<br/>
                </div>
                    <p className={styles.greeting}>Hi.</p>
            </div>
        </div>
    );
};

export default MainPage;