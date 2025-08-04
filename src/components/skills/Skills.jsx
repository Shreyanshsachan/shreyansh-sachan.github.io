import React from 'react'
import './skills.css'
import Programming from './Programming'
import Backend from './Technologies'
import DbCloud from './DbCloud'

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