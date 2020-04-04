import React from "react";
import Person from "./ProfileInfo/Person";
import WorkExperience from "./ProfileInfo/WorkExperience";
import Education from "./ProfileInfo/Education";

export default class ProfileInfo extends React.Component {

    skills = ['html5', 'css3', 'javascript-es6', 'node-js', 'react'];
    workExperience = [
        {where: 'ООО "Гидротехника" - Системный администратор', period: 'Январь 2014 - Настоящее время'},
        {where: 'ОАО КБ "Региональный кредит" - Системный администратор', period: 'Март 2015 - Апрель 2015'},
        {where: 'Falafel Seller', period: '2080-2081'}
    ];
    education = [
        // type: college/course
        {where: 'Среднее специальное. Бизнес-колледж НГУЭУ', period: 'Сентябрь 2011 - Май 2015', type: 'college'},
        {where: 'Курсы Loftschool', period: '2015-2016', type: 'course'},
        {where: 'MASA Hi-Tech', period: '2019-2020', type: 'MASA'},
    ];

    render() {
        return (
            <>
                <Person imgSrc={'https://sun9-60.userapi.com/c638722/v638722958/72702/bGCjuY35JLM.jpg'}
                        name={'Gerr A'}
                        age={'30'}
                        city={'Tel Aviv'}
                        country={'Israel'}
                        skills={this.skills} />
                <WorkExperience data={this.workExperience} />
                <Education data={this.education} />
            </>
        )
    }
}