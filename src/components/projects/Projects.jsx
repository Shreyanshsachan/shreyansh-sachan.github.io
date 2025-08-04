import React, { useState } from 'react'
import './projects.css'

const Projects = () => {

    const [toggle, setToggle] = useState(0);

    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">What I have built</span>

            <div className="projects__container container grid">
                <div className="projects__content">
                    <div>
                        <i className="uil uil-web-grid projects__icon"></i>
                        <h3 className="projects__title">Face Landmark Detection <br/> </h3>
                    </div>
                    <span className="projects__button" onClick={() => setToggle(1)} >View More
                    <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggle === 1 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => setToggle(0)} ></i>
                            <h3 className="projects__modal-title">Video Streamer</h3>
                            <div className="projects__modal-subtitle">
                                <p className="projects__modal-description">
                                    Full-stack video streaming application (work on-going)
                                </p>
                                <a href="https://github.com/Shreyanshsachan/Hello" target='_blank'><i class='bx bx-link-alt'></i></a>
                            </div>

                            <ul className="projects__modal-items grid">
                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__button"></i>
                                    <p className="projects__modal-info">
                                        User sign-in, authentication, and password protection.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Video Controller for uploading and streaming.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Middleware to protect video service routes.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        UI for user login, accounts, video library and streaming.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        TechStack: ReactJS, NestJS, MongoDB, Multer.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <i className="uil uil-edit projects__icon"></i>
                        <h3 className="projects__title">FinanceFolio <br/> Expense Tracker</h3>
                    </div>
                    <span className="projects__button" onClick={() => setToggle(3)} >View More
                    <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>
                    
                    <div className={toggle === 3 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => setToggle(0)} ></i>
                            <h3 className="projects__modal-title">FinanceFolio</h3>
                            <div className="projects__modal-subtitle">
                                <p className="projects__modal-description">
                                    An expense tracking application for personal finance
                                </p>
                                <a href="https://github.com/Shreyanshsachan/Diagnosis-and-Data-Probability-Decision-Based-on-Non-Small-Cell-Lung-Cancer " target='_blank'><i class='bx bx-link-alt'></i></a>
                            </div>
                            

                            <ul className="projects__modal-items grid">
                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        User authentication layer using spring security.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Simple UI to manage accounts, transactions and expense categories for users.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Users can visualize the expenses and income with the help of dashboard
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        More features to add..
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        TechStack: SpringBoot, Hibernate, JUnit, MySQL, ReactJS.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <i class='uil uil-chat-info projects__icon' ></i>
                        <h3 className="projects__title">Notified <br/> App</h3>
                    </div>
                    <span className="projects__button" onClick={() => setToggle(2)} >View More
                    <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggle === 2 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => setToggle(0)} ></i>
                            <h3 className="projects__modal-title">Notified App</h3>
                            <div className="projects__modal-subtitle">
                                <p className="projects__modal-description">
                                    Application to collaboratively manage and track career openings
                                </p>
                                <a href="https://github.com/Shreyanshsachan/Founding-Backend" target='_blank'><i class='bx bx-link-alt'></i></a>
                            </div>

                            <ul className="projects__modal-items grid">
                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        User authentication and account verification.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Opportunities can be posted & tracked on board layout.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Filter, search and customize functionalities.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Users get notified on every new job posting.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        TechStack: ReactJS, NodeJS, ExpressJs, MongoDB, SendGrid.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Projects