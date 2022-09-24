import React from 'react'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'
import '../style.css'

const Footer = () => {
  return (
    <div className='footer--img'>
      <img src={facebook} alt="Facebook" />
      <img src={twitter} alt="Twitter" />
      <img src={instagram} alt="Instagram" />
      <img src={github} alt="github" />
    </div>
  )
}

export default Footer