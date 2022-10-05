import React from 'react'
import '../Components/Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
	return (
		<div className="nav-bar">
			<NavLink exact to="/">
				<h2 className="nav-link">Home</h2>
			</ NavLink> 
			<NavLink to="/Register">
				<h2 className="nav-link">Register</h2>
			</ NavLink>
			<NavLink to="/Map">
				<h2 className="nav-link">Map</h2>
			</ NavLink>
			<NavLink to="/SafetyTips">
				<h2 className="nav-link">Safety Tips</h2>
			</ NavLink>
			<NavLink to="/AboutUs">
				<h2 className="nav-link">About</h2>
			</ NavLink>
		</div>
	)
}

export default Nav;