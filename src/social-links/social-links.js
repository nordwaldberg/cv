import React from 'react';
import styles from './social-links.module.scss';

const SocialLinks = () => {
    return (
        <div className={styles["social-links"]}>
            <a href="https://github.com/nordwaldberg"
               target="_blank"
               className={styles["social-links__github"]}>.github</a>
            <a href="mailto:nord.waldberg@gmail.com"
               target="_blank"
               className={styles["social-links__email"]}>.email</a>
            <a href="https://t.me/nordwaldberg"
               target="_blank"
               className={styles["social-links__telegram"]}>.telegram</a>
            <a href="https://spb.hh.ru/resume/9adcb3c2ff088f64c30039ed1f5a79796f345a"
               target="_blank"
               className={styles["social-links__hh"]}>.hh</a>
        </div>
    );
};

export default SocialLinks;