import React, { useState } from 'react'
import '../Components/ThankYouPage.css'
import ReactMapGL, { Marker } from 'react-map-gl'

const ThankYouPage = ({ locationData }) => {
	const [viewport] = useState({
		latitude: locationData[locationData.length -1].latitude,
		longitude: locationData[locationData.length -1].longitude,
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
							latitude={locationData[locationData.length -1].latitude}
							longitude={locationData[locationData.length -1].longitude}
						>
							<button className="haunted-house-icon">
								<img className="haunted-house-icon" src="/hauntedhouse.svg" alt="Haunted House Icon"/>
							</button>
						</Marker>
					</ReactMapGL>
				</div>
			</div>
		</div>
	)
}

export default ThankYouPage;