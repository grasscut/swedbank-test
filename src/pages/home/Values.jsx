import React from 'react';
import Block from '../../components/Block/Block';
import Card from '../../components/Card/Card';
import { companyValues } from '../../assets/data';
import './Values.css';

export default () => {
    const colors = ['royalblue', 'orange', 'darkmagenta'];

    return (
        <Card>
            {companyValues.map(({ id, title, value }, i) => (
                <Block key={id} color={colors[i]} title={title} style={{ flex: 1 }}>
                    {value}
                </Block>
            ))}
        </Card>
    );
};
