import React from 'react';
import styles from './contacts-page.module.scss';

const ContactsPage = () => {
    return (
        <div className={`${styles['contacts-page']}`}>
            <div className={`${styles['contacts-page__list']}`}>
                <a href="https://github.com/nordwaldberg"
                   target="_blank"
                   rel="noreferrer noopener"
                   className={styles["contacts-page__list__item"]}>.github</a>
                <a href="mailto:nord.waldberg@gmail.com"
                   target="_blank"
                   rel="noreferrer noopener"
                   className={styles["contacts-page__list__item"]}>.email</a>
                <a href="https://t.me/nordwaldberg"
                   target="_blank"
                   rel="noreferrer noopener"
                   className={styles["contacts-page__list__item"]}>.telegram</a>
                <a href="https://spb.hh.ru/resume/9adcb3c2ff088f64c30039ed1f5a79796f345a"
                   target="_blank"
                   rel="noreferrer noopener"
                   className={styles["contacts-page__list__item"]}>.hh</a>
            </div>
        </div>
    );
};

export default ContactsPage;