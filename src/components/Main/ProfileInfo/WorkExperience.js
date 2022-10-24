import React from "react";

export default class WorkExperience extends React.Component {
    render() {
        const dataSortedByDesc = this.props.data.reverse();
        return (
            <section className="aboutbox">
                <h2 className="aboutbox-header">Work experience</h2>
                <div className="aboutbox-body">
                    <ul className="aboutbox-list">
                        {
                            dataSortedByDesc.map((item, index) =>
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