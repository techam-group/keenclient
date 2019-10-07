import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { VisibilityRounded, VisibilityOffRounded, PermContactCalendarRounded } from '@material-ui/icons'
import { Grid, TextField, InputAdornment, IconButton, Button, CircularProgress, FormHelperText, FormGroup, Typography } from '@material-ui/core'
import * as yup from 'yup'
import { Formik } from 'formik'

import IconHeader from '../icon-header/IconHeader'
import { useStyles } from '../../styles/authPages/signup.styles'


const initialState = {
  username: '',
  firstName: '',
  lastName: '',
  password: '',
  email: ''
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('username is required')
    .min(3),
  firstName: yup
    .string()
    .min(3),
  lastName: yup
    .string()
    .min(3),
  password: yup
    .string()
    .required('password is required')
    .min(6),
  email: yup
    .string()
    .email()
    .required('email is required')
    .min(6)
})

const SignupForm = () => {
  const classes = useStyles()

  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => setShowPassword(!showPassword)

  const handleMouseShowPassword = e => e.preventDefault()

  return (
    <Fragment>
      <Grid item className={classes.imageHolder}>
      </Grid>
      <Grid item className={classes.regHolder}>
        <IconHeader
          leadText="sign up"
          icon={<PermContactCalendarRounded />}
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
            values: { username, firstName, lastName, password, email },
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
                  <FormGroup className={classes.formGroup}>
                    <TextField
                      label="username"
                      name="username"
                      type='text'
                      required
                      fullWidth
                      error={errors.username && touched.username}
                      value={username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {
                      errors.username && touched.username && (
                        <FormHelperText className={classes.errorFeedback}>{errors.username}</FormHelperText>
                      )
                    }
                  </FormGroup>
                  <FormGroup className={classes.formGroup}>
                    <TextField
                      label="First Name"
                      name="firstName"
                      type='text'
                      fullWidth
                      error={errors.firstName && touched.firstName}
                      value={firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {
                      errors.firstName && touched.firstName && (
                        <FormHelperText className={classes.errorFeedback}>{errors.firstName}</FormHelperText>
                      )
                    }
                  </FormGroup>
                  <FormGroup className={classes.formGroup}>
                    <TextField
                      label="Last Name"
                      name="lastName"
                      type='text'
                      fullWidth
                      error={errors.lastName && touched.lastName}
                      value={lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {
                      errors.lastName && touched.lastName && (
                        <FormHelperText className={classes.errorFeedback}>{errors.lastName}</FormHelperText>
                      )
                    }
                  </FormGroup>
                  <FormGroup className={classes.formGroup}>
                    <TextField
                      label="email"
                      name="email"
                      type='email'
                      fullWidth
                      required
                      error={errors.email && touched.email}
                      value={email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {
                      errors.email && touched.email && (
                        <FormHelperText className={classes.errorFeedback}>{errors.email}</FormHelperText>
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
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    className={classes.button}>
                    {isSubmitting ? <CircularProgress /> : 'sign up'}
                  </Button>
                </Grid>

                <Grid item className={classes.actions}>
                  <Typography>Have an account?</Typography>

                  <Link to="/login">login</Link>
                </Grid>
              </form>
            )}
        />
      </Grid>
    </Fragment>
  )
}

export default SignupForm