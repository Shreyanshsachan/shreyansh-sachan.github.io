import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {

    const [toggle, setToggle] = useState(1);
    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggle === 1 ? "qualification__active qualification__button button--flex" : "qualification__button button--flex"} onClick={() => setToggle(1)} >
                        <i className="uik uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className={toggle === 2 ? "qualification__active qualification__button button--flex" : "qualification__button button--flex"} onClick={() => setToggle(2)} >
                        <i className="uik uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggle === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelor's Degree</h3>
                                <span className="qualification__subtitle"> SRM Institute of Science and Technology - KTR Chennai</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2019 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Higher Secondary School</h3>
                                <span className="qualification__subtitle">Sir Padamphat Singhania Education Centre - CBSE</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2017 - 2018
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Secondary School</h3>
                                <span className="qualification__subtitle">Heliger Borden Education Centre - ICSE</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2015 - 2016
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={toggle === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Engineer</h3>
                                <span className="qualification__subtitle">L&T Technology Services Limited - Navi Mumbai</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    Dec 2023 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Internship (AWS Intern)</h3>
                                <span className="qualification__subtitle"> F13 Technologies</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    Sep 2022 - Nov 2022
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification