import React, { useEffect } from 'react';
import './Overlay.css';

export default ({ onClick = () => {} }) => {
    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];

        body.classList.add('no-scroll');

        return () => {
            body.classList.remove('no-scroll');
        };
    }, []);

    return (
        <div className="overlay" onClick={onClick} />
    );
}
