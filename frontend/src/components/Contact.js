import React, { Component } from 'react'
import contactImage from '../images/contact-us.png';
import '../styles/components/Contact.css';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            content: ''
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
        console.log(this.state)
    }

    handleSubmit(event) {
        console.log('Your form has been submitted ');
        console.log(event);
        event.preventDefault();
        var contactform =  document.getElementById('contact-form');
        contactform.setAttribute('action', '//formspree.io/' + 'abdisalanvp77' + '@' + 'gmail' + '.' + 'com');
    }

    resetFields(e) {
        document.getElementById("contact-form").reset();
    }
    
    
    render() {
        return (
            <div className="ui container">
                <div className="banner">
                    <img src={contactImage} alt="search icon" className="banner_image"/>
                </div>
                <div className="text">
                    <h4>BeMo Academic Consulting Inc.</h4>
                    <p>Toll Free: 1-855-900-BeMo (2366)<br/>
                        Email: info@bemoacademicconsulting.com
                    </p>
                </div>
                
                <div className="form_container">
                
                    <form
                        id="contact-form"
                        onSubmit={this.handleSubmit} 
                        className="ui form error">
                        <label className="label">
                            Name:<br />
                            <input
                                name="name"
                                type="text"
                                className="input"
                                onChange={this.handleInputChange} />
                        </label>
                        <br />
                        <label className="label">
                            Email:<br />
                            <input
                                name="email"
                                type="text"
                                className="input"
                                onChange={this.handleInputChange} />
                        </label>
                        <br />
                        <label className="label">
                            How can we help you?:<br />
                            <textarea
                                name="content"
                                type="text"
                                rows="8"
                                cols="38"
                                className="input"
                                onChange={this.handleInputChange} />
                        </label>
                        <br />
                        <button className="ui button primary" onClick={this.resetFields}>Reset</button>
                        <button className="ui button primary">Submit</button>
                        <br /><br />
                        <p><b></b>Note: If you are having difficulties with our contact us form above, send us an email to info@bemoacademicconsulting.com (copy & paste the email address)</p>
                    </form>
                    
                </div>
            </div>
         
        );
    }
}

