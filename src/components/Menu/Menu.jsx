import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';
import Overlay from '../Overlay/Overlay';
import { isMobile } from '../../helpers';

export default ({ items, close = () => {}, open = true }) => {
    if (!open) {
        return null;
    }

    const [showOverlay, setShowOverlay] = useState(isMobile());

    return (
        <>
            <ul className="menu">
                {items.map(({ label, icon, link }) => (
                    <li
                        key={link}
                        className="menu__item"
                        onMouseEnter={() => setShowOverlay(true)}
                        onMouseLeave={() => setShowOverlay(false)}
                    >
                        <NavLink to={link} exact activeClassName="menu__item--active" onClick={close}>
                            {icon}
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {showOverlay && <Overlay onClick={close} />}
        </>
    );
}
