import React from "react";

export default class ProjectsList extends React.Component {

    render() {
        return (
            <ul className="projects-list">
                {
                    this.props.data.map((item, index) =>
                        <li key={index} className="projects-item">
                            <div className="hover-img">
                                <img className="project-img" src={'projects/' + item.previewPicFile} alt={item.siteDomain}/>
                                <div className="zoom-wrapper">
                                    <a href={item.siteDomain} className="zoom-link" rel="noopener noreferrer" target="_blank">{item.siteName}</a>
                                </div>
                            </div>
                            <a href={item.siteDomain} className="project-link" rel="noopener noreferrer" target="_blank">{item.siteName}</a>
                            <div className="project-desc">
                                {item.description}
                            </div>
                        </li>
                    )
                }
            </ul>
        )
    }
}