import React from "react";
import {Link} from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <header className="page-header">
                <div className="container-big">
                    <Link to="/" className="header-logo-link">
                        <b>Ilya's portfolio website</b>
                    </Link>
                </div>
            </header>
        );
    }
}
