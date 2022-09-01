import './App.css'
import React, {useState} from 'react'
import { Route } from 'react-router-dom'
import Header from '../Components/Header.js'
import MapPage from '../Components/MapPage.js'
import Nav from '../Components/Nav.js'
import RegisterForm from '../Components/RegisterForm.js'
import ThankYouPage from '../Components/ThankYouPage.js'
import ZipCodeForm from '../Components/ZipCodeForm.js'
import LandingPage from '../Components/LandingPage.js'
import Loading from '../Components/Loading.js'
import { useQuery, gql } from '@apollo/client'

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
`;

const App = () => {

	const {error, data, loading} = useQuery(GET_LOCATION)

  return (
    <div className="App">
			<Header />

			<Route exact path="/">
				<LandingPage />
			</Route>

			<Route exact path="/Register">
				<Nav />
				<RegisterForm />
			</Route>

			<Route exact path="/ThankYou">
				<Nav />
				{data && <ThankYouPage locationData={data.locations}/>}
			</Route>
			
			<Route exact path="/Map">
				<Nav />
				<ZipCodeForm />
				{loading && <Loading />}
				{data && <MapPage locationData={data.locations} />}
			</Route>

    </div>
  )
}

export default App;
