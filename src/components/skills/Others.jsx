import React from 'react'

const OtherSkills = () => {
  return (
    <div className="skills__content">
            <h3 className="skills__title">Others</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Docker</h3>
                            <span className="skills__level">Acquainted</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level">WellAcquainted</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Kubernetes</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">CI/CD</h3>
                            <span className="skills__level">Acquainted</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Figma</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">AgileScrum</h3>
                            <span className="skills__level">WellAcquainted</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default OtherSkills