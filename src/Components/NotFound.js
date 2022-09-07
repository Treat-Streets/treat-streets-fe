import React from 'react'
import '../Components/NotFound.css'
import Nav from "./Nav.js"
import ghostGif from '../assets/ghost.gif'

const NotFound = () => {
  return (
	<div className="no-info">
      <Nav />
      <h1> Uh oh... 404 Error! </h1>
      <h3> Looks like this page ghosted you. Please go back home, or check out our Treat Streets Map! </h3>
      <img className="ghost-gif" src={ghostGif}/>
	</div>
  )
}

export default NotFound;