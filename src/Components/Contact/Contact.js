import React from 'react';
import './Contact.css';
import linkedin from '../Assets/linkedin.svg';
import whatsapp from '../Assets/whatsapp.svg';
import gmail from '../Assets/gmail.svg';

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
                            <img src={linkedin} alt='linkedin' />
                            <img src={whatsapp} alt='whatsapp' />
                            <img src={gmail} alt='gmail' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
