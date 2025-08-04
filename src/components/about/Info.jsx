import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class='bx bx-briefcase-alt about__icon'></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle"> 2 Year 2 months Working</span>
            </div>

            <div className="about__box">
                <i class='bx bx-code-alt about__icon' ></i>
                <h3 className="about__title">Leetcode</h3>
                <span className="about__subtitle">70+ Solved</span>
            </div>
        </div>
    )
}

export default Info