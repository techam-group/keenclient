import React from 'react';
import { Link } from 'react-router-dom'
import { useTheme } from '@material-ui/core/styles';
import { Drawer, CssBaseline, List, Divider, IconButton, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { useStyles } from '../../../styles/dashboard/layouts/dashboardDrawer.styles'
import { drawerItemsOne, drawerItemsTwo } from '../../../helpers/drawerItems'

const DashboardDrawer = ({ handleClose, isOpen }) => {
  const classes = useStyles();
  const theme = useTheme();

  const DrawerItemsOne = drawerItemsOne.map((item, idx) => (
    <Link to={item.to} key={`${idx}${item}`}>
      <ListItem button>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.name} />
      </ListItem >
    </Link>
  ));

  const DrawerItemsTwo = drawerItemsTwo.map((item, idx) => (
    <Link to={item.to} key={`${idx}${item}`}>
      <ListItem button>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.name} />
      </ListItem >
    </Link>
  ));

  return (
    <div className={classes.root}>
      <CssBaseline />
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
          {DrawerItemsOne}
        </List>
        <Divider />
        <List>
          {DrawerItemsTwo}
        </List>
      </Drawer>
    </div>
  );
};

export default DashboardDrawer
