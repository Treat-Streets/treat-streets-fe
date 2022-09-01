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
	const [image, setImage ] = useState("");
	const [ url, setUrl ] = useState("");

	const uploadImage = () => {
		const data = new FormData()
		data.append("file", image)
		data.append("upload_preset", "treat_street")
		data.append("cloud_name","drexo2l5j")
		fetch("  https://api.cloudinary.com/v1_1/drexo2l5j/image/upload",{
		method:"post",
		body: data
		})
		.then(resp => resp.json())
		.then(data => {
		setUrl(data.url)
		})
		.catch(err => console.log(err))
	}

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
