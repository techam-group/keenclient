import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { VisibilityRounded, VisibilityOffRounded, AccountCircleRounded, LockRounded } from '@material-ui/icons'
import { Grid, TextField, InputAdornment, IconButton, Button, CircularProgress, FormHelperText, FormGroup } from '@material-ui/core'
import * as yup from 'yup'
import { Formik } from 'formik'

import IconHeader from '../icon-header/IconHeader'
import { useStyles } from '../../styles/authPages/login'


const initialState = {
  username: '',
  password: ''
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('username is required')
    .min(3),
  password: yup
    .string()
    .required('password is required')
    .min(6)
})

const LoginForm = () => {
  const classes = useStyles()

  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => setShowPassword(!showPassword)

  const handleMouseShowPassword = e => e.preventDefault()

  return (
    <Fragment>
      <Grid item className={classes.imageHolder}>
      </Grid>
      <Grid item className={classes.loginHolder}>
        <IconHeader
          leadText="login"
          icon={<LockRounded />}
        />

        <Formik
          initialValues={initialState}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting, resetForm }) => {
            console.log('working...')
            console.log('submitting', data)
            resetForm()
          }}
          render={({
            values: { username, password },
            errors,
            isValid,
            touched,
            isSubmitting,
            handleBlur,
            handleChange,
            handleSubmit
          }) => (
              <form onSubmit={handleSubmit} className={classes.form}>
                <Grid item xs={12} className={classes.formInputs}>
                  <FormGroup>
                    <TextField
                      label="username"
                      name="username"
                      type='text'
                      fullWidth
                      error={errors.username && touched.username}
                      value={username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      InputProps={{
                        endAdornment: <InputAdornment position="end">
                          <AccountCircleRounded />
                        </InputAdornment>
                      }}
                    />
                    {
                      errors.username && touched.username && (
                        <FormHelperText className={classes.errorFeedback}>{errors.username}</FormHelperText>
                      )
                    }
                  </FormGroup>
                  <FormGroup>
                    <TextField
                      label="password"
                      name="password"
                      fullWidth
                      error={errors.password && touched.password}
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      InputProps={{
                        endAdornment: <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            aria-label="toggle password visibility"
                            onClick={handleShowPassword}
                            onMouseDown={handleMouseShowPassword}
                          >
                            {
                              showPassword ? <VisibilityOffRounded /> : <VisibilityRounded />
                            }
                          </IconButton>
                        </InputAdornment>
                      }}
                    />
                    {
                      errors.password && touched.password && (
                        <FormHelperText className={classes.errorFeedback}>{errors.password}</FormHelperText>
                      )
                    }
                  </FormGroup>
                  <Button
                    variant="outlined"
                    fullWidth
                    role="submit"
                    disabled={!isValid || isSubmitting}
                    className={classes.button}>
                    {isSubmitting ? <CircularProgress /> : 'Login'}
                  </Button>
                </Grid>

                <Grid item className={classes.actions}>
                  <Link to="/forgot-password">forgot password?</Link>

                  <Link to="/sign-up">Sign Up</Link>
                </Grid>
              </form>
            )}
        />
      </Grid>
    </Fragment>
  )
}

export default LoginForm