import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { useStyles } from '../../../../styles/landing/connect.styles'

export default () => {
  const classes = useStyles()

  return (
    <Grid className={classes.root}>
      <Grid item className={classes.main}>
        <Typography variant="h3">Connect with other keen learners</Typography>

        <Button variant="outlined" size="large">Join Online Community</Button>
      </Grid>
    </Grid>
  )
}