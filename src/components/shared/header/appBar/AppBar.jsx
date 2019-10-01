import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from '../../../../styles/header/appBar.styles'

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar>
          <Link to="/" className={classes.title}>
            <Typography variant="h6" >
              Keen<span>cademiks</span>
            </Typography>
          </Link>
          <Link to='/login'>
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}