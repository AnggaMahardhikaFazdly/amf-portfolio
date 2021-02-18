import React from "react";
import './Footer.css';
import {
    FaGithub,
    FaLinkedinIn,
    FaCodepen,
    FaMediumM,
    FaInstagram,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="contactSection">
                    <div className="row justifyConter">
                        <div className="col-6">
                            <div className="contactSection-logo">
                                <img src="/images/logo.jpg" alt="" />
                            </div>
                            <div className="contactSection">
                                <p>Copyright &#169; 2021 Designed & Built by Angga Mahardhika Fazdly.</p>
                            </div>
                            <ul className="contactCircles">
                                <li>
                                    <FaGithub className="contactIcon" />
                                </li>
                                <li>
                                    <FaLinkedinIn className="contactIcon" />
                                </li>
                                <li>
                                    <FaCodepen className="contactIcon" />
                                </li>
                                <li>
                                    <FaMediumM className="contactIcon" />
                                </li>
                                <li>
                                    <FaInstagram className="contactIcon" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;