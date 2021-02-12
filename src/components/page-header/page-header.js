import React from 'react';
import styles from './page-header.module.scss';

const PageHeader = ({ name, number }) => {
    return (
        <div className={`${styles['page-header']}`}>
            <p className={`${styles['page-header__number']}`}>{number}</p>
            <p className={`${styles['page-header__name']}`}>{name}</p>
        </div>
    );
};

export default PageHeader;