import './App.css'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MapPage from '../Components/MapPage.js'
import Nav from '../Components/Nav.js'
import RegisterForm from '../Components/RegisterForm.js'
import ThankYouPage from '../Components/ThankYouPage.js'
import LandingPage from '../Components/LandingPage.js'
import Loading from '../Components/Loading.js'
import AboutUs from '../Components/AboutUs.js'
import { useQuery, gql } from '@apollo/client'
import PopupPage from './PopupPage'
import NotFound from '../Components/NotFound.js'
import Safetytips from '../Components/SafetyTips.js'

export const GET_LOCATION = gql`
query Locations {
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

	const {data, loading} = useQuery(GET_LOCATION)

  return (
    <div className="App">
		<Switch>
			<Route exact path="/">
				<LandingPage />
			</Route>

			<Route exact path="/Register">
				<Nav />
				{loading && <Loading />}
				<RegisterForm />
			</Route>

			<Route exact path="/ThankYou">
				<Nav />
				{loading && <Loading />}
				{data && <ThankYouPage />}
			</Route>
			
			<Route exact path="/Map">
				<Nav />
				{loading && <Loading />}
				{data && <MapPage locationData={data.locations} />}
			</Route>

			<Route exact path="/SafetyTips">
				<Nav />
				<Safetytips />
			</Route>

			<Route exact path="/AboutUs">
				<Nav />
				<AboutUs />
			</Route>

			<Route exact path='/PopUp/:id'
				render={({ match }) => {
					const locationToRender = data.locations.find(location => 
						location.id === match.params.id
					)
				return <div> 
				<Nav />
				{data && <PopupPage {...locationToRender}/>}
				</div>
			}}
			/>

				<Route path="*" element={<NotFound />} > 
					<NotFound />
				</Route>
			</Switch>
    </div>
  )
}

export default App;
