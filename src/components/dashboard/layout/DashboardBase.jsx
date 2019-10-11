import React, { useState } from 'react'
import clsx from 'clsx'
import { Grid, CssBaseline } from '@material-ui/core'

import DashboardAppBar from './DashboardAppBar'
import DashboardDrawer from './DashboardDrawer'

import { useStyles } from '../../../styles/dashboard/layouts/dashboardBase.styles'

const DashboardBase = ({ children }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <DashboardAppBar
        handleDrawer={handleOpen}
        isOpen={open}
      />
      <DashboardDrawer
        handleOpen={handleOpen}
        handleClose={handleClose}
        isOpen={open}
      />

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </Grid>
  )
}

export default DashboardBase