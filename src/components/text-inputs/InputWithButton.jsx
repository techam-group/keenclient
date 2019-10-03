import React, { Fragment } from 'react'
import { Input, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    border: '1px solid #396e82',
    borderRadius: '3px'
  },
  input: {
    paddingLeft: '0.3rem',
    color: '#7dc0d9',

    '&::placeholder': {
      color: 'inherit'
    },

    '&::focus': {
      borderBottom: 0,
      outline: 'none'
    },

    '&::before': {
      borderBottom: 0,

      '&:hover': {
        borderBottom: 0
      }
    }
  },
  button: {
    background: '#6e9fb0',
    borderRadius: 0,

    '&:hover': {
      opacity: 0.7,
      background: '#6e9fb0'
    }
  }
})

const InputWithButton = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <div className={classes.root}>
        <Input placeholder="Enter your email" className={classes.input} />
        <Button className={classes.button}>Join Now</Button>
      </div>
    </Fragment>
  )
}

export default InputWithButton