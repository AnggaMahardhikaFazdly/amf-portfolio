import React from 'react';
import './Skills.css';
import {
    bootstrap,
    css,
    figma,
    git,
    github,
    html,
    javascript,
    mysql,
    nodejs,
    python,
    react,
    sass,
    trello
} from '../../Assets';


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

                    <div className="image-skills-1">
                        <img src={html} alt='html' />
                        <img src={css} alt='css' />
                        <img src={bootstrap} alt='bootstrap' />
                        <img src={sass} alt='sass' />
                        <img src={javascript} alt='javascript' />
                        <img src={react} alt='react' />
                    </div>
                    <div className="image-skills-2">
                        <img src={nodejs} alt='nodejs' />
                        <img src={python} alt='python' />
                        <img src={mysql} alt='mysql' />
                        <img src={git} alt='git' />
                    </div>
                    <div className="image-skills-3">
                        <img src={github} alt='github' />
                        <img src={figma} alt='figma' />
                        <img src={trello} alt='trello' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
