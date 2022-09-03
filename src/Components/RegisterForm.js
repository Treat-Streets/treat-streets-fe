import React, { useState, useEffect } from 'react'
import '../Components/RegisterForm.css'
import { gql, useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import {GET_LOCATION} from './App.js'


const CREATE_LOCATION = gql`
	mutation CreateLocation($email: String!, $streetAddress: String!, $city: String!, $state: String!, $zipcode: String!, $locationType: String!, $scarinessLevel: Int!, $description: String, $startTime: String!, $endTime: String!, $image: String) {
		createLocation(input: {
			email: $email,
			streetAddress: $streetAddress,
			city: $city,
			state: $state,
			zipcode: $zipcode,
			locationType: $locationType,
			scarinessLevel: $scarinessLevel,
			description: $description,
			startTime: $startTime,
			endTime: $endTime,
			image: $image
		}) {
			location {
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
	}	
`;

const RegisterForm = () => {
	const [email, setEmail] = useState('')
	const [streetAddress, setStreetAddress] = useState('')
	const [city, setCity] = useState('')
	const [state, setState] = useState('')
	const [zipcode, setZipcode] = useState('')
	const [locationType, setLocationType] = useState('')
	const [startTime, setStartTime] = useState('')
	const [endTime, setEndTime] = useState('')
	const [image, setImage] = useState('')
	const [scarinessLevel, setScarinessLevel] = useState(1)
	const [description, setDescription] = useState('')
	const [url, setUrl ] = useState("");

	const [createLocation, {data, loading, error}] = useMutation(CREATE_LOCATION, {
		variables: {
			email: email,
			streetAddress: streetAddress,
			city: city,
			state: state,
			zipcode: zipcode,
			locationType: locationType,
			startTime: startTime,
			endTime: endTime,
			image: url,
			scarinessLevel: scarinessLevel,
			description: description
		},
		refetchQueries: [{query: GET_LOCATION}]
	})

	const RegisterButton = () => {
		if(email && streetAddress && city && state && zipcode && locationType && startTime && endTime && scarinessLevel && description && url) {
			return <button className="register" onClick={event => handleClick(event)}> Register House! </button>
		} else {
			return <button className="register" onClick={event => handleClick(event)} disabled> Register House! </button>
		}
	}

	const uploadImage = (event) => {
		const data = new FormData()
		let file = event.target.files[0];
		data.append("file", file)
		data.append("upload_preset", "treat_streets")
		data.append("cloud_name","drexo2l5j")
		fetch("https://api.cloudinary.com/v1_1/drexo2l5j/image/upload",{
			method:"POST",
			body: data
		})
		.then(resp => resp.json())
		.then(data => {
			setUrl(data.url)
		})
		.catch(err => console.log(err))
	}

	const handleClick = (event) => {
		event.preventDefault();
		createLocation().then((res) => {
			clearForm();
			history.push({
				pathname: '/ThankYou',
				state: {
					longitude: res.data.createLocation.location.longitude,
					latitude: res.data.createLocation.location.latitude
				}
			})
		})

		uploadImage();
	}

	const history = useHistory()


	//The useHistory hook allows us to access React Router's history object.
	// Through the history object, we can access and manipulate the current state of the browser history.
	//basically sets the values of the object associated with the URL endpoint and push that into the history array


	const clearForm = () => {
		setEmail('')
		setStreetAddress('')
		setCity('')
		setState('')
		setZipcode('')
		setLocationType('')
		setStartTime('')
		setEndTime('')
		setImage('')
		setScarinessLevel(1)
		setDescription('')
	}


	return (
		<div className='form-wrapper'>
			<div className="register-form-container">
				<section className="message-section">
					<h2 className='form-title'>Register to Treat Streets</h2>
					<p className='form-description'>Fill out this form to let your Denver area neighbors know you are passing out candy for Halloween!</p>	
				</section>

				<section className="house-form-section">
					<form className='house-form'>
						<input 
							name="email"
							placeholder="Enter email here"
							type="text"
							value={email}
							onChange={event => setEmail(event.target.value)}
						/>
						<input
							name="streetAddress"
							placeholder="Enter address"
							value={streetAddress}
							type="text"
							onChange={event => setStreetAddress(event.target.value)}
						/>
						<input
							name="city"
							placeholder="Enter city"
							value={city}
							type="text"
							onChange={event => setCity(event.target.value)}
						/>
						<input
							name="state"
							placeholder="Enter state"
							value={state}
							type="text"
							onChange={event => setState(event.target.value)}
						/>
						<input
							name="zipcode"
							placeholder="Enter zipcode"
							value={zipcode}
							type="text"
							onChange={event => setZipcode(event.target.value)}
						/>
						<select name="locationType" id="locationType" onChange={event => setLocationType(event.target.value)} value={locationType}>
							<option value="" disabled selected> Select Property Type </option>
							<option value="house">House</option>
							<option value="condo">Condo</option>
							<option value="townhome">Townhome</option>
							<option value="apartment">Apartment</option>
							<option value="business">Business</option>
						</select>
						<select name="startTime" id="startTime" onChange={event => setStartTime(event.target.value)} value={startTime}>
							<option value="" disabled selected>Choose a Start Time</option>
							<option value="4:00 pm">4:00 pm</option>
							<option value="5:00 pm">5:00 pm</option>
							<option value="6:00 pm">6:00 pm</option>
						</select>
						<select name="endTime" id="endTime" onChange={event => setEndTime(event.target.value)} value={endTime}>
							<option value="" disabled selected>Choose an End Time</option>
							<option value="6:00 pm">6:00 pm</option>
							<option value="7:00 pm">7:00 pm</option>
							<option value="8:00 pm">8:00 pm</option>
						</select>
						<input
							name="description"
							placeholder="Tell us about your house!"
							type="text"
							value={description}
							onChange={event => setDescription(event.target.value)}
						/>
						<div className="slidecontainer">
  						<input 
							type="range"
							min="1" 
							max="10" 
							class="slider" 
							id="myRange"
							value={scarinessLevel}
							onChange={event => setScarinessLevel(event.target.valueAsNumber)}
							/>
						</div>
						<p className="scarylevel">Scariness Level: {scarinessLevel}</p>
						<div className="img-upload-container">
							<input 
								className="upload"
								name="image"
								type="file"
								title="Choose file"
								style={{color: "#6652BD"}}
								value={image}
								onChange={event => uploadImage(event)}
							/>
							{url ? <p className="upload-complete"> 👻 Upload Complete 👻</p> : <p className="upload-complete"> ...Waiting 👻 </p>}
						</div>
						<RegisterButton/>
					</form>
				</section>
			</div>
		</div>
	)
}

export default RegisterForm;