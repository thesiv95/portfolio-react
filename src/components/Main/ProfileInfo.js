import React from "react";
import Person from "./ProfileInfo/Person";
import WorkExperience from "./ProfileInfo/WorkExperience";
import Education from "./ProfileInfo/Education";
// data files
import skillsData from "../../data/skills";
import workExperienceData from "../../data/workExperience";
import educationData from "../../data/education";

export default class ProfileInfo extends React.Component {

    skills = skillsData;
    workExperience = Object.values(workExperienceData);
    // education 'type' property can be 'college' or 'course' ('course' by default)
    education = Object.values(educationData);

    render() {
        return (
            <React.Fragment>
                <Person imgSrc={'misc/userpic.png'}
                        name={'Ilya Soloveychik'}
                        age={'24'}
                        region={'Tel Aviv Area'}
                        country={'Israel'}
                        speciality={'Full-Stack JavaScript Developer'}
                        skills={this.skills} />
                <WorkExperience data={this.workExperience} />
                <Education data={this.education} />
            </React.Fragment>
        )
    }
}