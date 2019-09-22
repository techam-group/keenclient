import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { Extension, Group, PersonalVideo } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  main: {
    height: '50vh',
    justifyContent: 'center',
    padding: '4rem',
    backgroundColor: '#f7f7f7',

    '& > h4': {
      fontSize: '3.3rem',
      color: '#454a4c'
    }
  },
  itemGrid: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  gridItems: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& svg': {
      fontSize: '4.5rem',
      color: '#8e8e8e',
      paddingBottom: '1rem'
    }
  }
}))

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
            <PersonalVideo forwarRef="middle" />
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