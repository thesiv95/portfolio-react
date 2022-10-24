import React from "react";

export default class Education extends React.Component{

    itemTypeIsCorrect = () => {
        return this.props.type === 'college' || this.props.type === 'course';
    };

    render() {
        const dataSortedByDesc = this.props.data.reverse();
        return (
            <section className="aboutbox">
                <h2 className="aboutbox-header">Education</h2>
                <div className="aboutbox-body">
                    <ul className="aboutbox-list">
                        {
                            // If this is wrong type - we will load course icon
                            dataSortedByDesc.map((item, index) =>
                                <li key={index}
                                    className={`aboutbox-item icon-${this.itemTypeIsCorrect ? item.type : 'course'}`}>
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