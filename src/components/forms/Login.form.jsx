import React, { Fragment, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { VisibilityRounded, VisibilityOffRounded, AccountCircleRounded, LockRounded } from '@material-ui/icons'
import { Grid, TextField, InputAdornment, IconButton, Button, CircularProgress, FormHelperText, FormGroup } from '@material-ui/core'
import * as yup from 'yup'
import { Formik } from 'formik'
import { useMutation } from '@apollo/react-hooks'

import IconHeader from '../icon-header/IconHeader'
import { useStyles } from '../../styles/authPages/login.styles'
import { LOGIN_USER } from '../../helpers/queries.gql'
import { ToastMessage, type } from '../toaster/ToastMessage'

const initialState = {
  usernameOrEmail: '',
  password: ''
}

const validationSchema = yup.object().shape({
  usernameOrEmail: yup
    .string()
    .required('username is required')
    .min(3),
  password: yup
    .string()
    .required('password is required')
    .min(6)
})

const LoginForm = ({history}) => {
  const classes = useStyles()
  const [userLogin] = useMutation(LOGIN_USER)

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
          onSubmit={async (values, { setSubmitting, resetForm }) => {

            try {
              const { data: { loginUser } } = await userLogin({
                variables: { ...values }
              })

              const { token } = loginUser

              console.log('token', token)

              setSubmitting(false)

              history.push('/dashboard')

              resetForm()

            } catch (error) {
              console.log('error', error)
              ToastMessage(type.ERROR, error.message.split(':')[1])
              setSubmitting(false)
            }

          }}
          render={({
            values: { usernameOrEmail, password },
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
                      label="username or email"
                      name="usernameOrEmail"
                      type='text'
                      fullWidth
                      error={errors.usernameOrEmail && touched.usernameOrEmail}
                      value={usernameOrEmail}
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
                    type="submit"
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

export default withRouter(LoginForm)