import React from "react";
import './About.css';

const About = () => {
    const [header] = React.useState({
        subHeader: "About Me",
        text:
            "I love programming, enjoy complex problems being solved into simple, useful solutions or designs of course beautiful to look at. When I'm not coding, I like seeing this beautiful nature, like camping or going to an area that has a natural panorama.",
    });
    const [state] = React.useState([
        { id: 1, education: "Formal Education:", school: "Trisakti Institute of Transportation and Logistics", majoring: "Bachelor of air transportation management", years: "July 2009 - November 2014" },
        { id: 2, education: "Non-Formal Education:", school: "Cilsy Digital School", majoring: "Coding bootcamp intensive learning program", years: "September 2020 - January 2021" },
    ]);
    return (
        <div className="about">
            <div className="container">
                <div className="common">
                    <h1 className="mainHeader">{header.subHeader}</h1>
                    <p className="mainContent">{header.text}</p>
                    <div className="commonBorder"></div>
                </div>
                <div className="row  h-650 alignCenter">
                    <div className="col-6">
                        <div className="about__img">
                            <img src="/images/" alt="about man" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about__info">
                            <div className="about__info-p1">
                                I learned programming not from formal education (college), because my degree is a bachelor of air transportation management in Trisakti Institute of Transportation and Logistics and my previous work experience was in the field of management specialization as Human Resource in Aviation Industry.
                            </div>
                            <div className="about__info-p2">
                                But at one point it seemed like I had to pursue my dream of becoming a software developer, a job I really liked and I was excited to do and then I finally got that opportunity during the COVID-19 pandemic as a turning point for me to change my profession as a software developer or something like that, I got programming knowledge in Cilsy Digital School and also through social media platform like Youtube.
                            </div>
                            <div className="info__education">
                                <div className="row">
                                    {state.map((info) => (
                                        <div className="col-6">
                                            <strong>{info.education}</strong>
                                            <p>{info.school}</p>
                                            <p>{info.majoring}</p>
                                            <p>{info.years}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;