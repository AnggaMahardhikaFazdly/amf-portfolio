import React from 'react';
import './Contact.css';
import {
    gmail,
    linkedin,
    whatsapp
} from '../../Assets';

const Contact = () => {
    const [header] = React.useState({
        mainHeader: "GET IN TOUCH",
        subHeading: "My Contact",
        text:
            "If You Have A Project In Your Mind or Interested to Hire Me ?",
    });
    return (
        <div>
            <div className="services">
                <div className="container">
                    <div className="services__header">
                        <div className="common">
                            <h3 className="heading">{header.mainHeader}</h3>
                            <h1 className="mainHeader">{header.subHeading}</h1>
                            <p className="mainContent">{header.text}</p>
                            <div className="commonBorder"></div>
                        </div>

                        <div className="image-contact">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/anggamf/"
                            >
                                <img src={linkedin} alt='linkedin' />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://api.whatsapp.com/send/?phone=6281296650700&text&app_absent=0&lang=id"
                            >
                                <img src={whatsapp} alt='whatsapp' />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="mailto: angga.mahard@gmail.com"
                            >
                                <img src={gmail} alt='gmail' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
