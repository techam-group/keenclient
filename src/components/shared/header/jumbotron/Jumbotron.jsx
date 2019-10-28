import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography, Button } from '@material-ui/core';
import { useStyles } from '../../../../styles/header/jumbotron.styles'

export default () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
        <Grid item xs={12} md={8} className={classes.raise}>
          <Typography variant="h2" className={classes.lead}>Learning just got better</Typography>
          <Link to="/sign-up">
            <Button variant='contained' className={classes.getStarted}>Get Started</Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}