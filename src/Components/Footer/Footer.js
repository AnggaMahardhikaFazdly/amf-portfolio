import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="contactSection">
                    <div className="row justifyConter">
                        <div className="col-6">
                            <div className="contactSection-text">
                                <p>Copyright &#169; 2021 Designed & Built by Angga Mahardhika Fazdly.</p>
                            </div>
                            <div className="contact_ul">
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/AnggaMahardhikaFazdly">
                                    <i className='bx bxl-github bx-burst' ></i>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anggamf/">
                                    <i className='bx bxl-linkedin bx-burst' ></i>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/anggamf">
                                    <i className='bx bxl-codepen bx-burst' ></i>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@anggamahardhikafazdly">
                                    <i className='bx bxl-medium-square bx-burst' ></i>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/anggafazdly_/">
                                    <i className='bx bxl-instagram bx-burst' ></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;