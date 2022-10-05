import React from 'react'
import '../Components/AboutUs.css'
import pumpkin from '../assets/pumpkinCat.webp'
import Thomas from '../assets/Thomas.jpeg'
import Megan from '../assets/Megan.jpeg'
import Corinne from '../assets/Corinne.jpeg'
import Andrew from '../assets/Andrew.jpeg'
import Amanda from '../assets/Amanda.jpeg'
import Victoria from '../assets/Victoria.jpeg'
import Tyler from '../assets/Tyler.png'

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
          <img className="headshot" src={Megan} alt="Thomas"/>
          <a href="https://www.linkedin.com/in/megan-schuetz/" target="_blank" className='name'>Megan Schuetz</a>
          <p className='team'>Front End Team</p>
        </div>
        <div>
          <img className="headshot" src={Corinne} alt="Thomas"/>
          <a href="https://www.linkedin.com/in/corinnecanavan/" target="_blank" className='name'>Corinne Canavan</a>
          <p className='team'>Front End Team</p>
        </div>
        <div>
          <img className="headshot" src={Amanda} alt="Thomas"/>
          <a href="https://www.linkedin.com/in/amanda-sands1/" target="_blank" className='name'>Amanda Sands</a>
          <p className='team'>Front End Team</p>
        </div>
        <div>
          <img className="headshot" src={Victoria} alt="Thomas"/>
          <a href="https://www.linkedin.com/in/victoria-fox-collis/" target="_blank" className='name'>Victoria Fox-Collis</a>
          <p className='team'>Front End Team</p>
        </div>
				<div>
          <img className="headshot" src={Thomas} alt="Thomas"/>
          <a href="https://www.linkedin.com/in/thomas-haines-9b93451a0/" target="_blank" className='name'>Thomas Haines</a>
          <p className='team'>Back End Team</p>
        </div>
				<div>
          <img className="headshot" src={Andrew} alt="Thomas"/>
          <a href="https://www.linkedin.com/in/andrewkingdev/" target="_blank" className='name'>Andrew King</a>
          <p className='team'>Back End Team</p>
        </div>
        <div>
          <img className="headshot" src={Tyler} alt="Thomas"/>
          <a href="https://www.linkedin.com/in/tyler-ross-0b206122b/" target="_blank" className='name'>Tyler Ross</a>
          <p className='team'>Back End Team</p>
        </div>
        
      </section>
    </div>
  )
}

export default AboutUs