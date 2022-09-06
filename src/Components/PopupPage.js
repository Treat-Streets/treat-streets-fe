import React, {useState, useEffect} from 'react'
import './PopupPage.css'
import { Link } from 'react-router-dom'

const PopupPage = ({ id, streetAddress, city, state, zipcode, description, startTime, endTime, scarinessLevel, image }) => {
  
	// const [currentLocation, setCurrentLocation] = useState({
	// 	id: {id},
	// 	streetAddress: {streetAddress},
	// 	description: {description},
	// 	startTime: {startTime},
	// 	endTime: {endTime}, 
	// 	scarinessLevel: {scarinessLevel},
	// 	image: {image}
	// })

	// useEffect(() => {
	// 	window.localStorage.setItem('location information', JSON.stringify({...currentLocation}))
	// })

	
	return (
    <div className="popup-page-wrapper">
			<div className="popup-page-container">
			<p className="popup-page-address" >{streetAddress} {city} {state} {zipcode}</p>
			<p className="popup-page-times">🍬 Passing out candy from {startTime} to {endTime} 🍬</p>
			<p className="popup-page-description" >{description}</p>
			<p className="popup-page-scariness-level">Scariness Level: {scarinessLevel} 👻</p>
			<img className="popup-page-image" src={image} alt='house decor image'/>
			<Link to='/Map'>
					<button className="back-button">Back to<br></br>Treat Streets Map</button>
			</Link>
    </div>
	</div>
  )
}

export default PopupPage