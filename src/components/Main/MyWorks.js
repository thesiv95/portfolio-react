import React from "react";
import ProjectsList from "./MyWorks/ProjectsList";

export default class MyWorks extends React.Component {

    works = [
        {https: false, siteDomain: 'a-industry.ru', previewPicUrl: 'projects/project-1.jpg', description: 'Корпоративный, и в то же время продающий сайт строительной компании a-industry'},
        {https: true, siteDomain: 'домгазобетон.рф', previewPicUrl: 'projects/project-2.jpg', description: 'Продающая страница для компании lederland'}
    ];

    render() {
        return (
            <section className="aboutbox">
                <div className="aboutbox-header">Мои работы</div>
                <div className="aboutbox-body clearfix">
                    <div className="projects-wrapper">
                        <ProjectsList data={this.works} />
                    </div>
                </div>
            </section>
        )
    }
}