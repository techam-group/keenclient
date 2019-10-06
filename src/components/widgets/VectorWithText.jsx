import React, { Fragment } from 'react'
import { Typography, Paper, Grid } from '@material-ui/core'
// import { useStyles } from '../../styles/widgets/vectorWithText'
import simpleComplexImage from '../../assets/vector/21424.jpg'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '28rem',

    '& p': {
      color: 'grey'
    }
  },
  imageHolder: {
    width: '50%',
    height: '100%',
    background: simpleComplexImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

const VectorWithText = ({ imgSrc }) => {
  const styleProps = {
    imgSrc
  }
  const classes = useStyles(styleProps)

  return (
    <Fragment>
      <Grid className={classes.root}>
        <div className={classes.imageHolder}>
          {/* <img src={imgSrc} className={classes.image} /> */}
        </div>
        <Paper>
          <Typography variant="h5">Simple Complex</Typography>
        </Paper>
      </Grid>
    </Fragment>
  )
}

export default VectorWithText