import React, { useState } from 'react'
import '../Components/RegisterForm.css'
import { gql, useMutation } from '@apollo/client'

const CREATE_LOCATION = gql`
	mutation CreateLocation($email: String!, $streetAddress: String!, $city: String!, $state: String!, $zipcode: Int!, $locationType: String!, $scarinessLevel: Int!, $description: String, $startTime: String!, $endTime: String!, $image: String) {
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
			}
		}
	}	
`;

const RegisterForm = () => {
	const [email, setEmail] = useState('')
	const [address, setAddress] = useState('')
	const [propertyType, setPropertyType] = useState('')
	const [startTime, setStartTime] = useState('')
	const [endTime, setEndTime] = useState('')
	const [image, setImage] = useState('')
	const [scarinessLevel, setScarinessLevel] = useState(0)
	const [description, setDescription] = useState('')

	const [createLocation, {data, loading, error}] = useMutation(CREATE_LOCATION, {
		variables: {
			email: email,
			address: address,
			propertyType: propertyType,
			startTime: startTime,
			endTime: endTime,
			image: image,
			scarinessLevel: scarinessLevel,
			description: description
		}
	})

	const handleClick = (event) => {
		event.preventDefault();
		createLocation()
	}

	return (
		<div className="register-form-container">
			<form>
				<input 
					name="email"
					placeholder="Enter email here"
					type="text"
					value={email}
					onChange={event => setEmail(event.target.value)}
				/>
				<input
					name="address"
					placeholder="Enter address"
					value={address}
					type="text"
					onChange={event => setAddress(event.target.value)}
				/>
				<select name="propertyType" id="propertyType" onChange={event => setPropertyType(event.target.value)} value={propertyType}>
					<option value="default" disabled> Select Property Type </option>
					<option value="house">House</option>
					<option value="condo">Condo</option>
					<option value="townhome">Townhome</option>
					<option value="apartment">Apartment</option>
					<option value="business">Business</option>
				</select>
				<select name="startTime" id="startTime" onChange={event => setStartTime(event.target.value)} value={startTime}>
					<option value="default" disabled>Choose a Start Time</option>
					<option value="4:00 pm">4:00 pm</option>
					<option value="5:00 pm">5:00 pm</option>
					<option value="6:00 pm">6:00 pm</option>
				</select>
				<select name="endTime" id="endTime" onChange={event => setEndTime(event.target.value)} value={endTime}>
					<option value="default" disabled>Choose an End Time</option>
					<option value="6:00 pm">6:00 pm</option>
					<option value="7:00 pm">7:00 pm</option>
					<option value="8:00 pm">8:00 pm</option>
				</select>
				<input 
					name="image"
					value={image}
					placeholder="Image placeholder"
					onChange={event => setImage(event.target.value)}
				/>
				<input
					name="scarinessLevel"
					placeholder="Scare Level scale 1-10"
					type="number"
					value={scarinessLevel}
					onChange={event => setScarinessLevel(event.target.value)}
				/>
				<input
					name="description"
					placeholder="Tell us about your house!"
					type="text"
					value={description}
					onChange={event => setDescription(event.target.value)}
				/>
				<button className="register" onClick={event => handleClick(event)}>Register House!</button>
			</form>
		</div>
	)
}

export default RegisterForm;