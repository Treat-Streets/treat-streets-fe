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

	const GET_LOCATION = gql`
	query {
		locations {
			streetAddress
			city
			state
			zipcode
			locationType
			scarinessLevel
			description
			startTime
			endTime
			image
			latitude
			longitude
		}
	}
	`

	const {error, data, loading} = useQuery(GET_LOCATION)


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
				{data && <MapPage locationData={data.locations} />}
			</Route>

    </div>
  )
}

export default App;
