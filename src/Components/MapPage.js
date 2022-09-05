import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ReactMapGL, { Marker, Popup, GeolocateControl, FullscreenControl, NavigationControl } from 'react-map-gl'
import '../Components/MapPage.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import PopupPage from './PopupPage';

const MapPage = ({ locationData }) => {

	const [viewport, setViewport] = useState({
		latitude: 39.7392,
		longitude: -104.9903, 
		width: "100vw", 
		height: "100vh",
		zoom: 10
	})

	const [selectedHouse, setSelectedHouse] = useState({})

	const properties = locationData.map(location => {
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
						e.stopPropagation()
						setSelectedHouse(location)
					}}>
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

			{selectedHouse.id ? (
				<Popup latitude={selectedHouse.latitude} longitude={selectedHouse.longitude}
					anchor='bottom'
					onClose={() => setSelectedHouse(false) }
				>
					<div>{selectedHouse.streetAddress}</div>
					<div>{selectedHouse.city}</div>
					<div>{selectedHouse.state}</div>
					<div>{selectedHouse.zipcode}</div>
					<div>{selectedHouse.description}</div>
					<div>{selectedHouse.startTime}</div>
					<div>{selectedHouse.endTime}</div>
					<div>{selectedHouse.scarinessLevel}</div>
					<div>{selectedHouse.image}</div>
					<Link to={`/PopUp/${selectedHouse.id}`}>
						<button className="location-profile">View Full Profile</button>
					</Link>
				</Popup>
				) : null}

				{properties}
			</ReactMapGL>
		</div>
	)
}

export default MapPage;