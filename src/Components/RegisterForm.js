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
			</form>
		</div>
	)
}

export default RegisterForm;