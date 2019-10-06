import React, {useState} from 'react';
import { Grid, Typography, Paper, TextField, InputAdornment, IconButton, Button } from '@material-ui/core'
import { VisibilityRounded, VisibilityOffRounded, AccountCircleRounded } from '@material-ui/icons'
import { useStyles } from '../styles/login/login'

const initialState = {
	username: '',
	password: '',
	showPassword: false
}

const Login = () => {
	const classes = useStyles()
	const [state, setState] = useState(initialState)

	const handleChange = ({ target: { value, name } }) => setState({ ...state, [name]: value })
	
	const handleShowPassword = () => setState({ ...state, showPassword: !state.showPassword })

	const handleMouseShowPassword = e => e.preventDefault()

	return (
		<Grid container className={classes.root}>
			<Paper className={classes.paper}>
				<Grid item className={classes.imageHolder}>
				</Grid>
				<Grid item className={classes.loginHolder}>
					<div>
						<Typography variant="h4">Login</Typography>
						<Typography>keencademiks</Typography>
					</div>

					<div className={classes.formInputs}>
						<TextField
							label="Username"
							name="username"
							type='text'
							fullWidth
							value={state.username}
							onChange={handleChange}
							InputProps={{
								endAdornment: <InputAdornment position="end">
									<AccountCircleRounded />
								</InputAdornment>
							}}
						/>
						<TextField
							label="login"
							name="password"
							fullWidth
							type={state.showPassword ? 'text' : 'password'}
							value={state.password}
							onChange={handleChange}
							InputProps={{
								endAdornment: <InputAdornment position="end">
									<IconButton
										edge="end"
										aria-label="toggle password visibility"
										onClick={handleShowPassword}
										onMouseDown={handleMouseShowPassword}
									>
										{
											state.showPassword ? <VisibilityOffRounded /> : <VisibilityRounded />
										}
									</IconButton>	
								</InputAdornment>
							}}
						/>
						<Button variant="outlined" fullWidth color="primary">Login</Button>
					</div>
				</Grid>
			</Paper>
		</Grid>
	);
};

export default Login;
