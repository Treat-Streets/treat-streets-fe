import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ReactMapGL, { Marker, Popup, GeolocateControl, FullscreenControl, NavigationControl } from 'react-map-gl'
import '../Components/MapPage.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import PopupPage from './PopupPage';

const MapPage = ({ locationData }) => {

	// const [showPopup, setShowPopup] = useState(false);
	// const [lat, setLat] = useState('')
	// const [long, setLong] = useState('')
	// const [selectedHouse, setSelectedHouse] = useState(false)
	const [popupOpen, setPopupOpen] = useState({});

	const [viewport, setViewport] = useState({
		latitude: 39.7392,
		longitude: -104.9903, 
		width: "100vw", 
		height: "100vh",
		zoom: 10
	})

	// const handlePopUp = (lat, long) => {
	// 		setLat(Number(lat))
	// 		setLong(Number(long))
	// 		setShowPopup(true)
	// }

	const properties = locationData.map(location => {
		console.log(location.locationType)
		return (
			<Marker
				key={location.id}
				latitude={location.latitude}
				longitude={location.longitude}
			>
			<button className="haunted-house-icon" value={location.id} onClick={() => setPopupOpen({...popupOpen, [location.description]: true})}>
				<img className="haunted-house-icon" src="/hauntedhouse.svg" alt="Haunted House Icon"/>
			</button>
			
      {popupOpen[location.id] && (<Popup longitude={location.longitude} latitude={location.latitude}
        anchor="bottom"
        onClose={() => setPopupOpen(false)}>
        <div>
					<h2>{location.latitude}</h2>
				</div>
      </Popup>)}
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