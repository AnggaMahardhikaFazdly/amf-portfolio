import React, { useState } from "react";
import './Projects.css';
import { Modal, Carousel } from 'react-bootstrap';

const Projects = () => {
    const [header] = React.useState({
        mainHeader: "PROJECTS",
        subHeading: "My Projects",
        text:
            "A project that I've completed.",
    });
    const [state] = React.useState([
        {
            id: 1,
            image: "/images/fabulous-coffee.png",
            title: "Fabulous Coffee",
            description:
                "Fabulous Coffee is the most complete single origin supplier website in Indonesia which provides several items of coffee all over Indonesia from Sabang to Merauke.",
            website: "",
            sourceCode: "https://github.com/AnggaMahardhikaFazdly/fabulous-coffee-web-project",
            imgdetail1: "/images/fabulous-coffee-details-1.png",
            imgdetail2: "/images/fabulous-coffee-details-2.png",
            imgdetail3: "/images/fabulous-coffee-details-3.png",
            imgdetail4: "/images/fabulous-coffee-details-4.png",
            imgdetail5: "/images/fabulous-coffee-details-5.png",
            imgdetail6: "/images/fabulous-coffee-details-6.png",
        },
        {
            id: 2,
            image: "/images/cilvies-admin-panel.png",
            title: "Cilvies Admin Panel",
            description:
                "Cilvies admin panel website that helps in managing dvd's owned by cilvies. Where administrator can create, read, update and delete of the data (CRUD).",
            website: "",
            sourceCode: "https://github.com/AnggaMahardhikaFazdly/cilvies-react",
            imgDetail1: "/images/cilvies-details-1.png",
            imgDetail2: "/images/cilvies-details-2.png",
            imgDetail3: "/images/cilvies-details-3.png",
            imgDetail4: "/images/cilvies-details-4.png",
            imgDetail5: "/images/cilvies-details-5.png",
            imgDetail6: "/images/cilvies-details-6.png",
        },
        {
            id: 3,
            image: "/images/personal-portfolio.png",
            title: "Personal Portfolio",
            description:
                "AMF Personal Portfolio Website is made to show off my portfolio project that has been worked on. Fully built using React JS and designed to be responsive.",
            website: "",
            sourceCode: "https://github.com/AnggaMahardhikaFazdly/amf-portfolio",
            imgDetail1: "/images/personal-portfolio-details-1.png",
            imgDetail2: "/images/personal-portfolio-details-2.png",
            imgDetail3: "/images/personal-portfolio-details-3.png",
            imgDetail4: "/images/personal-portfolio-details-4.png",
            imgDetail5: "/images/personal-portfolio-details-5.png",
            imgDetail6: "/images/personal-portfolio-details-6.png",
        },
        {
            id: 4,
            image: "/images/fabulous-coffee.png",
            title: "Fabulous Coffee",
            description:
                "Fabulous Coffee is the most complete single origin supplier website in Indonesia which provides several items of coffee all over Indonesia from Sabang to Merauke.",
            website: "",
            sourceCode: "https://github.com/AnggaMahardhikaFazdly/fabulous-coffee-web-project",
            imgdetail1: "/images/fabulous-coffee-details-1.png",
            imgdetail2: "/images/fabulous-coffee-details-2.png",
            imgdetail3: "/images/fabulous-coffee-details-3.png",
            imgdetail4: "/images/fabulous-coffee-details-4.png",
            imgdetail5: "/images/fabulous-coffee-details-5.png",
            imgdetail6: "/images/fabulous-coffee-details-6.png",
        },
        {
            id: 5,
            image: "/images/cilvies-admin-panel.png",
            title: "Cilvies Admin Panel",
            description:
                "Cilvies admin panel website that helps in managing dvd's owned by cilvies. Where administrator can create, read, update and delete of the data (CRUD).",
            website: "",
            sourceCode: "https://github.com/AnggaMahardhikaFazdly/amf-portfolio",
            imgDetail1: "/images/cilvies-details-1.png",
            imgDetail2: "/images/cilvies-details-2.png",
            imgDetail3: "/images/cilvies-details-3.png",
            imgDetail4: "/images/cilvies-details-4.png",
            imgDetail5: "/images/cilvies-details-5.png",
            imgDetail6: "/images/cilvies-details-6.png",
        },
        {
            id: 6,
            image: "/images/personal-portfolio.png",
            title: "Personal Portfolio",
            description:
                "AMF Personal Portfolio Website is made to show off my portfolio project that has been worked on. Fully built using React JS and designed to be responsive.",
            imgDetail1: "/images/personal-portfolio-details-1.png",
            imgDetail2: "/images/personal-portfolio-details-2.png",
            imgDetail3: "/images/personal-portfolio-details-3.png",
            imgDetail4: "/images/personal-portfolio-details-4.png",
            imgDetail5: "/images/personal-portfolio-details-5.png",
            imgDetail6: "/images/personal-portfolio-details-6.png",
            website: "",
            sourceCode: "https://github.com/AnggaMahardhikaFazdly/amf-portfolio",
        },

    ]);
    const [lgShow, setLgShow] = useState(false);
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

                    <div className="row bgMain">
                        {state.map((info, index) => (
                            <div className="col-4 bgMain" key={index}>
                                <div className="card-container">
                                    <div className="image-container">
                                        <img src={info.image} alt="project images" />
                                    </div>
                                    <div className="card-content">
                                        <div className="card-title">
                                            <h3>{info.title}</h3>
                                        </div>
                                        <div className="card-body">
                                            <p>{info.description}</p>
                                        </div>
                                    </div>
                                    <div className="btn-btn">
                                        <button>
                                            <a target="_blank" rel="noopener noreferrer" href="">View Demo</a>
                                        </button>
                                        <button onClick={() => setLgShow(true)}>
                                            <a>Details</a>
                                        </button>
                                        <button>
                                            <a target="_blank" rel="noopener noreferrer" href={info.sourceCode}>Source Code</a>
                                        </button>
                                    </div>
                                </div>
                                <Modal
                                    size="lg"
                                    show={lgShow}
                                    onHide={() => setLgShow(false)}
                                    aria-labelledby="example-modal-sizes-title-lg"

                                >
                                    <Modal.Header closeButton >
                                        <Modal.Title id="example-modal-sizes-title-lg">
                                            {info.title}
                                        </Modal.Title>
                                    </Modal.Header>

                                    <Modal.Body className="modal-body">
                                        <Carousel>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={info.imgDetail1}
                                                    alt="Fabulous-Coffee-Details-1"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={info.imgDetail2}
                                                    alt="Fabulous-Coffee-Details-2"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={info.imgDetail3}
                                                    alt="Fabulous-Coffee-Details-3"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={info.imgDetail4}
                                                    alt="Fabulous-Coffee-Details-4"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={info.imgDetail5}
                                                    alt="Fabulous-Coffee-Details-5"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={info.imgDetail6}
                                                    alt="Fabulous-Coffee-Details-6"
                                                />
                                            </Carousel.Item>
                                        </Carousel>
                                    </Modal.Body>
                                </Modal>
                            </div>

                        ))}
                    </div>
                </div>
            </div>

            {/* <div>
                {state.map((info, index) => (
                    
                ))}
            </div> */}

        </div>
    );
};

export default Projects;