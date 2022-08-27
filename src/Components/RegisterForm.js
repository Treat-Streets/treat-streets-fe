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
			</form>
		</div>
	)
}

export default RegisterForm;