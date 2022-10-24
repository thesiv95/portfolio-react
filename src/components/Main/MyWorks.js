import React from "react";
import ProjectsList from "./MyWorks/ProjectsList";
// data files
import data from "../../data/myWorks";

export default class MyWorks extends React.Component {

    works = data;

    render() {
        return (
            <section className="aboutbox">
                <div className="aboutbox-header">My works (Pet projects or projects besides main work activity)</div>
                <div className="aboutbox-body clearfix">
                    <div className="projects-wrapper">
                        <ProjectsList data={this.works} />
                    </div>
                </div>
            </section>
        )
    }
}