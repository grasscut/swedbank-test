import React from 'react';
import './Button.css';

export default ({ color = 'default', ...rest }) => {
    return (
        <button {...rest} className={`button button--${color}`} />
    );
};
