import React from 'react';
import styles from './about-page.module.scss';
import PageHeader from "../../page-header";
import { aboutText, htmlDecorLarge } from "../../text-content";
import SocialLinks from "../../social-links";

const AboutPage = () => {
    return (
        <div className={`${styles['about-page']}`}>
            <PageHeader name=".about_me" number="01"/>
            <div className={`${styles['about-page__content']}`}>
                <div className={`${styles['about-page__content__decor']}`}>{htmlDecorLarge}</div>
                <div className={`${styles['about-page__content__portrait']}`}></div>
                <div className={`${styles['about-page__content__text']}`}>{aboutText}</div>
            </div>
            <div className={`${styles['about-page__links']}`}>
                <div className={`${styles['about-page__links__resume']}`}>
                    <a href="https://spb.hh.ru/resume/9adcb3c2ff088f64c30039ed1f5a79796f345a"
                       target="_blank"
                       rel="noreferrer noopener"
                       className={styles["social-links__hh"]}>.view_resume</a>
                </div>
                <div className={`${styles['about-page__links__social']}`}>
                    <SocialLinks/>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;