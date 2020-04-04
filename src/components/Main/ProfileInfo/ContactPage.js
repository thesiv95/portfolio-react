import React from "react";

export default class ContactPage extends React.Component {

    submitHandler = (event) => {
        event.preventDefault();

    };

    render() {
        return (
            <section className="aboutbox">
                <div className="header-big-wrap">
                    <h2 className="aboutbox-header-big">У вас интересный проект? Напишите мне!</h2>
                </div>
                <div className="aboutbox-body">
                    <div className="contact-form-wrap">
                        <form id="contact-me" className="form contact-form" onSubmit={this.submitHandler}>
                            <div className="server-mes error-mes"/>
                            <div className="server-mes success-mes"/>
                            <div className="form-line clearfix">
                                <div className="form-group pull-left">
                                    <label htmlFor="name" className="label">Имя</label>
                                    <input type="text" name="name" className="input" id="name" placeholder="Как к вам обращаться" />
                                </div>
                                <div className="form-group pull-right">
                                    <label htmlFor="email" className="label">Email</label>
                                    <input type="email" name="email" className="input" id="email" placeholder="Куда мне писать"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="label">Сообщение</label>
                                <textarea name="message" id="message" className="textarea" rows="3" placeholder="Кратко в чем суть"/>
                            </div>
                            <div className="button-group">
                                <button type="submit" className="btn">Отправить</button>
                                <button type="reset" className="btn btn-res">Очистить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}