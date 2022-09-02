import React, { useState } from 'react'
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

	const [selectedHouse, setSelectedHouse] = useState({})
	
	console.log(selectedHouse)
	const properties = locationData.map(location => {
		// console.log(location)
		return (
			<Marker
				key={location.id}
				latitude={location.latitude}
				longitude={location.longitude}
			>
			<button 
				className="haunted-house-icon"
				onClick={e => {
					e.preventDefault()
					setSelectedHouse(location)
				}}>
					{selectedHouse.id === location.id ? (
						<Popup latitude={selectedHouse.latitude} longitude={selectedHouse.longitude}
							anchor='bottom'
							onClose={() => setSelectedHouse(false) }
						>
							<div>
								TEST
							</div>
						</Popup>
					) : null}

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
				{properties}
			<GeolocateControl/>
			<FullscreenControl />
			<NavigationControl showCompass={false}/>
			</ReactMapGL>
		</div>
	)
}

export default MapPage;