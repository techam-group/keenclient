import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import CommunityImage from '../../../../assets/images/learning-com-table.jpg'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    // width: 100
  },
  main: {
    backgroundImage: `url(${CommunityImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '36rem',
    justifyContent: 'center',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',

    '&::before': {
      backgroundColor: 'rgba(0, 0, 0, 0.39)',
      content: "''",
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      position: 'absolute'
    },

    '& h3': {
      color: '#f9f9f9',
      zIndex: 100
    },

    '& button': {
      background: 'white',
      marginTop: '1.845rem',

      '&:hover': {
        opacity: '0.8',
        backgroundColor: 'white'
      }
    }
  }
}))

export default () => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} justify="center">
      <Grid item className={classes.main}>
        <Typography variant="h3">Connect with other keen learners</Typography>

        <Button variant="outlined" size="large">Join Online Community</Button>
      </Grid>
    </Grid>
  )
}