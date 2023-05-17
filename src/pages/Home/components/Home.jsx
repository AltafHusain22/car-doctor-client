import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Services from './Services/Services';
import CallToAction from './CallToAction/CallToAction';
import Features from './Features/Features';

const Home = () => {
	return (
		<div>
			<Hero></Hero>
			<About></About>
			<Services></Services>
			<CallToAction></CallToAction>
			<Features></Features>
		</div>
	);
};

export default Home;