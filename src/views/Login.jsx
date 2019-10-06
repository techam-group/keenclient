import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { useStyles } from '../styles/login/login'

const Login = () => {
	const classes = useStyles()

	return (
		<Grid container>
			<Grid item className={classes.imageHolder}>
			</Grid>
			<Grid item className={classes.loginHolder}>
				<div>
					<Typography variant="h4">Login</Typography>
					<Typography>keencademiks</Typography>
				</div>
			</Grid>
		</Grid>
	);
};

export default Login;
