import React from 'react';
import { Grid, CssBaseline } from '@material-ui/core'
import Header from '../shared/header/Header'
import LandingAbout from '../shared/landing/landing-about/LandingAbout'
import ConnectCommunity from '../shared/landing/landing-connect/Connect'
import Footer from '../shared/footer/Footer'

const Home = () => {
	return (
		<Grid>
			<CssBaseline />
			<Header />
			<LandingAbout />
			<ConnectCommunity />
			<Footer />
		</Grid>
	);
};

export default Home;
