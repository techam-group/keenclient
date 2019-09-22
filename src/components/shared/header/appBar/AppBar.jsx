import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textTransform: 'uppercase',
    color: 'white',
    textDecoration: 'none',

    '& > h6': {
      fontWeight: 600,

      '& > span': {
        fontWeight: 200
      }
    }
  },
  header: {
    backgroundColor: '#40a3c8',

    '& a': {
      textDecoration: 'none',
      color: 'inherit'
    }
  }
}));

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