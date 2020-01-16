import React from "react";
import {CircularProgress, Grid} from "@material-ui/core";
import { useStyles } from '../../styles/loader/loading.styles';

const Loader = () => {
  const classes = useStyles();

  return (
    <Grid>
      <div className={classes.Loader}>
        <CircularProgress thickness={1.5} />
      </div>
    </Grid>
  );
};

export default Loader;
