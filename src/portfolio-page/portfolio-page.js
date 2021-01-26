import React from 'react';
import styles from './portfolio-page.module.scss';
import PageHeader from "../page-header";

const PortfolioPage = () => {
    return (
        <div>
            <PageHeader number="04" name=".portfolio"/>
            <div className={`${styles['empty-page']}`}>
                <p className={`${styles['empty-page__text']}`}>page in development</p>
            </div>
        </div>
    );
};

export default PortfolioPage;