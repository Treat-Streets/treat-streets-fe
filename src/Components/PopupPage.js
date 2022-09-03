import React from 'react'

const PopupPage = ({ id, streetAddress, description, startTime, endTime, scarinessLevel, image }) => {
  return (
    <div>
      <h2>Pop UP Page Id is: {id}</h2>
			<p>{streetAddress}</p>
			<p>{description}</p>
			
    </div>
  )
}

export default PopupPage