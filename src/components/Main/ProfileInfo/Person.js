import React from "react";

export default class Person extends React.Component {

    render() {
        return (
            <section className="aboutbox">
                <h2 className="aboutbox-header">Main information</h2>
                <div className="aboutbox-body clearfix">
                    <div className="image-wrap">
                        <div className="avatar-box">
                            <img src={this.props.imgSrc} alt="userpic" className="avatar"/>
                        </div>
                    </div>
                    <div className="worksheet-wrap">
                        <ul className="worksheet-list">
                            <li className="worksheet-item clearfix">
                                <div className="worksheet-what">My name:</div>
                                <div className="worksheet-info">{this.props.name}</div>
                            </li>
                            <li className="worksheet-item clearfix">
                                <div className="worksheet-what">Мy specialisation:</div>
                                <div className="worksheet-info">
                                    {this.props.speciality}
                                </div>
                            </li>
                            <li className="worksheet-item clearfix">
                                <div className="worksheet-what">Key skills:</div>
                                <div className="worksheet-info skills">
                                    <ul className="skills-list">
                                        {this.props.skills.length > 0 ? this.props.skills.map((skill) =>
                                            <li key={skill[0]} className="skill-item">{skill[1]}</li>
                                        ) : <h5 style={{marginTop: '2px'}}>No skills information</h5>}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}