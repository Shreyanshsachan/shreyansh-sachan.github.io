import React, { useState } from 'react'
import './header.css'

const Header = () => {

    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header")
        if(this.scrollY >= 80)
            header.classList.add("scroll-header")
        else
            header.classList.remove("scroll-header")
    });

    const[toggle, setToggle] = useState(false);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo"> 
                <span> ☺ </span>Shreyansh Sachan
                </a>
                
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link">
                                <i className="uil uil-image-check nav__icon"></i> Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualification" className="nav__link">
                                <i className="uil uil-bag nav__icon"></i> Qualification
                            </a>
                        </li>
                        <i class="uil uil-times nav__close" onClick={() => setToggle(!toggle)}></i>
                    </ul>
                </div>
                <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header