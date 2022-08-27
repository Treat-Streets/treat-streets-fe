import React from 'react'
import '../Components/RegisterForm.css'

const RegisterForm = () => {
	return (
		<div>
			<form>
				<input 
					name="email"
					placeholder="Enter email here"
					type="text"
				/>
				<input
					name="address"
					placeholder="Enter address"
					type="text"
				/>
				<select name="propertyType">
					<option value="default" disabled> Select Property Type </option>
					<option value="house">House</option>
					<option value="condo">Condo</option>
					<option value="townhome">Townhome</option>
					<option value="apartment">Apartment</option>
					<option value="business">Business</option>
				</select>
				<select name="startTime" id="startTime">
					<option value="default" disabled>Choose a Start Time</option>
					<option value="4:00 pm">4:00 pm</option>
					<option value="5:00 pm">5:00 pm</option>
					<option value="6:00 pm">6:00 pm</option>
				</select>
				<select name="endTime" id="endTime">
					<option value="default" disabled>Choose an End Time</option>
					<option value="6:00 pm">6:00 pm</option>
					<option value="7:00 pm">7:00 pm</option>
					<option value="8:00 pm">8:00 pm</option>
				</select>
				<input 
					name="image"
					placeholder="Image placeholder"
				/>
				<input
					name="scareLevel"
					placeholder="Scare Level scale 1-10"
					type="number"
				/>
				<input
					name="description"
					placeholder="Tell us about your house!"
					type="text"
				/>
				<button className="register">Register House!</button>
			</form>
		</div>
	)
}

export default RegisterForm;