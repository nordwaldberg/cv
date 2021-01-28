import React from 'react';
import styles from './error-indicator.module.scss';

const ErrorIndicator = () => {
    return (
        <div className={`${styles['error-indicator']}`}>
            <span className={`${styles['error-indicator__text']}`}>
                Error! Something has gone terribly wrong <br/>
                but already we sent droids to fix it!
            </span>
        </div>
    );
};

export default ErrorIndicator;