import React from 'react';
import styles from './skills-page.module.scss';

import PageHeader from "../../page-header";
import SkillsTerminal from "../../skills-terminal";
import CertificatesList from "../../certificates-list";

const SkillsPage = () => {
    return (
        <div className={`${styles['skills-page']}`}>
            <PageHeader name=".skills" number="02"/>
            <SkillsTerminal/>
            <div className={`${styles['skills-page_top-indent']}`}>
                <CertificatesList/>
            </div>
        </div>
    );
};

export default SkillsPage;
