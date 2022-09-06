import React from 'react'
import loadingGif from '../assets/skeleton.gif'
import './Loading.css'

const Loading = () => {
	return (
		<div className="loading-container">
			<p className="loading-msg">Loading...</p>
			<img className="loading-gif" src={loadingGif}/>
		</div>
	)
}

export default Loading