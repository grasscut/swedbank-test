import React from 'react';
import Overview from './Overview';
import Values from './Values';

export default () => {

    return (
        <div>
            <h1 className="color-primary">Home</h1>

            <Overview />
            <Values />
        </div>
    );
};
