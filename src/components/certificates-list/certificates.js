import React from "react";

import udemyReactRedux from '../../images/certif_react-redux.jpg';

const Certificates = ({ currentClassNames }) => {
    return (
        <React.Fragment>
            <li className={currentClassNames[0]}>
                <a href={udemyReactRedux}
                   target="_blank"
                   rel="noreferrer">
                    .react-redux (Udemy)
                </a>
            </li>
        </React.Fragment>
    );
};


export default Certificates;