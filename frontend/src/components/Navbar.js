import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/Navbar.css';
import logo from '../images/bemo-logo2.png';
export default class Navbar extends Component {
    render() {
        return (
            <div className="top">
        
                <div className="right menu">
                    <Link to="/" className="logo_item">
                        <div className="left">
                            <img src={logo} className="logo" alt="logo"/>
                        </div>
                    </Link>
                    <Link to="/" className="item">
                        Main
                    </Link>
                    <Link to="/pages/how_to_prepare" className="item">
                        How To Prepare
                    </Link>
                    <Link to="/pages/interview_questions" className="item">
                        CDA Interview Questions
                    </Link>
                    <Link to="/pages/contact_us" className="item">
                        Contact Us
                    </Link>
                   
                </div>
            </div>
        );
    }
}