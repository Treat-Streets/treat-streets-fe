import React, { useState } from 'react'
import '../Components/ThankYouPage.css'
import ReactMapGL, { Marker } from 'react-map-gl'

const ThankYouPage = ({locationData}) => {

	const [viewport, setViewport] = useState({
		latitude: 39.7392,
		longitude: -104.9903, 
		width: "100vw", 
		height: "100vh",
		zoom: 10
	})


	return (
		<div className="map-container">
			<h2> Thank you for registering your house! </h2>
			<ReactMapGL className="map"
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
	)
}

export default ThankYouPage;