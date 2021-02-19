import React from 'react';
import styles from './portfolio-page.module.scss';
import PageHeader from "../../page-header";
import Typing from "react-typing-animation";

const PortfolioPage = () => {
    return (
        <div>
            <PageHeader number="04" name=".portfolio"/>
            <div className={`${styles['empty-page']}`}>
                <Typing hideCursor="true"
                        speed={50}>
                    <p className={`${styles['empty-page__text']}`}>page in development</p>
                </Typing>
            </div>
        </div>
    );
};

export default PortfolioPage;