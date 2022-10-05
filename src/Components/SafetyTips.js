import React from 'react'
import './SafetyTips.css'
import hauntedhouse from '../assets/hauntedhouse.png'
import witchhat from '../assets/witch-hat.png'
import spider from '../assets/spider.png'
import pumpkin from '../assets/pumpkin.png'
import moon from '../assets/moon.png'
import spiderweb from '../assets/spiderweb.png'
import halloweencandy from '../assets/halloween-candy.png'
import trickortreat from '../assets/trickortreat.gif'
import dancingpumpkins from '../assets/dancingpumpkins.gif'

const SafetyTips = () => {
	return (
		<div className="safety-tips-wrapper">
			<h1 className="safety-tips-title">Halloween Safety Tips</h1>
			<p className="safety-tip-intro">Halloween is a fun and exciting time for you and your kids. Follow these safety tips to keep your family safe and happy during the festivities.</p>
			
			<section className="safety-tips-container">
				<section className="safety-tip-1">
					<img className="safety-tip-icon" src={hauntedhouse} alt="haunted house icon"/>
					<p className="safety-tip-paragraph"> If your child will be trick-or-treating without adults, make sure you review their walking route with the Treat Streets app beforehand! </p>
				</section>

				<section className="safety-tip-3">
					<img className="safety-tip-icon" src={spider} alt="spider icon"/>
					<p className="safety-tip-paragraph"> Make yourselves visible to cars! Have everyone in the group wear reflective patches and carry a lit flashlight. </p>
				</section>

				<section className="safety-tip-2">
					<img className="safety-tip-icon" src={witchhat} alt="witch hat icon"/>
					<p className="safety-tip-paragraph"> Always walk with a group and never trick-or-treat alone. </p>
				</section>

				<section className="safety-tip-4">
					<img className="safety-tip-icon" src={pumpkin} alt="pumpkin icon"/>
					<p className="safety-tip-paragraph"> Make sure your kids know to walk on the sidewalks and only cross the streets at designated corners. </p>
				</section>

				<section className="safety-tip-6">
					<img className="safety-tip-icon" src={spiderweb} alt="spide web icon"/>
					<p className="safety-tip-paragraph"> Keep safety in mind when choosing costumes for your kids. Masks can limit vision, choose face paint instead.</p>
				</section>

				<section className="safety-tip-5">
					<img className="safety-tip-icon" src={moon} alt="moon icon"/>
					<p className="safety-tip-paragraph"> Establish a curfew and go over safety rules. You can also put a name tag and your contact info inside their costume. If you have an airtag, have them take it with them! </p>
				</section>

				<section className="safety-tip-7">
					<img className="safety-tip-icon" src={halloweencandy} alt="candy icon"/>
					<p className="safety-tip-paragraph">Don't let your kids eat candy that you haven't personally checked. Look for open wrappers and expired items. Especially if they have allergies!</p>
				</section>

				<img className="trick-or-treat-gif" src={dancingpumpkins} alt="dancing pumpkins gif"/>

				
			</section>
		</div>
	)
}

export default SafetyTips