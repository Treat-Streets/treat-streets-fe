import React from 'react'

const PopupPage = ({ id, streetAddress, description, startTime, endTime, scarinessLevel, image }) => {
  return (
    <div>
      <h2>Pop UP Page Id is: {id}</h2>
			<p>{streetAddress}</p>
			<p>{description}</p>
			<p>{startTime}</p>
			<p>{endTime}</p>
			<p>{scarinessLevel}</p>
			<img src={image} alt='house decor image'/>
    </div>
  )
}

export default PopupPage