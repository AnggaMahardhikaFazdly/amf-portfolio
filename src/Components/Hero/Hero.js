import React from "react";
import './Hero.css';

const Hero = () => {
    const [state] = React.useState({
        greeting: "Hello,",
        title: "I'm Angga Mahardhika Fazdly",
        text:
            "Software Developer based in Jakarta, specializing in designing and building websites, applications, and everything in between that can be a solution to a problem.",
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
                                        <i className='bx bxl-github bx-tada' ></i>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anggamf/">
                                        <i className='bx bxl-linkedin bx-tada' ></i>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/anggamf">
                                        <i className='bx bxl-codepen bx-tada' ></i>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@anggamahardhikafazdly">
                                        <i className='bx bxl-medium-square bx-tada' ></i>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/anggafazdly_/">
                                        <i className='bx bxl-instagram bx-tada' ></i>
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