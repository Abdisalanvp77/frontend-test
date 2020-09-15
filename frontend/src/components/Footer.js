import React, { Component } from 'react';
import '../styles/components/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer_container">
                <div className="footer_content">
                    <div>
                        <p>©2013-2016 BeMo Academic Consulting Inc. All rights reserved. <a href="#">Disclaimer & Privacy Policy</a><a href="/pages/contact_us"> Contact Us</a></p>
                    </div>
                    <div >
                        <FontAwesomeIcon className="fbicon" icon={faFacebook} color="white"/>
                        <FontAwesomeIcon className="twicon" icon={faTwitter} color="white"/>
                    </div>
                </div>
                
            </div>
        );
    }
}