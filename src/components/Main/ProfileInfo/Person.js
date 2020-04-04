import React from "react";

export default class Person extends React.Component {

    render() {
        return (
            <section className="aboutbox">
                <h2 className="aboutbox-header">Основная информация</h2>
                <div className="aboutbox-body clearfix">
                    <div className="image-wrap">
                        <div className="avatar-box">
                            <img src={this.props.imgSrc} alt="userpic" className="avatar"/>
                        </div>
                    </div>
                    <div className="worksheet-wrap">
                        <ul className="worksheet-list">
                            <li className="worksheet-item clearfix">
                                <div className="worksheet-what">Меня зовут:</div>
                                <div className="worksheet-info">{this.props.name}</div>
                            </li>
                            <li className="worksheet-item clearfix">
                                <div className="worksheet-what">Мой возраст:</div>
                                <div className="worksheet-info">{this.props.age} years</div>
                            </li>
                            <li className="worksheet-item clearfix">
                                <div className="worksheet-what">Мой город:</div>
                                <div className="worksheet-info">{this.props.city}, {this.props.country}</div>
                            </li>
                            <li className="worksheet-item clearfix">
                                <div className="worksheet-what">Моя специализация:</div>
                                <div className="worksheet-info">FRONTEND developer</div>
                            </li>
                            <li className="worksheet-item clearfix">
                                <div className="worksheet-what">Ключевые навыки:</div>
                                <div className="worksheet-info skills">
                                    <ul className="skills-list">
                                        {this.props.skills.map((skill, index) =>
                                            <li key={index} className="skill-item">{skill}</li>
                                        )}
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