import React from "react";
import 'boxicons';

const Hero = () => {
    const [state] = React.useState({
        greeting: "Hello,",
        title: "I'm Angga Mahardhika Fazdly",
        text:
            "Full-Stack Developer based in Jakarta, specializing in designing and building websites, applications, and everything in between that can be a solution to a problem.",
        image: "/images/",
    });
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header__section">
                                <h1>{state.greeting}</h1>
                                <h1>{state.title}</h1>
                                <p>{state.text}</p>
                                <div className="header__buttons">
                                    <a href="" className="btn btn-outline">Get In Touch</a>
                                </div>
                                <ul className="header__ul">
                                    <li>
                                        <box-icon name='github' type='logo' animation='tada' ></box-icon>
                                    </li>
                                    <li>
                                        <box-icon name='linkedin' type='logo' animation='tada' ></box-icon>
                                    </li>
                                    <li>
                                        <box-icon name='codepen' type='logo' animation='tada' ></box-icon>
                                    </li>
                                    <li>
                                        <box-icon name='medium-square' type='logo' animation='tada' ></box-icon>
                                    </li>
                                    <li>
                                        <box-icon name='instagram' type='logo' animation='tada' ></box-icon>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="banner__img">
                            <img src={state.image} alt="man" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;