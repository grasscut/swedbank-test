import React from 'react';
import './InputFields.css';

export default ({ name, error, label = '', options = [], onChange = () => {}, ...rest }) => {

    return (
        <div className={`inputFieldGroup${error ? ' inputFieldGroup--error' : ''}`}>
            {!!label && <label className="inputFieldGroup__label" htmlFor={name}>{label}</label>}
            <div className="inputFieldGroup__fieldWrapper">
                <select
                    {...rest}
                    className="inputFieldGroup__field"
                    name={name}
                    onChange={(ev) => onChange(ev.target.value)}
                >
                    {options.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
                <span className="inputFieldGroup__errorMsg">{error}</span>
            </div>
        </div>
    );
};
