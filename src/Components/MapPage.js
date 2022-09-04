import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactMapGL, { Marker, GeolocateControl, FullscreenControl, NavigationControl } from 'react-map-gl'
import '../Components/MapPage.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import halloweenGif from '../assets/halloween.gif'

const MapPage = ({ locationData }) => {

	const [viewport, setViewport] = useState({
		latitude: 39.7392,
		longitude: -104.9903, 
		width: "100vw", 
		height: "100vh",
		zoom: 10
	})

	const properties = locationData.map(location => {
		return (
			<Marker
				key={location.id}
				latitude={location.latitude}
				longitude={location.longitude}
			>
			<Link to={`/PopUp/${location.id}`}>
				<button className="haunted-house-icon">
					<img className="haunted-house-icon" src="/hauntedhouse.svg" alt="Haunted House Icon"/>
				</button>
			</Link>
			</Marker>
		) 
	})

	return (
		<div className="map-container">
			{/* <img className="halloween-image" src={halloweenGif} alt="halloween image" /> */}
			<ReactMapGL className="map"
				{...viewport}
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
				mapStyle="mapbox://styles/mapbox/dark-v10"
				onMove={evt => setViewport(evt.viewport)}
			>
			<GeolocateControl/>
			<FullscreenControl />
			<NavigationControl showCompass={false}/>
				{properties}
			</ReactMapGL>
		</div>
	)
}

export default MapPage;