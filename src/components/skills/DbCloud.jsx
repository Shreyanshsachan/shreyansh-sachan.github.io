import React from 'react'

const DbCloud = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Database & Cloud</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">MySQL</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">SQLAlchemy</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Stored Procedure</h3>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Redis</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">AWS</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DbCloud