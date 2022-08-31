import React from 'react'
import loadingGif from '../assets/pumpkin.gif'

const Loading = () => {
	return (
		<div className="loading-container">
			<p>Loading...</p>
			<img className="loading-gif" src={loadingGif}/>
		</div>
	)
}

export default Loading