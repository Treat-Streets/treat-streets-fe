import './App.css'
import React, {useState} from 'react'
import { Route } from 'react-router-dom'
import MapPage from '../Components/MapPage.js'
import Nav from '../Components/Nav.js'
import RegisterForm from '../Components/RegisterForm.js'
import ThankYouPage from '../Components/ThankYouPage.js'
import ZipCodeForm from '../Components/ZipCodeForm.js'
import LandingPage from '../Components/LandingPage.js'
import Loading from '../Components/Loading.js'
import { useQuery, gql } from '@apollo/client'
import PopupPage from './PopupPage'

const GET_LOCATION = gql`
query {
	locations {
		id
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
		
			<Route exact path="/">
				<LandingPage />
			</Route>

			<Nav />

			<Route exact path="/Register">
				<RegisterForm />
			</Route>

			<Route exact path="/ThankYou">
				{data && <ThankYouPage locationData={data.locations}/>}
			</Route>
			
			<Route exact path="/Map">
				<ZipCodeForm />
				{loading && <Loading />}
				{data && <MapPage locationData={data.locations} />}
			</Route>

			<Route path='/PopUp/:id' render={({ match }) => 
				<PopupPage id={match.params['id']}/>}>
			</Route>

    </div>
  )
}

export default App;
