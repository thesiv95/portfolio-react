import React from "react";
import {NavLink} from "react-router-dom";

export default class Navigation extends React.Component {
    render() {
        return (
            <nav className="navigation">
                <ul className="navigation-list">
                    <li className="navigation-item">
                        <NavLink to={'/'} exact className="navigation-link" activeClassName="current">
                            About me
                        </NavLink>
                    </li>
                    <li className="navigation-item">
                        <NavLink to={'/my-works'} className="navigation-link" activeClassName="current">
                            My works
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}
