import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ReactMapGL, { Popup, Marker, GeolocateControl, FullscreenControl, NavigationControl } from 'react-map-gl'
import mapboxgl from '!mapbox-gl'
import '../Components/MapPage.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import { useQuery, gql } from '@apollo/client'

// mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const GET_LATLONG = gql`
	query Coordinates($zipcode: String!) {
		coordinates(zipcode: $zipcode) {
			latitude
			longitude
			errors
	}
}`;

const MapPage = ({ locationData }) => {
	
	const [zipcode, setZipcode] = useState('')
	const [viewport, setViewport] = useState({
		latitude: 39.7392,
		longitude: -104.9903, 
		width: "100vw", 
		height: "100vh",
		zoom: 10
	})


	const [selectedHouse, setSelectedHouse] = useState({})

	const {data} = useQuery(GET_LATLONG, {
		variables: {
			zipcode: zipcode,
		}
	})


	const handleClick = (event) => {
		event.preventDefault();
		setViewport({
			latitude: data.coordinates.latitude,
			longitude: data.coordinates.longitude,
			zoom: 11
		})
		clearForm()
	}

	const clearForm = () => {
		setZipcode('')
	}

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
					setViewport({
						latitude: location.latitude,
						longitude: location.longitude,
					})
				}}>
				<img data-cy="location-pin" className="haunted-house-icon" src="/hauntedhouse.svg" alt="Haunted House Icon"/>
			</button>
			</Marker>
		) 
	})

	return (
		<div className="view-full-map">
			<div className='zip-form'>
				<input
					className="zipcode" 
					name="zipcode"
					placeholder="Zipcode"
					value={zipcode}
					onChange={event => {
						setZipcode(event.target.value)
					}}
					/>
				<button className="search" disabled={!zipcode} onClick={event => handleClick(event)}>Search</button>
			</div>
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
		</div>
	)
}

export default MapPage;