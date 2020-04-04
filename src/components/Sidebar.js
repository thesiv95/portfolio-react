import React from "react";
import Contacts from "./Sidebar/Contacts";
import Navigation from "./Sidebar/Navigation";

export default class Sidebar extends React.Component {
    render() {
        return (
            <aside className="sidebar">
                <Navigation/>
                <Contacts email={'dj.active.17@gmail.com'} phone={'+972586516229'} skype={'soloveychik16'} />
            </aside>
        )
    }
}
