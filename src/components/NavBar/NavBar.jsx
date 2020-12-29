import React, { useState } from 'react';
import './NavBar.css';
import SwedbankLogo from '../../assets/images/swedbank_logo.png';
import Menu from '../Menu/Menu';
import MenuIcon from '../../assets/images/menu.png';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as WalletIcon } from '../../assets/icons/wallet.svg';
import { isMobile } from '../../helpers';
import Gradient from '../Gradient/Gradient';

export default () => {
    const [menuOpened, setMenuOpened] = useState(false);

    const toggleMenu = () => {
        setMenuOpened(!menuOpened);
    };

    const menuItems = [
        { label: 'Home', icon: <HomeIcon />, link: '/home' },
        { label: 'Everyday banking', icon: <WalletIcon />, link: '/banking' },
    ];

    return (
        <nav className="navbar">
            <Gradient height={10} />
            <div className="navbar__top">
                <img src={SwedbankLogo} alt="Swedbank logo" />
                <img src={MenuIcon} id="menu" onClick={toggleMenu} />
            </div>
            {isMobile()
                ? <Menu open={menuOpened} items={menuItems} close={() => setMenuOpened(false)} />
                : <Menu items={menuItems} />
            }
        </nav>
    );
};
