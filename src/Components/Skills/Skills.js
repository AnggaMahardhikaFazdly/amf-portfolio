import React from 'react';
import './Skills.css';
import css from '../Assets/css3.svg';
import git from '../Assets/git.svg';
import github from '../Assets/github.svg';
import html from '../Assets/html5.svg';
import javascript from '../Assets/javascript.svg';
import mysql from '../Assets/mysql.svg';
import python from '../Assets/python.svg';
import react from '../Assets/react.svg';
import figma from '../Assets/figma.svg';


const Skills = () => {
    const [header] = React.useState({
        mainHeader: "SKILLS",
        subHeading: "My Skills",
        text:
            "The abilities and tools I have used.",
    });
    return (
        <div className="services">
            <div className="container">
                <div className="services__header">
                    <div className="common">
                        <h3 className="heading">{header.mainHeader}</h3>
                        <h1 className="mainHeader">{header.subHeading}</h1>
                        <p className="mainContent">{header.text}</p>
                        <div className="commonBorder"></div>
                    </div>

                    <div className="image-skills">
                        <img src={css} alt='css' />
                        <img src={html} alt='html' />
                        <img src={javascript} alt='javascript' />
                        <img src={react} alt='react' />
                        <img src={git} alt='git' />
                        <img src={github} alt='github' />
                        <img src={mysql} alt='mysql' />
                        <img src={python} alt='python' />
                        <img src={figma} alt='figma' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
