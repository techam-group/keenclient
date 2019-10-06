import React, { Fragment } from 'react'
import { Typography, Paper, Grid } from '@material-ui/core'
import { useStyles } from '../../styles/widgets/vectorWithText'

const VectorWithText = ({ imgSrc }) => {
  const styleProps = {
    imgSrc
  }
  const classes = useStyles(styleProps)

  return (
    <Fragment>
      <Grid className={classes.root}>
        <div className={classes.imageHolder}>
        </div>
        <Paper className={classes.paper}>
          <Typography variant="h5">Simple Complex</Typography>
        </Paper>
      </Grid>
    </Fragment>
  )
}

export default VectorWithText