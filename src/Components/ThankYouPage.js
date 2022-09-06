import React, { useState } from 'react'
import '../Components/ThankYouPage.css'
import ReactMapGL, { Marker } from 'react-map-gl'
import mapboxgl from '!mapbox-gl'
import { useLocation, Link } from 'react-router-dom'

const ThankYouPage = ({ locationData }) => {

	const location = useLocation();
	console.log(useLocation())

	//returns object from the current URL so we can access its state

	const lat = location.state.latitude;
	const long = location.state.longitude;
	const [viewport] = useState({
		latitude: lat,
		longitude: long,
		width: "100vw", 
		height: "100vh",
		zoom: 15
	})

	return (
		<div className="map-wrapper">
			<div className="small-map-container">
				<h2 className='thank-you-msg'> Thank you for registering your house! </h2>
				<div className="small-map" >
					<ReactMapGL 
						{...viewport}
						mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
						mapStyle="mapbox://styles/mapbox/dark-v10"
					>
						<Marker
							key={Date.now()}
							latitude={lat}
							longitude={long}
						>
							<button className="haunted-house-icon">
								<img data-cy="single-house" className="haunted-house-icon" src="/hauntedhouse.svg" alt="Haunted House Icon"/>
							</button>
						</Marker>
					</ReactMapGL>
					<Link to="/Map"><button className="view-map-button">View Full Map</button></Link>
				</div>
			</div>
		</div>
	)
}

export default ThankYouPage;