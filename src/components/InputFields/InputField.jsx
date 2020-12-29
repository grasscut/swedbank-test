import React from 'react';
import './InputFields.css';

export default ({ name, label = '', onChange = () => {}, error, ...rest }) => {
    return (
        <div className={`inputFieldGroup${error ? ' inputFieldGroup--error' : ''}`}>
            {!!label && <label className="inputFieldGroup__label" htmlFor={name}>{label}</label>}
            <div className="inputFieldGroup__fieldWrapper">
                <input
                    className="inputFieldGroup__field"
                    name={name}
                    onChange={(ev) => onChange(ev.target.value)}
                    {...rest}
                />
                <span className="inputFieldGroup__errorMsg">{error}</span>
            </div>
        </div>
    );
};
