import React, { Fragment } from 'react'
import { Input, Button } from '@material-ui/core'
import { useStyles } from '../../styles/text-inputs/inputWithButton'

const InputWithButton = ({ btnText, placeholder }) => {
  const classes = useStyles()

  return (
    <Fragment>
      <div className={classes.root}>
        <Input placeholder={placeholder} className={classes.input} />
        <Button className={classes.button}>{btnText}</Button>
      </div>
    </Fragment>
  )
}

export default InputWithButton