import React from "react";
import ProjectsList from "./MyWorks/ProjectsList";

const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default class MyWorks extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            works: []
        }
    }

    componentDidMount(){
        fetch(`${REACT_APP_BACKEND_URL}/my-works`)
            .then(res => res.json())
            .then(res => this.setState({ works: res }));
    }

    render() {
        return (
            <section className="aboutbox">
                <div className="aboutbox-header">Projects besides main work activity</div>
                <div className="aboutbox-body clearfix">
                    <div className="projects-wrapper">
                        <ProjectsList data={this.state.works} />
                    </div>
                </div>
            </section>
        )
    }
}