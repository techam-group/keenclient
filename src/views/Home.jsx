import React from 'react';
import { Grid, CssBaseline } from '@material-ui/core'
import Header from '../components/shared/header/Header'
import LandingAbout from '../components/shared/landing/landing-about/LandingAbout'
import ConnectCommunity from '../components/shared/landing/landing-connect/Connect'
import Footer from '../components/shared/footer/Footer'

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
