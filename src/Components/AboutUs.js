import React from 'react'
import '../Components/AboutUs.css'
import pumpkin from '../assets/pumpkinCat.webp'

const AboutUs = () => {
  return (
    <div className='about'>
      <p className='title'>About Us</p>
      <section className='app-description'>
        <img className="pumpkin" src={pumpkin} alt="moving pumpkin"/>
        <p className='description'>When the spooky night of Halloween comes around it can be hard to know which houses in which neighborhoods will have lights on and be giving out candy. Treat Streets was created to help parents and adults know where to take kids Trick-or-Treating. Our map helps you know which houses are participating in giving out candy in your area. Avoid aimless walking down streets with few lights on by using Treat Streets to know before hand which neighborhoods will many houses particicpating!</p>
      </section>
      <p className='title'>Meet The Team</p>
    </div>
  )
}

export default AboutUs