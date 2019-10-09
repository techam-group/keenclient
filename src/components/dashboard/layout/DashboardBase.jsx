import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const DashboardBase = ({ children }) => {

  return (
    <Grid container spacing={2}>
      <Typography variant="h5">DashboardBase</Typography>

      <Grid item>
        {children}
      </Grid>
    </Grid>
  )
}

export default DashboardBase