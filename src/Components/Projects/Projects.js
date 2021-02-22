import React, { useState } from "react";
import './Projects.css';
import { Modal } from 'react-bootstrap';

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
            image: "/Images/fabulous-coffee.svg",
            title: "Fabulous Coffee",
            description:
                "Fabulous Coffee is the most complete single origin supplier website in Indonesia which provides several items of coffee all over Indonesia from Sabang to Merauke.",
        },
        {
            id: 2,
            image: "/Images/fabulous-coffee.svg",
            title: "Fabulous Coffee",
            description:
                "Fabulous Coffee is the most complete single origin supplier website in Indonesia which provides several items of coffee all over Indonesia from Sabang to Merauke.",
        },
        {
            id: 3,
            image: "/Images/fabulous-coffee.svg",
            title: "Fabulous Coffee",
            description:
                "Fabulous Coffee is the most complete single origin supplier website in Indonesia which provides several items of coffee all over Indonesia from Sabang to Merauke.",
        },
        {
            id: 4,
            image: "/Images/fabulous-coffee.svg",
            title: "Fabulous Coffee",
            description:
                "Fabulous Coffee is the most complete single origin supplier website in Indonesia which provides several items of coffee all over Indonesia from Sabang to Merauke.",
        },
        {
            id: 5,
            image: "/Images/fabulous-coffee.svg",
            title: "Fabulous Coffee",
            description:
                "Fabulous Coffee is the most complete single origin supplier website in Indonesia which provides several items of coffee all over Indonesia from Sabang to Merauke.",
        },
        {
            id: 6,
            image: "/Images/fabulous-coffee.svg",
            title: "Fabulous Coffee",
            description:
                "Fabulous Coffee is the most complete single origin supplier website in Indonesia which provides several items of coffee all over Indonesia from Sabang to Merauke.",
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
                                            <a>View Demo</a>
                                        </button>
                                        <button onClick={() => setLgShow(true)}>
                                            <a>Details</a>
                                        </button>
                                        <button>
                                            <a>Source Code</a>
                                        </button>
                                    </div>
                                    {/* <div className="btn-btn-btn">
                                        <button onClick={() => setLgShow(true)}>
                                            <a>Details</a>
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Large Modal
                            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>...</Modal.Body>
                </Modal>
            </div>
        </div>
    );
};

export default Projects;