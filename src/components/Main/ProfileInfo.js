import React from "react";
import Person from "./ProfileInfo/Person";
import WorkExperience from "./ProfileInfo/WorkExperience";
import Education from "./ProfileInfo/Education";

const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export default class ProfileInfo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            skills: [],
            workExperience: [],
            // education 'type' property can be 'college' or 'course' ('course' by default)
            education: []
        };
        
    }

    componentDidMount(){
         fetch(`${REACT_APP_BACKEND_URL}/skills`)
            .then(res => res.json())
            // .then(res => console.log(res))
           .then(res => this.setState({ skills: res }));

        fetch(`${REACT_APP_BACKEND_URL}/work-experience`)
            .then(res => res.json())
            // .then(res => console.log(res))
            .then(res => this.setState({ workExperience: res }));

        fetch(`${REACT_APP_BACKEND_URL}/education`)
            .then(res => res.json())
            // .then(res => console.log(res))
            .then(res => this.setState({ education: res }));
    }

    

    render() {
        return (
            <React.Fragment>
                <Person imgSrc={'misc/userpic.png'}
                        name={'Ilya Soloveychik'}
                        speciality={'Technician & FullStack (Backend-oriented) Developer'}
                        skills={this.state.skills} />
                <WorkExperience data={this.state.workExperience} />
                <Education data={this.state.education} />
            </React.Fragment>
        )
    }
}