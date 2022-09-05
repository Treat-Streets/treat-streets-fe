import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ReactMapGL, { Marker, GeolocateControl, FullscreenControl, NavigationControl } from 'react-map-gl'
import '../Components/MapPage.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import { useQuery, gql } from '@apollo/client'

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
			<Link to={`/PopUp/${location.id}`}>
				<button className="haunted-house-icon">
					<img className="haunted-house-icon" src="/hauntedhouse.svg" alt="Haunted House Icon"/>
				</button>
			</Link>
			</Marker>
		) 
	})

	return (
		<div className="view-full-map">
			<form className='zip-form'>
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
			</form>
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
		</div>
	)
}

export default MapPage;