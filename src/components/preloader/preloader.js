import React from 'react';
import styles from './preloader.module.scss';
import preloaderSvg from '../../images/preloader.svg';

const Preloader = () => {
    return (
        <div className={`${styles['preloader']}`}>
            <img src={preloaderSvg} alt="preloader"/>
        </div>
    );
};

export default Preloader;