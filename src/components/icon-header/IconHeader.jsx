import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useStyles} from '../../styles/icon-header/iconHeader'

export default ({ icon, leadText }) => {
  const classes = useStyles()

  return (
    <Grid item className={classes.iconHeader}>
      <div className="icons">
        {icon}
      </div>
      <Typography>{leadText}</Typography>
    </Grid>
  )
}