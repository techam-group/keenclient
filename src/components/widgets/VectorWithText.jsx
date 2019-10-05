import React, { Fragment } from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../styles/widgets/vectorWithText'

const VectorWithText = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <Typography>Simple Complex</Typography>
    </Fragment>
  )
}

export default VectorWithText