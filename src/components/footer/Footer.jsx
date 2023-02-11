import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a className='footer__logo' href="#">Alon Levy</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a target="_blank" href="https://www.facebook.com/alon.levy.79/"><FaFacebookF /></a>
        <a target="_blank" href="https://github.com/Alonlevy5/"><AiFillGithub /></a>
        <a target="_blank" href="https://www.linkedin.com/in/alon-levy-bb3759176/"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        {/* <small>&copy; A.L 23</small> */}
      </div>
    </footer>
  )
}

export default Footer