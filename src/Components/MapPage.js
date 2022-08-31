import React, {useState, useEffect} from 'react'
import ReactMapGL, { Marker, Popup, GeolocateControl, FullscreenControl, NavigationControl } from 'react-map-gl'
import '../Components/MapPage.css'
import 'mapbox-gl/dist/mapbox-gl.css';

const MapPage = ({locationData}) => {

	const [viewport, setViewport] = useState({
		latitude: 39.7392,
		longitude: -104.9903, 
		width: "100vw", 
		height: "100vh",
		zoom: 10
	})

const properties = locationData.map(location => {
	console.log(location)
	return (
		<Marker
			key={Date.now()}
			latitude={location.latitude}
			longitude={location.longitude}
		>
		<button className="haunted-house-icon">
			<img className="haunted-house-icon" src="/hauntedhouse.svg" alt="Haunted House Icon"/>
		</button>
		</Marker>
	) 
})

	return (
		<div className="map-container">
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