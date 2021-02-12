import React from 'react';
import styles from './experience-page.module.scss';
import PageHeader from "../../page-header";
import PlaceOfWork from "../../place-of-work";

const ExperiencePage = () => {
    return (
        <div className={`${styles['exp-page']}`}>
            <PageHeader name=".experience" number="03"/>
            <div className={`${styles['places-of-work-list']}`}>
                <PlaceOfWork numberOfPlaceOfWork="0"/>
                <PlaceOfWork numberOfPlaceOfWork="1"/>
            </div>
        </div>
    );
};

export default ExperiencePage;