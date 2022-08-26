import React from 'react'
import { Link } from 'react-router-dom';
import '../Components/LandingPage.css'

const LandingPage = () => {
	return (
		<div>
			<section>
				<p>
				Welcome to Treat Streets!<br></br>You can find houses passing out candy for Halloween in your area or add your home to the treat streets map.
				</p>
			</section>
			<section>
				<Link to='/Register'>
					<button>Register Your House</button>
				</Link>
				<Link to='/Map'>
					<button>View Treat Streets</button>
				</Link>
			</section>
		</div>
	)
}

export default LandingPage;