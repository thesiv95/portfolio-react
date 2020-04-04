import React from "react";
import {Link} from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <header className="page-header">
                <div className="container-big">
                    <Link to="/" className="header-logo-link">
                        Portfolio Website
                    </Link>
                    <ul className="socials">
                        <li className="socials-item">
                            <a href={`https://facebook.com/${this.props.fbUser}`} target="_blank" rel="noopener noreferrer" className="socials-link fb">Facebook</a>
                        </li>
                        <li className="socials-item">
                            <a href={`https://github.com/${this.props.ghUser}`} target="_blank" rel="noopener noreferrer" className="socials-link gt">Github</a>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}
