import React from 'react';

import './error-indicator.css';
import icon from '../../img/error.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
        <img src={icon} alt="error icon"/>
        <span className="oops">oops</span>
        <span>
            something has gone wrong
        </span>
        <span>
            (but we already sent droids to fix it)
        </span>
        </div>
    );
};

export default ErrorIndicator;