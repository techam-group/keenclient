import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from '../../../styles/footer/footer.styles'

export default () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.footerMain}>
      <Grid item>
        <Typography>Keencademics</Typography>

      </Grid>
      <Grid item>
        <Typography>Links</Typography>
      </Grid>
      <Grid item>
        <Typography>Subscribe</Typography>
      </Grid>
    </Grid>
  )
}