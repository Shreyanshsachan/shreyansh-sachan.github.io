import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <div className="footer__title"><span> ☺ </span>Shreyansh Sachan</div>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://github.com/Shreyanshsachan" className="footer__social-link" target='_blank'>
                    <i class="bx bxl-github"></i>
                </a>
                <a href="https://leetcode.com/u/shreytic99/" className="footer__social-link" target='_blank'>
                    <i class="bx bx-code-alt"></i>    
                </a>
                <a href="https://linkedin.com/in/shreyansh-sachan-37653818b/" className="footer__social-link" target='_blank'>
                    <i class="bx bxl-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/shreey_ansh/" className="footer__social-link" target='_blank'>
                    <i class="bx bxl-instagram-alt"></i>
                </a>
                <a href="mailto:shrey.sachan20@gmail.com" className="footer__social-link" target='_blank'>
                    <i class="bx bxl-gmail"></i>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer