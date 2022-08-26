import './App.css'
import React from 'react'
import Header from '../Components/Header.js'
import MapPage from '../Components/MapPage.js'
import Nav from '../Components/Nav.js'
import RegisterForm from '../Components/RegisterForm.js'
import ThankYouPage from '../Components/ThankYouPage.js'
import ZipCodeForm from '../Components/ZipCodeForm.js'

const App = () => {
  return (
    <div className="App">
			<h1>HIII</h1>
			<Nav />
			<Header />
			<ZipCodeForm />
			<MapPage />
			<RegisterForm />
			<ThankYouPage />
    </div>
  )
}

export default App;
