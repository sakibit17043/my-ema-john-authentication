import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const date = new Date();
    return (
        <div>
            <p style={{textAlign:"center",color:'gray',marginTop:'50px'}}><small>copyright <FontAwesomeIcon icon={faCopyright} /> {date.getFullYear()} </small></p>
        </div>
    );
};

export default Footer;