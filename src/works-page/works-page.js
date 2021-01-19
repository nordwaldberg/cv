import React from 'react';
import styles from './works-page.module.scss';
import SocialLinks from "../social-links";

const WorksPage = () => {
    return (
        <div>
            <div className={`${styles['empty-page']}`}>
                <p className={`${styles['empty-page__text']}`}>page in development</p>
            </div>
            <SocialLinks/>
        </div>
    );
};

export default WorksPage;