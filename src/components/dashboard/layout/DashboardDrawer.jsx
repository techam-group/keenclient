import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Drawer, CssBaseline, List, Typography, Divider, IconButton, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import DashboardAppBar from './DashboardAppBar';

import { useStyles } from '../../../styles/dashboard/layouts/dashboardDrawer.styles'

const DashboardDrawer = ({ handleOpen, handleClose, isOpen }) => {
  const classes = useStyles();
  const theme = useTheme();
  console.log('is open', isOpen)

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <DashboardAppBar handleDrawer={handleOpen} isOpen={isOpen} /> */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default DashboardDrawer