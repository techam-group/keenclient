import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Group, PersonalVideo } from '@material-ui/icons'
import VectorWithText from '../../../widgets/VectorWithText'
import { useStyles } from '../../../../styles/landing/about.styles'
import simpleComplexImage from '../../../../assets/vector/21424.jpg'

export default () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.main}>
      <Grid item xs={12} className={classes.itemGrid}>
        <Grid container justify="center" spacing={8}>
          <Grid item className={classes.gridItems}>
            <VectorWithText imgSrc={simpleComplexImage} />
            {/* <Extension />
            <Typography>simplified complex topics</Typography> */}
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