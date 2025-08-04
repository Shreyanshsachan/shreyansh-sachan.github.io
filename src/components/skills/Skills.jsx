import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import DbCloud from './DbCloud'
import CyberSec from './CyberSec'
import Programming from './Programming'
import OtherSkills from './Others'

const Skills = () => {
    return(
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Skills</span>

            <div className="skills__container container grid">
                <Backend />
                <DbCloud />

                <Programming />
                <OtherSkills />
            </div>
            
        </section>
    )
}

export default Skills