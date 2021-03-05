import React, { useState } from 'react';
import styles from './certificates-list.module.scss';
import Certificates from "./certificates";


const CertificatesList = () => {
    const [openContent, setOpenContent] = useState(false);

    let certificateListContent = openContent ?
        <Certificates currentClassNames={[`${styles['certificates__list__item']}`]}/> : null;

    return (
        <div className={`${styles['certificates']}`}>
            <button className={`${styles['certificates__switcher']}`}
                    onClick={() => setOpenContent(!openContent)}>
                .certificates
            </button>
            <ul className={`${styles['certificates__list']}`}>
                {certificateListContent}
            </ul>
        </div>
    );
};

export default CertificatesList;