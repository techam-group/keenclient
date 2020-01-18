import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import {Link, NavLink, useLocation} from 'react-router-dom';
import { useStyles } from '../../../../styles/header/appBar.styles'

export default () => {
  const classes = useStyles();
  const location = useLocation();

  const checkActive = (value) => (location.pathname.includes(value) ? 'active' : null);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar>
          <Link to="/" className={classes.title}>
            <Typography variant="h6" >
              Keen<span>cademiks</span>
            </Typography>
          </Link>
          <NavLink
            to='/blog'
            className={`${checkActive('/blog') ? classes.selected : ''}`}
          >
            <Button color="inherit">Blog</Button>
          </NavLink>
          <NavLink
            to='/tutorials'
            className={`${checkActive('/tutorials') ? classes.selected : ''}`}
          >
            <Button color="inherit">Tutorials</Button>
          </NavLink>
          <NavLink
            to='/videos'
            className={`${checkActive('/videos') ? classes.selected : ''}`}
          >
            <Button color="inherit">Videos</Button>
          </NavLink>
          <NavLink
            to='/login'
            className={`${checkActive('/leadership') ? classes.selected : ''}`}
          >
            <Button color="inherit">Login</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
