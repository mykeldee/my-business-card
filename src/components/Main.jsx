import React from 'react'
import '../style.css'
import linkedin from '../assets/linkedin.png'
import email from '../assets/email.png'

const Main = () => {
  return (
    <main>
        <div className='main--title'>
            <h2 className='main--title_name'>Michael Dankyira</h2>
            <h3 className='main--title_role'>Frontend Developer</h3>
            <h4 className='main--title_web'>maikheldhee.website</h4>
        </div>

        <div className='main--links'>
            <div className='main--links_center'>
                <button className='btn--email'>
                    <img src={email}/>
                    Email
                </button>
                <button className='btn--linkedin'>
                    <img src={linkedin}/>
                    LinkedIn
                </button>
            </div>
        </div>

        <div className='main--details'>
        <div className='main--about'>
            <h2 className='about--title'>About</h2>
            <p className='about--info'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>

        <div className='main--interests'>
            <h2 className='interests--title'>Interests</h2>
            <p className='interests--info'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
        </div>

    </main>
  )
}

export default Main