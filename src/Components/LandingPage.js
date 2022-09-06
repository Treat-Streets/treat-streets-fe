import React from 'react'
import { Link } from 'react-router-dom';
import '../Components/LandingPage.css'
import landingImage from '../assets/loadingGif.gif'

const LandingPage = () => {
	return (
		<div className="landing-page-wrapper">
			<div className="landing-page-container">

				<section className="landing-page-left">
					<img className="landing-image" src={landingImage} alt="landing image"/>
				</section>

				<section className="landing-page-right">
					<h2 className="welcome-header">TR
						<span className='flicker-slow'>E</span>A
						<span className='flicker-fast'>T</span> ST
						<span className='flicker-slow'>R</span>EE
						<span className='flicker-fast'>T</span>S
					</h2>
					<p>You can find houses passing out candy for Halloween in your area or add your home to the treat streets map.</p>
					<section className="landing-page-buttons-container">
						<Link to='/Register'>
							<button className="landing-button">Register<br></br> Your House</button>
						</Link>
						<Link to='/Map'>
							<button className="landing-button">View<br></br> Treat Streets</button>
						</Link>
					</section>
				</section>
			</div>
		</div>
	)
}

export default LandingPage;