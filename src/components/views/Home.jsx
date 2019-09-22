import React from 'react';
import { Grid, CssBaseline } from '@material-ui/core'
import Header from '../shared/header/Header'
import LandingAbout from '../shared/landing-about/LandingAbout'
import ConnectCommunity from '../shared/landing-connect/Connect'

const Home = () => {
	return (
		<Grid>
			<CssBaseline />
			<Header />
			<LandingAbout />
			<ConnectCommunity />
		</Grid>
	);
};

export default Home;
