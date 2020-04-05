import React from "react";
import ProjectsList from "./MyWorks/ProjectsList";
// data files
import data from "../../data/myWorks";

export default class MyWorks extends React.Component {

    works = Object.values(data);

    render() {
        return (
            <section className="aboutbox">
                <div className="aboutbox-header">My works</div>
                <div className="aboutbox-body clearfix">
                    <div className="projects-wrapper">
                        <ProjectsList data={this.works} />
                    </div>
                </div>
            </section>
        )
    }
}