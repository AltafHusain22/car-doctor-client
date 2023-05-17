import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Services from './Services/Services';
import CallToAction from './CallToAction/CallToAction';

const Home = () => {
	return (
		<div>
			<Hero></Hero>
			<About></About>
			<Services></Services>
			<CallToAction></CallToAction>
		</div>
	);
};

export default Home;