import './App.css'
import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../Components/Header.js'
import MapPage from '../Components/MapPage.js'
import Nav from '../Components/Nav.js'
import RegisterForm from '../Components/RegisterForm.js'
import ThankYouPage from '../Components/ThankYouPage.js'
import ZipCodeForm from '../Components/ZipCodeForm.js'
import LandingPage from '../Components/LandingPage.js'
import { useQuery, gql } from '@apollo/client'

const App = () => {

	const GET_LOCATIONS = gql`
		query GetLocations {
			locations {
				user_id
				email
				street_address
				city
				state
				zipcode
				location_type
				scariness_level
				description
				start_time
				end_time
				image
			}
		}	
	`;
	
  return (
    <div className="App">
			<Nav />
			<Header />

			<Route exact path="/">
				<LandingPage />
			</Route>

			<Route exact path="/Register">
				<RegisterForm />
			</Route>

			<Route exact path="/ThankYou">
				<ThankYouPage />
			</Route>
			
			<Route exact path="/Map">
				<ZipCodeForm />
				<MapPage />
			</Route>

    </div>
  )
}

export default App;
