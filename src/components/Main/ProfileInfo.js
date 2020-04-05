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
            <>
                <Person imgSrc={'https://sun9-60.userapi.com/c638722/v638722958/72702/bGCjuY35JLM.jpg'}
                        name={'Ilya Soloveychik'}
                        age={'24'}
                        city={'Ashkelon'}
                        country={'Israel'}
                        speciality={'Junior FrontEnd Developer'}
                        skills={this.skills} />
                <WorkExperience data={this.workExperience} />
                <Education data={this.education} />
            </>
        )
    }
}