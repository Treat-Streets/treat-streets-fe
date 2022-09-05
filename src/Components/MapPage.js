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
					className="popup-wrapper"
					anchor='bottom'
					onClose={() => setSelectedHouse(false) }
				>
					<div className="popup-container">
						<h2 className="popup-address">{selectedHouse.streetAddress} <br></br> {selectedHouse.city}, {selectedHouse.state} {selectedHouse.zipcode}</h2>
						{/* <p className="popup-description">{selectedHouse.description}</p> */}
						<p className="popup-times">{selectedHouse.startTime} - {selectedHouse.endTime}</p>
						<p className="popup-scarinessLevel">Scariness Level: {selectedHouse.scarinessLevel}</p>
						<img className="popup-image" src={selectedHouse.image} alt='house image'/>
						<Link to={`/PopUp/${selectedHouse.id}`}>
							<button className="location-profile">View Full Profile</button>
						</Link>
					</div>
				</Popup>
				) : null}

				{properties}
			</ReactMapGL>
		</div>
	)
}

export default MapPage;