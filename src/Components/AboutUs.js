import React from 'react'
import '../Components/AboutUs.css'
import pumpkin from '../assets/pumpkinCat.webp'
import Thomas from '../assets/Thomas.jpeg'
import Megan from '../assets/Megan.jpeg'
import Corinne from '../assets/Corinne.jpeg'
import Andrew from '../assets/Andrew.jpeg'
import Amanda from '../assets/Amanda.jpeg'
import Victoria from '../assets/Victoria.jpeg'

const AboutUs = () => {
  return (
    <div className='about'>
      <p className='title'>About Us</p>
      <section className='app-description'>
        <img className="pumpkin" src={pumpkin} alt="moving pumpkin"/>
        <p className='description'>When the spooky night of Halloween comes around it can be hard to know which houses in which neighborhoods will have lights on and be giving out candy. Treat Streets was created to help parents and adults know where to take kids Trick-or-Treating. Our map helps you know which houses are participating in giving out candy in your area. Avoid aimless walking down streets with few lights on by using Treat Streets to know before hand which neighborhoods will many houses particicpating!</p>
      </section>
      <p className='title'>Meet The Team</p>
      <section className='team-mems'>
        <div>
          <img className="headshot" src={Thomas} alt="Thomas"/>
          <p className='name'>Thomas Haines</p>
          <p className='team'>Back End Team</p>
        </div>
        <div>
          <img className="headshot" src={Megan} alt="Thomas"/>
          <p className='name'>Megan Schuetz</p>
          <p className='team'>Front End Team</p>
        </div>
        <div>
          <img className="headshot" src={Corinne} alt="Thomas"/>
          <p className='name'>Corinne Canavan</p>
          <p className='team'>Front End Team</p>
        </div>
        <div>
          <img className="headshot" src={Andrew} alt="Thomas"/>
          <p className='name'>Andrew King</p>
          <p className='team'>Back End Team</p>
        </div>
        <div>
          <img className="headshot" src={Amanda} alt="Thomas"/>
          <p className='name'>Amanda Sands</p>
          <p className='team'>Front End Team</p>
        </div>
        <div>
          <img className="headshot" src={Victoria} alt="Thomas"/>
          <p className='name'>Victoria Fox-Collins</p>
          <p className='team'>Front End Team</p>
        </div>
        
      </section>
    </div>
  )
}

export default AboutUs