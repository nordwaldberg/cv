import React from 'react';
import styles from './text-content.module.scss';

export const greeting = <p>
    Hi. <br/>
    I'm nordwaldberg.
</p>

export const description = <p>
    Junior Frontend Developer <br/>
    from Saint-Petersburg, Russia <br/>
</p>

export const aboutTextComment = <span className={`${styles['about-text-comment']}`}>
    &#47;&#47; design for this react app was created by me :)
</span>

export const aboutText = <p>
    Hello, my name is Alina Lomakina,<br/>
    I am a beginner in web-development.<br/>
    <br/>
    I have a pretty good theoretical base for web<br/>
    development, and I want to get a lot of knowledge<br/>
    in this area.<br/>
    Also I like create illustrations and icons,<br/>
    come up with a design for apps and websites.<br/>
    <br/>
    {aboutTextComment}
    <br/>
    I can confidently use the command line,<br/>
    use Windows and Linux at the level of a confident<br/>
    user with the ability to install these OS on a computer.<br/>
    I have practical knowledge in maintenance of computer equipment.<br/>
    <br/>
    I am interested in all: from atom structure<br/>
    to artificial intelligence.<br/>
    I learn fast, love to explore, understand and create.<br/>
</p>