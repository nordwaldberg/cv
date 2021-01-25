import React from 'react';
import styles from './skills-page.module.scss';
import {
    terminalPCName,
    terminalCommand,
    skills
} from '../text-content';
import PageHeader from "../page-header";

const SkillsPage = () => {
    return (
        <div className={`${styles['skills-page']}`}>
            <PageHeader name=".skills" number="02"/>
            <div className={`${styles['skills-page__terminal']}`}>
                <div className={`${styles['skills-page__terminal__line']}`}>
                    <div className={`${styles['terminal-pc-name']}`}>
                        {terminalPCName}
                    </div>
                    <div className={`${styles['terminal-command']}`}>
                        {terminalCommand}
                    </div>
                </div>
                <div className={`${styles['skills-page__terminal__line-col']}`}>
                    <div className={`${styles['terminal-pc-name']}`}>
                        {terminalPCName}
                    </div>
                    <div>{skills}</div>
                </div>
                <div className={`${styles['skills-page__terminal__line']}`}>
                    <div className={`${styles['terminal-pc-name']}`}>
                        {terminalPCName}
                    </div>
                    <div className={`${styles['underscore-cursor']}`}> _</div>
                </div>
            </div>
        </div>
    );
};

export default SkillsPage;