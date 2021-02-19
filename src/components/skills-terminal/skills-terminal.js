import React, { useState } from 'react';
import styles from './skills-terminal.module.scss';
import {
    terminalPCName,
    terminalCommand,
    skills
} from '../text-content';
import Typing from 'react-typing-animation';

const SkillsTerminal = () => {
    const [showSkills, setShowSkills] = useState(false);
    const [showLastLine, setShowLastLine] = useState(false);

    let skillsContent = showSkills ? <SkillsList/> : null;
    let lastLineContent = showLastLine ? <UnderscoreLine/> : null;

    return (
        <div className={`${styles['terminal']}`}>
            <div className={`${styles['terminal__line']}`}>
                <div className={`${styles['terminal-pc-name']}`}>
                    {terminalPCName}
                </div>
                <Typing
                    className={`${styles['terminal-command']}`}
                    hideCursor="true"
                    speed={85}
                    onFinishedTyping={() => {
                        setTimeout(() => setShowSkills(true), 500);
                        setTimeout(() => setShowLastLine(true), 1200);
                    }}>
                    {terminalCommand}
                </Typing>
            </div>
            <div className={`${styles['terminal__line-col']}`}>
                {skillsContent}
            </div>
            <div className={`${styles['terminal__line']}`}>
                {lastLineContent}
            </div>
        </div>
    );
};

export default SkillsTerminal;

const SkillsList = () => {
    return (
        <React.Fragment>
            <div className={`${styles['terminal-pc-name']}`}>
                {terminalPCName}
            </div>
            <div>{skills}</div>
        </React.Fragment>
    );
};

const UnderscoreLine = () => {
    return (
        <React.Fragment>
            <div className={`${styles['terminal-pc-name']}`}>
                {terminalPCName}
            </div>
            <div className={`${styles['underscore-cursor']}`}> _</div>
        </React.Fragment>
    );
}