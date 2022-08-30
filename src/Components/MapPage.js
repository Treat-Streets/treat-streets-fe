import React, {useState} from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
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

	// const [selectedHouse, setSelectedHouse] = useState(null)

	// const mappedLocations = locationData.map(location => {
	// 	return location.streetAddress
	// })

// 	useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//         container: mapContainer.current,
//         style: 'mapbox://styles/mapbox/streets-v11',
//         center: [lng, lat],
//         zoom: zoom
//     });
// });
	
	return (

		<div className="map-container">
			<ReactMapGL className="map"
				{...viewport}
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
				mapStyle="mapbox://styles/mapbox/dark-v10"
				onViewportChange={viewport => {
					setViewport(viewport)
				}}
			>
			<Marker 
				latitude={"39.671240"}
				longitude={"-105.016810"}
			>
				<button className="haunted-house-icon">
					<img className="haunted-house-icon" src="/hauntedhouse.svg" alt="Haunted House Icon"/>
				</button>
			</Marker>

			</ReactMapGL>
		</div>
	)
}

export default MapPage;