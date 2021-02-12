import React from 'react';
import styles from './skills-terminal.module.scss';
import {
    terminalPCName,
    terminalCommand,
    skills
} from '../text-content';

const SkillsTerminal = () => {
  return (
      <div className={`${styles['terminal']}`}>
          <div className={`${styles['terminal__line']}`}>
              <div className={`${styles['terminal-pc-name']}`}>
                  {terminalPCName}
              </div>
              <div className={`${styles['terminal-command']}`}>
                  {terminalCommand}
              </div>
          </div>
          <div className={`${styles['terminal__line-col']}`}>
              <div className={`${styles['terminal-pc-name']}`}>
                  {terminalPCName}
              </div>
              <div>{skills}</div>
          </div>
          <div className={`${styles['terminal__line']}`}>
              <div className={`${styles['terminal-pc-name']}`}>
                  {terminalPCName}
              </div>
              <div className={`${styles['underscore-cursor']}`}> _</div>
          </div>
      </div>
  );
};

export default SkillsTerminal;