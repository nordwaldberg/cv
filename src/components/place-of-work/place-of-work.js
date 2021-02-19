import React from "react";
import styles from './place-of-work.module.scss';

import { countryAndCityOfWork, datesOfWork, placeOfWork, workPosition } from '../text-content';

const PlaceOfWork = ({ numberOfPlaceOfWork }) => {
    return (
        <div className={`${styles['place-of-work-details']}`}>
            <div className={`${styles['place-of-work-details__decor']}`}></div>
            <p className={`${styles['place-of-work-details__dates']}`}>
                {datesOfWork[numberOfPlaceOfWork]}
            </p>
            <p className={`${styles['place-of-work-details__location']}`}>
                {countryAndCityOfWork[numberOfPlaceOfWork]}
            </p>
            <p className={`${styles['place-of-work-details__company']}`}>
                {placeOfWork[numberOfPlaceOfWork]}
            </p>
            <p className={`${styles['place-of-work-details__position']}`}>
                {workPosition[numberOfPlaceOfWork]}
            </p>
        </div>
    );
};

export default PlaceOfWork;