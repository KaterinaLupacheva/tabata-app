import React from 'react';
import { FOOTER_DATA } from './footer-data';
import FooterIcon from '../footer-icon/footer-icon.component';

import './footer.styles.scss';

const Footer = () => (
    <div className='footer'>
        {FOOTER_DATA.map(({ link, icon }) => (
            <FooterIcon link={link} icon={icon} />
        ))}
    </div>
);

export default Footer;