import React from 'react';
import './Footer.css';
import Gradient from '../Gradient/Gradient';
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/icons/youtube.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg';
import { ReactComponent as SkypeIcon } from '../../assets/icons/skype.svg';
import { socialMediaLinks } from '../../assets/data';

export default () => {

    return (
        <div className="footer">
            <Gradient />
            <div className="footer__content">
                <p className="font-size-lg">Contact</p>
                <h1 className="color-primary mb-3">6 310 310</h1>
                <p className="mb-3"><a href="mailto:info@swedbank.ee">info@swedbank.ee</a></p>
                <p className="mb-3">
                    SWEDBANK AS<br />
                    Liivalaia 8, 15040 Tallinn<br />
                    SWIFT kood/BIG: HABAEE2X<br />
                    Reg. number: 10060701
                </p>
                <div className="footer__socialMediaLinks">
                    <a href={socialMediaLinks['fb']} target="_blank">
                        <FacebookIcon />
                    </a>
                    <a href={socialMediaLinks['ig']} target="_blank">
                        <InstagramIcon />
                    </a>
                    <a href={socialMediaLinks['yt']} target="_blank">
                        <YoutubeIcon />
                    </a>
                    <a href={socialMediaLinks['tw']} target="_blank">
                        <TwitterIcon />
                    </a>
                    <a href={`skype?${socialMediaLinks['skype']}?userinfo`} target="_blank">
                        <SkypeIcon />
                    </a>
                </div>
            </div>
        </div>
    );
};
