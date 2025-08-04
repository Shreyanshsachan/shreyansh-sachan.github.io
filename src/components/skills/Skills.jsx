import React from 'react'
import './skills.css'
import Language from './Language'
import Data_AI from './Data_AI_Ecosystem'
import SDE from './Software_Engineering'
import Cloud_Infra from './Cloud_Infrastructure'
import EER from './Engineering_Execution_Reliability'
import OtherSkills from './Others'

const Skills = () => {
    return(
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Skills</span>

            <div className="skills__container container grid">
                <Language />
                <SDE />

                <Data_AI />
                <Cloud_Infra />

                <EER />
                <OtherSkills />
            </div>
            
        </section>
    )
}

export default Skills