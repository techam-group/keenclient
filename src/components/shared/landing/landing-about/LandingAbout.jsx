import React from 'react';
import { Grid } from '@material-ui/core';
import VectorWithText from '../../../widgets/VectorWithText'
import { useStyles } from '../../../../styles/landing/about.styles'
import simpleComplexImage from '../../../../assets/vector/21424.jpg'
import QualityVideoImage from '../../../../assets/vector/21426.jpg'
import CommnunityImage from '../../../../assets/vector/19462.jpg'

export default () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.main}>
      <Grid item xs={12} className={classes.itemGrid}>
        <Grid container justify="center" spacing={8}>
          <Grid item className={classes.gridItems}>
            <VectorWithText
              imgSrc={simpleComplexImage}
              headText='Simple'
              leadText="Learning should be easy, that's why it's important to simplify complex topics, just so we can accelerate our learning."
            />
          </Grid>
          <Grid item className={classes.gridItems}>
            <VectorWithText
              imgSrc={QualityVideoImage}
              headText="Quality"
              leadText="Engaging quality video for profound visual learning experience"
              inverted
            />
          </Grid>
          <Grid item className={classes.gridItems}>
            <VectorWithText
              imgSrc={CommnunityImage}
              headText="Commnunity"
              leadText="Learn along other keen students, share ideas and explore questions together"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}