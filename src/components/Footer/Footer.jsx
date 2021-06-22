import React from 'react';
import { Link } from 'react-router-dom';
const Footer = ({phrase, link, toAdress}) => {
    return ( 
        <div className="footer-class">
            {phrase}{' '}
            <Link to = {toAdress} className="footer-link-element">
                {link}
            </Link>
        </div>
     );
}
 
export default Footer;