import React from "react";

export default class WorkExperience extends React.Component {
    render() {
        return (
            <section className="aboutbox">
                <h2 className="aboutbox-header">Опыт работы</h2>
                <div className="aboutbox-body">
                    <ul className="aboutbox-list">
                        {
                            this.props.data.map((item, index) =>
                                <li key={index} className="aboutbox-item icon-work">
                                    <div className="where">{item.where}</div>
                                    <div className="period">{item.period}</div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </section>
        )
    }
}