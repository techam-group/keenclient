import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Extension, Group, PersonalVideo } from '@material-ui/icons'
import { useStyles } from '../../../../styles/landing/about.styles'

export default () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.main}>
      <Grid item xs={12} className={classes.itemGrid}>
        <Grid container justify="center" spacing={8}>
          <Grid item className={classes.gridItems}>
            <Extension />
            <Typography>simplified complex topics</Typography>
          </Grid>
          <Grid item className={classes.gridItems}>
            <PersonalVideo />
            <Typography>high quality video content</Typography>
          </Grid>
          <Grid item className={classes.gridItems}>
            <Group />
            <Typography>vibrant learning community</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}