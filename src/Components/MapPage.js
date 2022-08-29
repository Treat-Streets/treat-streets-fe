import React from 'react'
import '../Components/MapPage.css'

const MapPage = ({locationData}) => {

	let mappedLocations = locationData.map(location => {
		return location.streetAddress
	})
	
	return (
		<div>
			<h2>Im the Map Page!</h2>
			<p>{mappedLocations}</p>
		</div>
	)
}

export default MapPage;