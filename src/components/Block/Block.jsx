import React from 'react';
import './Block.css';

export default ({ color, title, children, ...rest }) => {
    return (
        <div className="block" {...rest}>
            <div className="block__header font-size-lg" style={{ backgroundColor: color }}>
                {title}
            </div>
            <div className="block__triangle" style={{ borderTopColor: color }} />
            <div className="block__content">
                {children}
            </div>
        </div>
    );
}
