import React from "react";
import Contacts from "./Sidebar/Contacts";
import Navigation from "./Sidebar/Navigation";

export default class Sidebar extends React.Component {
    render() {
        return (
            <aside className="sidebar">
                <Navigation/>
                <Contacts email={'thesiv95.work@gmail.com'}
                          phone={'+972586516229'}
                          haveWhatsApp={true} />
            </aside>
        )
    }
}
