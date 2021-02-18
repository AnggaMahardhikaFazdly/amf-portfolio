import React from "react";
import './Hero.css';
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
                                <h2>{state.greeting}</h2>
                                <h1>{state.title}</h1>
                                <p>{state.text}</p>
                                <div className="header__buttons">
                                    <a href="" className="cv-btn">Get In Touch</a>
                                </div>
                                <div className="header__ul">
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/AnggaMahardhikaFazdly">
                                        <box-icon name='github' type='logo' animation='tada' color='springGreen' size='md'></box-icon>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anggamf/">
                                        <box-icon name='linkedin' type='logo' animation='tada' color='springGreen' size='md'></box-icon>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/anggamf">
                                        <box-icon name='codepen' type='logo' animation='tada' color='springGreen' size='md'></box-icon>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@anggamahardhikafazdly">
                                        <box-icon name='medium-square' type='logo' animation='tada' color='springGreen' size='md'></box-icon>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/anggafazdly_/">
                                        <box-icon name='instagram' type='logo' animation='tada' color='springGreen' size='md'></box-icon>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="banner__img">
                            <img src={state.image} alt="hero man" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;