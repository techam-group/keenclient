import React from 'react';
import { Grid, Paper } from '@material-ui/core'
import PlainFooter from '../shared/footer/PlainFooter'

import { useStyles } from '../../styles/authLayout/authLayout.styles'

const AuthLayout = ({children, ...props}) => {
	const classes = useStyles(props)

	return (
		<Grid container className={classes.root}>
			<Paper className={classes.paper}>
				{children}
			</Paper>

			<PlainFooter hasBackground />
		</Grid>
	);
};

export default AuthLayout;
