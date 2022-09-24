import React from "react";

export default class Contacts extends React.Component {
    render() {
        return (
            <address className="contacts">
                <div className="contacts-header">
                    <span className="header-inner-text">Contacts</span>
                </div>
                <ul className="contacts-list">
                    <li className="contacts-item contacts-item-mail">
                        <a className="contacts-link" href={`mailto:${this.props.email}`}>
                            <span className="contact-text">{this.props.email}</span>
                        </a>
                    </li>
                    <li className="contacts-item contacts-item-phone">
                        <a className="contacts-link"
                           href={`${this.props.haveWhatsApp 
                               ? `https://wa.me/${this.props.phone.replace('+', '')}` 
                               : `tel:${this.props.phone}`}`}>
                            <span className="contact-text"
                                  title={this.props.haveWhatsApp ? 'WhatsApp' : ''}
                            >{this.props.phone}</span>
                        </a>
                    </li>
                </ul>
            </address>
        )
    }
}

